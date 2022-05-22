"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketManager = void 0;
const path_1 = require("path");
const BaseEventEmitter_1 = require("./BaseEventEmitter");
const consts_1 = require("./consts");
const DiscordSocket_1 = require("./DiscordSocket");
const util_1 = require("./util");
class SocketManager extends BaseEventEmitter_1.BaseEventEmitter {
	constructor(clientId) {
		super(clientId);
		this.status = "disconnected";
		this.path = path_1.join(
			process.platform == "win32" ? "\\\\?\\pipe\\" : process.env.XDG_RUNTIME_DIR || process.env.TMPDIR || process.env.TMP || process.env.TEMP || "/tmp",
			"discord-ipc-",
		);
		this.currentPresence = undefined;
		this.scheduledReconnect = false;
		this.waiting = new Map();
		this.on("disconnect", () => {
			if (this.currentPresence && !this.scheduledReconnect && (this.status == "errored" || this.status == "disconnected")) {
				this.scheduledReconnect = true;
				setTimeout((() => this.connect()).bind(this), 5000);
			}
		});
		this.connect().catch(() => {});
	}
	async connect() {
		util_1.debug("Starting connect");
		this.scheduledReconnect = false;
		if (this.status == "connected") return this.socket;
		this.status = "connecting";
		try {
			this.emit("connecting");
		} catch (e) {
			console.error(e);
		}
		for (let attempt = 0; attempt < 10; attempt++) {
			util_1.debug("Connection attempt #" + attempt);
			try {
				this.socket = await this.establishConnection(this.path + attempt);
				util_1.debug("Connection success!");
				this.status = "connected";
				this.connectionfailed = false;
				try {
					this.emit("connected");
				} catch (e) {
					console.error(e);
				}
				return this.socket;
			} catch (e) {
				this.connectionfailed = true;
				util_1.debug("Connection failed", e);
			}
		}
		this.status = "errored";
		try {
			this.emit("disconnected");
		} catch (e) {
			console.error(e);
		}
		throw new Error("Could not connect to IPC");
	}
	createSocket(path) {
		return new Promise((resolve, reject) => {
			try {
				util_1.debug("Attempting to connect to ", path);
				const socket = DiscordSocket_1.createConnection(path, () => {
					util_1.debug("Connected to ", path);
					this.removeListener("error", reject);
					resolve(socket);
				});
				socket.on("error", reject);
			} catch (e) {
				util_1.debug("Failed to connect to", path, e);
				reject(e);
			}
		});
	}
	establishConnection(path) {
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) => {
			try {
				this.socket = await this.createSocket(path);
				util_1.debug("Writing handshake");
				this.socket.writePacket(consts_1.IPCOpcode.HANDSHAKE, { v: 1, client_id: this.clientId });
				let first = true;
				this.socket.once("decodedPacket", (opcode, data) => {
					util_1.debug("First packet", opcode);
					first = false;
					if (opcode == consts_1.IPCOpcode.FRAME) {
						this.environment = JSON.parse(data).data;
						resolve(this.socket);
					} else {
						reject(new Error(data));
					}
				});
				this.socket.on("decodedPacket", (opcode, data) => {
					this.emit("packet", opcode, data);
					const j = JSON.parse(data);
					util_1.debug("Got frame", j);
					if (j.cmd == "SET_ACTIVITY") {
						try {
							this.emit("activityUpdate", j.data);
						} catch (e) {
							console.error(e);
						}
					}
					try {
						this.emit(j.cmd, j);
					} catch (e) {
						console.error(e);
					}
					if (j.nonce && this.waiting.has(j.nonce)) {
						this.waiting.get(j.nonce)(data);
						this.waiting.delete(j.nonce);
					}
				});
				this.socket.on("close", () => {
					if (first) reject(new Error("Connection closed."));
					this.disconnect();
				});
			} catch (e) {
				util_1.debug("Error establishing connection to ", path, e);
				reject(e);
			}
		});
	}
	disconnect() {
		if (this.socket) this.socket.destroy();
		try {
			this.emit("disconnected");
		} catch (e) {
			console.error(e);
		}
		this.socket = null;
		this.status = "disconnected";
	}
	request(cmd, args, evt) {
		let uuid = "";
		for (let i = 0; i < 32; i += 1) {
			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += "-";
			}
			let n;
			if (i === 12) {
				n = 4;
			} else {
				const random = (Math.random() * 16) | 0;
				if (i === 16) {
					n = (random & 3) | 0;
				} else {
					n = random;
				}
			}
			uuid += n.toString(16);
		}
		return new Promise((a, r) => {
			if (!this.socket.writePacket(consts_1.IPCOpcode.FRAME, { cmd, args, evt, nonce: uuid })) return r(new Error("Couldn't write."));
			this.waiting.set(uuid, (data) => a(data.data));
		});
	}
}
exports.SocketManager = SocketManager;
