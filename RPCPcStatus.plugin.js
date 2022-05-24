/**
 * @name RPCPcStatus
 * @version 2.1.2
 * @description Rich Presence Pc Status for your Discord
 * @author Faelayis
 * @source https://github.com/Faelayis/RPC-Pc-Status-BetterDiscord
 * @updateUrl https://raw.githubusercontent.com/Faelayis/RPC-Pc-Status-BetterDiscord/main/RPCPcStatus.plugin.js
 * @donate https://www.buymeacoffee.com/faelayis
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
/* Generated Code */
const config = {
	info: {
		name: "RPCPcStatus",
		version: "2.1.2",
		description: "Rich Presence Pc Status for your Discord",
		authors: [
			{
				name: "Faelayis",
				discord_id: "328731868096888833",
				github_username: "Faelayis",
			},
		],
		github: "https://github.com/Faelayis/RPC-Pc-Status-BetterDiscord",
		github_raw: "https://raw.githubusercontent.com/Faelayis/RPC-Pc-Status-BetterDiscord/main/RPCPcStatus.plugin.js",
		donate: "https://www.buymeacoffee.com/faelayis",
	},
	build: {
		copy: false,
		zlibrary: true,
		production: true,
		alias: {},
	},
	release: {
		source: true,
		readme: true,
		contributors: [
			{
				name: "Faelayis",
				github: "https://github.com/Faelayis",
			},
		],
	},
	dependencies: {
		bufferutil: "^4.0.6",
		systeminformation: "^5.11.15",
		"utf-8-validate": "^5.0.9",
	},
};
function buildPlugin([BasePlugin, PluginApi]) {
	const module = {
		exports: {},
	};
	(() => {
		"use strict";
		class StyleLoader {
			static styles = "";
			static element = null;
			static append(module, css) {
				this.styles += `/* ${module} */\n${css}`;
			}
			static inject(name = config.info.name) {
				if (this.element) this.element.remove();
				this.element = document.head.appendChild(
					Object.assign(document.createElement("style"), {
						id: name,
						textContent: this.styles,
					}),
				);
			}
			static remove() {
				if (this.element) {
					this.element.remove();
					this.element = null;
				}
			}
		}
		function ___createMemoize___(instance, name, value) {
			value = value();
			Object.defineProperty(instance, name, {
				value,
				configurable: true,
			});
			return value;
		}
		const Modules = {
			get "react-spring"() {
				return ___createMemoize___(this, "react-spring", () => BdApi.findModuleByProps("useSpring"));
			},
			"@discord/utils": {
				get joinClassNames() {
					return ___createMemoize___(this, "joinClassNames", () => BdApi.findModule((e) => e.toString().indexOf('return e.join(" ")') > 200));
				},
				get useForceUpdate() {
					return ___createMemoize___(this, "useForceUpdate", () => BdApi.findModuleByProps("useForceUpdate")?.useForceUpdate);
				},
				get Logger() {
					return ___createMemoize___(this, "Logger", () => BdApi.findModuleByProps("setLogFn")?.default);
				},
				get Navigation() {
					return ___createMemoize___(this, "Navigation", () => BdApi.findModuleByProps("replaceWith", "currentRouteIsPeekView"));
				},
			},
			"@discord/components": {
				get Tooltip() {
					return ___createMemoize___(this, "Tooltip", () => BdApi.findModuleByDisplayName("Tooltip"));
				},
				get TooltipContainer() {
					return ___createMemoize___(this, "TooltipContainer", () => BdApi.findModuleByProps("TooltipContainer")?.TooltipContainer);
				},
				get TextInput() {
					return ___createMemoize___(this, "TextInput", () => BdApi.findModuleByDisplayName("TextInput"));
				},
				get SlideIn() {
					return ___createMemoize___(this, "SlideIn", () => BdApi.findModuleByDisplayName("SlideIn"));
				},
				get SettingsNotice() {
					return ___createMemoize___(this, "SettingsNotice", () => BdApi.findModuleByDisplayName("SettingsNotice"));
				},
				get TransitionGroup() {
					return ___createMemoize___(this, "TransitionGroup", () => BdApi.findModuleByDisplayName("TransitionGroup"));
				},
				get Button() {
					return ___createMemoize___(this, "Button", () => BdApi.findModule((m) => "DropdownSizes" in m && typeof m === "function"));
				},
				get Popout() {
					return ___createMemoize___(this, "Popout", () => BdApi.findModuleByDisplayName("Popout"));
				},
				get Flex() {
					return ___createMemoize___(this, "Flex", () => BdApi.findModuleByDisplayName("Flex"));
				},
				get Text() {
					return ___createMemoize___(this, "Text", () => BdApi.findModuleByDisplayName("Text"));
				},
				get Card() {
					return ___createMemoize___(this, "Card", () => BdApi.findModuleByDisplayName("Card"));
				},
			},
			"@discord/modules": {
				get Dispatcher() {
					return ___createMemoize___(this, "Dispatcher", () => BdApi.findModuleByProps("dirtyDispatch", "subscribe"));
				},
				get ComponentDispatcher() {
					return ___createMemoize___(this, "ComponentDispatcher", () => BdApi.findModuleByProps("ComponentDispatch")?.ComponentDispatch);
				},
				get EmojiUtils() {
					return ___createMemoize___(this, "EmojiUtils", () => BdApi.findModuleByProps("uploadEmoji"));
				},
				get PermissionUtils() {
					return ___createMemoize___(this, "PermissionUtils", () => BdApi.findModuleByProps("computePermissions", "canManageUser"));
				},
				get DMUtils() {
					return ___createMemoize___(this, "DMUtils", () => BdApi.findModuleByProps("openPrivateChannel"));
				},
			},
			"@discord/stores": {
				get Messages() {
					return ___createMemoize___(this, "Messages", () => BdApi.findModuleByProps("getMessage", "getMessages"));
				},
				get Channels() {
					return ___createMemoize___(this, "Channels", () => BdApi.findModuleByProps("getChannel", "getDMFromUserId"));
				},
				get Guilds() {
					return ___createMemoize___(this, "Guilds", () => BdApi.findModuleByProps("getGuild"));
				},
				get SelectedGuilds() {
					return ___createMemoize___(this, "SelectedGuilds", () => BdApi.findModuleByProps("getGuildId", "getLastSelectedGuildId"));
				},
				get SelectedChannels() {
					return ___createMemoize___(this, "SelectedChannels", () => BdApi.findModuleByProps("getChannelId", "getLastSelectedChannelId"));
				},
				get Info() {
					return ___createMemoize___(this, "Info", () => BdApi.findModuleByProps("getSessionId"));
				},
				get Status() {
					return ___createMemoize___(this, "Status", () => BdApi.findModuleByProps("getStatus", "getActivities", "getState"));
				},
				get Users() {
					return ___createMemoize___(this, "Users", () => BdApi.findModuleByProps("getUser", "getCurrentUser"));
				},
				get SettingsStore() {
					return ___createMemoize___(this, "SettingsStore", () => BdApi.findModuleByProps("afkTimeout", "status"));
				},
				get UserProfile() {
					return ___createMemoize___(this, "UserProfile", () => BdApi.findModuleByProps("getUserProfile"));
				},
				get Members() {
					return ___createMemoize___(this, "Members", () => BdApi.findModuleByProps("getMember"));
				},
				get Activities() {
					return ___createMemoize___(this, "Activities", () => BdApi.findModuleByProps("getActivities"));
				},
				get Games() {
					return ___createMemoize___(this, "Games", () => BdApi.findModuleByProps("getGame", "games"));
				},
				get Auth() {
					return ___createMemoize___(this, "Auth", () => BdApi.findModuleByProps("getId", "isGuest"));
				},
				get TypingUsers() {
					return ___createMemoize___(this, "TypingUsers", () => BdApi.findModuleByProps("isTyping"));
				},
			},
			"@discord/actions": {
				get ProfileActions() {
					return ___createMemoize___(this, "ProfileActions", () => BdApi.findModuleByProps("fetchProfile"));
				},
				get GuildActions() {
					return ___createMemoize___(this, "GuildActions", () => BdApi.findModuleByProps("requestMembersById"));
				},
			},
			get "@discord/i18n"() {
				return ___createMemoize___(this, "@discord/i18n", () => BdApi.findModule((m) => m.Messages?.CLOSE && typeof m.getLocale === "function"));
			},
			get "@discord/constants"() {
				return ___createMemoize___(this, "@discord/constants", () => BdApi.findModuleByProps("API_HOST"));
			},
			get "@discord/contextmenu"() {
				return ___createMemoize___(this, "@discord/contextmenu", () => {
					const ctx = Object.assign({}, BdApi.findModuleByProps("openContextMenu"), BdApi.findModuleByProps("MenuItem"));
					ctx.Menu = ctx.default;
					return ctx;
				});
			},
			get "@discord/forms"() {
				return ___createMemoize___(this, "@discord/forms", () => BdApi.findModuleByProps("FormItem"));
			},
			get "@discord/scrollbars"() {
				return ___createMemoize___(this, "@discord/scrollbars", () => BdApi.findModuleByProps("ScrollerAuto"));
			},
			get "@discord/native"() {
				return ___createMemoize___(this, "@discord/native", () => BdApi.findModuleByProps("requireModule"));
			},
			get "@discord/flux"() {
				return ___createMemoize___(this, "@discord/flux", () =>
					Object.assign({}, BdApi.findModuleByProps("useStateFromStores").default, BdApi.findModuleByProps("useStateFromStores")),
				);
			},
			get "@discord/modal"() {
				return ___createMemoize___(this, "@discord/modal", () =>
					Object.assign({}, BdApi.findModuleByProps("ModalRoot"), BdApi.findModuleByProps("openModal", "closeAllModals")),
				);
			},
			get "@discord/connections"() {
				return ___createMemoize___(this, "@discord/connections", () => BdApi.findModuleByProps("get", "isSupported", "map"));
			},
			get "@discord/sanitize"() {
				return ___createMemoize___(this, "@discord/sanitize", () => BdApi.findModuleByProps("stringify", "parse", "encode"));
			},
			get "@discord/icons"() {
				return ___createMemoize___(this, "@discord/icons", () =>
					BdApi.findAllModules((m) => m.displayName && ~m.toString().indexOf("currentColor")).reduce((icons, icon) => ((icons[icon.displayName] = icon), icons), {}),
				);
			},
			"@discord/classes": {
				get Timestamp() {
					return ___createMemoize___(this, "Timestamp", () => BdApi.findModuleByPrototypes("toDate", "month"));
				},
				get Message() {
					return ___createMemoize___(this, "Message", () => BdApi.findModuleByPrototypes("getReaction", "isSystemDM"));
				},
				get User() {
					return ___createMemoize___(this, "User", () => BdApi.findModuleByPrototypes("tag"));
				},
				get Channel() {
					return ___createMemoize___(this, "Channel", () => BdApi.findModuleByPrototypes("isOwner", "isCategory"));
				},
			},
		};
		var __webpack_modules__ = {
			308: function (__unused_webpack_module, exports, __webpack_require__) {
				var __importDefault =
					(this && this.__importDefault) ||
					function (mod) {
						return mod && mod.__esModule
							? mod
							: {
									default: mod,
							  };
					};
				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.BaseEventEmitter = void 0;
				const events_1 = __importDefault(__webpack_require__(702));
				const util_1 = __webpack_require__(179);
				class BaseEventEmitter extends events_1.default {
					constructor(clientId) {
						super();
						util_1.debug("Instantiated with ", clientId);
						this.clientId = clientId;
					}
					emit(eventName, ...args) {
						util_1.debug(eventName, ...args);
						return super.emit(eventName, ...args);
					}
				}
				exports.BaseEventEmitter = BaseEventEmitter;
			},
			821: (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.createConnection = void 0;
				const net_1 = __webpack_require__(216);
				const util_1 = __webpack_require__(179);
				function createConnection(path, connectionListener) {
					const socket = net_1.createConnection(path, connectionListener);
					socket.writePacket = (opcode, data) => {
						data = JSON.stringify(data);
						const dlen = Buffer.byteLength(data);
						const buffer = Buffer.alloc(dlen + 8);
						buffer.writeUInt32LE(opcode, 0);
						buffer.writeUInt32LE(dlen, 4);
						buffer.write(data, 8);
						return socket.write(buffer);
					};
					let opcode = -1;
					let remaining = 0;
					let data = "";
					socket.on("readable", () => {
						if (!socket.readableLength) return;
						util_1.debug(socket.readableLength, "bytes available");
						if (opcode < 0) {
							const header = socket.read(8);
							opcode = header.readInt32LE(0);
							remaining = header.readInt32LE(4);
							util_1.debug("Got header", {
								opcode,
								remaining,
							});
							const body = socket.read(remaining);
							remaining -= body.length;
							util_1.debug("Remaining bytes", remaining);
							data += body.toString();
						} else {
							const body = socket.read(remaining);
							remaining -= body.length;
							util_1.debug("Remaining bytes", remaining);
							data += body.toString();
						}
						if (remaining <= 0) {
							socket.emit("decodedPacket", opcode, data);
							opcode = -1;
							data = "";
						}
					});
					return socket;
				}
				exports.createConnection = createConnection;
			},
			341: (__unused_webpack_module, exports, __webpack_require__) => {
				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.SocketManager = void 0;
				const path_1 = __webpack_require__(315);
				const BaseEventEmitter_1 = __webpack_require__(308);
				const consts_1 = __webpack_require__(931);
				const DiscordSocket_1 = __webpack_require__(821);
				const util_1 = __webpack_require__(179);
				class SocketManager extends BaseEventEmitter_1.BaseEventEmitter {
					constructor(clientId) {
						super(clientId);
						this.status = "disconnected";
						this.path = path_1.join(
							"win32" == process.platform ? "\\\\?\\pipe\\" : process.env.XDG_RUNTIME_DIR || process.env.TMPDIR || process.env.TMP || process.env.TEMP || "/tmp",
							"discord-ipc-",
						);
						this.currentPresence = void 0;
						this.scheduledReconnect = false;
						this.waiting = new Map();
						this.on("disconnect", () => {
							if (this.currentPresence && !this.scheduledReconnect && ("errored" == this.status || "disconnected" == this.status)) {
								this.scheduledReconnect = true;
								setTimeout((() => this.connect()).bind(this), 5e3);
							}
						});
						this.connect().catch(() => {});
					}
					async connect() {
						util_1.debug("Starting connect");
						this.scheduledReconnect = false;
						if ("connected" == this.status) return this.socket;
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
						return new Promise(async (resolve, reject) => {
							try {
								this.socket = await this.createSocket(path);
								util_1.debug("Writing handshake");
								this.socket.writePacket(consts_1.IPCOpcode.HANDSHAKE, {
									v: 1,
									client_id: this.clientId,
								});
								let first = true;
								this.socket.once("decodedPacket", (opcode, data) => {
									util_1.debug("First packet", opcode);
									first = false;
									if (opcode == consts_1.IPCOpcode.FRAME) {
										this.environment = JSON.parse(data).data;
										resolve(this.socket);
									} else reject(new Error(data));
								});
								this.socket.on("decodedPacket", (opcode, data) => {
									this.emit("packet", opcode, data);
									const j = JSON.parse(data);
									util_1.debug("Got frame", j);
									if ("SET_ACTIVITY" == j.cmd)
										try {
											this.emit("activityUpdate", j.data);
										} catch (e) {
											console.error(e);
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
							if (8 === i || 12 === i || 16 === i || 20 === i) uuid += "-";
							let n;
							if (12 === i) n = 4;
							else {
								const random = (16 * Math.random()) | 0;
								if (16 === i) n = (3 & random) | 0;
								else n = random;
							}
							uuid += n.toString(16);
						}
						return new Promise((a, r) => {
							if (
								!this.socket.writePacket(consts_1.IPCOpcode.FRAME, {
									cmd,
									args,
									evt,
									nonce: uuid,
								})
							)
								return r(new Error("Couldn't write."));
							this.waiting.set(uuid, (data) => a(data.data));
						});
					}
				}
				exports.SocketManager = SocketManager;
			},
			931: (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.IPCOpcode = void 0;
				var IPCOpcode;
				(function (IPCOpcode) {
					IPCOpcode[(IPCOpcode["HANDSHAKE"] = 0)] = "HANDSHAKE";
					IPCOpcode[(IPCOpcode["FRAME"] = 1)] = "FRAME";
					IPCOpcode[(IPCOpcode["CLOSE"] = 2)] = "CLOSE";
					IPCOpcode[(IPCOpcode["PING"] = 3)] = "PING";
					IPCOpcode[(IPCOpcode["PONG"] = 4)] = "PONG";
				})((IPCOpcode = exports.IPCOpcode || (exports.IPCOpcode = {})));
			},
			487: (__unused_webpack_module, exports, __webpack_require__) => {
				var __webpack_unused_export__;
				__webpack_unused_export__ = {
					value: true,
				};
				exports.z = void 0;
				const SocketManager_1 = __webpack_require__(341);
				class Presence extends SocketManager_1.SocketManager {
					constructor() {
						super(...arguments);
						this.currentPresence = void 0;
						this.queuedPresence = false;
						this.cooldown = false;
					}
					async setActivity(presence) {
						if (this.cooldown) {
							this.currentPresence = presence;
							this.queuedPresence = true;
							return;
						}
						this.cooldown = true;
						try {
							if (presence && "connected" != this.status) await this.connect();
							if (presence && "connected" != this.status) throw new Error("Status did not become connected.");
							if ("connected" == this.status) {
								const payload = {
									pid: process.pid,
								};
								if (presence) {
									if (presence.timestamps) {
										if (presence.timestamps.end instanceof Date) presence.timestamps.end = presence.timestamps.end.getTime();
										if (presence.timestamps.start instanceof Date) presence.timestamps.start = presence.timestamps.start.getTime();
									}
									payload.activity = presence;
								}
								this.request("SET_ACTIVITY", payload);
							}
						} catch (e) {
							console.warn("Presence couldn't set activity. Trying again in a few.", e);
							setTimeout(() => {
								this.cooldown = false;
								this.scheduledReconnect = true;
								this.setActivity(presence);
							}, 3e3);
						}
						setTimeout(
							(() => {
								this.cooldown = false;
								if (this.queuedPresence) {
									this.queuedPresence = false;
									this.setActivity(this.currentPresence);
								}
							}).bind(this),
							1e3,
						);
					}
				}
				exports.z = Presence;
			},
			179: (__unused_webpack_module, exports) => {
				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
				exports.debug = void 0;
				function debug(...args) {
					if (!process.env["EZP-DEBUG"]) return;
					console.debug("[EZP]", ...args);
				}
				exports.debug = debug;
			},
			764: (__unused_webpack_module, exports, __webpack_require__) => {
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function parseAudioType(str, input, output) {
					let result = "";
					if (str.indexOf("speak") >= 0) result = "Speaker";
					if (str.indexOf("laut") >= 0) result = "Speaker";
					if (str.indexOf("loud") >= 0) result = "Speaker";
					if (str.indexOf("head") >= 0) result = "Headset";
					if (str.indexOf("mic") >= 0) result = "Microphone";
					if (str.indexOf("mikr") >= 0) result = "Microphone";
					if (str.indexOf("phone") >= 0) result = "Phone";
					if (str.indexOf("controll") >= 0) result = "Controller";
					if (str.indexOf("line o") >= 0) result = "Line Out";
					if (str.indexOf("digital o") >= 0) result = "Digital Out";
					if (!result && output) result = "Speaker";
					else if (!result && input) result = "Microphone";
					return result;
				}
				function getLinuxAudioPci() {
					let cmd = "lspci -v 2>/dev/null";
					let result = [];
					try {
						const parts = execSync(cmd).toString().split("\n\n");
						for (let i = 0; i < parts.length; i++) {
							const lines = parts[i].split("\n");
							if (lines && lines.length && lines[0].toLowerCase().indexOf("audio") >= 0) {
								const audio = {};
								audio.slotId = lines[0].split(" ")[0];
								audio.driver = util.getValue(lines, "Kernel driver in use", ":", true) || util.getValue(lines, "Kernel modules", ":", true);
								result.push(audio);
							}
						}
						return result;
					} catch (e) {
						return result;
					}
				}
				function parseLinuxAudioPciMM(lines, audioPCI) {
					const result = {};
					const slotId = util.getValue(lines, "Slot");
					const pciMatch = audioPCI.filter(function (item) {
						return item.slotId === slotId;
					});
					result.id = slotId;
					result.name = util.getValue(lines, "SDevice");
					result.manufacturer = util.getValue(lines, "SVendor");
					result.revision = util.getValue(lines, "Rev");
					result.driver = pciMatch && 1 === pciMatch.length && pciMatch[0].driver ? pciMatch[0].driver : "";
					result.default = null;
					result.channel = "PCIe";
					result.type = parseAudioType(result.name, null, null);
					result.in = null;
					result.out = null;
					result.status = "online";
					return result;
				}
				function parseDarwinChannel(str) {
					let result = "";
					if (str.indexOf("builtin") >= 0) result = "Built-In";
					if (str.indexOf("extern") >= 0) result = "Audio-Jack";
					if (str.indexOf("hdmi") >= 0) result = "HDMI";
					if (str.indexOf("displayport") >= 0) result = "Display-Port";
					if (str.indexOf("usb") >= 0) result = "USB";
					if (str.indexOf("pci") >= 0) result = "PCIe";
					return result;
				}
				function parseDarwinAudio(audioObject, id) {
					const result = {};
					const channelStr = ((audioObject.coreaudio_device_transport || "") + " " + (audioObject._name || "")).toLowerCase();
					result.id = id;
					result.name = audioObject._name;
					result.manufacturer = audioObject.coreaudio_device_manufacturer;
					result.revision = null;
					result.driver = null;
					result.default = !!(audioObject.coreaudio_default_audio_input_device || "") || !!(audioObject.coreaudio_default_audio_output_device || "");
					result.channel = parseDarwinChannel(channelStr);
					result.type = parseAudioType(result.name, !!(audioObject.coreaudio_device_input || ""), !!(audioObject.coreaudio_device_output || ""));
					result.in = !!(audioObject.coreaudio_device_input || "");
					result.out = !!(audioObject.coreaudio_device_output || "");
					result.status = "online";
					return result;
				}
				function parseWindowsAudio(lines) {
					const result = {};
					const status = util.getValue(lines, "StatusInfo", ":");
					result.id = util.getValue(lines, "DeviceID", ":");
					result.name = util.getValue(lines, "name", ":");
					result.manufacturer = util.getValue(lines, "manufacturer", ":");
					result.revision = null;
					result.driver = null;
					result.default = null;
					result.channel = null;
					result.type = parseAudioType(result.name, null, null);
					result.in = null;
					result.out = null;
					result.status = status;
					return result;
				}
				function audio(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux || _freebsd || _openbsd || _netbsd) {
								let cmd = "lspci -vmm 2>/dev/null";
								exec(cmd, function (error, stdout) {
									if (!error) {
										const audioPCI = getLinuxAudioPci();
										const parts = stdout.toString().split("\n\n");
										for (let i = 0; i < parts.length; i++) {
											const lines = parts[i].split("\n");
											if (util.getValue(lines, "class", ":", true).toLowerCase().indexOf("audio") >= 0) {
												const audio = parseLinuxAudioPciMM(lines, audioPCI);
												result.push(audio);
											}
										}
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_darwin) {
								let cmd = "system_profiler SPAudioDataType -json";
								exec(cmd, function (error, stdout) {
									if (!error)
										try {
											const outObj = JSON.parse(stdout.toString());
											if (
												outObj.SPAudioDataType &&
												outObj.SPAudioDataType.length &&
												outObj.SPAudioDataType[0] &&
												outObj.SPAudioDataType[0]["_items"] &&
												outObj.SPAudioDataType[0]["_items"].length
											)
												for (let i = 0; i < outObj.SPAudioDataType[0]["_items"].length; i++) {
													const audio = parseDarwinAudio(outObj.SPAudioDataType[0]["_items"][i], i);
													result.push(audio);
												}
										} catch (e) {
											util.noop();
										}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_windows)
								util.powerShell("Get-WmiObject Win32_SoundDevice | select DeviceID,StatusInfo,Name,Manufacturer | fl").then((stdout, error) => {
									if (!error) {
										const parts = stdout.toString().split(/\n\s*\n/);
										for (let i = 0; i < parts.length; i++)
											if (util.getValue(parts[i].split("\n"), "name", ":")) result.push(parseWindowsAudio(parts[i].split("\n")));
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) resolve(null);
						});
					});
				}
				exports.audio = audio;
			},
			620: (module, __unused_webpack_exports, __webpack_require__) => {
				const exec = __webpack_require__(282).exec;
				const fs = __webpack_require__(48);
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function parseWinBatteryPart(lines, designedCapacity, fullChargeCapacity) {
					const result = {};
					let status = util.getValue(lines, "BatteryStatus", ":").trim();
					if (status >= 0) {
						const statusValue = status ? parseInt(status) : 0;
						result.status = statusValue;
						result.hasBattery = true;
						result.maxCapacity = fullChargeCapacity || parseInt(util.getValue(lines, "DesignCapacity", ":") || 0);
						result.designedCapacity = parseInt(util.getValue(lines, "DesignCapacity", ":") || designedCapacity);
						result.voltage = parseInt(util.getValue(lines, "DesignVoltage", ":") || 0) / 1e3;
						result.capacityUnit = "mWh";
						result.percent = parseInt(util.getValue(lines, "EstimatedChargeRemaining", ":") || 0);
						result.currentCapacity = parseInt((result.maxCapacity * result.percent) / 100);
						result.isCharging = (statusValue >= 6 && statusValue <= 9) || 11 === statusValue || (!(3 === statusValue) && !(1 === statusValue) && result.percent < 100);
						result.acConnected = result.isCharging || 2 === statusValue;
						result.model = util.getValue(lines, "DeviceID", ":");
					} else result.status = -1;
					return result;
				}
				module.exports = function (callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								hasBattery: false,
								cycleCount: 0,
								isCharging: false,
								designedCapacity: 0,
								maxCapacity: 0,
								currentCapacity: 0,
								voltage: 0,
								capacityUnit: "",
								percent: 0,
								timeRemaining: null,
								acConnected: true,
								type: "",
								model: "",
								manufacturer: "",
								serial: "",
							};
							if (_linux) {
								let battery_path = "";
								if (fs.existsSync("/sys/class/power_supply/BAT1/uevent")) battery_path = "/sys/class/power_supply/BAT1/";
								else if (fs.existsSync("/sys/class/power_supply/BAT0/uevent")) battery_path = "/sys/class/power_supply/BAT0/";
								let acConnected = false;
								let acPath = "";
								if (fs.existsSync("/sys/class/power_supply/AC/online")) acPath = "/sys/class/power_supply/AC/online";
								else if (fs.existsSync("/sys/class/power_supply/AC0/online")) acPath = "/sys/class/power_supply/AC0/online";
								if (acPath) {
									const file = fs.readFileSync(acPath);
									acConnected = "1" === file.toString().trim();
								}
								if (battery_path)
									fs.readFile(battery_path + "uevent", function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											result.isCharging = "charging" === util.getValue(lines, "POWER_SUPPLY_STATUS", "=").toLowerCase();
											result.acConnected = acConnected || result.isCharging;
											result.voltage = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_VOLTAGE_NOW", "="), 10) / 1e6;
											result.capacityUnit = result.voltage ? "mWh" : "mAh";
											result.cycleCount = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_CYCLE_COUNT", "="), 10);
											result.maxCapacity = Math.round(
												(parseInt("0" + util.getValue(lines, "POWER_SUPPLY_CHARGE_FULL", "=", true, true), 10) / 1e3) * (result.voltage || 1),
											);
											const desingedMinVoltage = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_VOLTAGE_MIN_DESIGN", "="), 10) / 1e6;
											result.designedCapacity = Math.round(
												(parseInt("0" + util.getValue(lines, "POWER_SUPPLY_CHARGE_FULL_DESIGN", "=", true, true), 10) / 1e3) *
													(desingedMinVoltage || result.voltage || 1),
											);
											result.currentCapacity = Math.round(
												(parseInt("0" + util.getValue(lines, "POWER_SUPPLY_CHARGE_NOW", "="), 10) / 1e3) * (result.voltage || 1),
											);
											if (!result.maxCapacity) {
												result.maxCapacity = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_ENERGY_FULL", "=", true, true), 10) / 1e3;
												result.designedCapacity =
													(parseInt("0" + util.getValue(lines, "POWER_SUPPLY_ENERGY_FULL_DESIGN", "=", true, true), 10) / 1e3) | result.maxCapacity;
												result.currentCapacity = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_ENERGY_NOW", "="), 10) / 1e3;
											}
											const percent = util.getValue(lines, "POWER_SUPPLY_CAPACITY", "=");
											const energy = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_ENERGY_NOW", "="), 10);
											const power = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_POWER_NOW", "="), 10);
											const current = parseInt("0" + util.getValue(lines, "POWER_SUPPLY_CURRENT_NOW", "="), 10);
											result.percent = parseInt("0" + percent, 10);
											if (result.maxCapacity && result.currentCapacity) {
												result.hasBattery = true;
												if (!percent) result.percent = (100 * result.currentCapacity) / result.maxCapacity;
											}
											if (result.isCharging) result.hasBattery = true;
											if (energy && power) result.timeRemaining = Math.floor((energy / power) * 60);
											else if (current && result.currentCapacity) result.timeRemaining = Math.floor((result.currentCapacity / current) * 60);
											result.type = util.getValue(lines, "POWER_SUPPLY_TECHNOLOGY", "=");
											result.model = util.getValue(lines, "POWER_SUPPLY_MODEL_NAME", "=");
											result.manufacturer = util.getValue(lines, "POWER_SUPPLY_MANUFACTURER", "=");
											result.serial = util.getValue(lines, "POWER_SUPPLY_SERIAL_NUMBER", "=");
											if (callback) callback(result);
											resolve(result);
										} else {
											if (callback) callback(result);
											resolve(result);
										}
									});
								else {
									if (callback) callback(result);
									resolve(result);
								}
							}
							if (_freebsd || _openbsd || _netbsd)
								exec("sysctl -i hw.acpi.battery hw.acpi.acline", function (error, stdout) {
									let lines = stdout.toString().split("\n");
									const batteries = parseInt("0" + util.getValue(lines, "hw.acpi.battery.units"), 10);
									const percent = parseInt("0" + util.getValue(lines, "hw.acpi.battery.life"), 10);
									result.hasBattery = batteries > 0;
									result.cycleCount = null;
									result.isCharging = "1" !== util.getValue(lines, "hw.acpi.acline");
									result.acConnected = result.isCharging;
									result.maxCapacity = null;
									result.currentCapacity = null;
									result.capacityUnit = "unknown";
									result.percent = batteries ? percent : null;
									if (callback) callback(result);
									resolve(result);
								});
							if (_darwin)
								exec(
									'ioreg -n AppleSmartBattery -r | egrep "CycleCount|IsCharging|DesignCapacity|MaxCapacity|CurrentCapacity|BatterySerialNumber|TimeRemaining|Voltage"; pmset -g batt | grep %',
									function (error, stdout) {
										if (stdout) {
											let lines = stdout.toString().replace(/ +/g, "").replace(/"+/g, "").replace(/-/g, "").split("\n");
											result.cycleCount = parseInt("0" + util.getValue(lines, "cyclecount", "="), 10);
											result.voltage = parseInt("0" + util.getValue(lines, "voltage", "="), 10) / 1e3;
											result.capacityUnit = result.voltage ? "mWh" : "mAh";
											result.maxCapacity = Math.round(parseInt("0" + util.getValue(lines, "applerawmaxcapacity", "="), 10) * (result.voltage || 1));
											result.currentCapacity = Math.round(parseInt("0" + util.getValue(lines, "applerawcurrentcapacity", "="), 10) * (result.voltage || 1));
											result.designedCapacity = Math.round(parseInt("0" + util.getValue(lines, "DesignCapacity", "="), 10) * (result.voltage || 1));
											result.manufacturer = "Apple";
											result.serial = util.getValue(lines, "BatterySerialNumber", "=");
											let percent = null;
											const line = util.getValue(lines, "internal", "Battery");
											let parts = line.split(";");
											if (parts && parts[0]) {
												let parts2 = parts[0].split("\t");
												if (parts2 && parts2[1]) percent = parseFloat(parts2[1].trim().replace(/%/g, ""));
											}
											if (parts && parts[1]) {
												result.isCharging = "charging" === parts[1].trim();
												result.acConnected = "discharging" !== parts[1].trim();
											} else {
												result.isCharging = "yes" === util.getValue(lines, "ischarging", "=").toLowerCase();
												result.acConnected = result.isCharging;
											}
											if (result.maxCapacity && result.currentCapacity) {
												result.hasBattery = true;
												result.type = "Li-ion";
												result.percent = null !== percent ? percent : Math.round((100 * result.currentCapacity) / result.maxCapacity);
												if (!result.isCharging) result.timeRemaining = parseInt("0" + util.getValue(lines, "TimeRemaining", "="), 10);
											}
										}
										if (callback) callback(result);
										resolve(result);
									},
								);
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows)
								try {
									const workload = [];
									workload.push(
										util.powerShell("Get-WmiObject Win32_Battery | select BatteryStatus, DesignCapacity, DesignVoltage, EstimatedChargeRemaining, DeviceID | fl"),
									);
									workload.push(util.powerShell("(Get-WmiObject -Class BatteryStaticData -Namespace ROOT/WMI).DesignedCapacity"));
									workload.push(util.powerShell("(Get-WmiObject -Class BatteryFullChargedCapacity -Namespace ROOT/WMI).FullChargedCapacity"));
									util.promiseAll(workload).then((data) => {
										if (data) {
											let parts = data.results[0].split(/\n\s*\n/);
											let batteries = [];
											const hasValue = (value) => /\S/.test(value);
											for (let i = 0; i < parts.length; i++) {
												if (hasValue(parts[i]) && (!batteries.length || !hasValue(parts[i - 1]))) batteries.push([]);
												if (hasValue(parts[i])) batteries[batteries.length - 1].push(parts[i]);
											}
											let designCapacities = data.results[1].split("\r\n").filter((e) => e);
											let fullChargeCapacities = data.results[2].split("\r\n").filter((e) => e);
											if (batteries.length) {
												let first = false;
												let additionalBatteries = [];
												for (let i = 0; i < batteries.length; i++) {
													let lines = batteries[i][0].split("\r\n");
													const designedCapacity =
														designCapacities && designCapacities.length >= i + 1 && designCapacities[i] ? util.toInt(designCapacities[i]) : 0;
													const fullChargeCapacity =
														fullChargeCapacities && fullChargeCapacities.length >= i + 1 && fullChargeCapacities[i]
															? util.toInt(fullChargeCapacities[i])
															: 0;
													const parsed = parseWinBatteryPart(lines, designedCapacity, fullChargeCapacity);
													if (!first && parsed.status > 0 && 10 !== parsed.status) {
														result.hasBattery = parsed.hasBattery;
														result.maxCapacity = parsed.maxCapacity;
														result.designedCapacity = parsed.designedCapacity;
														result.voltage = parsed.voltage;
														result.capacityUnit = parsed.capacityUnit;
														result.percent = parsed.percent;
														result.currentCapacity = parsed.currentCapacity;
														result.isCharging = parsed.isCharging;
														result.acConnected = parsed.acConnected;
														result.model = parsed.model;
														first = true;
													} else if (-1 !== parsed.status)
														additionalBatteries.push({
															hasBattery: parsed.hasBattery,
															maxCapacity: parsed.maxCapacity,
															designedCapacity: parsed.designedCapacity,
															voltage: parsed.voltage,
															capacityUnit: parsed.capacityUnit,
															percent: parsed.percent,
															currentCapacity: parsed.currentCapacity,
															isCharging: parsed.isCharging,
															timeRemaining: null,
															acConnected: parsed.acConnected,
															model: parsed.model,
															type: "",
															manufacturer: "",
															serial: "",
														});
												}
												if (!first && additionalBatteries.length) {
													result = additionalBatteries[0];
													additionalBatteries.shift();
												}
												if (additionalBatteries.length) result.additionalBatteries = additionalBatteries;
											}
										}
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				};
			},
			184: (__unused_webpack_module, exports, __webpack_require__) => {
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const path = __webpack_require__(315);
				const util = __webpack_require__(858);
				const fs = __webpack_require__(48);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function parseBluetoothType(str) {
					let result = "";
					if (str.indexOf("keyboard") >= 0) result = "Keyboard";
					if (str.indexOf("mouse") >= 0) result = "Mouse";
					if (str.indexOf("speaker") >= 0) result = "Speaker";
					if (str.indexOf("headset") >= 0) result = "Headset";
					if (str.indexOf("phone") >= 0) result = "Phone";
					return result;
				}
				function parseLinuxBluetoothInfo(lines, macAddr1, macAddr2) {
					const result = {};
					result.device = null;
					result.name = util.getValue(lines, "name", "=");
					result.manufacturer = null;
					result.macDevice = macAddr1;
					result.macHost = macAddr2;
					result.batteryPercent = null;
					result.type = parseBluetoothType(result.name.toLowerCase());
					result.connected = false;
					return result;
				}
				function parseDarwinBluetoothDevices(bluetoothObject, macAddr2) {
					const result = {};
					const typeStr = (
						(bluetoothObject.device_minorClassOfDevice_string || bluetoothObject.device_majorClassOfDevice_string || "") + (bluetoothObject.device_name || "")
					).toLowerCase();
					result.device = bluetoothObject.device_services || "";
					result.name = bluetoothObject.device_name || "";
					result.manufacturer = bluetoothObject.device_manufacturer || "";
					result.macDevice = (bluetoothObject.device_addr || "").toLowerCase().replace(/-/g, ":");
					result.macHost = macAddr2;
					result.batteryPercent = bluetoothObject.device_batteryPercent || null;
					result.type = parseBluetoothType(typeStr);
					result.connected = "attrib_Yes" === bluetoothObject.device_isconnected || false;
					return result;
				}
				function parseWindowsBluetooth(lines) {
					const result = {};
					result.device = null;
					result.name = util.getValue(lines, "name", ":");
					result.manufacturer = util.getValue(lines, "manufacturer", ":");
					result.macDevice = null;
					result.macHost = null;
					result.batteryPercent = null;
					result.type = parseBluetoothType(result.name.toLowerCase());
					result.connected = null;
					return result;
				}
				function bluetoothDevices(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux) {
								const btFiles = util.getFilesInPath("/var/lib/bluetooth/");
								for (let i = 0; i < btFiles.length; i++) {
									const filename = path.basename(btFiles[i]);
									const pathParts = btFiles[i].split("/");
									const macAddr1 = pathParts.length >= 6 ? pathParts[pathParts.length - 2] : null;
									const macAddr2 = pathParts.length >= 7 ? pathParts[pathParts.length - 3] : null;
									if ("info" === filename) {
										const infoFile = fs
											.readFileSync(btFiles[i], {
												encoding: "utf8",
											})
											.split("\n");
										result.push(parseLinuxBluetoothInfo(infoFile, macAddr1, macAddr2));
									}
								}
								try {
									const hdicon = execSync("hcitool con").toString().toLowerCase();
									for (let i = 0; i < result.length; i++)
										if (result[i].macDevice && result[i].macDevice.length > 10 && hdicon.indexOf(result[i].macDevice.toLowerCase()) >= 0) result[i].connected = true;
								} catch (e) {
									util.noop();
								}
								if (callback) callback(result);
								resolve(result);
							}
							if (_darwin) {
								let cmd = "system_profiler SPBluetoothDataType -json";
								exec(cmd, function (error, stdout) {
									if (!error)
										try {
											const outObj = JSON.parse(stdout.toString());
											if (
												outObj.SPBluetoothDataType &&
												outObj.SPBluetoothDataType.length &&
												outObj.SPBluetoothDataType[0] &&
												outObj.SPBluetoothDataType[0]["device_title"] &&
												outObj.SPBluetoothDataType[0]["device_title"].length
											) {
												let macAddr2 = null;
												if (outObj.SPBluetoothDataType[0]["local_device_title"] && outObj.SPBluetoothDataType[0].local_device_title.general_address)
													macAddr2 = outObj.SPBluetoothDataType[0].local_device_title.general_address.toLowerCase().replace(/-/g, ":");
												for (let i = 0; i < outObj.SPBluetoothDataType[0]["device_title"].length; i++) {
													const obj = outObj.SPBluetoothDataType[0]["device_title"][i];
													const objKey = Object.keys(obj);
													if (objKey && 1 === objKey.length) {
														const innerObject = obj[objKey[0]];
														innerObject.device_name = objKey[0];
														const bluetoothDevice = parseDarwinBluetoothDevices(innerObject, macAddr2);
														result.push(bluetoothDevice);
													}
												}
											}
										} catch (e) {
											util.noop();
										}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_windows)
								util.powerShell("Get-WmiObject Win32_PNPEntity | select PNPClass, Name, Manufacturer | fl").then((stdout, error) => {
									if (!error) {
										const parts = stdout.toString().split(/\n\s*\n/);
										for (let i = 0; i < parts.length; i++)
											if ("Bluetooth" === util.getValue(parts[i].split("\n"), "PNPClass", ":")) result.push(parseWindowsBluetooth(parts[i].split("\n")));
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_freebsd || _netbsd || _openbsd || _sunos) resolve(null);
						});
					});
				}
				exports.bluetoothDevices = bluetoothDevices;
			},
			871: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const fs = __webpack_require__(48);
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				let _cpu_speed = 0;
				let _current_cpu = {
					user: 0,
					nice: 0,
					system: 0,
					idle: 0,
					irq: 0,
					load: 0,
					tick: 0,
					ms: 0,
					currentLoad: 0,
					currentLoadUser: 0,
					currentLoadSystem: 0,
					currentLoadNice: 0,
					currentLoadIdle: 0,
					currentLoadIrq: 0,
					rawCurrentLoad: 0,
					rawCurrentLoadUser: 0,
					rawCurrentLoadSystem: 0,
					rawCurrentLoadNice: 0,
					rawCurrentLoadIdle: 0,
					rawCurrentLoadIrq: 0,
				};
				let _cpus = [];
				let _corecount = 0;
				const AMDBaseFrequencies = {
					8346: "1.8",
					8347: "1.9",
					8350: "2.0",
					8354: "2.2",
					"8356|SE": "2.4",
					8356: "2.3",
					8360: "2.5",
					2372: "2.1",
					2373: "2.1",
					2374: "2.2",
					2376: "2.3",
					2377: "2.3",
					2378: "2.4",
					2379: "2.4",
					2380: "2.5",
					2381: "2.5",
					2382: "2.6",
					2384: "2.7",
					2386: "2.8",
					2387: "2.8",
					2389: "2.9",
					2393: "3.1",
					8374: "2.2",
					8376: "2.3",
					8378: "2.4",
					8379: "2.4",
					8380: "2.5",
					8381: "2.5",
					8382: "2.6",
					8384: "2.7",
					8386: "2.8",
					8387: "2.8",
					8389: "2.9",
					8393: "3.1",
					"2419EE": "1.8",
					"2423HE": "2.0",
					"2425HE": "2.1",
					2427: "2.2",
					2431: "2.4",
					2435: "2.6",
					"2439SE": "2.8",
					"8425HE": "2.1",
					8431: "2.4",
					8435: "2.6",
					"8439SE": "2.8",
					4122: "2.2",
					4130: "2.6",
					"4162EE": "1.7",
					"4164EE": "1.8",
					"4170HE": "2.1",
					"4174HE": "2.3",
					"4176HE": "2.4",
					4180: "2.6",
					4184: "2.8",
					"6124HE": "1.8",
					"6128HE": "2.0",
					"6132HE": "2.2",
					6128: "2.0",
					6134: "2.3",
					6136: "2.4",
					6140: "2.6",
					"6164HE": "1.7",
					"6166HE": "1.8",
					6168: "1.9",
					6172: "2.1",
					6174: "2.2",
					6176: "2.3",
					"6176SE": "2.3",
					"6180SE": "2.5",
					3250: "2.5",
					3260: "2.7",
					3280: "2.4",
					4226: "2.7",
					4228: "2.8",
					4230: "2.9",
					4234: "3.1",
					4238: "3.3",
					4240: "3.4",
					4256: "1.6",
					4274: "2.5",
					4276: "2.6",
					4280: "2.8",
					4284: "3.0",
					6204: "3.3",
					6212: "2.6",
					6220: "3.0",
					6234: "2.4",
					6238: "2.6",
					"6262HE": "1.6",
					6272: "2.1",
					6274: "2.2",
					6276: "2.3",
					6278: "2.4",
					"6282SE": "2.6",
					"6284SE": "2.7",
					6308: "3.5",
					6320: "2.8",
					6328: "3.2",
					"6338P": "2.3",
					6344: "2.6",
					6348: "2.8",
					6366: "1.8",
					"6370P": "2.0",
					6376: "2.3",
					6378: "2.4",
					6380: "2.5",
					6386: "2.8",
					"FX|4100": "3.6",
					"FX|4120": "3.9",
					"FX|4130": "3.8",
					"FX|4150": "3.8",
					"FX|4170": "4.2",
					"FX|6100": "3.3",
					"FX|6120": "3.6",
					"FX|6130": "3.6",
					"FX|6200": "3.8",
					"FX|8100": "2.8",
					"FX|8120": "3.1",
					"FX|8140": "3.2",
					"FX|8150": "3.6",
					"FX|8170": "3.9",
					"FX|4300": "3.8",
					"FX|4320": "4.0",
					"FX|4350": "4.2",
					"FX|6300": "3.5",
					"FX|6350": "3.9",
					"FX|8300": "3.3",
					"FX|8310": "3.4",
					"FX|8320": "3.5",
					"FX|8350": "4.0",
					"FX|8370": "4.0",
					"FX|9370": "4.4",
					"FX|9590": "4.7",
					"FX|8320E": "3.2",
					"FX|8370E": "3.3",
					1200: "3.1",
					"Pro 1200": "3.1",
					"1300X": "3.5",
					"Pro 1300": "3.5",
					1400: "3.2",
					"1500X": "3.5",
					"Pro 1500": "3.5",
					1600: "3.2",
					"1600X": "3.6",
					"Pro 1600": "3.2",
					1700: "3.0",
					"Pro 1700": "3.0",
					"1700X": "3.4",
					"Pro 1700X": "3.4",
					"1800X": "3.6",
					"1900X": "3.8",
					1920: "3.2",
					"1920X": "3.5",
					"1950X": "3.4",
					"200GE": "3.2",
					"Pro 200GE": "3.2",
					"220GE": "3.4",
					"240GE": "3.5",
					"3000G": "3.5",
					"300GE": "3.4",
					"3050GE": "3.4",
					"2200G": "3.5",
					"Pro 2200G": "3.5",
					"2200GE": "3.2",
					"Pro 2200GE": "3.2",
					"2400G": "3.6",
					"Pro 2400G": "3.6",
					"2400GE": "3.2",
					"Pro 2400GE": "3.2",
					"Pro 200U": "2.3",
					"300U": "2.4",
					"2200U": "2.5",
					"3200U": "2.6",
					"2300U": "2.0",
					"Pro 2300U": "2.0",
					"2500U": "2.0",
					"Pro 2500U": "2.2",
					"2600H": "3.2",
					"2700U": "2.0",
					"Pro 2700U": "2.2",
					"2800H": "3.3",
					7351: "2.4",
					"7351P": "2.4",
					7401: "2.0",
					"7401P": "2.0",
					"7551P": "2.0",
					7551: "2.0",
					7251: "2.1",
					7261: "2.5",
					7281: "2.1",
					7301: "2.2",
					7371: "3.1",
					7451: "2.3",
					7501: "2.0",
					7571: "2.2",
					7601: "2.2",
					V1500B: "2.2",
					V1780B: "3.35",
					V1202B: "2.3",
					V1404I: "2.0",
					V1605B: "2.0",
					V1756B: "3.25",
					V1807B: "3.35",
					3101: "2.1",
					3151: "2.7",
					3201: "1.5",
					3251: "2.5",
					3255: "2.5",
					3301: "2.0",
					3351: "1.9",
					3401: "1.85",
					3451: "2.15",
					"1200|AF": "3.1",
					"2300X": "3.5",
					"2500X": "3.6",
					2600: "3.4",
					"2600E": "3.1",
					"1600|AF": "3.2",
					"2600X": "3.6",
					2700: "3.2",
					"2700E": "2.8",
					"Pro 2700": "3.2",
					"2700X": "3.7",
					"Pro 2700X": "3.6",
					"2920X": "3.5",
					"2950X": "3.5",
					"2970WX": "3.0",
					"2990WX": "3.0",
					"Pro 300GE": "3.4",
					"Pro 3125GE": "3.4",
					"3150G": "3.5",
					"Pro 3150G": "3.5",
					"3150GE": "3.3",
					"Pro 3150GE": "3.3",
					"3200G": "3.6",
					"Pro 3200G": "3.6",
					"3200GE": "3.3",
					"Pro 3200GE": "3.3",
					"3350G": "3.6",
					"Pro 3350G": "3.6",
					"3350GE": "3.3",
					"Pro 3350GE": "3.3",
					"3400G": "3.7",
					"Pro 3400G": "3.7",
					"3400GE": "3.3",
					"Pro 3400GE": "3.3",
					"3300U": "2.1",
					"PRO 3300U": "2.1",
					"3450U": "2.1",
					"3500U": "2.1",
					"PRO 3500U": "2.1",
					"3500C": "2.1",
					"3550H": "2.1",
					"3580U": "2.1",
					"3700U": "2.3",
					"PRO 3700U": "2.3",
					"3700C": "2.3",
					"3750H": "2.3",
					"3780U": "2.3",
					3100: "3.6",
					"3300X": "3.8",
					3500: "3.6",
					"3500X": "3.6",
					3600: "3.6",
					"Pro 3600": "3.6",
					"3600X": "3.8",
					"3600XT": "3.8",
					"Pro 3700": "3.6",
					"3700X": "3.6",
					"3800X": "3.9",
					"3800XT": "3.9",
					3900: "3.1",
					"Pro 3900": "3.1",
					"3900X": "3.8",
					"3900XT": "3.8",
					"3950X": "3.5",
					"3960X": "3.8",
					"3970X": "3.7",
					"3990X": "2.9",
					"3945WX": "4.0",
					"3955WX": "3.9",
					"3975WX": "3.5",
					"3995WX": "2.7",
					"4300GE": "3.5",
					"Pro 4300GE": "3.5",
					"4300G": "3.8",
					"Pro 4300G": "3.8",
					"4600GE": "3.3",
					"Pro 4650GE": "3.3",
					"4600G": "3.7",
					"Pro 4650G": "3.7",
					"4700GE": "3.1",
					"Pro 4750GE": "3.1",
					"4700G": "3.6",
					"Pro 4750G": "3.6",
					"4300U": "2.7",
					"4450U": "2.5",
					"Pro 4450U": "2.5",
					"4500U": "2.3",
					"4600U": "2.1",
					"PRO 4650U": "2.1",
					"4680U": "2.1",
					"4600HS": "3.0",
					"4600H": "3.0",
					"4700U": "2.0",
					"PRO 4750U": "1.7",
					"4800U": "1.8",
					"4800HS": "2.9",
					"4800H": "2.9",
					"4900HS": "3.0",
					"4900H": "3.3",
					"5300U": "2.6",
					"5500U": "2.1",
					"5700U": "1.8",
					"7232P": "3.1",
					"7302P": "3.0",
					"7402P": "2.8",
					"7502P": "2.5",
					"7702P": "2.0",
					7252: "3.1",
					7262: "3.2",
					7272: "2.9",
					7282: "2.8",
					7302: "3.0",
					7352: "2.3",
					7402: "2.8",
					7452: "2.35",
					7502: "2.5",
					7532: "2.4",
					7542: "2.9",
					7552: "2.2",
					7642: "2.3",
					7662: "2.0",
					7702: "2.0",
					7742: "2.25",
					"7H12": "2.6",
					"7F32": "3.7",
					"7F52": "3.5",
					"7F72": "3.2",
					7763: "2.45",
					7713: "2.0",
					"7713P": "2.0",
					7663: "2.0",
					7643: "2.3",
					"75F3": "2.95",
					7543: "2.8",
					"7543P": "2.8",
					7513: "2.6",
					7453: "2.75",
					"74F3": "3.2",
					7443: "2.85",
					"7443P": "2.85",
					7413: "2.65",
					"73F3": "3.5",
					7343: "3.2",
					7313: "3.0",
					"7313P": "3.0",
					"72F3": "3.7",
					"5600X": "3.7",
					"5800X": "3.8",
					"5900X": "3.7",
					"5950X": "3.4",
				};
				const socketTypes = {
					1: "Other",
					2: "Unknown",
					3: "Daughter Board",
					4: "ZIF Socket",
					5: "Replacement/Piggy Back",
					6: "None",
					7: "LIF Socket",
					8: "Slot 1",
					9: "Slot 2",
					10: "370 Pin Socket",
					11: "Slot A",
					12: "Slot M",
					13: "423",
					14: "A (Socket 462)",
					15: "478",
					16: "754",
					17: "940",
					18: "939",
					19: "mPGA604",
					20: "LGA771",
					21: "LGA775",
					22: "S1",
					23: "AM2",
					24: "F (1207)",
					25: "LGA1366",
					26: "G34",
					27: "AM3",
					28: "C32",
					29: "LGA1156",
					30: "LGA1567",
					31: "PGA988A",
					32: "BGA1288",
					33: "rPGA988B",
					34: "BGA1023",
					35: "BGA1224",
					36: "LGA1155",
					37: "LGA1356",
					38: "LGA2011",
					39: "FS1",
					40: "FS2",
					41: "FM1",
					42: "FM2",
					43: "LGA2011-3",
					44: "LGA1356-3",
					45: "LGA1150",
					46: "BGA1168",
					47: "BGA1234",
					48: "BGA1364",
					49: "AM4",
					50: "LGA1151",
					51: "BGA1356",
					52: "BGA1440",
					53: "BGA1515",
					54: "LGA3647-1",
					55: "SP3",
					56: "SP3r2",
					57: "LGA2066",
					58: "BGA1392",
					59: "BGA1510",
					60: "BGA1528",
					61: "LGA4189",
					62: "LGA1200",
					63: "LGA4677",
				};
				const socketTypesByName = {
					LGA1150:
						"i7-5775C i3-4340 i3-4170 G3250 i3-4160T i3-4160 E3-1231 G3258 G3240 i7-4790S i7-4790K i7-4790 i5-4690K i5-4690 i5-4590T i5-4590S i5-4590 i5-4460 i3-4360 i3-4150 G1820 G3420 G3220 i7-4771 i5-4440 i3-4330 i3-4130T i3-4130 E3-1230 i7-4770S i7-4770K i7-4770 i5-4670K i5-4670 i5-4570T i5-4570S i5-4570 i5-4430",
					LGA1151:
						"i9-9900KS E-2288G E-2224 G5420 i9-9900T i9-9900 i7-9700T i7-9700F i7-9700E i7-9700 i5-9600 i5-9500T i5-9500F i5-9500 i5-9400T i3-9350K i3-9300 i3-9100T i3-9100F i3-9100 G4930 i9-9900KF i7-9700KF i5-9600KF i5-9400F i5-9400 i3-9350KF i9-9900K i7-9700K i5-9600K G5500 G5400 i7-8700T i7-8086K i5-8600 i5-8500T i5-8500 i5-8400T i3-8300 i3-8100T G4900 i7-8700K i7-8700 i5-8600K i5-8400 i3-8350K i3-8100 E3-1270 G4600 G4560 i7-7700T i7-7700K i7-7700 i5-7600K i5-7600 i5-7500T i5-7500 i5-7400 i3-7350K i3-7300 i3-7100T i3-7100 G3930 G3900 G4400 i7-6700T i7-6700K i7-6700 i5-6600K i5-6600 i5-6500T i5-6500 i5-6400T i5-6400 i3-6300 i3-6100T i3-6100 E3-1270 E3-1270 T4500 T4400",
					1155: "G440 G460 G465 G470 G530T G540T G550T G1610T G1620T G530 G540 G1610 G550 G1620 G555 G1630 i3-2100T i3-2120T i3-3220T i3-3240T i3-3250T i3-2100 i3-2105 i3-2102 i3-3210 i3-3220 i3-2125 i3-2120 i3-3225 i3-2130 i3-3245 i3-3240 i3-3250 i5-3570T i5-2500T i5-2400S i5-2405S i5-2390T i5-3330S i5-2500S i5-3335S i5-2300 i5-3450S i5-3340S i5-3470S i5-3475S i5-3470T i5-2310 i5-3550S i5-2320 i5-3330 i5-3350P i5-3450 i5-2400 i5-3340 i5-3570S i5-2380P i5-2450P i5-3470 i5-2500K i5-3550 i5-2500 i5-3570 i5-3570K i5-2550K i7-3770T i7-2600S i7-3770S i7-2600K i7-2600 i7-3770 i7-3770K i7-2700K G620T G630T G640T G2020T G645T G2100T G2030T G622 G860T G620 G632 G2120T G630 G640 G2010 G840 G2020 G850 G645 G2030 G860 G2120 G870 G2130 G2140 E3-1220L E3-1220L E3-1260L E3-1265L E3-1220 E3-1225 E3-1220 E3-1235 E3-1225 E3-1230 E3-1230 E3-1240 E3-1245 E3-1270 E3-1275 E3-1240 E3-1245 E3-1270 E3-1280 E3-1275 E3-1290 E3-1280 E3-1290",
				};
				function getSocketTypesByName(str) {
					let result = "";
					for (const key in socketTypesByName) {
						const names = socketTypesByName[key].split(" ");
						for (let i = 0; i < names.length; i++) if (str.indexOf(names[i]) >= 0) result = key;
					}
					return result;
				}
				function cpuManufacturer(str) {
					let result = str;
					str = str.toLowerCase();
					if (str.indexOf("intel") >= 0) result = "Intel";
					if (str.indexOf("amd") >= 0) result = "AMD";
					if (str.indexOf("qemu") >= 0) result = "QEMU";
					if (str.indexOf("hygon") >= 0) result = "Hygon";
					if (str.indexOf("centaur") >= 0) result = "WinChip/Via";
					if (str.indexOf("vmware") >= 0) result = "VMware";
					if (str.indexOf("Xen") >= 0) result = "Xen Hypervisor";
					if (str.indexOf("tcg") >= 0) result = "QEMU";
					if (str.indexOf("apple") >= 0) result = "Apple";
					return result;
				}
				function cpuBrandManufacturer(res) {
					res.brand = res.brand
						.replace(/\(R\)+/g, "®")
						.replace(/\s+/g, " ")
						.trim();
					res.brand = res.brand
						.replace(/\(TM\)+/g, "™")
						.replace(/\s+/g, " ")
						.trim();
					res.brand = res.brand
						.replace(/\(C\)+/g, "©")
						.replace(/\s+/g, " ")
						.trim();
					res.brand = res.brand.replace(/CPU+/g, "").replace(/\s+/g, " ").trim();
					res.manufacturer = cpuManufacturer(res.brand);
					let parts = res.brand.split(" ");
					parts.shift();
					res.brand = parts.join(" ");
					return res;
				}
				function getAMDSpeed(brand) {
					let result = "0";
					for (let key in AMDBaseFrequencies)
						if ({}.hasOwnProperty.call(AMDBaseFrequencies, key)) {
							let parts = key.split("|");
							let found = 0;
							parts.forEach((item) => {
								if (brand.indexOf(item) > -1) found++;
							});
							if (found === parts.length) result = AMDBaseFrequencies[key];
						}
					return parseFloat(result);
				}
				function getCpu() {
					return new Promise((resolve) => {
						process.nextTick(() => {
							const UNKNOWN = "unknown";
							let result = {
								manufacturer: UNKNOWN,
								brand: UNKNOWN,
								vendor: "",
								family: "",
								model: "",
								stepping: "",
								revision: "",
								voltage: "",
								speed: 0,
								speedMin: 0,
								speedMax: 0,
								governor: "",
								cores: util.cores(),
								physicalCores: util.cores(),
								processors: 1,
								socket: "",
								flags: "",
								virtualization: false,
								cache: {},
							};
							cpuFlags().then((flags) => {
								result.flags = flags;
								result.virtualization = flags.indexOf("vmx") > -1 || flags.indexOf("svm") > -1;
								if (_darwin)
									exec(
										"sysctl machdep.cpu hw.cpufrequency_max hw.cpufrequency_min hw.packages hw.physicalcpu_max hw.ncpu hw.tbfrequency hw.cpufamily hw.cpusubfamily",
										function (error, stdout) {
											let lines = stdout.toString().split("\n");
											const modelline = util.getValue(lines, "machdep.cpu.brand_string");
											const modellineParts = modelline.split("@");
											result.brand = modellineParts[0].trim();
											const speed = modellineParts[1] ? modellineParts[1].trim() : "0";
											result.speed = parseFloat(speed.replace(/GHz+/g, ""));
											let tbFrequency = util.getValue(lines, "hw.tbfrequency") / 1e9;
											tbFrequency = tbFrequency < 0.1 ? 100 * tbFrequency : tbFrequency;
											result.speed = 0 === result.speed ? tbFrequency : result.speed;
											_cpu_speed = result.speed;
											result = cpuBrandManufacturer(result);
											result.speedMin = util.getValue(lines, "hw.cpufrequency_min") ? util.getValue(lines, "hw.cpufrequency_min") / 1e9 : result.speed;
											result.speedMax = util.getValue(lines, "hw.cpufrequency_max") ? util.getValue(lines, "hw.cpufrequency_max") / 1e9 : result.speed;
											result.vendor = util.getValue(lines, "machdep.cpu.vendor") || "Apple";
											result.family = util.getValue(lines, "machdep.cpu.family") || util.getValue(lines, "hw.cpufamily");
											result.model = util.getValue(lines, "machdep.cpu.model");
											result.stepping = util.getValue(lines, "machdep.cpu.stepping") || util.getValue(lines, "hw.cpusubfamily");
											const countProcessors = util.getValue(lines, "hw.packages");
											const countCores = util.getValue(lines, "hw.physicalcpu_max");
											const countThreads = util.getValue(lines, "hw.ncpu");
											if ("arm64" === os.arch()) {
												const clusters = execSync("ioreg -c IOPlatformDevice -d 3 -r | grep cluster-type").toString().split("\n");
												const efficiencyCores = clusters.filter((line) => line.indexOf('"E"') >= 0).length;
												const performanceCores = clusters.filter((line) => line.indexOf('"P"') >= 0).length;
												result.socket = "SOC";
												result.efficiencyCores = efficiencyCores;
												result.performanceCores = performanceCores;
											}
											if (countProcessors) result.processors = parseInt(countProcessors) || 1;
											if (countCores && countThreads) {
												result.cores = parseInt(countThreads) || util.cores();
												result.physicalCores = parseInt(countCores) || util.cores();
											}
											cpuCache().then((res) => {
												result.cache = res;
												resolve(result);
											});
										},
									);
								if (_linux) {
									let modelline = "";
									let lines = [];
									if (os.cpus()[0] && os.cpus()[0].model) modelline = os.cpus()[0].model;
									exec(
										'export LC_ALL=C; lscpu; echo -n "Governor: "; cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor 2>/dev/null; echo; unset LC_ALL',
										function (error, stdout) {
											if (!error) lines = stdout.toString().split("\n");
											modelline = util.getValue(lines, "model name") || modelline;
											const modellineParts = modelline.split("@");
											result.brand = modellineParts[0].trim();
											result.speed = modellineParts[1] ? parseFloat(modellineParts[1].trim()) : 0;
											if (0 === result.speed && (result.brand.indexOf("AMD") > -1 || result.brand.toLowerCase().indexOf("ryzen") > -1))
												result.speed = getAMDSpeed(result.brand);
											if (0 === result.speed) {
												const current = getCpuCurrentSpeedSync();
												if (0 !== current.avg) result.speed = current.avg;
											}
											_cpu_speed = result.speed;
											result.speedMin = Math.round(parseFloat(util.getValue(lines, "cpu min mhz").replace(/,/g, ".")) / 10) / 100;
											result.speedMax = Math.round(parseFloat(util.getValue(lines, "cpu max mhz").replace(/,/g, ".")) / 10) / 100;
											result = cpuBrandManufacturer(result);
											result.vendor = cpuManufacturer(util.getValue(lines, "vendor id"));
											result.family = util.getValue(lines, "cpu family");
											result.model = util.getValue(lines, "model:");
											result.stepping = util.getValue(lines, "stepping");
											result.revision = util.getValue(lines, "cpu revision");
											result.cache.l1d = util.getValue(lines, "l1d cache");
											if (result.cache.l1d)
												result.cache.l1d =
													parseInt(result.cache.l1d) * (-1 !== result.cache.l1d.indexOf("M") ? 1024 * 1024 : -1 !== result.cache.l1d.indexOf("K") ? 1024 : 1);
											result.cache.l1i = util.getValue(lines, "l1i cache");
											if (result.cache.l1i)
												result.cache.l1i =
													parseInt(result.cache.l1i) * (-1 !== result.cache.l1i.indexOf("M") ? 1024 * 1024 : -1 !== result.cache.l1i.indexOf("K") ? 1024 : 1);
											result.cache.l2 = util.getValue(lines, "l2 cache");
											if (result.cache.l2)
												result.cache.l2 =
													parseInt(result.cache.l2) * (-1 !== result.cache.l2.indexOf("M") ? 1024 * 1024 : -1 !== result.cache.l2.indexOf("K") ? 1024 : 1);
											result.cache.l3 = util.getValue(lines, "l3 cache");
											if (result.cache.l3)
												result.cache.l3 =
													parseInt(result.cache.l3) * (-1 !== result.cache.l3.indexOf("M") ? 1024 * 1024 : -1 !== result.cache.l3.indexOf("K") ? 1024 : 1);
											const threadsPerCore = util.getValue(lines, "thread(s) per core") || "1";
											const processors = util.getValue(lines, "socket(s)") || "1";
											let threadsPerCoreInt = parseInt(threadsPerCore, 10);
											let processorsInt = parseInt(processors, 10);
											result.physicalCores = result.cores / threadsPerCoreInt;
											result.processors = processorsInt;
											result.governor = util.getValue(lines, "governor") || "";
											if ("ARM" === result.vendor) {
												const linesRpi = fs.readFileSync("/proc/cpuinfo").toString().split("\n");
												const rPIRevision = util.decodePiCpuinfo(linesRpi);
												if (rPIRevision.model.toLowerCase().indexOf("raspberry") >= 0) {
													result.family = result.manufacturer;
													result.manufacturer = rPIRevision.manufacturer;
													result.brand = rPIRevision.processor;
													result.revision = rPIRevision.revisionCode;
													result.socket = "SOC";
												}
											}
											let lines2 = [];
											exec('export LC_ALL=C; dmidecode –t 4 2>/dev/null | grep "Upgrade: Socket"; unset LC_ALL', function (error2, stdout2) {
												lines2 = stdout2.toString().split("\n");
												if (lines2 && lines2.length) result.socket = util.getValue(lines2, "Upgrade").replace("Socket", "").trim() || result.socket;
												resolve(result);
											});
										},
									);
								}
								if (_freebsd || _openbsd || _netbsd) {
									let modelline = "";
									let lines = [];
									if (os.cpus()[0] && os.cpus()[0].model) modelline = os.cpus()[0].model;
									exec("export LC_ALL=C; dmidecode -t 4; dmidecode -t 7 unset LC_ALL", function (error, stdout) {
										let cache = [];
										if (!error) {
											const data = stdout.toString().split("# dmidecode");
											const processor = data.length > 1 ? data[1] : "";
											cache = data.length > 2 ? data[2].split("Cache Information") : [];
											lines = processor.split("\n");
										}
										result.brand = modelline.split("@")[0].trim();
										result.speed = modelline.split("@")[1] ? parseFloat(modelline.split("@")[1].trim()) : 0;
										if (0 === result.speed && (result.brand.indexOf("AMD") > -1 || result.brand.toLowerCase().indexOf("ryzen") > -1))
											result.speed = getAMDSpeed(result.brand);
										if (0 === result.speed) {
											const current = getCpuCurrentSpeedSync();
											if (0 !== current.avg) result.speed = current.avg;
										}
										_cpu_speed = result.speed;
										result.speedMin = result.speed;
										result.speedMax = Math.round(parseFloat(util.getValue(lines, "max speed").replace(/Mhz/g, "")) / 10) / 100;
										result = cpuBrandManufacturer(result);
										result.vendor = cpuManufacturer(util.getValue(lines, "manufacturer"));
										let sig = util.getValue(lines, "signature");
										sig = sig.split(",");
										for (var i = 0; i < sig.length; i++) sig[i] = sig[i].trim();
										result.family = util.getValue(sig, "Family", " ", true);
										result.model = util.getValue(sig, "Model", " ", true);
										result.stepping = util.getValue(sig, "Stepping", " ", true);
										result.revision = "";
										const voltage = parseFloat(util.getValue(lines, "voltage"));
										result.voltage = isNaN(voltage) ? "" : voltage.toFixed(2);
										for (let i = 0; i < cache.length; i++) {
											lines = cache[i].split("\n");
											let cacheType = util.getValue(lines, "Socket Designation").toLowerCase().replace(" ", "-").split("-");
											cacheType = cacheType.length ? cacheType[0] : "";
											const sizeParts = util.getValue(lines, "Installed Size").split(" ");
											let size = parseInt(sizeParts[0], 10);
											const unit = sizeParts.length > 1 ? sizeParts[1] : "kb";
											size *= "kb" === unit ? 1024 : "mb" === unit ? 1024 * 1024 : "gb" === unit ? 1024 * 1024 * 1024 : 1;
											if (cacheType)
												if ("l1" === cacheType) {
													result.cache[cacheType + "d"] = size / 2;
													result.cache[cacheType + "i"] = size / 2;
												} else result.cache[cacheType] = size;
										}
										result.socket = util.getValue(lines, "Upgrade").replace("Socket", "").trim();
										const threadCount = util.getValue(lines, "thread count").trim();
										const coreCount = util.getValue(lines, "core count").trim();
										if (coreCount && threadCount) {
											result.cores = parseInt(threadCount, 10);
											result.physicalCores = parseInt(coreCount, 10);
										}
										resolve(result);
									});
								}
								if (_sunos) resolve(result);
								if (_windows)
									try {
										const workload = [];
										workload.push(
											util.powerShell(
												"Get-WmiObject Win32_processor | select Name, Revision, L2CacheSize, L3CacheSize, Manufacturer, MaxClockSpeed, Description, UpgradeMethod, Caption, NumberOfLogicalProcessors, NumberOfCores | fl",
											),
										);
										workload.push(util.powerShell("Get-WmiObject Win32_CacheMemory | select CacheType,InstalledSize,Level | fl"));
										workload.push(util.powerShell("(Get-CimInstance Win32_ComputerSystem).HypervisorPresent"));
										Promise.all(workload).then((data) => {
											let lines = data[0].split("\r\n");
											let name = util.getValue(lines, "name", ":") || "";
											if (name.indexOf("@") >= 0) {
												result.brand = name.split("@")[0].trim();
												result.speed = name.split("@")[1] ? parseFloat(name.split("@")[1].trim()) : 0;
												_cpu_speed = result.speed;
											} else {
												result.brand = name.trim();
												result.speed = 0;
											}
											result = cpuBrandManufacturer(result);
											result.revision = util.getValue(lines, "revision", ":");
											result.cache.l1d = 0;
											result.cache.l1i = 0;
											result.cache.l2 = util.getValue(lines, "l2cachesize", ":");
											result.cache.l3 = util.getValue(lines, "l3cachesize", ":");
											if (result.cache.l2) result.cache.l2 = 1024 * parseInt(result.cache.l2, 10);
											if (result.cache.l3) result.cache.l3 = 1024 * parseInt(result.cache.l3, 10);
											result.vendor = util.getValue(lines, "manufacturer", ":");
											result.speedMax = Math.round(parseFloat(util.getValue(lines, "maxclockspeed", ":").replace(/,/g, ".")) / 10) / 100;
											if (0 === result.speed && (result.brand.indexOf("AMD") > -1 || result.brand.toLowerCase().indexOf("ryzen") > -1))
												result.speed = getAMDSpeed(result.brand);
											if (0 === result.speed) result.speed = result.speedMax;
											result.speedMin = result.speed;
											let description = util.getValue(lines, "description", ":").split(" ");
											for (let i = 0; i < description.length; i++) {
												if (description[i].toLowerCase().startsWith("family") && i + 1 < description.length && description[i + 1])
													result.family = description[i + 1];
												if (description[i].toLowerCase().startsWith("model") && i + 1 < description.length && description[i + 1])
													result.model = description[i + 1];
												if (description[i].toLowerCase().startsWith("stepping") && i + 1 < description.length && description[i + 1])
													result.stepping = description[i + 1];
											}
											const socketId = util.getValue(lines, "UpgradeMethod", ":");
											if (socketTypes[socketId]) result.socket = socketTypes[socketId];
											const socketByName = getSocketTypesByName(name);
											if (socketByName) result.socket = socketByName;
											const countProcessors = util.countLines(lines, "Caption");
											const countThreads = util.getValue(lines, "NumberOfLogicalProcessors", ":");
											const countCores = util.getValue(lines, "NumberOfCores", ":");
											if (countProcessors) result.processors = parseInt(countProcessors) || 1;
											if (countCores && countThreads) {
												result.cores = parseInt(countThreads) || util.cores();
												result.physicalCores = parseInt(countCores) || util.cores();
											}
											if (countProcessors > 1) {
												result.cores = result.cores * countProcessors;
												result.physicalCores = result.physicalCores * countProcessors;
											}
											const parts = data[1].split(/\n\s*\n/);
											parts.forEach(function (part) {
												lines = part.split("\r\n");
												const cacheType = util.getValue(lines, "CacheType");
												const level = util.getValue(lines, "Level");
												const installedSize = util.getValue(lines, "InstalledSize");
												if ("3" === level && "3" === cacheType) result.cache.l1i = parseInt(installedSize, 10);
												if ("3" === level && "4" === cacheType) result.cache.l1d = parseInt(installedSize, 10);
												if ("3" === level && "5" === cacheType && !result.cache.l1i && !result.cache.l1d) {
													result.cache.l1i = parseInt(installedSize, 10) / 2;
													result.cache.l1d = parseInt(installedSize, 10) / 2;
												}
											});
											const hyperv = data[2] ? data[2].toString().toLowerCase() : "";
											result.virtualization = -1 !== hyperv.indexOf("true");
											resolve(result);
										});
									} catch (e) {
										resolve(result);
									}
							});
						});
					});
				}
				function cpu(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							getCpu().then((result) => {
								if (callback) callback(result);
								resolve(result);
							});
						});
					});
				}
				exports.cpu = cpu;
				function getCpuCurrentSpeedSync() {
					let cpus = os.cpus();
					let minFreq = 999999999;
					let maxFreq = 0;
					let avgFreq = 0;
					let cores = [];
					if (cpus && cpus.length) {
						for (let i in cpus)
							if ({}.hasOwnProperty.call(cpus, i)) {
								let freq = cpus[i].speed > 100 ? (cpus[i].speed + 1) / 1e3 : cpus[i].speed / 10;
								avgFreq += freq;
								if (freq > maxFreq) maxFreq = freq;
								if (freq < minFreq) minFreq = freq;
								cores.push(parseFloat(freq.toFixed(2)));
							}
						avgFreq /= cpus.length;
						return {
							min: parseFloat(minFreq.toFixed(2)),
							max: parseFloat(maxFreq.toFixed(2)),
							avg: parseFloat(avgFreq.toFixed(2)),
							cores,
						};
					} else
						return {
							min: 0,
							max: 0,
							avg: 0,
							cores,
						};
				}
				function cpuCurrentSpeed(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = getCpuCurrentSpeedSync();
							if (0 === result.avg && 0 !== _cpu_speed) {
								const currCpuSpeed = parseFloat(_cpu_speed);
								result = {
									min: currCpuSpeed,
									max: currCpuSpeed,
									avg: currCpuSpeed,
									cores: [],
								};
							}
							if (callback) callback(result);
							resolve(result);
						});
					});
				}
				exports.cpuCurrentSpeed = cpuCurrentSpeed;
				function cpuTemperature(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								main: null,
								cores: [],
								max: null,
								socket: [],
								chipset: null,
							};
							if (_linux) {
								try {
									const cmd = 'cat /sys/class/thermal/thermal_zone*/type  2>/dev/null; echo "-----"; cat /sys/class/thermal/thermal_zone*/temp 2>/dev/null;';
									const parts = execSync(cmd).toString().split("-----\n");
									if (2 === parts.length) {
										const lines = parts[0].split("\n");
										const lines2 = parts[1].split("\n");
										for (let i = 0; i < lines.length; i++) {
											const line = lines[i].trim();
											if (line.startsWith("acpi") && lines2[i]) result.socket.push(Math.round(parseInt(lines2[i], 10) / 100) / 10);
											if (line.startsWith("pch") && lines2[i]) result.chipset = Math.round(parseInt(lines2[i], 10) / 100) / 10;
										}
									}
								} catch (e) {
									util.noop();
								}
								const cmd =
									'for mon in /sys/class/hwmon/hwmon*; do for label in "$mon"/temp*_label; do if [ -f $label ]; then value=$(echo $label | rev | cut -c 7- | rev)_input; if [ -f "$value" ]; then echo $(cat "$label")___$(cat "$value");  fi; fi; done; done;';
								try {
									exec(cmd, function (error, stdout) {
										stdout = stdout.toString();
										const tdiePos = stdout.toLowerCase().indexOf("tdie");
										if (-1 !== tdiePos) stdout = stdout.substring(tdiePos);
										let lines = stdout.split("\n");
										lines.forEach((line) => {
											const parts = line.split("___");
											const label = parts[0];
											const value = parts.length > 1 && parts[1] ? parts[1] : "0";
											if (value && (void 0 === label || (label && label.toLowerCase().startsWith("core"))))
												result.cores.push(Math.round(parseInt(value, 10) / 100) / 10);
											else if (value && label && null === result.main) result.main = Math.round(parseInt(value, 10) / 100) / 10;
										});
										if (result.cores.length > 0) {
											if (null === result.main) result.main = Math.round(result.cores.reduce((a, b) => a + b, 0) / result.cores.length);
											let maxtmp = Math.max.apply(Math, result.cores);
											result.max = maxtmp > result.main ? maxtmp : result.main;
										}
										if (null !== result.main) {
											if (null === result.max) result.max = result.main;
											if (callback) callback(result);
											resolve(result);
											return;
										}
										exec("sensors", function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												let tdieTemp = null;
												let newSectionStarts = true;
												let section = "";
												lines.forEach(function (line) {
													if ("" === line.trim()) newSectionStarts = true;
													else if (newSectionStarts) {
														if (line.trim().toLowerCase().startsWith("acpi")) section = "acpi";
														if (line.trim().toLowerCase().startsWith("pch")) section = "pch";
														if (line.trim().toLowerCase().startsWith("core")) section = "core";
														newSectionStarts = false;
													}
													let regex = /[+-]([^°]*)/g;
													let temps = line.match(regex);
													let firstPart = line.split(":")[0].toUpperCase();
													if ("acpi" === section) {
														if (-1 !== firstPart.indexOf("TEMP")) result.socket.push(parseFloat(temps));
													} else if ("pch" === section) if (-1 !== firstPart.indexOf("TEMP")) result.chipset = parseFloat(temps);
													if (-1 !== firstPart.indexOf("PHYSICAL") || -1 !== firstPart.indexOf("PACKAGE")) result.main = parseFloat(temps);
													if (-1 !== firstPart.indexOf("CORE ")) result.cores.push(parseFloat(temps));
													if (-1 !== firstPart.indexOf("TDIE") && null === tdieTemp) tdieTemp = parseFloat(temps);
												});
												if (result.cores.length > 0) {
													if (null === result.main) result.main = Math.round(result.cores.reduce((a, b) => a + b, 0) / result.cores.length);
													let maxtmp = Math.max.apply(Math, result.cores);
													result.max = maxtmp > result.main ? maxtmp : result.main;
												} else if (null === result.main && null !== tdieTemp) {
													result.main = tdieTemp;
													result.max = tdieTemp;
												}
												if (null !== result.main || null !== result.max) {
													if (callback) callback(result);
													resolve(result);
													return;
												}
											}
											fs.stat("/sys/class/thermal/thermal_zone0/temp", function (err) {
												if (null === err)
													fs.readFile("/sys/class/thermal/thermal_zone0/temp", function (error, stdout) {
														if (!error) {
															let lines = stdout.toString().split("\n");
															if (lines.length > 0) {
																result.main = parseFloat(lines[0]) / 1e3;
																result.max = result.main;
															}
														}
														if (callback) callback(result);
														resolve(result);
													});
												else
													exec("/opt/vc/bin/vcgencmd measure_temp", function (error, stdout) {
														if (!error) {
															let lines = stdout.toString().split("\n");
															if (lines.length > 0 && lines[0].indexOf("=")) {
																result.main = parseFloat(lines[0].split("=")[1]);
																result.max = result.main;
															}
														}
														if (callback) callback(result);
														resolve(result);
													});
											});
										});
									});
								} catch (er) {
									if (callback) callback(result);
									resolve(result);
								}
							}
							if (_freebsd || _openbsd || _netbsd)
								exec("sysctl dev.cpu | grep temp", function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										let sum = 0;
										lines.forEach(function (line) {
											const parts = line.split(":");
											if (parts.length > 1) {
												const temp = parseFloat(parts[1].replace(",", "."));
												if (temp > result.max) result.max = temp;
												sum += temp;
												result.cores.push(temp);
											}
										});
										if (result.cores.length) result.main = Math.round((sum / result.cores.length) * 100) / 100;
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_darwin) {
								let osxTemp = null;
								try {
									osxTemp = __webpack_require__(
										Object(
											(function webpackMissingModule() {
												var e = new Error("Cannot find module 'osx-temperature-sensor'");
												e.code = "MODULE_NOT_FOUND";
												throw e;
											})(),
										),
									);
								} catch (er) {
									osxTemp = null;
								}
								if (osxTemp) result = osxTemp.cpuTemperature();
								if (callback) callback(result);
								resolve(result);
							}
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows)
								try {
									util.powerShell('Get-WmiObject MSAcpi_ThermalZoneTemperature -Namespace "root/wmi" | Select CurrentTemperature').then((stdout, error) => {
										if (!error) {
											let sum = 0;
											let lines = stdout
												.split("\r\n")
												.filter((line) => "" !== line.trim())
												.filter((line, idx) => idx > 0);
											lines.forEach(function (line) {
												let value = (parseInt(line, 10) - 2732) / 10;
												if (!isNaN(value)) {
													sum += value;
													if (value > result.max) result.max = value;
													result.cores.push(value);
												}
											});
											if (result.cores.length) result.main = sum / result.cores.length;
										}
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.cpuTemperature = cpuTemperature;
				function cpuFlags(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = "";
							if (_windows)
								try {
									exec('reg query "HKEY_LOCAL_MACHINE\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0" /v FeatureSet', util.execOptsWin, function (error, stdout) {
										if (!error) {
											let flag_hex = stdout.split("0x").pop().trim();
											let flag_bin_unpadded = parseInt(flag_hex, 16).toString(2);
											let flag_bin = "0".repeat(32 - flag_bin_unpadded.length) + flag_bin_unpadded;
											let all_flags = [
												"fpu",
												"vme",
												"de",
												"pse",
												"tsc",
												"msr",
												"pae",
												"mce",
												"cx8",
												"apic",
												"",
												"sep",
												"mtrr",
												"pge",
												"mca",
												"cmov",
												"pat",
												"pse-36",
												"psn",
												"clfsh",
												"",
												"ds",
												"acpi",
												"mmx",
												"fxsr",
												"sse",
												"sse2",
												"ss",
												"htt",
												"tm",
												"ia64",
												"pbe",
											];
											for (let f = 0; f < all_flags.length; f++) if ("1" === flag_bin[f] && "" !== all_flags[f]) result += " " + all_flags[f];
											result = result.trim().toLowerCase();
										}
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							if (_linux)
								try {
									exec("export LC_ALL=C; lscpu; unset LC_ALL", function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											lines.forEach(function (line) {
												if (-1 !== line.split(":")[0].toUpperCase().indexOf("FLAGS")) result = line.split(":")[1].trim().toLowerCase();
											});
										}
										if (!result)
											fs.readFile("/proc/cpuinfo", function (error, stdout) {
												if (!error) {
													let lines = stdout.toString().split("\n");
													result = util.getValue(lines, "features", ":", true).toLowerCase();
												}
												if (callback) callback(result);
												resolve(result);
											});
										else {
											if (callback) callback(result);
											resolve(result);
										}
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							if (_freebsd || _openbsd || _netbsd)
								exec("export LC_ALL=C; dmidecode -t 4 2>/dev/null; unset LC_ALL", function (error, stdout) {
									let flags = [];
									if (!error) {
										let parts = stdout.toString().split("\tFlags:");
										const lines = parts.length > 1 ? parts[1].split("\tVersion:")[0].split("\n") : [];
										lines.forEach(function (line) {
											let flag = (line.indexOf("(") ? line.split("(")[0].toLowerCase() : "").trim().replace(/\t/g, "");
											if (flag) flags.push(flag);
										});
									}
									result = flags.join(" ").trim().toLowerCase();
									if (callback) callback(result);
									resolve(result);
								});
							if (_darwin)
								exec("sysctl machdep.cpu.features", function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										if (lines.length > 0 && -1 !== lines[0].indexOf("machdep.cpu.features:")) result = lines[0].split(":")[1].trim().toLowerCase();
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.cpuFlags = cpuFlags;
				function cpuCache(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								l1d: null,
								l1i: null,
								l2: null,
								l3: null,
							};
							if (_linux)
								try {
									exec("export LC_ALL=C; lscpu; unset LC_ALL", function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											lines.forEach(function (line) {
												let parts = line.split(":");
												if (-1 !== parts[0].toUpperCase().indexOf("L1D CACHE"))
													result.l1d = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("M") ? 1024 * 1024 : -1 !== parts[1].indexOf("K") ? 1024 : 1);
												if (-1 !== parts[0].toUpperCase().indexOf("L1I CACHE"))
													result.l1i = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("M") ? 1024 * 1024 : -1 !== parts[1].indexOf("K") ? 1024 : 1);
												if (-1 !== parts[0].toUpperCase().indexOf("L2 CACHE"))
													result.l2 = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("M") ? 1024 * 1024 : -1 !== parts[1].indexOf("K") ? 1024 : 1);
												if (-1 !== parts[0].toUpperCase().indexOf("L3 CACHE"))
													result.l3 = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("M") ? 1024 * 1024 : -1 !== parts[1].indexOf("K") ? 1024 : 1);
											});
										}
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							if (_freebsd || _openbsd || _netbsd)
								exec("export LC_ALL=C; dmidecode -t 7 2>/dev/null; unset LC_ALL", function (error, stdout) {
									let cache = [];
									if (!error) {
										const data = stdout.toString();
										cache = data.split("Cache Information");
										cache.shift();
									}
									for (let i = 0; i < cache.length; i++) {
										const lines = cache[i].split("\n");
										let cacheType = util.getValue(lines, "Socket Designation").toLowerCase().replace(" ", "-").split("-");
										cacheType = cacheType.length ? cacheType[0] : "";
										const sizeParts = util.getValue(lines, "Installed Size").split(" ");
										let size = parseInt(sizeParts[0], 10);
										const unit = sizeParts.length > 1 ? sizeParts[1] : "kb";
										size *= "kb" === unit ? 1024 : "mb" === unit ? 1024 * 1024 : "gb" === unit ? 1024 * 1024 * 1024 : 1;
										if (cacheType)
											if ("l1" === cacheType) {
												result.cache[cacheType + "d"] = size / 2;
												result.cache[cacheType + "i"] = size / 2;
											} else result.cache[cacheType] = size;
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_darwin)
								exec("sysctl hw.l1icachesize hw.l1dcachesize hw.l2cachesize hw.l3cachesize", function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										lines.forEach(function (line) {
											let parts = line.split(":");
											if (-1 !== parts[0].toLowerCase().indexOf("hw.l1icachesize"))
												result.l1d = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("K") ? 1024 : 1);
											if (-1 !== parts[0].toLowerCase().indexOf("hw.l1dcachesize"))
												result.l1i = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("K") ? 1024 : 1);
											if (-1 !== parts[0].toLowerCase().indexOf("hw.l2cachesize"))
												result.l2 = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("K") ? 1024 : 1);
											if (-1 !== parts[0].toLowerCase().indexOf("hw.l3cachesize"))
												result.l3 = parseInt(parts[1].trim()) * (-1 !== parts[1].indexOf("K") ? 1024 : 1);
										});
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows)
								try {
									util.powerShell("Get-WmiObject Win32_processor | select L2CacheSize, L3CacheSize | fl").then((stdout, error) => {
										if (!error) {
											let lines = stdout.split("\r\n");
											result.l1d = 0;
											result.l1i = 0;
											result.l2 = util.getValue(lines, "l2cachesize", ":");
											result.l3 = util.getValue(lines, "l3cachesize", ":");
											if (result.l2) result.l2 = 1024 * parseInt(result.l2, 10);
											if (result.l3) result.l3 = 1024 * parseInt(result.l3, 10);
										}
										util.powerShell("Get-WmiObject Win32_CacheMemory | select CacheType,InstalledSize,Level | fl").then((stdout, error) => {
											if (!error) {
												const parts = stdout.split(/\n\s*\n/);
												parts.forEach(function (part) {
													const lines = part.split("\r\n");
													const cacheType = util.getValue(lines, "CacheType");
													const level = util.getValue(lines, "Level");
													const installedSize = util.getValue(lines, "InstalledSize");
													if ("3" === level && "3" === cacheType) result.l1i = parseInt(installedSize, 10);
													if ("3" === level && "4" === cacheType) result.l1d = parseInt(installedSize, 10);
													if ("3" === level && "5" === cacheType && !result.l1i && !result.l1d) {
														result.l1i = parseInt(installedSize, 10) / 2;
														result.l1d = parseInt(installedSize, 10) / 2;
													}
												});
											}
											if (callback) callback(result);
											resolve(result);
										});
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.cpuCache = cpuCache;
				function getLoad() {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let loads = os.loadavg().map(function (x) {
								return x / util.cores();
							});
							let avgLoad = parseFloat(Math.max.apply(Math, loads).toFixed(2));
							let result = {};
							let now = Date.now() - _current_cpu.ms;
							if (now >= 200) {
								_current_cpu.ms = Date.now();
								const cpus = os.cpus();
								let totalUser = 0;
								let totalSystem = 0;
								let totalNice = 0;
								let totalIrq = 0;
								let totalIdle = 0;
								let cores = [];
								_corecount = cpus && cpus.length ? cpus.length : 0;
								for (let i = 0; i < _corecount; i++) {
									const cpu = cpus[i].times;
									totalUser += cpu.user;
									totalSystem += cpu.sys;
									totalNice += cpu.nice;
									totalIdle += cpu.idle;
									totalIrq += cpu.irq;
									let tmpTick = _cpus && _cpus[i] && _cpus[i].totalTick ? _cpus[i].totalTick : 0;
									let tmpLoad = _cpus && _cpus[i] && _cpus[i].totalLoad ? _cpus[i].totalLoad : 0;
									let tmpUser = _cpus && _cpus[i] && _cpus[i].user ? _cpus[i].user : 0;
									let tmpSystem = _cpus && _cpus[i] && _cpus[i].sys ? _cpus[i].sys : 0;
									let tmpNice = _cpus && _cpus[i] && _cpus[i].nice ? _cpus[i].nice : 0;
									let tmpIdle = _cpus && _cpus[i] && _cpus[i].idle ? _cpus[i].idle : 0;
									let tmpIrq = _cpus && _cpus[i] && _cpus[i].irq ? _cpus[i].irq : 0;
									_cpus[i] = cpu;
									_cpus[i].totalTick = _cpus[i].user + _cpus[i].sys + _cpus[i].nice + _cpus[i].irq + _cpus[i].idle;
									_cpus[i].totalLoad = _cpus[i].user + _cpus[i].sys + _cpus[i].nice + _cpus[i].irq;
									_cpus[i].currentTick = _cpus[i].totalTick - tmpTick;
									_cpus[i].load = _cpus[i].totalLoad - tmpLoad;
									_cpus[i].loadUser = _cpus[i].user - tmpUser;
									_cpus[i].loadSystem = _cpus[i].sys - tmpSystem;
									_cpus[i].loadNice = _cpus[i].nice - tmpNice;
									_cpus[i].loadIdle = _cpus[i].idle - tmpIdle;
									_cpus[i].loadIrq = _cpus[i].irq - tmpIrq;
									cores[i] = {};
									cores[i].load = (_cpus[i].load / _cpus[i].currentTick) * 100;
									cores[i].loadUser = (_cpus[i].loadUser / _cpus[i].currentTick) * 100;
									cores[i].loadSystem = (_cpus[i].loadSystem / _cpus[i].currentTick) * 100;
									cores[i].loadNice = (_cpus[i].loadNice / _cpus[i].currentTick) * 100;
									cores[i].loadIdle = (_cpus[i].loadIdle / _cpus[i].currentTick) * 100;
									cores[i].loadIrq = (_cpus[i].loadIrq / _cpus[i].currentTick) * 100;
									cores[i].rawLoad = _cpus[i].load;
									cores[i].rawLoadUser = _cpus[i].loadUser;
									cores[i].rawLoadSystem = _cpus[i].loadSystem;
									cores[i].rawLoadNice = _cpus[i].loadNice;
									cores[i].rawLoadIdle = _cpus[i].loadIdle;
									cores[i].rawLoadIrq = _cpus[i].loadIrq;
								}
								let totalTick = totalUser + totalSystem + totalNice + totalIrq + totalIdle;
								let totalLoad = totalUser + totalSystem + totalNice + totalIrq;
								let currentTick = totalTick - _current_cpu.tick;
								result = {
									avgLoad,
									currentLoad: ((totalLoad - _current_cpu.load) / currentTick) * 100,
									currentLoadUser: ((totalUser - _current_cpu.user) / currentTick) * 100,
									currentLoadSystem: ((totalSystem - _current_cpu.system) / currentTick) * 100,
									currentLoadNice: ((totalNice - _current_cpu.nice) / currentTick) * 100,
									currentLoadIdle: ((totalIdle - _current_cpu.idle) / currentTick) * 100,
									currentLoadIrq: ((totalIrq - _current_cpu.irq) / currentTick) * 100,
									rawCurrentLoad: totalLoad - _current_cpu.load,
									rawCurrentLoadUser: totalUser - _current_cpu.user,
									rawCurrentLoadSystem: totalSystem - _current_cpu.system,
									rawCurrentLoadNice: totalNice - _current_cpu.nice,
									rawCurrentLoadIdle: totalIdle - _current_cpu.idle,
									rawCurrentLoadIrq: totalIrq - _current_cpu.irq,
									cpus: cores,
								};
								_current_cpu = {
									user: totalUser,
									nice: totalNice,
									system: totalSystem,
									idle: totalIdle,
									irq: totalIrq,
									tick: totalTick,
									load: totalLoad,
									ms: _current_cpu.ms,
									currentLoad: result.currentLoad,
									currentLoadUser: result.currentLoadUser,
									currentLoadSystem: result.currentLoadSystem,
									currentLoadNice: result.currentLoadNice,
									currentLoadIdle: result.currentLoadIdle,
									currentLoadIrq: result.currentLoadIrq,
									rawCurrentLoad: result.rawCurrentLoad,
									rawCurrentLoadUser: result.rawCurrentLoadUser,
									rawCurrentLoadSystem: result.rawCurrentLoadSystem,
									rawCurrentLoadNice: result.rawCurrentLoadNice,
									rawCurrentLoadIdle: result.rawCurrentLoadIdle,
									rawCurrentLoadIrq: result.rawCurrentLoadIrq,
								};
							} else {
								let cores = [];
								for (let i = 0; i < _corecount; i++) {
									cores[i] = {};
									cores[i].load = (_cpus[i].load / _cpus[i].currentTick) * 100;
									cores[i].loadUser = (_cpus[i].loadUser / _cpus[i].currentTick) * 100;
									cores[i].loadSystem = (_cpus[i].loadSystem / _cpus[i].currentTick) * 100;
									cores[i].loadNice = (_cpus[i].loadNice / _cpus[i].currentTick) * 100;
									cores[i].loadIdle = (_cpus[i].loadIdle / _cpus[i].currentTick) * 100;
									cores[i].loadIrq = (_cpus[i].loadIrq / _cpus[i].currentTick) * 100;
									cores[i].rawLoad = _cpus[i].load;
									cores[i].rawLoadUser = _cpus[i].loadUser;
									cores[i].rawLoadSystem = _cpus[i].loadSystem;
									cores[i].rawLoadNice = _cpus[i].loadNice;
									cores[i].rawLoadIdle = _cpus[i].loadIdle;
									cores[i].rawLoadIrq = _cpus[i].loadIrq;
								}
								result = {
									avgLoad,
									currentLoad: _current_cpu.currentLoad,
									currentLoadUser: _current_cpu.currentLoadUser,
									currentLoadSystem: _current_cpu.currentLoadSystem,
									currentLoadNice: _current_cpu.currentLoadNice,
									currentLoadIdle: _current_cpu.currentLoadIdle,
									currentLoadIrq: _current_cpu.currentLoadIrq,
									rawCurrentLoad: _current_cpu.rawCurrentLoad,
									rawCurrentLoadUser: _current_cpu.rawCurrentLoadUser,
									rawCurrentLoadSystem: _current_cpu.rawCurrentLoadSystem,
									rawCurrentLoadNice: _current_cpu.rawCurrentLoadNice,
									rawCurrentLoadIdle: _current_cpu.rawCurrentLoadIdle,
									rawCurrentLoadIrq: _current_cpu.rawCurrentLoadIrq,
									cpus: cores,
								};
							}
							resolve(result);
						});
					});
				}
				function currentLoad(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							getLoad().then((result) => {
								if (callback) callback(result);
								resolve(result);
							});
						});
					});
				}
				exports.currentLoad = currentLoad;
				function getFullLoad() {
					return new Promise((resolve) => {
						process.nextTick(() => {
							const cpus = os.cpus();
							let totalUser = 0;
							let totalSystem = 0;
							let totalNice = 0;
							let totalIrq = 0;
							let totalIdle = 0;
							let result = 0;
							if (cpus && cpus.length) {
								for (let i = 0, len = cpus.length; i < len; i++) {
									const cpu = cpus[i].times;
									totalUser += cpu.user;
									totalSystem += cpu.sys;
									totalNice += cpu.nice;
									totalIrq += cpu.irq;
									totalIdle += cpu.idle;
								}
								let totalTicks = totalIdle + totalIrq + totalNice + totalSystem + totalUser;
								result = ((totalTicks - totalIdle) / totalTicks) * 100;
							} else result = 0;
							resolve(result);
						});
					});
				}
				function fullLoad(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							getFullLoad().then((result) => {
								if (callback) callback(result);
								resolve(result);
							});
						});
					});
				}
				exports.fullLoad = fullLoad;
			},
			866: (__unused_webpack_module, exports, __webpack_require__) => {
				const util = __webpack_require__(858);
				const DockerSocket = __webpack_require__(392);
				let _platform = process.platform;
				const _windows = "win32" === _platform;
				let _docker_container_stats = {};
				let _docker_socket;
				let _docker_last_read = 0;
				function dockerInfo(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (!_docker_socket) _docker_socket = new DockerSocket();
							const result = {};
							_docker_socket.getInfo((data) => {
								result.id = data.ID;
								result.containers = data.Containers;
								result.containersRunning = data.ContainersRunning;
								result.containersPaused = data.ContainersPaused;
								result.containersStopped = data.ContainersStopped;
								result.images = data.Images;
								result.driver = data.Driver;
								result.memoryLimit = data.MemoryLimit;
								result.swapLimit = data.SwapLimit;
								result.kernelMemory = data.KernelMemory;
								result.cpuCfsPeriod = data.CpuCfsPeriod;
								result.cpuCfsQuota = data.CpuCfsQuota;
								result.cpuShares = data.CPUShares;
								result.cpuSet = data.CPUSet;
								result.ipv4Forwarding = data.IPv4Forwarding;
								result.bridgeNfIptables = data.BridgeNfIptables;
								result.bridgeNfIp6tables = data.BridgeNfIp6tables;
								result.debug = data.Debug;
								result.nfd = data.NFd;
								result.oomKillDisable = data.OomKillDisable;
								result.ngoroutines = data.NGoroutines;
								result.systemTime = data.SystemTime;
								result.loggingDriver = data.LoggingDriver;
								result.cgroupDriver = data.CgroupDriver;
								result.nEventsListener = data.NEventsListener;
								result.kernelVersion = data.KernelVersion;
								result.operatingSystem = data.OperatingSystem;
								result.osType = data.OSType;
								result.architecture = data.Architecture;
								result.ncpu = data.NCPU;
								result.memTotal = data.MemTotal;
								result.dockerRootDir = data.DockerRootDir;
								result.httpProxy = data.HttpProxy;
								result.httpsProxy = data.HttpsProxy;
								result.noProxy = data.NoProxy;
								result.name = data.Name;
								result.labels = data.Labels;
								result.experimentalBuild = data.ExperimentalBuild;
								result.serverVersion = data.ServerVersion;
								result.clusterStore = data.ClusterStore;
								result.clusterAdvertise = data.ClusterAdvertise;
								result.defaultRuntime = data.DefaultRuntime;
								result.liveRestoreEnabled = data.LiveRestoreEnabled;
								result.isolation = data.Isolation;
								result.initBinary = data.InitBinary;
								result.productLicense = data.ProductLicense;
								if (callback) callback(result);
								resolve(result);
							});
						});
					});
				}
				exports.dockerInfo = dockerInfo;
				function dockerImages(all, callback) {
					if (util.isFunction(all) && !callback) {
						callback = all;
						all = false;
					}
					if ("string" === typeof all && "true" === all) all = true;
					if ("boolean" !== typeof all && void 0 !== all) all = false;
					all = all || false;
					let result = [];
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (!_docker_socket) _docker_socket = new DockerSocket();
							const workload = [];
							_docker_socket.listImages(all, (data) => {
								let dockerImages = {};
								try {
									dockerImages = data;
									if (dockerImages && "[object Array]" === Object.prototype.toString.call(dockerImages) && dockerImages.length > 0) {
										dockerImages.forEach(function (element) {
											if (element.Names && "[object Array]" === Object.prototype.toString.call(element.Names) && element.Names.length > 0)
												element.Name = element.Names[0].replace(/^\/|\/$/g, "");
											workload.push(dockerImagesInspect(element.Id.trim(), element));
										});
										if (workload.length)
											Promise.all(workload).then((data) => {
												if (callback) callback(data);
												resolve(data);
											});
										else {
											if (callback) callback(result);
											resolve(result);
										}
									} else {
										if (callback) callback(result);
										resolve(result);
									}
								} catch (err) {
									if (callback) callback(result);
									resolve(result);
								}
							});
						});
					});
				}
				function dockerImagesInspect(imageID, payload) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							imageID = imageID || "";
							if ("string" !== typeof imageID) return resolve();
							const imageIDSanitized = (util.isPrototypePolluted() ? "" : util.sanitizeShellString(imageID, true)).trim();
							if (imageIDSanitized) {
								if (!_docker_socket) _docker_socket = new DockerSocket();
								_docker_socket.inspectImage(imageIDSanitized.trim(), (data) => {
									try {
										resolve({
											id: payload.Id,
											container: data.Container,
											comment: data.Comment,
											os: data.Os,
											architecture: data.Architecture,
											parent: data.Parent,
											dockerVersion: data.DockerVersion,
											size: data.Size,
											sharedSize: payload.SharedSize,
											virtualSize: data.VirtualSize,
											author: data.Author,
											created: data.Created ? Math.round(new Date(data.Created).getTime() / 1e3) : 0,
											containerConfig: data.ContainerConfig ? data.ContainerConfig : {},
											graphDriver: data.GraphDriver ? data.GraphDriver : {},
											repoDigests: data.RepoDigests ? data.RepoDigests : {},
											repoTags: data.RepoTags ? data.RepoTags : {},
											config: data.Config ? data.Config : {},
											rootFS: data.RootFS ? data.RootFS : {},
										});
									} catch (err) {
										resolve();
									}
								});
							} else resolve();
						});
					});
				}
				exports.dockerImages = dockerImages;
				function dockerContainers(all, callback) {
					function inContainers(containers, id) {
						let filtered = containers.filter((obj) => obj.Id && obj.Id === id);
						return filtered.length > 0;
					}
					if (util.isFunction(all) && !callback) {
						callback = all;
						all = false;
					}
					if ("string" === typeof all && "true" === all) all = true;
					if ("boolean" !== typeof all && void 0 !== all) all = false;
					all = all || false;
					let result = [];
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (!_docker_socket) _docker_socket = new DockerSocket();
							const workload = [];
							_docker_socket.listContainers(all, (data) => {
								let docker_containers = {};
								try {
									docker_containers = data;
									if (docker_containers && "[object Array]" === Object.prototype.toString.call(docker_containers) && docker_containers.length > 0) {
										for (let key in _docker_container_stats)
											if ({}.hasOwnProperty.call(_docker_container_stats, key)) if (!inContainers(docker_containers, key)) delete _docker_container_stats[key];
										docker_containers.forEach(function (element) {
											if (element.Names && "[object Array]" === Object.prototype.toString.call(element.Names) && element.Names.length > 0)
												element.Name = element.Names[0].replace(/^\/|\/$/g, "");
											workload.push(dockerContainerInspect(element.Id.trim(), element));
										});
										if (workload.length)
											Promise.all(workload).then((data) => {
												if (callback) callback(data);
												resolve(data);
											});
										else {
											if (callback) callback(result);
											resolve(result);
										}
									} else {
										if (callback) callback(result);
										resolve(result);
									}
								} catch (err) {
									for (let key in _docker_container_stats)
										if ({}.hasOwnProperty.call(_docker_container_stats, key)) if (!inContainers(docker_containers, key)) delete _docker_container_stats[key];
									if (callback) callback(result);
									resolve(result);
								}
							});
						});
					});
				}
				function dockerContainerInspect(containerID, payload) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							containerID = containerID || "";
							if ("string" !== typeof containerID) return resolve();
							const containerIdSanitized = (util.isPrototypePolluted() ? "" : util.sanitizeShellString(containerID, true)).trim();
							if (containerIdSanitized) {
								if (!_docker_socket) _docker_socket = new DockerSocket();
								_docker_socket.getInspect(containerIdSanitized.trim(), (data) => {
									try {
										resolve({
											id: payload.Id,
											name: payload.Name,
											image: payload.Image,
											imageID: payload.ImageID,
											command: payload.Command,
											created: payload.Created,
											started: data.State && data.State.StartedAt ? Math.round(new Date(data.State.StartedAt).getTime() / 1e3) : 0,
											finished:
												data.State && data.State.FinishedAt && !data.State.FinishedAt.startsWith("0001-01-01")
													? Math.round(new Date(data.State.FinishedAt).getTime() / 1e3)
													: 0,
											createdAt: data.Created ? data.Created : "",
											startedAt: data.State && data.State.StartedAt ? data.State.StartedAt : "",
											finishedAt: data.State && data.State.FinishedAt && !data.State.FinishedAt.startsWith("0001-01-01") ? data.State.FinishedAt : "",
											state: payload.State,
											restartCount: data.RestartCount || 0,
											platform: data.Platform || "",
											driver: data.Driver || "",
											ports: payload.Ports,
											mounts: payload.Mounts,
										});
									} catch (err) {
										resolve();
									}
								});
							} else resolve();
						});
					});
				}
				exports.dockerContainers = dockerContainers;
				function docker_calcCPUPercent(cpu_stats, precpu_stats) {
					if (!_windows) {
						let cpuPercent = 0;
						let cpuDelta = cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage;
						let systemDelta = cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage;
						if (systemDelta > 0 && cpuDelta > 0) cpuPercent = (cpuDelta / systemDelta) * cpu_stats.cpu_usage.percpu_usage.length * 100;
						return cpuPercent;
					} else {
						let nanoSecNow = util.nanoSeconds();
						let cpuPercent = 0;
						if (_docker_last_read > 0) {
							let possIntervals = nanoSecNow - _docker_last_read;
							let intervalsUsed = cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage;
							if (possIntervals > 0) cpuPercent = (100 * intervalsUsed) / possIntervals;
						}
						_docker_last_read = nanoSecNow;
						return cpuPercent;
					}
				}
				function docker_calcNetworkIO(networks) {
					let rx;
					let wx;
					for (let key in networks) {
						if (!{}.hasOwnProperty.call(networks, key)) continue;
						let obj = networks[key];
						rx = +obj.rx_bytes;
						wx = +obj.tx_bytes;
					}
					return {
						rx,
						wx,
					};
				}
				function docker_calcBlockIO(blkio_stats) {
					let result = {
						r: 0,
						w: 0,
					};
					if (
						blkio_stats &&
						blkio_stats.io_service_bytes_recursive &&
						"[object Array]" === Object.prototype.toString.call(blkio_stats.io_service_bytes_recursive) &&
						blkio_stats.io_service_bytes_recursive.length > 0
					)
						blkio_stats.io_service_bytes_recursive.forEach(function (element) {
							if (element.op && "read" === element.op.toLowerCase() && element.value) result.r += element.value;
							if (element.op && "write" === element.op.toLowerCase() && element.value) result.w += element.value;
						});
					return result;
				}
				function dockerContainerStats(containerIDs, callback) {
					let containerArray = [];
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (util.isFunction(containerIDs) && !callback) {
								callback = containerIDs;
								containerArray = ["*"];
							} else {
								containerIDs = containerIDs || "*";
								if ("string" !== typeof containerIDs) {
									if (callback) callback([]);
									return resolve([]);
								}
								let containerIDsSanitized = "";
								containerIDsSanitized.__proto__.toLowerCase = util.stringToLower;
								containerIDsSanitized.__proto__.replace = util.stringReplace;
								containerIDsSanitized.__proto__.trim = util.stringTrim;
								containerIDsSanitized = containerIDs;
								containerIDsSanitized = containerIDsSanitized.trim();
								if ("*" !== containerIDsSanitized) {
									containerIDsSanitized = "";
									const s = (util.isPrototypePolluted() ? "" : util.sanitizeShellString(containerIDs, true)).trim();
									for (let i = 0; i <= util.mathMin(s.length, 2e3); i++)
										if (!(void 0 === s[i])) {
											s[i].__proto__.toLowerCase = util.stringToLower;
											const sl = s[i].toLowerCase();
											if (sl && sl[0] && !sl[1]) containerIDsSanitized += sl[0];
										}
								}
								containerIDsSanitized = containerIDsSanitized.trim().toLowerCase().replace(/,+/g, "|");
								containerArray = containerIDsSanitized.split("|");
							}
							const result = [];
							const workload = [];
							if (containerArray.length && "*" === containerArray[0].trim()) {
								containerArray = [];
								dockerContainers().then((allContainers) => {
									for (let container of allContainers) containerArray.push(container.id);
									if (containerArray.length)
										dockerContainerStats(containerArray.join(",")).then((result) => {
											if (callback) callback(result);
											resolve(result);
										});
									else {
										if (callback) callback(result);
										resolve(result);
									}
								});
							} else {
								for (let containerID of containerArray) workload.push(dockerContainerStatsSingle(containerID.trim()));
								if (workload.length)
									Promise.all(workload).then((data) => {
										if (callback) callback(data);
										resolve(data);
									});
								else {
									if (callback) callback(result);
									resolve(result);
								}
							}
						});
					});
				}
				function dockerContainerStatsSingle(containerID) {
					containerID = containerID || "";
					let result = {
						id: containerID,
						memUsage: 0,
						memLimit: 0,
						memPercent: 0,
						cpuPercent: 0,
						pids: 0,
						netIO: {
							rx: 0,
							wx: 0,
						},
						blockIO: {
							r: 0,
							w: 0,
						},
						restartCount: 0,
						cpuStats: {},
						precpuStats: {},
						memoryStats: {},
						networks: {},
					};
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (containerID) {
								if (!_docker_socket) _docker_socket = new DockerSocket();
								_docker_socket.getInspect(containerID, (dataInspect) => {
									try {
										_docker_socket.getStats(containerID, (data) => {
											try {
												let stats = data;
												if (!stats.message) {
													result.memUsage = stats.memory_stats && stats.memory_stats.usage ? stats.memory_stats.usage : 0;
													result.memLimit = stats.memory_stats && stats.memory_stats.limit ? stats.memory_stats.limit : 0;
													result.memPercent =
														stats.memory_stats && stats.memory_stats.usage && stats.memory_stats.limit
															? (stats.memory_stats.usage / stats.memory_stats.limit) * 100
															: 0;
													result.cpuPercent = stats.cpu_stats && stats.precpu_stats ? docker_calcCPUPercent(stats.cpu_stats, stats.precpu_stats) : 0;
													result.pids = stats.pids_stats && stats.pids_stats.current ? stats.pids_stats.current : 0;
													result.restartCount = dataInspect.RestartCount ? dataInspect.RestartCount : 0;
													if (stats.networks) result.netIO = docker_calcNetworkIO(stats.networks);
													if (stats.blkio_stats) result.blockIO = docker_calcBlockIO(stats.blkio_stats);
													result.cpuStats = stats.cpu_stats ? stats.cpu_stats : {};
													result.precpuStats = stats.precpu_stats ? stats.precpu_stats : {};
													result.memoryStats = stats.memory_stats ? stats.memory_stats : {};
													result.networks = stats.networks ? stats.networks : {};
												}
											} catch (err) {
												util.noop();
											}
											resolve(result);
										});
									} catch (err) {
										util.noop();
									}
								});
							} else resolve(result);
						});
					});
				}
				exports.dockerContainerStats = dockerContainerStats;
				function dockerContainerProcesses(containerID, callback) {
					let result = [];
					return new Promise((resolve) => {
						process.nextTick(() => {
							containerID = containerID || "";
							if ("string" !== typeof containerID) return resolve(result);
							const containerIdSanitized = (util.isPrototypePolluted() ? "" : util.sanitizeShellString(containerID, true)).trim();
							if (containerIdSanitized) {
								if (!_docker_socket) _docker_socket = new DockerSocket();
								_docker_socket.getProcesses(containerIdSanitized, (data) => {
									try {
										if (data && data.Titles && data.Processes) {
											let titles = data.Titles.map(function (value) {
												return value.toUpperCase();
											});
											let pos_pid = titles.indexOf("PID");
											let pos_ppid = titles.indexOf("PPID");
											let pos_pgid = titles.indexOf("PGID");
											let pos_vsz = titles.indexOf("VSZ");
											let pos_time = titles.indexOf("TIME");
											let pos_elapsed = titles.indexOf("ELAPSED");
											let pos_ni = titles.indexOf("NI");
											let pos_ruser = titles.indexOf("RUSER");
											let pos_user = titles.indexOf("USER");
											let pos_rgroup = titles.indexOf("RGROUP");
											let pos_group = titles.indexOf("GROUP");
											let pos_stat = titles.indexOf("STAT");
											let pos_rss = titles.indexOf("RSS");
											let pos_command = titles.indexOf("COMMAND");
											data.Processes.forEach((process) => {
												result.push({
													pidHost: pos_pid >= 0 ? process[pos_pid] : "",
													ppid: pos_ppid >= 0 ? process[pos_ppid] : "",
													pgid: pos_pgid >= 0 ? process[pos_pgid] : "",
													user: pos_user >= 0 ? process[pos_user] : "",
													ruser: pos_ruser >= 0 ? process[pos_ruser] : "",
													group: pos_group >= 0 ? process[pos_group] : "",
													rgroup: pos_rgroup >= 0 ? process[pos_rgroup] : "",
													stat: pos_stat >= 0 ? process[pos_stat] : "",
													time: pos_time >= 0 ? process[pos_time] : "",
													elapsed: pos_elapsed >= 0 ? process[pos_elapsed] : "",
													nice: pos_ni >= 0 ? process[pos_ni] : "",
													rss: pos_rss >= 0 ? process[pos_rss] : "",
													vsz: pos_vsz >= 0 ? process[pos_vsz] : "",
													command: pos_command >= 0 ? process[pos_command] : "",
												});
											});
										}
									} catch (err) {
										util.noop();
									}
									if (callback) callback(result);
									resolve(result);
								});
							} else {
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.dockerContainerProcesses = dockerContainerProcesses;
				function dockerVolumes(callback) {
					let result = [];
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (!_docker_socket) _docker_socket = new DockerSocket();
							_docker_socket.listVolumes((data) => {
								let dockerVolumes = {};
								try {
									dockerVolumes = data;
									if (
										dockerVolumes &&
										dockerVolumes.Volumes &&
										"[object Array]" === Object.prototype.toString.call(dockerVolumes.Volumes) &&
										dockerVolumes.Volumes.length > 0
									) {
										dockerVolumes.Volumes.forEach(function (element) {
											result.push({
												name: element.Name,
												driver: element.Driver,
												labels: element.Labels,
												mountpoint: element.Mountpoint,
												options: element.Options,
												scope: element.Scope,
												created: element.CreatedAt ? Math.round(new Date(element.CreatedAt).getTime() / 1e3) : 0,
											});
										});
										if (callback) callback(result);
										resolve(result);
									} else {
										if (callback) callback(result);
										resolve(result);
									}
								} catch (err) {
									if (callback) callback(result);
									resolve(result);
								}
							});
						});
					});
				}
				exports.dockerVolumes = dockerVolumes;
				function dockerAll(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							dockerContainers(true).then((result) => {
								if (result && "[object Array]" === Object.prototype.toString.call(result) && result.length > 0) {
									let l = result.length;
									result.forEach(function (element) {
										dockerContainerStats(element.id).then((res) => {
											element.memUsage = res[0].memUsage;
											element.memLimit = res[0].memLimit;
											element.memPercent = res[0].memPercent;
											element.cpuPercent = res[0].cpuPercent;
											element.pids = res[0].pids;
											element.netIO = res[0].netIO;
											element.blockIO = res[0].blockIO;
											element.cpuStats = res[0].cpuStats;
											element.precpuStats = res[0].precpuStats;
											element.memoryStats = res[0].memoryStats;
											element.networks = res[0].networks;
											dockerContainerProcesses(element.id).then((processes) => {
												element.processes = processes;
												l -= 1;
												if (0 === l) {
													if (callback) callback(result);
													resolve(result);
												}
											});
										});
									});
								} else {
									if (callback) callback(result);
									resolve(result);
								}
							});
						});
					});
				}
				exports.dockerAll = dockerAll;
			},
			392: (module, __unused_webpack_exports, __webpack_require__) => {
				const net = __webpack_require__(808);
				const isWin = "Windows_NT" === __webpack_require__(37).type();
				const socketPath = isWin ? "//./pipe/docker_engine" : "/var/run/docker.sock";
				class DockerSocket {
					getInfo(callback) {
						try {
							let socket = net.createConnection({
								path: socketPath,
							});
							let alldata = "";
							let data;
							socket.on("connect", () => {
								socket.write("GET http:/info HTTP/1.0\r\n\r\n");
							});
							socket.on("data", (data) => {
								alldata += data.toString();
							});
							socket.on("error", () => {
								socket = false;
								callback({});
							});
							socket.on("end", () => {
								let startbody = alldata.indexOf("\r\n\r\n");
								alldata = alldata.substring(startbody + 4);
								socket = false;
								try {
									data = JSON.parse(alldata);
									callback(data);
								} catch (err) {
									callback({});
								}
							});
						} catch (err) {
							callback({});
						}
					}
					listImages(all, callback) {
						try {
							let socket = net.createConnection({
								path: socketPath,
							});
							let alldata = "";
							let data;
							socket.on("connect", () => {
								socket.write("GET http:/images/json" + (all ? "?all=1" : "") + " HTTP/1.0\r\n\r\n");
							});
							socket.on("data", (data) => {
								alldata += data.toString();
							});
							socket.on("error", () => {
								socket = false;
								callback({});
							});
							socket.on("end", () => {
								let startbody = alldata.indexOf("\r\n\r\n");
								alldata = alldata.substring(startbody + 4);
								socket = false;
								try {
									data = JSON.parse(alldata);
									callback(data);
								} catch (err) {
									callback({});
								}
							});
						} catch (err) {
							callback({});
						}
					}
					inspectImage(id, callback) {
						id = id || "";
						if (id)
							try {
								let socket = net.createConnection({
									path: socketPath,
								});
								let alldata = "";
								let data;
								socket.on("connect", () => {
									socket.write("GET http:/images/" + id + "/json?stream=0 HTTP/1.0\r\n\r\n");
								});
								socket.on("data", (data) => {
									alldata += data.toString();
								});
								socket.on("error", () => {
									socket = false;
									callback({});
								});
								socket.on("end", () => {
									let startbody = alldata.indexOf("\r\n\r\n");
									alldata = alldata.substring(startbody + 4);
									socket = false;
									try {
										data = JSON.parse(alldata);
										callback(data);
									} catch (err) {
										callback({});
									}
								});
							} catch (err) {
								callback({});
							}
						else callback({});
					}
					listContainers(all, callback) {
						try {
							let socket = net.createConnection({
								path: socketPath,
							});
							let alldata = "";
							let data;
							socket.on("connect", () => {
								socket.write("GET http:/containers/json" + (all ? "?all=1" : "") + " HTTP/1.0\r\n\r\n");
							});
							socket.on("data", (data) => {
								alldata += data.toString();
							});
							socket.on("error", () => {
								socket = false;
								callback({});
							});
							socket.on("end", () => {
								let startbody = alldata.indexOf("\r\n\r\n");
								alldata = alldata.substring(startbody + 4);
								socket = false;
								try {
									data = JSON.parse(alldata);
									callback(data);
								} catch (err) {
									callback({});
								}
							});
						} catch (err) {
							callback({});
						}
					}
					getStats(id, callback) {
						id = id || "";
						if (id)
							try {
								let socket = net.createConnection({
									path: socketPath,
								});
								let alldata = "";
								let data;
								socket.on("connect", () => {
									socket.write("GET http:/containers/" + id + "/stats?stream=0 HTTP/1.0\r\n\r\n");
								});
								socket.on("data", (data) => {
									alldata += data.toString();
								});
								socket.on("error", () => {
									socket = false;
									callback({});
								});
								socket.on("end", () => {
									let startbody = alldata.indexOf("\r\n\r\n");
									alldata = alldata.substring(startbody + 4);
									socket = false;
									try {
										data = JSON.parse(alldata);
										callback(data);
									} catch (err) {
										callback({});
									}
								});
							} catch (err) {
								callback({});
							}
						else callback({});
					}
					getInspect(id, callback) {
						id = id || "";
						if (id)
							try {
								let socket = net.createConnection({
									path: socketPath,
								});
								let alldata = "";
								let data;
								socket.on("connect", () => {
									socket.write("GET http:/containers/" + id + "/json?stream=0 HTTP/1.0\r\n\r\n");
								});
								socket.on("data", (data) => {
									alldata += data.toString();
								});
								socket.on("error", () => {
									socket = false;
									callback({});
								});
								socket.on("end", () => {
									let startbody = alldata.indexOf("\r\n\r\n");
									alldata = alldata.substring(startbody + 4);
									socket = false;
									try {
										data = JSON.parse(alldata);
										callback(data);
									} catch (err) {
										callback({});
									}
								});
							} catch (err) {
								callback({});
							}
						else callback({});
					}
					getProcesses(id, callback) {
						id = id || "";
						if (id)
							try {
								let socket = net.createConnection({
									path: socketPath,
								});
								let alldata = "";
								let data;
								socket.on("connect", () => {
									socket.write(
										"GET http:/containers/" + id + "/top?ps_args=-opid,ppid,pgid,vsz,time,etime,nice,ruser,user,rgroup,group,stat,rss,args HTTP/1.0\r\n\r\n",
									);
								});
								socket.on("data", (data) => {
									alldata += data.toString();
								});
								socket.on("error", () => {
									socket = false;
									callback({});
								});
								socket.on("end", () => {
									let startbody = alldata.indexOf("\r\n\r\n");
									alldata = alldata.substring(startbody + 4);
									socket = false;
									try {
										data = JSON.parse(alldata);
										callback(data);
									} catch (err) {
										callback({});
									}
								});
							} catch (err) {
								callback({});
							}
						else callback({});
					}
					listVolumes(callback) {
						try {
							let socket = net.createConnection({
								path: socketPath,
							});
							let alldata = "";
							let data;
							socket.on("connect", () => {
								socket.write("GET http:/volumes HTTP/1.0\r\n\r\n");
							});
							socket.on("data", (data) => {
								alldata += data.toString();
							});
							socket.on("error", () => {
								socket = false;
								callback({});
							});
							socket.on("end", () => {
								let startbody = alldata.indexOf("\r\n\r\n");
								alldata = alldata.substring(startbody + 4);
								socket = false;
								try {
									data = JSON.parse(alldata);
									callback(data);
								} catch (err) {
									callback({});
								}
							});
						} catch (err) {
							callback({});
						}
					}
				}
				module.exports = DockerSocket;
			},
			255: (__unused_webpack_module, exports, __webpack_require__) => {
				const util = __webpack_require__(858);
				const fs = __webpack_require__(48);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const execPromiseSave = util.promisifySave(__webpack_require__(282).exec);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				let _fs_speed = {};
				let _disk_io = {};
				function fsSize(callback) {
					let macOsDisks = [];
					function getmacOsFsType(fs) {
						if (!fs.startsWith("/")) return "NFS";
						const parts = fs.split("/");
						const fsShort = parts[parts.length - 1];
						const macOsDisksSingle = macOsDisks.filter((item) => item.indexOf(fsShort) >= 0);
						if (1 === macOsDisksSingle.length && macOsDisksSingle[0].indexOf("APFS") >= 0) return "APFS";
						return "HFS";
					}
					function parseDf(lines) {
						let data = [];
						lines.forEach(function (line) {
							if ("" !== line) {
								line = line.replace(/ +/g, " ").split(" ");
								if (line && (line[0].startsWith("/") || (line[6] && "/" === line[6]) || line[0].indexOf("/") > 0 || 1 === line[0].indexOf(":"))) {
									const fs = line[0];
									const fsType = _linux || _freebsd || _openbsd || _netbsd ? line[1] : getmacOsFsType(line[0]);
									const size = 1024 * parseInt(_linux || _freebsd || _openbsd || _netbsd ? line[2] : line[1]);
									const used = 1024 * parseInt(_linux || _freebsd || _openbsd || _netbsd ? line[3] : line[2]);
									const available = 1024 * parseInt(_linux || _freebsd || _openbsd || _netbsd ? line[4] : line[3]);
									const use = parseFloat((100 * (used / (used + available))).toFixed(2));
									line.splice(0, _linux || _freebsd || _openbsd || _netbsd ? 6 : 5);
									const mount = line.join(" ");
									if (!data.find((el) => el.fs === fs && el.type === fsType))
										data.push({
											fs,
											type: fsType,
											size,
											used,
											available,
											use,
											mount,
										});
								}
							}
						});
						return data;
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							let data = [];
							if (_linux || _freebsd || _openbsd || _netbsd || _darwin) {
								let cmd = "";
								if (_darwin) {
									cmd = "df -kP";
									try {
										macOsDisks = execSync("diskutil list")
											.toString()
											.split("\n")
											.filter((line) => !line.startsWith("/") && line.indexOf(":") > 0);
									} catch (e) {
										macOsDisks = [];
									}
								}
								if (_linux) cmd = 'df -lkPTx squashfs | grep  -E "^/|^.\\:"';
								if (_freebsd || _openbsd || _netbsd) cmd = "df -lkPT";
								exec(
									cmd,
									{
										maxBuffer: 1024 * 1024,
									},
									function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											data = parseDf(lines);
											if (callback) callback(data);
											resolve(data);
										} else
											exec(
												"df -kPT",
												{
													maxBuffer: 1024 * 1024,
												},
												function (error, stdout) {
													if (!error) {
														let lines = stdout.toString().split("\n");
														data = parseDf(lines);
													}
													if (callback) callback(data);
													resolve(data);
												},
											);
									},
								);
							}
							if (_sunos) {
								if (callback) callback(data);
								resolve(data);
							}
							if (_windows)
								try {
									util.powerShell("Get-WmiObject Win32_logicaldisk | select Caption,FileSystem,FreeSpace,Size | fl").then((stdout, error) => {
										if (!error) {
											let devices = stdout.toString().split(/\n\s*\n/);
											devices.forEach(function (device) {
												let lines = device.split("\r\n");
												const size = util.toInt(util.getValue(lines, "size", ":"));
												const free = util.toInt(util.getValue(lines, "freespace", ":"));
												const caption = util.getValue(lines, "caption", ":");
												if (size)
													data.push({
														fs: caption,
														type: util.getValue(lines, "filesystem", ":"),
														size,
														used: size - free,
														available: free,
														use: parseFloat(((100 * (size - free)) / size).toFixed(2)),
														mount: caption,
													});
											});
										}
										if (callback) callback(data);
										resolve(data);
									});
								} catch (e) {
									if (callback) callback(data);
									resolve(data);
								}
						});
					});
				}
				exports.fsSize = fsSize;
				function fsOpenFiles(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							const result = {
								max: null,
								allocated: null,
								available: null,
							};
							if (_freebsd || _openbsd || _netbsd || _darwin) {
								let cmd = "sysctl -i kern.maxfiles kern.num_files kern.open_files";
								exec(
									cmd,
									{
										maxBuffer: 1024 * 1024,
									},
									function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											result.max = parseInt(util.getValue(lines, "kern.maxfiles", ":"), 10);
											result.allocated = parseInt(util.getValue(lines, "kern.num_files", ":"), 10) || parseInt(util.getValue(lines, "kern.open_files", ":"), 10);
											result.available = result.max - result.allocated;
										}
										if (callback) callback(result);
										resolve(result);
									},
								);
							}
							if (_linux)
								fs.readFile("/proc/sys/fs/file-nr", function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										if (lines[0]) {
											const parts = lines[0].replace(/\s+/g, " ").split(" ");
											if (3 === parts.length) {
												result.allocated = parseInt(parts[0], 10);
												result.available = parseInt(parts[1], 10);
												result.max = parseInt(parts[2], 10);
												if (!result.available) result.available = result.max - result.allocated;
											}
										}
										if (callback) callback(result);
										resolve(result);
									} else
										fs.readFile("/proc/sys/fs/file-max", function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												if (lines[0]) result.max = parseInt(lines[0], 10);
											}
											if (callback) callback(result);
											resolve(result);
										});
								});
							if (_sunos) {
								if (callback) callback(null);
								resolve(null);
							}
							if (_windows) {
								if (callback) callback(null);
								resolve(null);
							}
						});
					});
				}
				exports.fsOpenFiles = fsOpenFiles;
				function parseBytes(s) {
					return parseInt(s.substr(s.indexOf(" (") + 2, s.indexOf(" Bytes)") - 10));
				}
				function parseDevices(lines) {
					let devices = [];
					let i = 0;
					lines.forEach((line) => {
						if (line.length > 0)
							if ("*" === line[0]) i++;
							else {
								let parts = line.split(":");
								if (parts.length > 1) {
									if (!devices[i])
										devices[i] = {
											name: "",
											identifier: "",
											type: "disk",
											fsType: "",
											mount: "",
											size: 0,
											physical: "HDD",
											uuid: "",
											label: "",
											model: "",
											serial: "",
											removable: false,
											protocol: "",
										};
									parts[0] = parts[0].trim().toUpperCase().replace(/ +/g, "");
									parts[1] = parts[1].trim();
									if ("DEVICEIDENTIFIER" === parts[0]) devices[i].identifier = parts[1];
									if ("DEVICENODE" === parts[0]) devices[i].name = parts[1];
									if ("VOLUMENAME" === parts[0]) if (-1 === parts[1].indexOf("Not applicable")) devices[i].label = parts[1];
									if ("PROTOCOL" === parts[0]) devices[i].protocol = parts[1];
									if ("DISKSIZE" === parts[0]) devices[i].size = parseBytes(parts[1]);
									if ("FILESYSTEMPERSONALITY" === parts[0]) devices[i].fsType = parts[1];
									if ("MOUNTPOINT" === parts[0]) devices[i].mount = parts[1];
									if ("VOLUMEUUID" === parts[0]) devices[i].uuid = parts[1];
									if ("READ-ONLYMEDIA" === parts[0] && "Yes" === parts[1]) devices[i].physical = "CD/DVD";
									if ("SOLIDSTATE" === parts[0] && "Yes" === parts[1]) devices[i].physical = "SSD";
									if ("VIRTUAL" === parts[0]) devices[i].type = "virtual";
									if ("REMOVABLEMEDIA" === parts[0]) devices[i].removable = "Removable" === parts[1];
									if ("PARTITIONTYPE" === parts[0]) devices[i].type = "part";
									if ("DEVICE/MEDIANAME" === parts[0]) devices[i].model = parts[1];
								}
							}
					});
					return devices;
				}
				function parseBlk(lines) {
					let data = [];
					lines
						.filter((line) => "" !== line)
						.forEach((line) => {
							try {
								line = decodeURIComponent(line.replace(/\\x/g, "%"));
								line = line.replace(/\\/g, "\\\\");
								let disk = JSON.parse(line);
								data.push({
									name: disk.name,
									type: disk.type,
									fsType: disk.fsType,
									mount: disk.mountpoint,
									size: parseInt(disk.size),
									physical: "disk" === disk.type ? ("0" === disk.rota ? "SSD" : "HDD") : "rom" === disk.type ? "CD/DVD" : "",
									uuid: disk.uuid,
									label: disk.label,
									model: disk.model,
									serial: disk.serial,
									removable: "1" === disk.rm,
									protocol: disk.tran,
									group: disk.group,
								});
							} catch (e) {
								util.noop();
							}
						});
					data = util.unique(data);
					data = util.sortByKey(data, ["type", "name"]);
					return data;
				}
				function blkStdoutToObject(stdout) {
					return stdout
						.toString()
						.replace(/NAME=/g, '{"name":')
						.replace(/FSTYPE=/g, ',"fsType":')
						.replace(/TYPE=/g, ',"type":')
						.replace(/SIZE=/g, ',"size":')
						.replace(/MOUNTPOINT=/g, ',"mountpoint":')
						.replace(/UUID=/g, ',"uuid":')
						.replace(/ROTA=/g, ',"rota":')
						.replace(/RO=/g, ',"ro":')
						.replace(/RM=/g, ',"rm":')
						.replace(/TRAN=/g, ',"tran":')
						.replace(/SERIAL=/g, ',"serial":')
						.replace(/LABEL=/g, ',"label":')
						.replace(/MODEL=/g, ',"model":')
						.replace(/OWNER=/g, ',"owner":')
						.replace(/GROUP=/g, ',"group":')
						.replace(/\n/g, "}\n");
				}
				function blockDevices(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let data = [];
							if (_linux)
								exec(
									"lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,TRAN,SERIAL,LABEL,MODEL,OWNER 2>/dev/null",
									{
										maxBuffer: 1024 * 1024,
									},
									function (error, stdout) {
										if (!error) {
											let lines = blkStdoutToObject(stdout).split("\n");
											data = parseBlk(lines);
											if (callback) callback(data);
											resolve(data);
										} else
											exec(
												"lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,LABEL,MODEL,OWNER 2>/dev/null",
												{
													maxBuffer: 1024 * 1024,
												},
												function (error, stdout) {
													if (!error) {
														let lines = blkStdoutToObject(stdout).split("\n");
														data = parseBlk(lines);
													}
													if (callback) callback(data);
													resolve(data);
												},
											);
									},
								);
							if (_darwin)
								exec(
									"diskutil info -all",
									{
										maxBuffer: 1024 * 1024,
									},
									function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											data = parseDevices(lines);
										}
										if (callback) callback(data);
										resolve(data);
									},
								);
							if (_sunos) {
								if (callback) callback(data);
								resolve(data);
							}
							if (_windows) {
								let drivetypes = ["Unknown", "NoRoot", "Removable", "Local", "Network", "CD/DVD", "RAM"];
								try {
									util.powerShell(
										"Get-CimInstance -ClassName Win32_LogicalDisk | select Caption,DriveType,Name,FileSystem,Size,VolumeSerialNumber,VolumeName | fl",
									).then((stdout, error) => {
										if (!error) {
											let devices = stdout.toString().split(/\n\s*\n/);
											devices.forEach(function (device) {
												let lines = device.split("\r\n");
												let drivetype = util.getValue(lines, "drivetype", ":");
												if (drivetype)
													data.push({
														name: util.getValue(lines, "name", ":"),
														identifier: util.getValue(lines, "caption", ":"),
														type: "disk",
														fsType: util.getValue(lines, "filesystem", ":").toLowerCase(),
														mount: util.getValue(lines, "caption", ":"),
														size: util.getValue(lines, "size", ":"),
														physical: drivetype >= 0 && drivetype <= 6 ? drivetypes[drivetype] : drivetypes[0],
														uuid: util.getValue(lines, "volumeserialnumber", ":"),
														label: util.getValue(lines, "volumename", ":"),
														model: "",
														serial: util.getValue(lines, "volumeserialnumber", ":"),
														removable: "2" === drivetype,
														protocol: "",
													});
											});
										}
										if (callback) callback(data);
										resolve(data);
									});
								} catch (e) {
									if (callback) callback(data);
									resolve(data);
								}
							}
							if (_freebsd || _openbsd || _netbsd) {
								if (callback) callback(null);
								resolve(null);
							}
						});
					});
				}
				exports.blockDevices = blockDevices;
				function calcFsSpeed(rx, wx) {
					let result = {
						rx: 0,
						wx: 0,
						tx: 0,
						rx_sec: null,
						wx_sec: null,
						tx_sec: null,
						ms: 0,
					};
					if (_fs_speed && _fs_speed.ms) {
						result.rx = rx;
						result.wx = wx;
						result.tx = result.rx + result.wx;
						result.ms = Date.now() - _fs_speed.ms;
						result.rx_sec = (result.rx - _fs_speed.bytes_read) / (result.ms / 1e3);
						result.wx_sec = (result.wx - _fs_speed.bytes_write) / (result.ms / 1e3);
						result.tx_sec = result.rx_sec + result.wx_sec;
						_fs_speed.rx_sec = result.rx_sec;
						_fs_speed.wx_sec = result.wx_sec;
						_fs_speed.tx_sec = result.tx_sec;
						_fs_speed.bytes_read = result.rx;
						_fs_speed.bytes_write = result.wx;
						_fs_speed.bytes_overall = result.rx + result.wx;
						_fs_speed.ms = Date.now();
						_fs_speed.last_ms = result.ms;
					} else {
						result.rx = rx;
						result.wx = wx;
						result.tx = result.rx + result.wx;
						_fs_speed.rx_sec = null;
						_fs_speed.wx_sec = null;
						_fs_speed.tx_sec = null;
						_fs_speed.bytes_read = result.rx;
						_fs_speed.bytes_write = result.wx;
						_fs_speed.bytes_overall = result.rx + result.wx;
						_fs_speed.ms = Date.now();
						_fs_speed.last_ms = 0;
					}
					return result;
				}
				function fsStats(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (_windows || _freebsd || _openbsd || _netbsd || _sunos) return resolve(null);
							let result = {
								rx: 0,
								wx: 0,
								tx: 0,
								rx_sec: null,
								wx_sec: null,
								tx_sec: null,
								ms: 0,
							};
							let rx = 0;
							let wx = 0;
							if ((_fs_speed && !_fs_speed.ms) || (_fs_speed && _fs_speed.ms && Date.now() - _fs_speed.ms >= 500)) {
								if (_linux)
									exec(
										"lsblk -r 2>/dev/null | grep /",
										{
											maxBuffer: 1024 * 1024,
										},
										function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												let fs_filter = [];
												lines.forEach(function (line) {
													if ("" !== line) {
														line = line.trim().split(" ");
														if (-1 === fs_filter.indexOf(line[0])) fs_filter.push(line[0]);
													}
												});
												let output = fs_filter.join("|");
												exec(
													'cat /proc/diskstats | egrep "' + output + '"',
													{
														maxBuffer: 1024 * 1024,
													},
													function (error, stdout) {
														if (!error) {
															let lines = stdout.toString().split("\n");
															lines.forEach(function (line) {
																line = line.trim();
																if ("" !== line) {
																	line = line.replace(/ +/g, " ").split(" ");
																	rx += 512 * parseInt(line[5]);
																	wx += 512 * parseInt(line[9]);
																}
															});
															result = calcFsSpeed(rx, wx);
														}
														if (callback) callback(result);
														resolve(result);
													},
												);
											} else {
												if (callback) callback(result);
												resolve(result);
											}
										},
									);
								if (_darwin)
									exec(
										'ioreg -c IOBlockStorageDriver -k Statistics -r -w0 | sed -n "/IOBlockStorageDriver/,/Statistics/p" | grep "Statistics" | tr -cd "01234567890,\n"',
										{
											maxBuffer: 1024 * 1024,
										},
										function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												lines.forEach(function (line) {
													line = line.trim();
													if ("" !== line) {
														line = line.split(",");
														rx += parseInt(line[2]);
														wx += parseInt(line[9]);
													}
												});
												result = calcFsSpeed(rx, wx);
											}
											if (callback) callback(result);
											resolve(result);
										},
									);
							} else {
								result.ms = _fs_speed.last_ms;
								result.rx = _fs_speed.bytes_read;
								result.wx = _fs_speed.bytes_write;
								result.tx = _fs_speed.bytes_read + _fs_speed.bytes_write;
								result.rx_sec = _fs_speed.rx_sec;
								result.wx_sec = _fs_speed.wx_sec;
								result.tx_sec = _fs_speed.tx_sec;
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.fsStats = fsStats;
				function calcDiskIO(rIO, wIO, rWaitTime, wWaitTime, tWaitTime) {
					let result = {
						rIO: 0,
						wIO: 0,
						tIO: 0,
						rIO_sec: null,
						wIO_sec: null,
						tIO_sec: null,
						rWaitTime: 0,
						wWaitTime: 0,
						tWaitTime: 0,
						rWaitPercent: null,
						wWaitPercent: null,
						tWaitPercent: null,
						ms: 0,
					};
					if (_disk_io && _disk_io.ms) {
						result.rIO = rIO;
						result.wIO = wIO;
						result.tIO = rIO + wIO;
						result.ms = Date.now() - _disk_io.ms;
						result.rIO_sec = (result.rIO - _disk_io.rIO) / (result.ms / 1e3);
						result.wIO_sec = (result.wIO - _disk_io.wIO) / (result.ms / 1e3);
						result.tIO_sec = result.rIO_sec + result.wIO_sec;
						result.rWaitTime = rWaitTime;
						result.wWaitTime = wWaitTime;
						result.tWaitTime = tWaitTime;
						result.rWaitPercent = (100 * (result.rWaitTime - _disk_io.rWaitTime)) / result.ms;
						result.wWaitPercent = (100 * (result.wWaitTime - _disk_io.wWaitTime)) / result.ms;
						result.tWaitPercent = (100 * (result.tWaitTime - _disk_io.tWaitTime)) / result.ms;
						_disk_io.rIO = rIO;
						_disk_io.wIO = wIO;
						_disk_io.rIO_sec = result.rIO_sec;
						_disk_io.wIO_sec = result.wIO_sec;
						_disk_io.tIO_sec = result.tIO_sec;
						_disk_io.rWaitTime = rWaitTime;
						_disk_io.wWaitTime = wWaitTime;
						_disk_io.tWaitTime = tWaitTime;
						_disk_io.rWaitPercent = result.rWaitPercent;
						_disk_io.wWaitPercent = result.wWaitPercent;
						_disk_io.tWaitPercent = result.tWaitPercent;
						_disk_io.last_ms = result.ms;
						_disk_io.ms = Date.now();
					} else {
						result.rIO = rIO;
						result.wIO = wIO;
						result.tIO = rIO + wIO;
						result.rWaitTime = rWaitTime;
						result.wWaitTime = wWaitTime;
						result.tWaitTime = tWaitTime;
						_disk_io.rIO = rIO;
						_disk_io.wIO = wIO;
						_disk_io.rIO_sec = null;
						_disk_io.wIO_sec = null;
						_disk_io.tIO_sec = null;
						_disk_io.rWaitTime = rWaitTime;
						_disk_io.wWaitTime = wWaitTime;
						_disk_io.tWaitTime = tWaitTime;
						_disk_io.rWaitPercent = null;
						_disk_io.wWaitPercent = null;
						_disk_io.tWaitPercent = null;
						_disk_io.last_ms = 0;
						_disk_io.ms = Date.now();
					}
					return result;
				}
				function disksIO(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (_windows) return resolve(null);
							if (_sunos) return resolve(null);
							let result = {
								rIO: 0,
								wIO: 0,
								tIO: 0,
								rIO_sec: null,
								wIO_sec: null,
								tIO_sec: null,
								rWaitTime: 0,
								wWaitTime: 0,
								tWaitTime: 0,
								rWaitPercent: null,
								wWaitPercent: null,
								tWaitPercent: null,
								ms: 0,
							};
							let rIO = 0;
							let wIO = 0;
							let rWaitTime = 0;
							let wWaitTime = 0;
							let tWaitTime = 0;
							if ((_disk_io && !_disk_io.ms) || (_disk_io && _disk_io.ms && Date.now() - _disk_io.ms >= 500)) {
								if (_linux || _freebsd || _openbsd || _netbsd) {
									let cmd =
										'for mount in `lsblk 2>/dev/null | grep " disk " | sed "s/[│└─├]//g" | awk \'{$1=$1};1\' | cut -d " " -f 1 | sort -u`; do cat /sys/block/$mount/stat | sed -r "s/ +/;/g" | sed -r "s/^;//"; done';
									exec(
										cmd,
										{
											maxBuffer: 1024 * 1024,
										},
										function (error, stdout) {
											if (!error) {
												let lines = stdout.split("\n");
												lines.forEach(function (line) {
													if (!line) return;
													let stats = line.split(";");
													rIO += parseInt(stats[0]);
													wIO += parseInt(stats[4]);
													rWaitTime += parseInt(stats[3]);
													wWaitTime += parseInt(stats[7]);
													tWaitTime += parseInt(stats[10]);
												});
												result = calcDiskIO(rIO, wIO, rWaitTime, wWaitTime, tWaitTime);
												if (callback) callback(result);
												resolve(result);
											} else {
												if (callback) callback(result);
												resolve(result);
											}
										},
									);
								}
								if (_darwin)
									exec(
										'ioreg -c IOBlockStorageDriver -k Statistics -r -w0 | sed -n "/IOBlockStorageDriver/,/Statistics/p" | grep "Statistics" | tr -cd "01234567890,\n"',
										{
											maxBuffer: 1024 * 1024,
										},
										function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												lines.forEach(function (line) {
													line = line.trim();
													if ("" !== line) {
														line = line.split(",");
														rIO += parseInt(line[10]);
														wIO += parseInt(line[0]);
													}
												});
												result = calcDiskIO(rIO, wIO, rWaitTime, wWaitTime, tWaitTime);
											}
											if (callback) callback(result);
											resolve(result);
										},
									);
							} else {
								result.rIO = _disk_io.rIO;
								result.wIO = _disk_io.wIO;
								result.tIO = _disk_io.rIO + _disk_io.wIO;
								result.ms = _disk_io.last_ms;
								result.rIO_sec = _disk_io.rIO_sec;
								result.wIO_sec = _disk_io.wIO_sec;
								result.tIO_sec = _disk_io.tIO_sec;
								result.rWaitTime = _disk_io.rWaitTime;
								result.wWaitTime = _disk_io.wWaitTime;
								result.tWaitTime = _disk_io.tWaitTime;
								result.rWaitPercent = _disk_io.rWaitPercent;
								result.wWaitPercent = _disk_io.wWaitPercent;
								result.tWaitPercent = _disk_io.tWaitPercent;
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.disksIO = disksIO;
				function diskLayout(callback) {
					function getVendorFromModel(model) {
						const diskManufacturers = [
							{
								pattern: "WESTERN.*",
								manufacturer: "Western Digital",
							},
							{
								pattern: "^WDC.*",
								manufacturer: "Western Digital",
							},
							{
								pattern: "WD.*",
								manufacturer: "Western Digital",
							},
							{
								pattern: "TOSHIBA.*",
								manufacturer: "Toshiba",
							},
							{
								pattern: "HITACHI.*",
								manufacturer: "Hitachi",
							},
							{
								pattern: "^IC.*",
								manufacturer: "Hitachi",
							},
							{
								pattern: "^HTS.*",
								manufacturer: "Hitachi",
							},
							{
								pattern: "SANDISK.*",
								manufacturer: "SanDisk",
							},
							{
								pattern: "KINGSTON.*",
								manufacturer: "Kingston Technology",
							},
							{
								pattern: "^SONY.*",
								manufacturer: "Sony",
							},
							{
								pattern: "TRANSCEND.*",
								manufacturer: "Transcend",
							},
							{
								pattern: "SAMSUNG.*",
								manufacturer: "Samsung",
							},
							{
								pattern: "^ST(?!I\\ ).*",
								manufacturer: "Seagate",
							},
							{
								pattern: "^STI\\ .*",
								manufacturer: "SimpleTech",
							},
							{
								pattern: "^D...-.*",
								manufacturer: "IBM",
							},
							{
								pattern: "^IBM.*",
								manufacturer: "IBM",
							},
							{
								pattern: "^FUJITSU.*",
								manufacturer: "Fujitsu",
							},
							{
								pattern: "^MP.*",
								manufacturer: "Fujitsu",
							},
							{
								pattern: "^MK.*",
								manufacturer: "Toshiba",
							},
							{
								pattern: "MAXTO.*",
								manufacturer: "Maxtor",
							},
							{
								pattern: "PIONEER.*",
								manufacturer: "Pioneer",
							},
							{
								pattern: "PHILIPS.*",
								manufacturer: "Philips",
							},
							{
								pattern: "QUANTUM.*",
								manufacturer: "Quantum Technology",
							},
							{
								pattern: "FIREBALL.*",
								manufacturer: "Quantum Technology",
							},
							{
								pattern: "^VBOX.*",
								manufacturer: "VirtualBox",
							},
							{
								pattern: "CORSAIR.*",
								manufacturer: "Corsair Components",
							},
							{
								pattern: "CRUCIAL.*",
								manufacturer: "Crucial",
							},
							{
								pattern: "ECM.*",
								manufacturer: "ECM",
							},
							{
								pattern: "INTEL.*",
								manufacturer: "INTEL",
							},
							{
								pattern: "EVO.*",
								manufacturer: "Samsung",
							},
							{
								pattern: "APPLE.*",
								manufacturer: "Apple",
							},
						];
						let result = "";
						if (model) {
							model = model.toUpperCase();
							diskManufacturers.forEach((manufacturer) => {
								const re = RegExp(manufacturer.pattern);
								if (re.test(model)) result = manufacturer.manufacturer;
							});
						}
						return result;
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							const commitResult = (res) => {
								for (let i = 0; i < res.length; i++) delete res[i].BSDName;
								if (callback) callback(res);
								resolve(res);
							};
							let result = [];
							let cmd = "";
							if (_linux) {
								let cmdFullSmart = "";
								exec(
									"export LC_ALL=C; lsblk -ablJO 2>/dev/null; unset LC_ALL",
									{
										maxBuffer: 1024 * 1024,
									},
									function (error, stdout) {
										if (!error)
											try {
												const out = stdout.toString().trim();
												let devices = [];
												try {
													const outJSON = JSON.parse(out);
													if (outJSON && {}.hasOwnProperty.call(outJSON, "blockdevices"))
														devices = outJSON.blockdevices.filter(
															(item) =>
																"disk" === item.type &&
																item.size > 0 &&
																(null !== item.model ||
																	(null === item.mountpoint && null === item.label && null === item.fsType && null === item.parttype)),
														);
												} catch (e) {
													const out2 = execSync(
														"export LC_ALL=C; lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,LABEL,MODEL,OWNER,GROUP 2>/dev/null; unset LC_ALL",
													).toString();
													let lines = blkStdoutToObject(out2).split("\n");
													const data = parseBlk(lines);
													devices = data.filter(
														(item) =>
															"disk" === item.type &&
															item.size > 0 &&
															((null !== item.model && "" !== item.model) || ("" === item.mount && "" === item.label && "" === item.fsType)),
													);
												}
												devices.forEach((device) => {
													let mediumType = "";
													const BSDName = "/dev/" + device.name;
													const logical = device.name;
													try {
														mediumType = execSync("cat /sys/block/" + logical + "/queue/rotational 2>/dev/null")
															.toString()
															.split("\n")[0];
													} catch (e) {
														util.noop();
													}
													let interfaceType = device.tran ? device.tran.toUpperCase().trim() : "";
													if ("NVME" === interfaceType) {
														mediumType = "2";
														interfaceType = "PCIe";
													}
													result.push({
														device: BSDName,
														type:
															"0" === mediumType
																? "SSD"
																: "1" === mediumType
																? "HD"
																: "2" === mediumType
																? "NVMe"
																: device.model && device.model.indexOf("SSD") > -1
																? "SSD"
																: device.model && device.model.indexOf("NVM") > -1
																? "NVMe"
																: "HD",
														name: device.model || "",
														vendor: getVendorFromModel(device.model) || (device.vendor ? device.vendor.trim() : ""),
														size: device.size || 0,
														bytesPerSector: null,
														totalCylinders: null,
														totalHeads: null,
														totalSectors: null,
														totalTracks: null,
														tracksPerCylinder: null,
														sectorsPerTrack: null,
														firmwareRevision: device.rev ? device.rev.trim() : "",
														serialNum: device.serial ? device.serial.trim() : "",
														interfaceType,
														smartStatus: "unknown",
														temperature: null,
														BSDName,
													});
													cmd += `printf "\n${BSDName}|"; smartctl -H ${BSDName} | grep overall;`;
													cmdFullSmart += `${cmdFullSmart ? 'printf ",";' : ""}smartctl -a -j ${BSDName};`;
												});
											} catch (e) {
												util.noop();
											}
										if (cmdFullSmart)
											exec(
												cmdFullSmart,
												{
													maxBuffer: 1024 * 1024,
												},
												function (error, stdout) {
													try {
														const data = JSON.parse(`[${stdout}]`);
														data.forEach((disk) => {
															const diskBSDName = disk.smartctl.argv[disk.smartctl.argv.length - 1];
															for (let i = 0; i < result.length; i++)
																if (result[i].BSDName === diskBSDName) {
																	result[i].smartStatus = disk.smart_status.passed
																		? "Ok"
																		: false === disk.smart_status.passed
																		? "Predicted Failure"
																		: "unknown";
																	if (disk.temperature && disk.temperature.current) result[i].temperature = disk.temperature.current;
																	result[i].smartData = disk;
																}
														});
														commitResult(result);
													} catch (e) {
														if (cmd) {
															cmd += 'printf "\n"';
															exec(
																cmd,
																{
																	maxBuffer: 1024 * 1024,
																},
																function (error, stdout) {
																	let lines = stdout.toString().split("\n");
																	lines.forEach((line) => {
																		if (line) {
																			let parts = line.split("|");
																			if (2 === parts.length) {
																				let BSDName = parts[0];
																				parts[1] = parts[1].trim();
																				let parts2 = parts[1].split(":");
																				if (2 === parts2.length) {
																					parts2[1] = parts2[1].trim();
																					let status = parts2[1].toLowerCase();
																					for (let i = 0; i < result.length; i++)
																						if (result[i].BSDName === BSDName)
																							result[i].smartStatus =
																								"passed" === status ? "Ok" : "failed!" === status ? "Predicted Failure" : "unknown";
																				}
																			}
																		}
																	});
																	commitResult(result);
																},
															);
														} else commitResult(result);
													}
												},
											);
										else commitResult(result);
									},
								);
							}
							if (_freebsd || _openbsd || _netbsd) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_darwin)
								exec(
									"system_profiler SPSerialATADataType SPNVMeDataType SPUSBDataType",
									{
										maxBuffer: 1024 * 1024,
									},
									function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											let linesSATA = [];
											let linesNVMe = [];
											let linesUSB = [];
											let dataType = "SATA";
											lines.forEach((line) => {
												if ("NVMExpress:" === line) dataType = "NVMe";
												else if ("USB:" === line) dataType = "USB";
												else if ("SATA/SATA Express:" === line) dataType = "SATA";
												else if ("SATA" === dataType) linesSATA.push(line);
												else if ("NVMe" === dataType) linesNVMe.push(line);
												else if ("USB" === dataType) linesUSB.push(line);
											});
											try {
												let devices = linesSATA.join("\n").split(" Physical Interconnect: ");
												devices.shift();
												devices.forEach(function (device) {
													device = "InterfaceType: " + device;
													let lines = device.split("\n");
													const mediumType = util.getValue(lines, "Medium Type", ":", true).trim();
													const sizeStr = util.getValue(lines, "capacity", ":", true).trim();
													const BSDName = util.getValue(lines, "BSD Name", ":", true).trim();
													if (sizeStr) {
														let sizeValue = 0;
														if (sizeStr.indexOf("(") >= 0)
															sizeValue = parseInt(
																sizeStr
																	.match(/\(([^)]+)\)/)[1]
																	.replace(/\./g, "")
																	.replace(/,/g, "")
																	.replace(/\s/g, ""),
															);
														if (!sizeValue) sizeValue = parseInt(sizeStr);
														if (sizeValue) {
															const smartStatusString = util.getValue(lines, "S.M.A.R.T. status", ":", true).trim().toLowerCase();
															result.push({
																device: BSDName,
																type: mediumType.startsWith("Solid") ? "SSD" : "HD",
																name: util.getValue(lines, "Model", ":", true).trim(),
																vendor:
																	getVendorFromModel(util.getValue(lines, "Model", ":", true).trim()) ||
																	util.getValue(lines, "Manufacturer", ":", true),
																size: sizeValue,
																bytesPerSector: null,
																totalCylinders: null,
																totalHeads: null,
																totalSectors: null,
																totalTracks: null,
																tracksPerCylinder: null,
																sectorsPerTrack: null,
																firmwareRevision: util.getValue(lines, "Revision", ":", true).trim(),
																serialNum: util.getValue(lines, "Serial Number", ":", true).trim(),
																interfaceType: util.getValue(lines, "InterfaceType", ":", true).trim(),
																smartStatus: "verified" === smartStatusString ? "OK" : smartStatusString || "unknown",
																temperature: null,
																BSDName,
															});
															cmd = cmd + 'printf "\n' + BSDName + '|"; diskutil info /dev/' + BSDName + " | grep SMART;";
														}
													}
												});
											} catch (e) {
												util.noop();
											}
											try {
												let devices = linesNVMe.join("\n").split("\n\n          Capacity:");
												devices.shift();
												devices.forEach(function (device) {
													device = "!Capacity: " + device;
													let lines = device.split("\n");
													const linkWidth = util.getValue(lines, "link width", ":", true).trim();
													const sizeStr = util.getValue(lines, "!capacity", ":", true).trim();
													const BSDName = util.getValue(lines, "BSD Name", ":", true).trim();
													if (sizeStr) {
														let sizeValue = 0;
														if (sizeStr.indexOf("(") >= 0)
															sizeValue = parseInt(
																sizeStr
																	.match(/\(([^)]+)\)/)[1]
																	.replace(/\./g, "")
																	.replace(/,/g, "")
																	.replace(/\s/g, ""),
															);
														if (!sizeValue) sizeValue = parseInt(sizeStr);
														if (sizeValue) {
															const smartStatusString = util.getValue(lines, "S.M.A.R.T. status", ":", true).trim().toLowerCase();
															result.push({
																device: BSDName,
																type: "NVMe",
																name: util.getValue(lines, "Model", ":", true).trim(),
																vendor: getVendorFromModel(util.getValue(lines, "Model", ":", true).trim()),
																size: sizeValue,
																bytesPerSector: null,
																totalCylinders: null,
																totalHeads: null,
																totalSectors: null,
																totalTracks: null,
																tracksPerCylinder: null,
																sectorsPerTrack: null,
																firmwareRevision: util.getValue(lines, "Revision", ":", true).trim(),
																serialNum: util.getValue(lines, "Serial Number", ":", true).trim(),
																interfaceType: ("PCIe " + linkWidth).trim(),
																smartStatus: "verified" === smartStatusString ? "OK" : smartStatusString || "unknown",
																temperature: null,
																BSDName,
															});
															cmd = cmd + 'printf "\n' + BSDName + '|"; diskutil info /dev/' + BSDName + " | grep SMART;";
														}
													}
												});
											} catch (e) {
												util.noop();
											}
											try {
												let devices = linesUSB.join("\n").replaceAll("Media:\n ", "Model:").split("\n\n          Product ID:");
												devices.shift();
												devices.forEach(function (device) {
													let lines = device.split("\n");
													const sizeStr = util.getValue(lines, "Capacity", ":", true).trim();
													const BSDName = util.getValue(lines, "BSD Name", ":", true).trim();
													if (sizeStr) {
														let sizeValue = 0;
														if (sizeStr.indexOf("(") >= 0)
															sizeValue = parseInt(
																sizeStr
																	.match(/\(([^)]+)\)/)[1]
																	.replace(/\./g, "")
																	.replace(/,/g, "")
																	.replace(/\s/g, ""),
															);
														if (!sizeValue) sizeValue = parseInt(sizeStr);
														if (sizeValue) {
															const smartStatusString = util.getValue(lines, "S.M.A.R.T. status", ":", true).trim().toLowerCase();
															result.push({
																device: BSDName,
																type: "USB",
																name: util.getValue(lines, "Model", ":", true).trim().replaceAll(":", ""),
																vendor: getVendorFromModel(util.getValue(lines, "Model", ":", true).trim()),
																size: sizeValue,
																bytesPerSector: null,
																totalCylinders: null,
																totalHeads: null,
																totalSectors: null,
																totalTracks: null,
																tracksPerCylinder: null,
																sectorsPerTrack: null,
																firmwareRevision: util.getValue(lines, "Revision", ":", true).trim(),
																serialNum: util.getValue(lines, "Serial Number", ":", true).trim(),
																interfaceType: "USB",
																smartStatus: "verified" === smartStatusString ? "OK" : smartStatusString || "unknown",
																temperature: null,
																BSDName,
															});
															cmd = cmd + 'printf "\n' + BSDName + '|"; diskutil info /dev/' + BSDName + " | grep SMART;";
														}
													}
												});
											} catch (e) {
												util.noop();
											}
											if (cmd) {
												cmd += 'printf "\n"';
												exec(
													cmd,
													{
														maxBuffer: 1024 * 1024,
													},
													function (error, stdout) {
														let lines = stdout.toString().split("\n");
														lines.forEach((line) => {
															if (line) {
																let parts = line.split("|");
																if (2 === parts.length) {
																	let BSDName = parts[0];
																	parts[1] = parts[1].trim();
																	let parts2 = parts[1].split(":");
																	if (2 === parts2.length) {
																		parts2[1] = parts2[1].trim();
																		let status = parts2[1].toLowerCase();
																		for (let i = 0; i < result.length; i++)
																			if (result[i].BSDName === BSDName)
																				result[i].smartStatus =
																					"not supported" === status
																						? "not supported"
																						: "verified" === status
																						? "Ok"
																						: "failing" === status
																						? "Predicted Failure"
																						: "unknown";
																	}
																}
															}
														});
														for (let i = 0; i < result.length; i++) delete result[i].BSDName;
														if (callback) callback(result);
														resolve(result);
													},
												);
											} else {
												for (let i = 0; i < result.length; i++) delete result[i].BSDName;
												if (callback) callback(result);
												resolve(result);
											}
										}
									},
								);
							if (_windows)
								try {
									const workload = [];
									workload.push(
										util.powerShell(
											"Get-WmiObject Win32_DiskDrive | select Caption,Size,Status,PNPDeviceId,BytesPerSector,TotalCylinders,TotalHeads,TotalSectors,TotalTracks,TracksPerCylinder,SectorsPerTrack,FirmwareRevision,SerialNumber,InterfaceType | fl",
										),
									);
									workload.push(util.powerShell("Get-PhysicalDisk | select BusType,MediaType,FriendlyName,Model,SerialNumber,Size | fl"));
									if (util.smartMonToolsInstalled())
										try {
											const smartDev = JSON.parse(execSync("smartctl --scan -j"));
											if (smartDev && smartDev.devices && smartDev.devices.length > 0)
												smartDev.devices.forEach((dev) => {
													workload.push(execPromiseSave(`smartctl -j -a ${dev.name}`, util.execOptsWin));
												});
										} catch (e) {
											util.noop();
										}
									util.promiseAll(workload).then((data) => {
										let devices = data.results[0].toString().split(/\n\s*\n/);
										devices.forEach(function (device) {
											let lines = device.split("\r\n");
											const size = util.getValue(lines, "Size", ":").trim();
											const status = util.getValue(lines, "Status", ":").trim().toLowerCase();
											if (size)
												result.push({
													device: util.getValue(lines, "PNPDeviceId", ":"),
													type: device.indexOf("SSD") > -1 ? "SSD" : "HD",
													name: util.getValue(lines, "Caption", ":"),
													vendor: getVendorFromModel(util.getValue(lines, "Caption", ":", true).trim()),
													size: parseInt(size),
													bytesPerSector: parseInt(util.getValue(lines, "BytesPerSector", ":")),
													totalCylinders: parseInt(util.getValue(lines, "TotalCylinders", ":")),
													totalHeads: parseInt(util.getValue(lines, "TotalHeads", ":")),
													totalSectors: parseInt(util.getValue(lines, "TotalSectors", ":")),
													totalTracks: parseInt(util.getValue(lines, "TotalTracks", ":")),
													tracksPerCylinder: parseInt(util.getValue(lines, "TracksPerCylinder", ":")),
													sectorsPerTrack: parseInt(util.getValue(lines, "SectorsPerTrack", ":")),
													firmwareRevision: util.getValue(lines, "FirmwareRevision", ":").trim(),
													serialNum: util.getValue(lines, "SerialNumber", ":").trim(),
													interfaceType: util.getValue(lines, "InterfaceType", ":").trim(),
													smartStatus: "ok" === status ? "Ok" : "degraded" === status ? "Degraded" : "pred fail" === status ? "Predicted Failure" : "Unknown",
													temperature: null,
												});
										});
										devices = data.results[1].split(/\n\s*\n/);
										devices.forEach(function (device) {
											let lines = device.split("\r\n");
											const serialNum = util.getValue(lines, "SerialNumber", ":").trim();
											const name = util.getValue(lines, "FriendlyName", ":").trim().replace("Msft ", "Microsoft");
											const size = util.getValue(lines, "Size", ":").trim();
											const model = util.getValue(lines, "Model", ":").trim();
											const interfaceType = util.getValue(lines, "BusType", ":").trim();
											let mediaType = util.getValue(lines, "MediaType", ":").trim();
											if ("3" === mediaType || "HDD" === mediaType) mediaType = "HD";
											if ("4" === mediaType) mediaType = "SSD";
											if ("5" === mediaType) mediaType = "SCM";
											if ("Unspecified" === mediaType && (model.toLowerCase().indexOf("virtual") > -1 || model.toLowerCase().indexOf("vbox") > -1))
												mediaType = "Virtual";
											if (size) {
												let i = util.findObjectByKey(result, "serialNum", serialNum);
												if (-1 === i || "" === serialNum) i = util.findObjectByKey(result, "name", name);
												if (-1 != i) {
													result[i].type = mediaType;
													result[i].interfaceType = interfaceType;
												}
											}
										});
										data.results.shift();
										data.results.shift();
										if (data.results.length)
											data.results.forEach((smartStr) => {
												try {
													const smartData = JSON.parse(smartStr);
													if (smartData.serial_number) {
														const serialNum = smartData.serial_number;
														let i = util.findObjectByKey(result, "serialNum", serialNum);
														if (-1 != i) {
															result[i].smartStatus =
																smartData.smart_status && smartData.smart_status.passed
																	? "Ok"
																	: smartData.smart_status && false === smartData.smart_status.passed
																	? "Predicted Failure"
																	: "unknown";
															if (smartData.temperature && smartData.temperature.current) result[i].temperature = smartData.temperature.current;
															result[i].smartData = smartData;
														}
													}
												} catch (e) {
													util.noop();
												}
											});
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.diskLayout = diskLayout;
			},
			27: (__unused_webpack_module, exports, __webpack_require__) => {
				const fs = __webpack_require__(48);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const util = __webpack_require__(858);
				let _platform = process.platform;
				let _nvidiaSmiPath = "";
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				let _resolutionX = 0;
				let _resolutionY = 0;
				let _pixelDepth = 0;
				let _refreshRate = 0;
				const videoTypes = {
					"-2": "UNINITIALIZED",
					"-1": "OTHER",
					0: "HD15",
					1: "SVIDEO",
					2: "Composite video",
					3: "Component video",
					4: "DVI",
					5: "HDMI",
					6: "LVDS",
					8: "D_JPN",
					9: "SDI",
					10: "DP",
					11: "DP embedded",
					12: "UDI",
					13: "UDI embedded",
					14: "SDTVDONGLE",
					15: "MIRACAST",
					2147483648: "INTERNAL",
				};
				function getVendorFromModel(model) {
					const manufacturers = [
						{
							pattern: "^LG.+",
							manufacturer: "LG",
						},
						{
							pattern: "^BENQ.+",
							manufacturer: "BenQ",
						},
						{
							pattern: "^ASUS.+",
							manufacturer: "Asus",
						},
						{
							pattern: "^DELL.+",
							manufacturer: "Dell",
						},
						{
							pattern: "^SAMSUNG.+",
							manufacturer: "Samsung",
						},
						{
							pattern: "^VIEWSON.+",
							manufacturer: "ViewSonic",
						},
						{
							pattern: "^SONY.+",
							manufacturer: "Sony",
						},
						{
							pattern: "^ACER.+",
							manufacturer: "Acer",
						},
						{
							pattern: "^AOC.+",
							manufacturer: "AOC Monitors",
						},
						{
							pattern: "^HP.+",
							manufacturer: "HP",
						},
						{
							pattern: "^EIZO.?",
							manufacturer: "Eizo",
						},
						{
							pattern: "^PHILIPS.?",
							manufacturer: "Philips",
						},
						{
							pattern: "^IIYAMA.?",
							manufacturer: "Iiyama",
						},
						{
							pattern: "^SHARP.?",
							manufacturer: "Sharp",
						},
						{
							pattern: "^NEC.?",
							manufacturer: "NEC",
						},
						{
							pattern: "^LENOVO.?",
							manufacturer: "Lenovo",
						},
						{
							pattern: "COMPAQ.?",
							manufacturer: "Compaq",
						},
						{
							pattern: "APPLE.?",
							manufacturer: "Apple",
						},
						{
							pattern: "INTEL.?",
							manufacturer: "Intel",
						},
						{
							pattern: "AMD.?",
							manufacturer: "AMD",
						},
						{
							pattern: "NVIDIA.?",
							manufacturer: "NVDIA",
						},
					];
					let result = "";
					if (model) {
						model = model.toUpperCase();
						manufacturers.forEach((manufacturer) => {
							const re = RegExp(manufacturer.pattern);
							if (re.test(model)) result = manufacturer.manufacturer;
						});
					}
					return result;
				}
				function getVendorFromId(id) {
					const vendors = {
						610: "Apple",
						"1e6d": "LG",
						"10ac": "DELL",
						"4dd9": "Sony",
						"38a3": "NEC",
					};
					return vendors[id] || "";
				}
				function vendorToId(str) {
					let result = "";
					str = (str || "").toLowerCase();
					if (str.indexOf("apple") >= 0) result = "0x05ac";
					else if (str.indexOf("nvidia") >= 0) result = "0x10de";
					else if (str.indexOf("intel") >= 0) result = "0x8086";
					else if (str.indexOf("ati") >= 0 || str.indexOf("amd") >= 0) result = "0x1002";
					return result;
				}
				function getMetalVersion(id) {
					const families = {
						spdisplays_mtlgpufamilymac1: "mac1",
						spdisplays_mtlgpufamilymac2: "mac2",
						spdisplays_mtlgpufamilyapple1: "apple1",
						spdisplays_mtlgpufamilyapple2: "apple2",
						spdisplays_mtlgpufamilyapple3: "apple3",
						spdisplays_mtlgpufamilyapple4: "apple4",
						spdisplays_mtlgpufamilyapple5: "apple5",
						spdisplays_mtlgpufamilyapple6: "apple6",
						spdisplays_mtlgpufamilyapple7: "apple7",
						spdisplays_metalfeaturesetfamily11: "family1_v1",
						spdisplays_metalfeaturesetfamily12: "family1_v2",
						spdisplays_metalfeaturesetfamily13: "family1_v3",
						spdisplays_metalfeaturesetfamily14: "family1_v4",
						spdisplays_metalfeaturesetfamily21: "family2_v1",
					};
					return families[id] || "";
				}
				function graphics(callback) {
					function parseLinesDarwin(graphicsArr) {
						const res = {
							controllers: [],
							displays: [],
						};
						try {
							graphicsArr.forEach(function (item) {
								const bus = (item.sppci_bus || "").indexOf("builtin") > -1 ? "Built-In" : (item.sppci_bus || "").indexOf("pcie") > -1 ? "PCIe" : "";
								const vram = (parseInt(item.spdisplays_vram || "", 10) || 0) * ((item.spdisplays_vram || "").indexOf("GB") > -1 ? 1024 : 1);
								const vramDyn = (parseInt(item.spdisplays_vram_shared || "", 10) || 0) * ((item.spdisplays_vram_shared || "").indexOf("GB") > -1 ? 1024 : 1);
								let metalVersion = getMetalVersion(item.spdisplays_metal || item.spdisplays_metalfamily || "");
								res.controllers.push({
									vendor: getVendorFromModel(item.spdisplays_vendor || "") || item.spdisplays_vendor || "",
									model: item.sppci_model || "",
									bus,
									vramDynamic: "Built-In" === bus,
									vram: vram || vramDyn || null,
									deviceId: item["spdisplays_device-id"] || "",
									vendorId: item["spdisplays_vendor-id"] || vendorToId((item["spdisplays_vendor"] || "") + (item.sppci_model || "")),
									external: "spdisplays_egpu" === item.sppci_device_type,
									cores: item["sppci_cores"] || null,
									metalVersion,
								});
								if (item.spdisplays_ndrvs && item.spdisplays_ndrvs.length)
									item.spdisplays_ndrvs.forEach(function (displayItem) {
										const connectionType = displayItem["spdisplays_connection_type"] || "";
										const currentResolutionParts = (displayItem["_spdisplays_resolution"] || "").split("@");
										const currentResolution = currentResolutionParts[0].split("x");
										const pixelParts = (displayItem["_spdisplays_pixels"] || "").split("x");
										const pixelDepthString = displayItem["spdisplays_depth"] || "";
										const serial = displayItem["_spdisplays_display-serial-number"] || displayItem["_spdisplays_display-serial-number2"] || null;
										res.displays.push({
											vendor: getVendorFromId(displayItem["_spdisplays_display-vendor-id"] || "") || getVendorFromModel(displayItem["_name"] || ""),
											vendorId: displayItem["_spdisplays_display-vendor-id"] || "",
											model: displayItem["_name"] || "",
											productionYear: displayItem["_spdisplays_display-year"] || null,
											serial: "0" !== serial ? serial : null,
											displayId: displayItem["_spdisplays_displayID"] || null,
											main: displayItem["spdisplays_main"] ? "spdisplays_yes" === displayItem["spdisplays_main"] : false,
											builtin: (displayItem["spdisplays_display_type"] || "").indexOf("built-in") > -1,
											connection:
												connectionType.indexOf("_internal") > -1
													? "Internal"
													: connectionType.indexOf("_displayport") > -1
													? "Display Port"
													: connectionType.indexOf("_hdmi") > -1
													? "HDMI"
													: null,
											sizeX: null,
											sizeY: null,
											pixelDepth:
												"CGSThirtyBitColor" === pixelDepthString
													? 30
													: "CGSThirtytwoBitColor" === pixelDepthString
													? 32
													: "CGSTwentyfourBitColor" === pixelDepthString
													? 24
													: null,
											resolutionX: pixelParts.length > 1 ? parseInt(pixelParts[0], 10) : null,
											resolutionY: pixelParts.length > 1 ? parseInt(pixelParts[1], 10) : null,
											currentResX: currentResolution.length > 1 ? parseInt(currentResolution[0], 10) : null,
											currentResY: currentResolution.length > 1 ? parseInt(currentResolution[1], 10) : null,
											positionX: 0,
											positionY: 0,
											currentRefreshRate: currentResolutionParts.length > 1 ? parseInt(currentResolutionParts[1], 10) : null,
										});
									});
							});
							return res;
						} catch (e) {
							return res;
						}
					}
					function parseLinesLinuxControllers(lines) {
						let controllers = [];
						let currentController = {
							vendor: "",
							model: "",
							bus: "",
							busAddress: "",
							vram: null,
							vramDynamic: false,
							pciID: "",
						};
						let isGraphicsController = false;
						let pciIDs = [];
						try {
							pciIDs = execSync('export LC_ALL=C; dmidecode -t 9 2>/dev/null; unset LC_ALL | grep "Bus Address: "').toString().split("\n");
							for (let i = 0; i < pciIDs.length; i++) pciIDs[i] = pciIDs[i].replace("Bus Address:", "").replace("0000:", "").trim();
							pciIDs = pciIDs.filter(function (el) {
								return null != el && el;
							});
						} catch (e) {
							util.noop();
						}
						for (let i = 0; i < lines.length; i++)
							if ("" !== lines[i].trim()) {
								if (" " !== lines[i][0] && "\t" !== lines[i][0]) {
									let isExternal = pciIDs.indexOf(lines[i].split(" ")[0]) >= 0;
									let vgapos = lines[i].toLowerCase().indexOf(" vga ");
									let _3dcontrollerpos = lines[i].toLowerCase().indexOf("3d controller");
									if (-1 !== vgapos || -1 !== _3dcontrollerpos) {
										if (-1 !== _3dcontrollerpos && -1 === vgapos) vgapos = _3dcontrollerpos;
										if (
											currentController.vendor ||
											currentController.model ||
											currentController.bus ||
											null !== currentController.vram ||
											currentController.vramDynamic
										) {
											controllers.push(currentController);
											currentController = {
												vendor: "",
												model: "",
												bus: "",
												busAddress: "",
												vram: null,
												vramDynamic: false,
											};
										}
										const pciIDCandidate = lines[i].split(" ")[0];
										if (/[\da-fA-F]{2}:[\da-fA-F]{2}\.[\da-fA-F]/.test(pciIDCandidate)) currentController.busAddress = pciIDCandidate;
										isGraphicsController = true;
										let endpos = lines[i].search(/\[[0-9a-f]{4}:[0-9a-f]{4}]|$/);
										let parts = lines[i].substr(vgapos, endpos - vgapos).split(":");
										currentController.busAddress = lines[i].substr(0, vgapos).trim();
										if (parts.length > 1) {
											parts[1] = parts[1].trim();
											if (parts[1].toLowerCase().indexOf("corporation") >= 0) {
												currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf("corporation") + 11).trim();
												currentController.model = parts[1]
													.substr(parts[1].toLowerCase().indexOf("corporation") + 11, 200)
													.trim()
													.split("(")[0];
												currentController.bus = pciIDs.length > 0 && isExternal ? "PCIe" : "Onboard";
												currentController.vram = null;
												currentController.vramDynamic = false;
											} else if (parts[1].toLowerCase().indexOf(" inc.") >= 0) {
												if ((parts[1].match(new RegExp("]", "g")) || []).length > 1) {
													currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf("]") + 1).trim();
													currentController.model = parts[1]
														.substr(parts[1].toLowerCase().indexOf("]") + 1, 200)
														.trim()
														.split("(")[0]
														.trim();
												} else {
													currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf(" inc.") + 5).trim();
													currentController.model = parts[1]
														.substr(parts[1].toLowerCase().indexOf(" inc.") + 5, 200)
														.trim()
														.split("(")[0]
														.trim();
												}
												currentController.bus = pciIDs.length > 0 && isExternal ? "PCIe" : "Onboard";
												currentController.vram = null;
												currentController.vramDynamic = false;
											} else if (parts[1].toLowerCase().indexOf(" ltd.") >= 0)
												if ((parts[1].match(new RegExp("]", "g")) || []).length > 1) {
													currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf("]") + 1).trim();
													currentController.model = parts[1]
														.substr(parts[1].toLowerCase().indexOf("]") + 1, 200)
														.trim()
														.split("(")[0]
														.trim();
												} else {
													currentController.vendor = parts[1].substr(0, parts[1].toLowerCase().indexOf(" ltd.") + 5).trim();
													currentController.model = parts[1]
														.substr(parts[1].toLowerCase().indexOf(" ltd.") + 5, 200)
														.trim()
														.split("(")[0]
														.trim();
												}
										}
									} else isGraphicsController = false;
								}
								if (isGraphicsController) {
									let parts = lines[i].split(":");
									if (parts.length > 1 && -1 !== parts[0].replace(/ +/g, "").toLowerCase().indexOf("devicename") && -1 !== parts[1].toLowerCase().indexOf("onboard"))
										currentController.bus = "Onboard";
									if (parts.length > 1 && -1 !== parts[0].replace(/ +/g, "").toLowerCase().indexOf("region") && -1 !== parts[1].toLowerCase().indexOf("memory")) {
										let memparts = parts[1].split("=");
										if (memparts.length > 1) currentController.vram = parseInt(memparts[1]);
									}
								}
							}
						if (
							currentController.vendor ||
							currentController.model ||
							currentController.bus ||
							currentController.busAddress ||
							null !== currentController.vram ||
							currentController.vramDynamic
						)
							controllers.push(currentController);
						return controllers;
					}
					function parseLinesLinuxClinfo(controllers, lines) {
						const fieldPattern = /\[([^\]]+)\]\s+(\w+)\s+(.*)/;
						const devices = lines.reduce((devices, line) => {
							const field = fieldPattern.exec(line.trim());
							if (field) {
								if (!devices[field[1]]) devices[field[1]] = {};
								devices[field[1]][field[2]] = field[3];
							}
							return devices;
						}, {});
						for (let deviceId in devices) {
							const device = devices[deviceId];
							if ("CL_DEVICE_TYPE_GPU" === device["CL_DEVICE_TYPE"]) {
								let busAddress;
								if (device["CL_DEVICE_TOPOLOGY_AMD"]) {
									const bdf = device["CL_DEVICE_TOPOLOGY_AMD"].match(/[a-zA-Z0-9]+:\d+\.\d+/);
									if (bdf) busAddress = bdf[0];
								} else if (device["CL_DEVICE_PCI_BUS_ID_NV"] && device["CL_DEVICE_PCI_SLOT_ID_NV"]) {
									const bus = parseInt(device["CL_DEVICE_PCI_BUS_ID_NV"]);
									const slot = parseInt(device["CL_DEVICE_PCI_SLOT_ID_NV"]);
									if (!isNaN(bus) && !isNaN(slot)) {
										const b = 255 & bus;
										const d = (slot >> 3) & 255;
										const f = 7 & slot;
										busAddress = `${b.toString().padStart(2, "0")}:${d.toString().padStart(2, "0")}.${f}`;
									}
								}
								if (busAddress) {
									let controller = controllers.find((controller) => controller.busAddress === busAddress);
									if (!controller) {
										controller = {
											vendor: "",
											model: "",
											bus: "",
											busAddress,
											vram: null,
											vramDynamic: false,
										};
										controllers.push(controller);
									}
									controller.vendor = device["CL_DEVICE_VENDOR"];
									if (device["CL_DEVICE_BOARD_NAME_AMD"]) controller.model = device["CL_DEVICE_BOARD_NAME_AMD"];
									else controller.model = device["CL_DEVICE_NAME"];
									const memory = parseInt(device["CL_DEVICE_GLOBAL_MEM_SIZE"]);
									if (!isNaN(memory)) controller.vram = Math.round(memory / 1024 / 1024);
								}
							}
						}
						return controllers;
					}
					function getNvidiaSmi() {
						if (_nvidiaSmiPath) return _nvidiaSmiPath;
						if (_windows)
							try {
								const basePath = util.WINDIR + "\\System32\\DriverStore\\FileRepository";
								const candidateDirs = fs.readdirSync(basePath).filter((dir) => fs.readdirSync([basePath, dir].join("/")).includes("nvidia-smi.exe"));
								const targetDir = candidateDirs.reduce((prevDir, currentDir) => {
									const previousNvidiaSmi = fs.statSync([basePath, prevDir, "nvidia-smi.exe"].join("/"));
									const currentNvidiaSmi = fs.statSync([basePath, currentDir, "nvidia-smi.exe"].join("/"));
									return previousNvidiaSmi.ctimeMs > currentNvidiaSmi.ctimeMs ? prevDir : currentDir;
								});
								if (targetDir) _nvidiaSmiPath = [basePath, targetDir, "nvidia-smi.exe"].join("/");
							} catch (e) {
								util.noop();
							}
						else if (_linux) _nvidiaSmiPath = "nvidia-smi";
						return _nvidiaSmiPath;
					}
					function nvidiaSmi(options) {
						const nvidiaSmiExe = getNvidiaSmi();
						options = options || util.execOptsWin;
						if (nvidiaSmiExe) {
							const nvidiaSmiOpts =
								"--query-gpu=driver_version,pci.sub_device_id,name,pci.bus_id,fan.speed,memory.total,memory.used,memory.free,utilization.gpu,utilization.memory,temperature.gpu,temperature.memory,power.draw,power.limit,clocks.gr,clocks.mem --format=csv,noheader,nounits";
							const cmd = nvidiaSmiExe + " " + nvidiaSmiOpts + (_linux ? "  2>/dev/null" : "");
							try {
								const res = execSync(cmd, options).toString();
								return res;
							} catch (e) {
								util.noop();
							}
						}
						return "";
					}
					function nvidiaDevices() {
						function safeParseNumber(value) {
							if ([null, void 0].includes(value)) return value;
							return parseFloat(value);
						}
						const stdout = nvidiaSmi();
						if (!stdout) return [];
						const gpus = stdout.split("\n").filter(Boolean);
						const results = gpus.map((gpu) => {
							const splittedData = gpu.split(", ").map((value) => (value.includes("N/A") ? void 0 : value));
							if (16 === splittedData.length)
								return {
									driverVersion: splittedData[0],
									subDeviceId: splittedData[1],
									name: splittedData[2],
									pciBus: splittedData[3],
									fanSpeed: safeParseNumber(splittedData[4]),
									memoryTotal: safeParseNumber(splittedData[5]),
									memoryUsed: safeParseNumber(splittedData[6]),
									memoryFree: safeParseNumber(splittedData[7]),
									utilizationGpu: safeParseNumber(splittedData[8]),
									utilizationMemory: safeParseNumber(splittedData[9]),
									temperatureGpu: safeParseNumber(splittedData[10]),
									temperatureMemory: safeParseNumber(splittedData[11]),
									powerDraw: safeParseNumber(splittedData[12]),
									powerLimit: safeParseNumber(splittedData[13]),
									clockCore: safeParseNumber(splittedData[14]),
									clockMemory: safeParseNumber(splittedData[15]),
								};
						});
						return results;
					}
					function mergeControllerNvidia(controller, nvidia) {
						if (nvidia.driverVersion) controller.driverVersion = nvidia.driverVersion;
						if (nvidia.subDeviceId) controller.subDeviceId = nvidia.subDeviceId;
						if (nvidia.name) controller.name = nvidia.name;
						if (nvidia.pciBus) controller.pciBus = nvidia.pciBus;
						if (nvidia.fanSpeed) controller.fanSpeed = nvidia.fanSpeed;
						if (nvidia.memoryTotal) {
							controller.memoryTotal = nvidia.memoryTotal;
							controller.vram = nvidia.memoryTotal;
							controller.vramDynamic = false;
						}
						if (nvidia.memoryUsed) controller.memoryUsed = nvidia.memoryUsed;
						if (nvidia.memoryFree) controller.memoryFree = nvidia.memoryFree;
						if (nvidia.utilizationGpu) controller.utilizationGpu = nvidia.utilizationGpu;
						if (nvidia.utilizationMemory) controller.utilizationMemory = nvidia.utilizationMemory;
						if (nvidia.temperatureGpu) controller.temperatureGpu = nvidia.temperatureGpu;
						if (nvidia.temperatureMemory) controller.temperatureMemory = nvidia.temperatureMemory;
						if (nvidia.powerDraw) controller.powerDraw = nvidia.powerDraw;
						if (nvidia.powerLimit) controller.powerLimit = nvidia.powerLimit;
						if (nvidia.clockCore) controller.clockCore = nvidia.clockCore;
						if (nvidia.clockMemory) controller.clockMemory = nvidia.clockMemory;
						return controller;
					}
					function parseLinesLinuxEdid(edid) {
						let result = {
							vendor: "",
							model: "",
							deviceName: "",
							main: false,
							builtin: false,
							connection: "",
							sizeX: null,
							sizeY: null,
							pixelDepth: null,
							resolutionX: null,
							resolutionY: null,
							currentResX: null,
							currentResY: null,
							positionX: 0,
							positionY: 0,
							currentRefreshRate: null,
						};
						let start = 108;
						if ("000000" === edid.substr(start, 6)) start += 36;
						if ("000000" === edid.substr(start, 6)) start += 36;
						if ("000000" === edid.substr(start, 6)) start += 36;
						if ("000000" === edid.substr(start, 6)) start += 36;
						result.resolutionX = parseInt("0x0" + edid.substr(start + 8, 1) + edid.substr(start + 4, 2));
						result.resolutionY = parseInt("0x0" + edid.substr(start + 14, 1) + edid.substr(start + 10, 2));
						result.sizeX = parseInt("0x0" + edid.substr(start + 28, 1) + edid.substr(start + 24, 2));
						result.sizeY = parseInt("0x0" + edid.substr(start + 29, 1) + edid.substr(start + 26, 2));
						start = edid.indexOf("000000fc00");
						if (start >= 0) {
							let model_raw = edid.substr(start + 10, 26);
							if (-1 !== model_raw.indexOf("0a")) model_raw = model_raw.substr(0, model_raw.indexOf("0a"));
							try {
								if (model_raw.length > 2)
									result.model = model_raw
										.match(/.{1,2}/g)
										.map(function (v) {
											return String.fromCharCode(parseInt(v, 16));
										})
										.join("");
							} catch (e) {
								util.noop();
							}
						} else result.model = "";
						return result;
					}
					function parseLinesLinuxDisplays(lines, depth) {
						let displays = [];
						let currentDisplay = {
							vendor: "",
							model: "",
							deviceName: "",
							main: false,
							builtin: false,
							connection: "",
							sizeX: null,
							sizeY: null,
							pixelDepth: null,
							resolutionX: null,
							resolutionY: null,
							currentResX: null,
							currentResY: null,
							positionX: 0,
							positionY: 0,
							currentRefreshRate: null,
						};
						let is_edid = false;
						let is_current = false;
						let edid_raw = "";
						let start = 0;
						for (let i = 1; i < lines.length; i++)
							if ("" !== lines[i].trim()) {
								if (" " !== lines[i][0] && "\t" !== lines[i][0] && -1 !== lines[i].toLowerCase().indexOf(" connected ")) {
									if (
										currentDisplay.model ||
										currentDisplay.main ||
										currentDisplay.builtin ||
										currentDisplay.connection ||
										null !== currentDisplay.sizeX ||
										null !== currentDisplay.pixelDepth ||
										null !== currentDisplay.resolutionX
									) {
										displays.push(currentDisplay);
										currentDisplay = {
											vendor: "",
											model: "",
											main: false,
											builtin: false,
											connection: "",
											sizeX: null,
											sizeY: null,
											pixelDepth: null,
											resolutionX: null,
											resolutionY: null,
											currentResX: null,
											currentResY: null,
											positionX: 0,
											positionY: 0,
											currentRefreshRate: null,
										};
									}
									let parts = lines[i].split(" ");
									currentDisplay.connection = parts[0];
									currentDisplay.main = lines[i].toLowerCase().indexOf(" primary ") >= 0;
									currentDisplay.builtin = parts[0].toLowerCase().indexOf("edp") >= 0;
								}
								if (is_edid)
									if (lines[i].search(/\S|$/) > start) edid_raw += lines[i].toLowerCase().trim();
									else {
										let edid_decoded = parseLinesLinuxEdid(edid_raw);
										currentDisplay.vendor = edid_decoded.vendor;
										currentDisplay.model = edid_decoded.model;
										currentDisplay.resolutionX = edid_decoded.resolutionX;
										currentDisplay.resolutionY = edid_decoded.resolutionY;
										currentDisplay.sizeX = edid_decoded.sizeX;
										currentDisplay.sizeY = edid_decoded.sizeY;
										currentDisplay.pixelDepth = depth;
										is_edid = false;
									}
								if (lines[i].toLowerCase().indexOf("edid:") >= 0) {
									is_edid = true;
									start = lines[i].search(/\S|$/);
								}
								if (lines[i].toLowerCase().indexOf("*current") >= 0) {
									const parts1 = lines[i].split("(");
									if (parts1 && parts1.length > 1 && parts1[0].indexOf("x") >= 0) {
										const resParts = parts1[0].trim().split("x");
										currentDisplay.currentResX = util.toInt(resParts[0]);
										currentDisplay.currentResY = util.toInt(resParts[1]);
									}
									is_current = true;
								}
								if (
									is_current &&
									lines[i].toLowerCase().indexOf("clock") >= 0 &&
									lines[i].toLowerCase().indexOf("hz") >= 0 &&
									lines[i].toLowerCase().indexOf("v: height") >= 0
								) {
									const parts1 = lines[i].split("clock");
									if (parts1 && parts1.length > 1 && parts1[1].toLowerCase().indexOf("hz") >= 0) currentDisplay.currentRefreshRate = util.toInt(parts1[1]);
									is_current = false;
								}
							}
						if (
							currentDisplay.model ||
							currentDisplay.main ||
							currentDisplay.builtin ||
							currentDisplay.connection ||
							null !== currentDisplay.sizeX ||
							null !== currentDisplay.pixelDepth ||
							null !== currentDisplay.resolutionX
						)
							displays.push(currentDisplay);
						return displays;
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								controllers: [],
								displays: [],
							};
							if (_darwin) {
								let cmd = "system_profiler -xml -detailLevel full SPDisplaysDataType";
								exec(cmd, function (error, stdout) {
									if (!error)
										try {
											let output = stdout.toString();
											result = parseLinesDarwin(util.plistParser(output)[0]._items);
										} catch (e) {
											util.noop();
										}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_linux)
								if (util.isRaspberry() && util.isRaspbian()) {
									let cmd = "fbset -s | grep 'mode \"'; vcgencmd get_mem gpu; tvservice -s; tvservice -n;";
									exec(cmd, function (error, stdout) {
										let lines = stdout.toString().split("\n");
										if (lines.length > 3 && lines[0].indexOf('mode "') >= -1 && lines[2].indexOf("0x12000a") > -1) {
											const parts = lines[0].replace("mode", "").replace(/"/g, "").trim().split("x");
											if (2 === parts.length)
												result.displays.push({
													vendor: "",
													model: util.getValue(lines, "device_name", "="),
													main: true,
													builtin: false,
													connection: "HDMI",
													sizeX: null,
													sizeY: null,
													pixelDepth: null,
													resolutionX: parseInt(parts[0], 10),
													resolutionY: parseInt(parts[1], 10),
													currentResX: null,
													currentResY: null,
													positionX: 0,
													positionY: 0,
													currentRefreshRate: null,
												});
										}
										if (lines.length > 1 && stdout.toString().indexOf("gpu=") >= -1)
											result.controllers.push({
												vendor: "Broadcom",
												model: "VideoCore IV",
												bus: "",
												vram: util.getValue(lines, "gpu", "=").replace("M", ""),
												vramDynamic: true,
											});
										if (callback) callback(result);
										resolve(result);
									});
								} else {
									let cmd = "lspci -vvv  2>/dev/null";
									exec(cmd, function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											result.controllers = parseLinesLinuxControllers(lines);
											const nvidiaData = nvidiaDevices();
											result.controllers = result.controllers.map((controller) =>
												mergeControllerNvidia(
													controller,
													nvidiaData.find((contr) => contr.pciBus.toLowerCase().endsWith(controller.busAddress.toLowerCase())) || {},
												),
											);
										}
										let cmd = "clinfo --raw";
										exec(cmd, function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												result.controllers = parseLinesLinuxClinfo(result.controllers, lines);
											}
											let cmd = "xdpyinfo 2>/dev/null | grep 'depth of root window' | awk '{ print $5 }'";
											exec(cmd, function (error, stdout) {
												let depth = 0;
												if (!error) {
													let lines = stdout.toString().split("\n");
													depth = parseInt(lines[0]) || 0;
												}
												let cmd = "xrandr --verbose 2>/dev/null";
												exec(cmd, function (error, stdout) {
													if (!error) {
														let lines = stdout.toString().split("\n");
														result.displays = parseLinesLinuxDisplays(lines, depth);
													}
													if (callback) callback(result);
													resolve(result);
												});
											});
										});
									});
								}
							if (_freebsd || _openbsd || _netbsd) {
								if (callback) callback(null);
								resolve(null);
							}
							if (_sunos) {
								if (callback) callback(null);
								resolve(null);
							}
							if (_windows)
								try {
									const workload = [];
									workload.push(util.powerShell("Get-WmiObject win32_VideoController | fl *"));
									workload.push(
										util.powerShell(
											'gp "HKLM:\\SYSTEM\\ControlSet001\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\*" -ErrorAction SilentlyContinue | where MatchingDeviceId $null -NE | select MatchingDeviceId,HardwareInformation.qwMemorySize | fl',
										),
									);
									workload.push(util.powerShell("Get-WmiObject win32_desktopmonitor | fl *"));
									workload.push(util.powerShell("Get-CimInstance -Namespace root\\wmi -ClassName WmiMonitorBasicDisplayParams | fl"));
									workload.push(util.powerShell("Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Screen]::AllScreens"));
									workload.push(util.powerShell("Get-CimInstance -Namespace root\\wmi -ClassName WmiMonitorConnectionParams | fl"));
									workload.push(
										util.powerShell(
											'gwmi WmiMonitorID -Namespace root\\wmi | ForEach-Object {(($_.ManufacturerName -notmatch 0 | foreach {[char]$_}) -join "") + "|" + (($_.ProductCodeID -notmatch 0 | foreach {[char]$_}) -join "") + "|" + (($_.UserFriendlyName -notmatch 0 | foreach {[char]$_}) -join "") + "|" + (($_.SerialNumberID -notmatch 0 | foreach {[char]$_}) -join "") + "|" + $_.InstanceName}',
										),
									);
									const nvidiaData = nvidiaDevices();
									Promise.all(workload)
										.then((data) => {
											let csections = data[0].replace(/\r/g, "").split(/\n\s*\n/);
											let vsections = data[1].replace(/\r/g, "").split(/\n\s*\n/);
											result.controllers = parseLinesWindowsControllers(csections, vsections);
											result.controllers = result.controllers.map((controller) => {
												if ("nvidia" === controller.vendor.toLowerCase())
													return mergeControllerNvidia(
														controller,
														nvidiaData.find((device) => {
															let windowsSubDeviceId = (controller.subDeviceId || "").toLowerCase();
															const nvidiaSubDeviceIdParts = device.subDeviceId.split("x");
															let nvidiaSubDeviceId =
																nvidiaSubDeviceIdParts.length > 1 ? nvidiaSubDeviceIdParts[1].toLowerCase() : nvidiaSubDeviceIdParts[0].toLowerCase();
															const lengthDifference = Math.abs(windowsSubDeviceId.length - nvidiaSubDeviceId.length);
															if (windowsSubDeviceId.length > nvidiaSubDeviceId.length)
																for (let i = 0; i < lengthDifference; i++) nvidiaSubDeviceId = "0" + nvidiaSubDeviceId;
															else if (windowsSubDeviceId.length < nvidiaSubDeviceId.length)
																for (let i = 0; i < lengthDifference; i++) windowsSubDeviceId = "0" + windowsSubDeviceId;
															return windowsSubDeviceId === nvidiaSubDeviceId;
														}) || {},
													);
												else return controller;
											});
											let dsections = data[2].replace(/\r/g, "").split(/\n\s*\n/);
											if ("" === dsections[0].trim()) dsections.shift();
											if (dsections.length && "" === dsections[dsections.length - 1].trim()) dsections.pop();
											let msections = data[3].replace(/\r/g, "").split("Active ");
											msections.shift();
											let ssections = data[4].replace(/\r/g, "").split("BitsPerPixel ");
											ssections.shift();
											let tsections = data[5].replace(/\r/g, "").split(/\n\s*\n/);
											tsections.shift();
											const res = data[6].replace(/\r/g, "").split(/\n/);
											let isections = [];
											res.forEach((element) => {
												const parts = element.split("|");
												if (5 === parts.length)
													isections.push({
														vendor: parts[0],
														code: parts[1],
														model: parts[2],
														serial: parts[3],
														instanceId: parts[4],
													});
											});
											result.displays = parseLinesWindowsDisplaysPowershell(ssections, msections, dsections, tsections, isections);
											if (1 === result.displays.length) {
												if (_resolutionX) {
													result.displays[0].resolutionX = _resolutionX;
													if (!result.displays[0].currentResX) result.displays[0].currentResX = _resolutionX;
												}
												if (_resolutionY) {
													result.displays[0].resolutionY = _resolutionY;
													if (0 === result.displays[0].currentResY) result.displays[0].currentResY = _resolutionY;
												}
												if (_pixelDepth) result.displays[0].pixelDepth = _pixelDepth;
												if (_refreshRate && !result.displays[0].currentRefreshRate) result.displays[0].currentRefreshRate = _refreshRate;
											}
											if (callback) callback(result);
											resolve(result);
										})
										.catch(() => {
											if (callback) callback(result);
											resolve(result);
										});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
					function parseLinesWindowsControllers(sections, vections) {
						const memorySizes = {};
						for (const i in vections)
							if ({}.hasOwnProperty.call(vections, i))
								if ("" !== vections[i].trim()) {
									const lines = vections[i].trim().split("\n");
									const matchingDeviceId = util
										.getValue(lines, "MatchingDeviceId")
										.match(/PCI\\(VEN_[0-9A-F]{4})&(DEV_[0-9A-F]{4})(?:&(SUBSYS_[0-9A-F]{8}))?(?:&(REV_[0-9A-F]{2}))?/i);
									if (matchingDeviceId) {
										const quadWordmemorySize = parseInt(util.getValue(lines, "HardwareInformation.qwMemorySize"));
										if (!isNaN(quadWordmemorySize)) {
											let deviceId = matchingDeviceId[1].toUpperCase() + "&" + matchingDeviceId[2].toUpperCase();
											if (matchingDeviceId[3]) deviceId += "&" + matchingDeviceId[3].toUpperCase();
											if (matchingDeviceId[4]) deviceId += "&" + matchingDeviceId[4].toUpperCase();
											memorySizes[deviceId] = quadWordmemorySize;
										}
									}
								}
						let controllers = [];
						for (let i in sections)
							if ({}.hasOwnProperty.call(sections, i))
								if ("" !== sections[i].trim()) {
									let lines = sections[i].trim().split("\n");
									let pnpDeviceId = util
										.getValue(lines, "PNPDeviceID", ":")
										.match(/PCI\\(VEN_[0-9A-F]{4})&(DEV_[0-9A-F]{4})(?:&(SUBSYS_[0-9A-F]{8}))?(?:&(REV_[0-9A-F]{2}))?/i);
									let subDeviceId = null;
									let memorySize = null;
									if (pnpDeviceId) {
										subDeviceId = pnpDeviceId[3] || "";
										if (subDeviceId) subDeviceId = subDeviceId.split("_")[1];
										if (null == memorySize && pnpDeviceId[3] && pnpDeviceId[4]) {
											const deviceId =
												pnpDeviceId[1].toUpperCase() +
												"&" +
												pnpDeviceId[2].toUpperCase() +
												"&" +
												pnpDeviceId[3].toUpperCase() +
												"&" +
												pnpDeviceId[4].toUpperCase();
											if ({}.hasOwnProperty.call(memorySizes, deviceId)) memorySize = memorySizes[deviceId];
										}
										if (null == memorySize && pnpDeviceId[3]) {
											const deviceId = pnpDeviceId[1].toUpperCase() + "&" + pnpDeviceId[2].toUpperCase() + "&" + pnpDeviceId[3].toUpperCase();
											if ({}.hasOwnProperty.call(memorySizes, deviceId)) memorySize = memorySizes[deviceId];
										}
										if (null == memorySize && pnpDeviceId[4]) {
											const deviceId = pnpDeviceId[1].toUpperCase() + "&" + pnpDeviceId[2].toUpperCase() + "&" + pnpDeviceId[4].toUpperCase();
											if ({}.hasOwnProperty.call(memorySizes, deviceId)) memorySize = memorySizes[deviceId];
										}
										if (null == memorySize) {
											const deviceId = pnpDeviceId[1].toUpperCase() + "&" + pnpDeviceId[2].toUpperCase();
											if ({}.hasOwnProperty.call(memorySizes, deviceId)) memorySize = memorySizes[deviceId];
										}
									}
									controllers.push({
										vendor: util.getValue(lines, "AdapterCompatibility", ":"),
										model: util.getValue(lines, "name", ":"),
										bus: util.getValue(lines, "PNPDeviceID", ":").startsWith("PCI") ? "PCI" : "",
										vram: (null == memorySize ? util.toInt(util.getValue(lines, "AdapterRAM", ":")) : memorySize) / 1024 / 1024,
										vramDynamic: "2" === util.getValue(lines, "VideoMemoryType", ":"),
										subDeviceId,
									});
									_resolutionX = util.toInt(util.getValue(lines, "CurrentHorizontalResolution", ":")) || _resolutionX;
									_resolutionY = util.toInt(util.getValue(lines, "CurrentVerticalResolution", ":")) || _resolutionY;
									_refreshRate = util.toInt(util.getValue(lines, "CurrentRefreshRate", ":")) || _refreshRate;
									_pixelDepth = util.toInt(util.getValue(lines, "CurrentBitsPerPixel", ":")) || _pixelDepth;
								}
						return controllers;
					}
					function parseLinesWindowsDisplaysPowershell(ssections, msections, dsections, tsections, isections) {
						let displays = [];
						let vendor = "";
						let model = "";
						let deviceID = "";
						let resolutionX = 0;
						let resolutionY = 0;
						if (dsections && dsections.length) {
							let linesDisplay = dsections[0].split("\n");
							vendor = util.getValue(linesDisplay, "MonitorManufacturer", ":");
							model = util.getValue(linesDisplay, "Name", ":");
							deviceID = util.getValue(linesDisplay, "PNPDeviceID", ":").replace(/&amp;/g, "&").toLowerCase();
							resolutionX = util.toInt(util.getValue(linesDisplay, "ScreenWidth", ":"));
							resolutionY = util.toInt(util.getValue(linesDisplay, "ScreenHeight", ":"));
						}
						for (let i = 0; i < ssections.length; i++)
							if ("" !== ssections[i].trim()) {
								ssections[i] = "BitsPerPixel " + ssections[i];
								msections[i] = "Active " + msections[i];
								if (0 === tsections.length || void 0 === tsections[i]) tsections[i] = "Unknown";
								let linesScreen = ssections[i].split("\n");
								let linesMonitor = msections[i].split("\n");
								let linesConnection = tsections[i].split("\n");
								const bitsPerPixel = util.getValue(linesScreen, "BitsPerPixel");
								const bounds = util.getValue(linesScreen, "Bounds").replace("{", "").replace("}", "").replace(/=/g, ":").split(",");
								const primary = util.getValue(linesScreen, "Primary");
								const sizeX = util.getValue(linesMonitor, "MaxHorizontalImageSize");
								const sizeY = util.getValue(linesMonitor, "MaxVerticalImageSize");
								const instanceName = util.getValue(linesMonitor, "InstanceName").toLowerCase();
								const videoOutputTechnology = util.getValue(linesConnection, "VideoOutputTechnology");
								const deviceName = util.getValue(linesScreen, "DeviceName");
								let displayVendor = "";
								let displayModel = "";
								isections.forEach((element) => {
									if (element.instanceId.toLowerCase().startsWith(instanceName) && vendor.startsWith("(") && model.startsWith("PnP")) {
										displayVendor = element.vendor;
										displayModel = element.model;
									}
								});
								displays.push({
									vendor: instanceName.startsWith(deviceID) && "" === displayVendor ? vendor : displayVendor,
									model: instanceName.startsWith(deviceID) && "" === displayModel ? model : displayModel,
									deviceName,
									main: "true" === primary.toLowerCase(),
									builtin: "2147483648" === videoOutputTechnology,
									connection: videoOutputTechnology && videoTypes[videoOutputTechnology] ? videoTypes[videoOutputTechnology] : "",
									resolutionX: util.toInt(util.getValue(bounds, "Width", ":")),
									resolutionY: util.toInt(util.getValue(bounds, "Height", ":")),
									sizeX: sizeX ? parseInt(sizeX, 10) : null,
									sizeY: sizeY ? parseInt(sizeY, 10) : null,
									pixelDepth: bitsPerPixel,
									currentResX: util.toInt(util.getValue(bounds, "Width", ":")),
									currentResY: util.toInt(util.getValue(bounds, "Height", ":")),
									positionX: util.toInt(util.getValue(bounds, "X", ":")),
									positionY: util.toInt(util.getValue(bounds, "Y", ":")),
								});
							}
						if (0 === ssections.length)
							displays.push({
								vendor,
								model,
								main: true,
								sizeX: null,
								sizeY: null,
								resolutionX,
								resolutionY,
								pixelDepth: null,
								currentResX: resolutionX,
								currentResY: resolutionY,
								positionX: 0,
								positionY: 0,
							});
						return displays;
					}
				}
				exports.graphics = graphics;
			},
			303: (__unused_webpack_module, exports, __webpack_require__) => {
				const lib_version = __webpack_require__(631).i8;
				const util = __webpack_require__(858);
				const system = __webpack_require__(57);
				const osInfo = __webpack_require__(17);
				const cpu = __webpack_require__(871);
				const memory = __webpack_require__(453);
				const battery = __webpack_require__(620);
				const graphics = __webpack_require__(27);
				const filesystem = __webpack_require__(255);
				const network = __webpack_require__(96);
				const wifi = __webpack_require__(694);
				const processes = __webpack_require__(537);
				const users = __webpack_require__(577);
				const internet = __webpack_require__(34);
				const docker = __webpack_require__(866);
				const vbox = __webpack_require__(398);
				const printer = __webpack_require__(818);
				const usb = __webpack_require__(848);
				const audio = __webpack_require__(764);
				const bluetooth = __webpack_require__(184);
				let _platform = process.platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				if (_windows) util.getCodepage();
				function version() {
					return lib_version;
				}
				function getStaticData(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let data = {};
							data.version = version();
							Promise.all([
								system.system(),
								system.bios(),
								system.baseboard(),
								system.chassis(),
								osInfo.osInfo(),
								osInfo.uuid(),
								osInfo.versions(),
								cpu.cpu(),
								cpu.cpuFlags(),
								graphics.graphics(),
								network.networkInterfaces(),
								memory.memLayout(),
								filesystem.diskLayout(),
							]).then((res) => {
								data.system = res[0];
								data.bios = res[1];
								data.baseboard = res[2];
								data.chassis = res[3];
								data.os = res[4];
								data.uuid = res[5];
								data.versions = res[6];
								data.cpu = res[7];
								data.cpu.flags = res[8];
								data.graphics = res[9];
								data.net = res[10];
								data.memLayout = res[11];
								data.diskLayout = res[12];
								if (callback) callback(data);
								resolve(data);
							});
						});
					});
				}
				function getDynamicData(srv, iface, callback) {
					if (util.isFunction(iface)) {
						callback = iface;
						iface = "";
					}
					if (util.isFunction(srv)) {
						callback = srv;
						srv = "";
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							iface = iface || network.getDefaultNetworkInterface();
							srv = srv || "";
							let functionProcessed = (function () {
								let totalFunctions = 15;
								if (_windows) totalFunctions = 13;
								if (_freebsd || _openbsd || _netbsd) totalFunctions = 11;
								if (_sunos) totalFunctions = 6;
								return function () {
									if (0 === --totalFunctions) {
										if (callback) callback(data);
										resolve(data);
									}
								};
							})();
							let data = {};
							data.time = osInfo.time();
							data.node = process.versions.node;
							data.v8 = process.versions.v8;
							cpu.cpuCurrentSpeed().then((res) => {
								data.cpuCurrentSpeed = res;
								functionProcessed();
							});
							users.users().then((res) => {
								data.users = res;
								functionProcessed();
							});
							processes.processes().then((res) => {
								data.processes = res;
								functionProcessed();
							});
							cpu.currentLoad().then((res) => {
								data.currentLoad = res;
								functionProcessed();
							});
							if (!_sunos)
								cpu.cpuTemperature().then((res) => {
									data.temp = res;
									functionProcessed();
								});
							if (!_openbsd && !_freebsd && !_netbsd && !_sunos)
								network.networkStats(iface).then((res) => {
									data.networkStats = res;
									functionProcessed();
								});
							if (!_sunos)
								network.networkConnections().then((res) => {
									data.networkConnections = res;
									functionProcessed();
								});
							memory.mem().then((res) => {
								data.mem = res;
								functionProcessed();
							});
							if (!_sunos)
								battery().then((res) => {
									data.battery = res;
									functionProcessed();
								});
							if (!_sunos)
								processes.services(srv).then((res) => {
									data.services = res;
									functionProcessed();
								});
							if (!_sunos)
								filesystem.fsSize().then((res) => {
									data.fsSize = res;
									functionProcessed();
								});
							if (!_windows && !_openbsd && !_freebsd && !_netbsd && !_sunos)
								filesystem.fsStats().then((res) => {
									data.fsStats = res;
									functionProcessed();
								});
							if (!_windows && !_openbsd && !_freebsd && !_netbsd && !_sunos)
								filesystem.disksIO().then((res) => {
									data.disksIO = res;
									functionProcessed();
								});
							if (!_openbsd && !_freebsd && !_netbsd && !_sunos)
								wifi.wifiNetworks().then((res) => {
									data.wifiNetworks = res;
									functionProcessed();
								});
							internet.inetLatency().then((res) => {
								data.inetLatency = res;
								functionProcessed();
							});
						});
					});
				}
				function getAllData(srv, iface, callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let data = {};
							if (iface && util.isFunction(iface) && !callback) {
								callback = iface;
								iface = "";
							}
							if (srv && util.isFunction(srv) && !iface && !callback) {
								callback = srv;
								srv = "";
								iface = "";
							}
							getStaticData().then((res) => {
								data = res;
								getDynamicData(srv, iface).then((res) => {
									for (let key in res) if ({}.hasOwnProperty.call(res, key)) data[key] = res[key];
									if (callback) callback(data);
									resolve(data);
								});
							});
						});
					});
				}
				function get(valueObject, callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							const allPromises = Object.keys(valueObject)
								.filter((func) => ({}.hasOwnProperty.call(exports, func)))
								.map((func) => {
									const params = valueObject[func].substring(valueObject[func].lastIndexOf("(") + 1, valueObject[func].lastIndexOf(")"));
									let funcWithoutParams = func.indexOf(")") >= 0 ? func.split(")")[1].trim() : func;
									funcWithoutParams = func.indexOf("|") >= 0 ? func.split("|")[0].trim() : funcWithoutParams;
									if (params) return exports[funcWithoutParams](params);
									else return exports[funcWithoutParams]("");
								});
							Promise.all(allPromises).then((data) => {
								const result = {};
								let i = 0;
								for (let key in valueObject)
									if ({}.hasOwnProperty.call(valueObject, key) && {}.hasOwnProperty.call(exports, key) && data.length > i) {
										if ("*" === valueObject[key] || "all" === valueObject[key]) result[key] = data[i];
										else {
											let keys = valueObject[key];
											let filter = "";
											let filterParts = [];
											if (keys.indexOf(")") >= 0) keys = keys.split(")")[1].trim();
											if (keys.indexOf("|") >= 0) {
												filter = keys.split("|")[1].trim();
												filterParts = filter.split(":");
												keys = keys.split("|")[0].trim();
											}
											keys = keys.replace(/,/g, " ").replace(/ +/g, " ").split(" ");
											if (data[i])
												if (Array.isArray(data[i])) {
													const partialArray = [];
													data[i].forEach((element) => {
														let partialRes = {};
														if (1 === keys.length && ("*" === keys[0] || "all" === keys[0])) partialRes = element;
														else
															keys.forEach((k) => {
																if ({}.hasOwnProperty.call(element, k)) partialRes[k] = element[k];
															});
														if (filter && 2 === filterParts.length) {
															if ({}.hasOwnProperty.call(partialRes, filterParts[0].trim())) {
																const val = partialRes[filterParts[0].trim()];
																if ("number" == typeof val) {
																	if (val === parseFloat(filterParts[1].trim())) partialArray.push(partialRes);
																} else if ("string" == typeof val)
																	if (val.toLowerCase() === filterParts[1].trim().toLowerCase()) partialArray.push(partialRes);
															}
														} else partialArray.push(partialRes);
													});
													result[key] = partialArray;
												} else {
													const partialRes = {};
													keys.forEach((k) => {
														if ({}.hasOwnProperty.call(data[i], k)) partialRes[k] = data[i][k];
													});
													result[key] = partialRes;
												}
											else result[key] = {};
										}
										i++;
									}
								if (callback) callback(result);
								resolve(result);
							});
						});
					});
				}
				function observe(valueObject, interval, callback) {
					let _data = null;
					const result = setInterval(() => {
						get(valueObject).then((data) => {
							if (JSON.stringify(_data) !== JSON.stringify(data)) {
								_data = Object.assign({}, data);
								callback(data);
							}
						});
					}, interval);
					return result;
				}
				exports.version = version;
				exports.system = system.system;
				exports.bios = system.bios;
				exports.baseboard = system.baseboard;
				exports.chassis = system.chassis;
				exports.time = osInfo.time;
				exports.osInfo = osInfo.osInfo;
				exports.versions = osInfo.versions;
				exports.shell = osInfo.shell;
				exports.uuid = osInfo.uuid;
				exports.cpu = cpu.cpu;
				exports.cpuFlags = cpu.cpuFlags;
				exports.cpuCache = cpu.cpuCache;
				exports.cpuCurrentSpeed = cpu.cpuCurrentSpeed;
				exports.cpuTemperature = cpu.cpuTemperature;
				exports.currentLoad = cpu.currentLoad;
				exports.fullLoad = cpu.fullLoad;
				exports.mem = memory.mem;
				exports.memLayout = memory.memLayout;
				exports.battery = battery;
				exports.graphics = graphics.graphics;
				exports.fsSize = filesystem.fsSize;
				exports.fsOpenFiles = filesystem.fsOpenFiles;
				exports.blockDevices = filesystem.blockDevices;
				exports.fsStats = filesystem.fsStats;
				exports.disksIO = filesystem.disksIO;
				exports.diskLayout = filesystem.diskLayout;
				exports.networkInterfaceDefault = network.networkInterfaceDefault;
				exports.networkGatewayDefault = network.networkGatewayDefault;
				exports.networkInterfaces = network.networkInterfaces;
				exports.networkStats = network.networkStats;
				exports.networkConnections = network.networkConnections;
				exports.wifiNetworks = wifi.wifiNetworks;
				exports.wifiInterfaces = wifi.wifiInterfaces;
				exports.wifiConnections = wifi.wifiConnections;
				exports.services = processes.services;
				exports.processes = processes.processes;
				exports.processLoad = processes.processLoad;
				exports.users = users.users;
				exports.inetChecksite = internet.inetChecksite;
				exports.inetLatency = internet.inetLatency;
				exports.dockerInfo = docker.dockerInfo;
				exports.dockerImages = docker.dockerImages;
				exports.dockerContainers = docker.dockerContainers;
				exports.dockerContainerStats = docker.dockerContainerStats;
				exports.dockerContainerProcesses = docker.dockerContainerProcesses;
				exports.dockerVolumes = docker.dockerVolumes;
				exports.dockerAll = docker.dockerAll;
				exports.vboxInfo = vbox.vboxInfo;
				exports.printer = printer.printer;
				exports.usb = usb.usb;
				exports.audio = audio.audio;
				exports.bluetoothDevices = bluetooth.bluetoothDevices;
				exports.getStaticData = getStaticData;
				exports.getDynamicData = getDynamicData;
				exports.getAllData = getAllData;
				exports.get = get;
				exports.observe = observe;
				exports.powerShellStart = util.powerShellStart;
				exports.powerShellRelease = util.powerShellRelease;
			},
			34: (__unused_webpack_module, exports, __webpack_require__) => {
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function inetChecksite(url, callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								url,
								ok: false,
								status: 404,
								ms: null,
							};
							if ("string" !== typeof url) {
								if (callback) callback(result);
								return resolve(result);
							}
							let urlSanitized = "";
							const s = util.sanitizeShellString(url, true);
							for (let i = 0; i <= util.mathMin(s.length, 2e3); i++)
								if (!(void 0 === s[i])) {
									s[i].__proto__.toLowerCase = util.stringToLower;
									const sl = s[i].toLowerCase();
									if (sl && sl[0] && !sl[1] && 1 === sl[0].length) urlSanitized += sl[0];
								}
							result.url = urlSanitized;
							try {
								if (urlSanitized && !util.isPrototypePolluted()) {
									urlSanitized.__proto__.startsWith = util.stringStartWith;
									if (
										urlSanitized.startsWith("file:") ||
										urlSanitized.startsWith("gopher:") ||
										urlSanitized.startsWith("telnet:") ||
										urlSanitized.startsWith("mailto:") ||
										urlSanitized.startsWith("news:") ||
										urlSanitized.startsWith("nntp:")
									) {
										if (callback) callback(result);
										return resolve(result);
									}
									let t = Date.now();
									if (_linux || _freebsd || _openbsd || _netbsd || _darwin || _sunos) {
										let args = ["-I", "--connect-timeout", "5", "-m", "5"];
										args.push(urlSanitized);
										let cmd = "curl";
										util.execSafe(cmd, args).then((stdout) => {
											const lines = stdout.split("\n");
											let statusCode = lines[0] && lines[0].indexOf(" ") >= 0 ? parseInt(lines[0].split(" ")[1], 10) : 404;
											result.status = statusCode || 404;
											result.ok = 200 === statusCode || 301 === statusCode || 302 === statusCode || 304 === statusCode;
											result.ms = result.ok ? Date.now() - t : null;
											if (callback) callback(result);
											resolve(result);
										});
									}
									if (_windows) {
										const http = urlSanitized.startsWith("https:") ? __webpack_require__(905) : __webpack_require__(615);
										try {
											http.get(urlSanitized, (res) => {
												const statusCode = res.statusCode;
												result.status = statusCode || 404;
												result.ok = 200 === statusCode || 301 === statusCode || 302 === statusCode || 304 === statusCode;
												if (200 !== statusCode) {
													res.resume();
													result.ms = result.ok ? Date.now() - t : null;
													if (callback) callback(result);
													resolve(result);
												} else {
													res.on("data", () => {});
													res.on("end", () => {
														result.ms = result.ok ? Date.now() - t : null;
														if (callback) callback(result);
														resolve(result);
													});
												}
											}).on("error", () => {
												if (callback) callback(result);
												resolve(result);
											});
										} catch (err) {
											if (callback) callback(result);
											resolve(result);
										}
									}
								} else {
									if (callback) callback(result);
									resolve(result);
								}
							} catch (err) {
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.inetChecksite = inetChecksite;
				function inetLatency(host, callback) {
					if (util.isFunction(host) && !callback) {
						callback = host;
						host = "";
					}
					host = host || "8.8.8.8";
					return new Promise((resolve) => {
						process.nextTick(() => {
							if ("string" !== typeof host) {
								if (callback) callback(null);
								return resolve(null);
							}
							let hostSanitized = "";
							const s = (util.isPrototypePolluted() ? "8.8.8.8" : util.sanitizeShellString(host, true)).trim();
							for (let i = 0; i <= util.mathMin(s.length, 2e3); i++)
								if (!(void 0 === s[i])) {
									s[i].__proto__.toLowerCase = util.stringToLower;
									const sl = s[i].toLowerCase();
									if (sl && sl[0] && !sl[1]) hostSanitized += sl[0];
								}
							hostSanitized.__proto__.startsWith = util.stringStartWith;
							if (
								hostSanitized.startsWith("file:") ||
								hostSanitized.startsWith("gopher:") ||
								hostSanitized.startsWith("telnet:") ||
								hostSanitized.startsWith("mailto:") ||
								hostSanitized.startsWith("news:") ||
								hostSanitized.startsWith("nntp:")
							) {
								if (callback) callback(null);
								return resolve(null);
							}
							let params;
							let filt;
							if (_linux || _freebsd || _openbsd || _netbsd || _darwin) {
								if (_linux) {
									params = ["-c", "2", "-w", "3", hostSanitized];
									filt = "rtt";
								}
								if (_freebsd || _openbsd || _netbsd) {
									params = ["-c", "2", "-t", "3", hostSanitized];
									filt = "round-trip";
								}
								if (_darwin) {
									params = ["-c2", "-t3", hostSanitized];
									filt = "avg";
								}
								util.execSafe("ping", params).then((stdout) => {
									let result = null;
									if (stdout) {
										const lines = stdout
											.split("\n")
											.filter((line) => line.indexOf(filt) >= 0)
											.join("\n");
										const line = lines.split("=");
										if (line.length > 1) {
											const parts = line[1].split("/");
											if (parts.length > 1) result = parseFloat(parts[1]);
										}
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_sunos) {
								const params = ["-s", "-a", hostSanitized, "56", "2"];
								const filt = "avg";
								util.execSafe("ping", params, {
									timeout: 3e3,
								}).then((stdout) => {
									let result = null;
									if (stdout) {
										const lines = stdout
											.split("\n")
											.filter((line) => line.indexOf(filt) >= 0)
											.join("\n");
										const line = lines.split("=");
										if (line.length > 1) {
											const parts = line[1].split("/");
											if (parts.length > 1) result = parseFloat(parts[1].replace(",", "."));
										}
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_windows) {
								let result = null;
								try {
									const params = [hostSanitized, "-n", "1"];
									util.execSafe("ping", params, util.execOptsWin).then((stdout) => {
										if (stdout) {
											let lines = stdout.split("\r\n");
											lines.shift();
											lines.forEach(function (line) {
												if (3 === (line.toLowerCase().match(/ms/g) || []).length) {
													let l = line.replace(/ +/g, " ").split(" ");
													if (l.length > 6) result = parseFloat(l[l.length - 1]);
												}
											});
										}
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							}
						});
					});
				}
				exports.inetLatency = inetLatency;
			},
			453: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const util = __webpack_require__(858);
				const fs = __webpack_require__(48);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				const OSX_RAM_manufacturers = {
					"0x014F": "Transcend Information",
					"0x2C00": "Micron Technology Inc.",
					"0x802C": "Micron Technology Inc.",
					"0x80AD": "Hynix Semiconductor Inc.",
					"0x80CE": "Samsung Electronics Inc.",
					"0xAD00": "Hynix Semiconductor Inc.",
					"0xCE00": "Samsung Electronics Inc.",
					"0x02FE": "Elpida",
					"0x5105": "Qimonda AG i. In.",
					"0x8551": "Qimonda AG i. In.",
					"0x859B": "Crucial",
					"0x04CD": "G-Skill",
				};
				const LINUX_RAM_manufacturers = {
					"017A": "Apacer",
					"0198": "HyperX",
					"029E": "Corsair",
					"04CB": "A-DATA",
					"04CD": "G-Skill",
					"059B": "Crucial",
					"00CE": "Samsung",
					1315: "Crutial",
					"014F": "Transcend Information",
					"2C00": "Micron Technology Inc.",
					"802C": "Micron Technology Inc.",
					"80AD": "Hynix Semiconductor Inc.",
					"80CE": "Samsung Electronics Inc.",
					AD00: "Hynix Semiconductor Inc.",
					CE00: "Samsung Electronics Inc.",
					"02FE": "Elpida",
					5105: "Qimonda AG i. In.",
					8551: "Qimonda AG i. In.",
					"859B": "Crucial",
				};
				function mem(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								total: os.totalmem(),
								free: os.freemem(),
								used: os.totalmem() - os.freemem(),
								active: os.totalmem() - os.freemem(),
								available: os.freemem(),
								buffers: 0,
								cached: 0,
								slab: 0,
								buffcache: 0,
								swaptotal: 0,
								swapused: 0,
								swapfree: 0,
							};
							if (_linux)
								fs.readFile("/proc/meminfo", function (error, stdout) {
									if (!error) {
										const lines = stdout.toString().split("\n");
										result.total = parseInt(util.getValue(lines, "memtotal"), 10);
										result.total = result.total ? 1024 * result.total : os.totalmem();
										result.free = parseInt(util.getValue(lines, "memfree"), 10);
										result.free = result.free ? 1024 * result.free : os.freemem();
										result.used = result.total - result.free;
										result.buffers = parseInt(util.getValue(lines, "buffers"), 10);
										result.buffers = result.buffers ? 1024 * result.buffers : 0;
										result.cached = parseInt(util.getValue(lines, "cached"), 10);
										result.cached = result.cached ? 1024 * result.cached : 0;
										result.slab = parseInt(util.getValue(lines, "slab"), 10);
										result.slab = result.slab ? 1024 * result.slab : 0;
										result.buffcache = result.buffers + result.cached + result.slab;
										let available = parseInt(util.getValue(lines, "memavailable"), 10);
										result.available = available ? 1024 * available : result.free + result.buffcache;
										result.active = result.total - result.available;
										result.swaptotal = parseInt(util.getValue(lines, "swaptotal"), 10);
										result.swaptotal = result.swaptotal ? 1024 * result.swaptotal : 0;
										result.swapfree = parseInt(util.getValue(lines, "swapfree"), 10);
										result.swapfree = result.swapfree ? 1024 * result.swapfree : 0;
										result.swapused = result.swaptotal - result.swapfree;
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_freebsd || _openbsd || _netbsd)
								exec(
									"/sbin/sysctl hw.realmem hw.physmem vm.stats.vm.v_page_count vm.stats.vm.v_wire_count vm.stats.vm.v_active_count vm.stats.vm.v_inactive_count vm.stats.vm.v_cache_count vm.stats.vm.v_free_count vm.stats.vm.v_page_size",
									function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											const pagesize = parseInt(util.getValue(lines, "vm.stats.vm.v_page_size"), 10);
											const inactive = parseInt(util.getValue(lines, "vm.stats.vm.v_inactive_count"), 10) * pagesize;
											const cache = parseInt(util.getValue(lines, "vm.stats.vm.v_cache_count"), 10) * pagesize;
											result.total = parseInt(util.getValue(lines, "hw.realmem"), 10);
											if (isNaN(result.total)) result.total = parseInt(util.getValue(lines, "hw.physmem"), 10);
											result.free = parseInt(util.getValue(lines, "vm.stats.vm.v_free_count"), 10) * pagesize;
											result.buffcache = inactive + cache;
											result.available = result.buffcache + result.free;
											result.active = result.total - result.free - result.buffcache;
											result.swaptotal = 0;
											result.swapfree = 0;
											result.swapused = 0;
										}
										if (callback) callback(result);
										resolve(result);
									},
								);
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_darwin) {
								let pageSize = 4096;
								try {
									let sysPpageSize = util.toInt(execSync("sysctl -n vm.pagesize").toString());
									pageSize = sysPpageSize || pageSize;
								} catch (e) {
									util.noop();
								}
								exec('vm_stat 2>/dev/null | grep "Pages active"', function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										result.active = parseInt(lines[0].split(":")[1], 10) * pageSize;
										result.buffcache = result.used - result.active;
										result.available = result.free + result.buffcache;
									}
									exec("sysctl -n vm.swapusage 2>/dev/null", function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											if (lines.length > 0) {
												let line = lines[0].replace(/,/g, ".").replace(/M/g, "");
												line = line.trim().split("  ");
												for (let i = 0; i < line.length; i++) {
													if (-1 !== line[i].toLowerCase().indexOf("total")) result.swaptotal = 1024 * parseFloat(line[i].split("=")[1].trim()) * 1024;
													if (-1 !== line[i].toLowerCase().indexOf("used")) result.swapused = 1024 * parseFloat(line[i].split("=")[1].trim()) * 1024;
													if (-1 !== line[i].toLowerCase().indexOf("free")) result.swapfree = 1024 * parseFloat(line[i].split("=")[1].trim()) * 1024;
												}
											}
										}
										if (callback) callback(result);
										resolve(result);
									});
								});
							}
							if (_windows) {
								let swaptotal = 0;
								let swapused = 0;
								try {
									util.powerShell("Get-CimInstance Win32_PageFileUsage | Select AllocatedBaseSize, CurrentUsage").then((stdout, error) => {
										if (!error) {
											let lines = stdout
												.split("\r\n")
												.filter((line) => "" !== line.trim())
												.filter((line, idx) => idx > 0);
											lines.forEach(function (line) {
												if ("" !== line) {
													line = line.trim().split(/\s\s+/);
													swaptotal += parseInt(line[0], 10) || 0;
													swapused += parseInt(line[1], 10) || 0;
												}
											});
										}
										result.swaptotal = 1024 * swaptotal * 1024;
										result.swapused = 1024 * swapused * 1024;
										result.swapfree = result.swaptotal - result.swapused;
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							}
						});
					});
				}
				exports.mem = mem;
				function memLayout(callback) {
					function getManufacturerDarwin(manId) {
						if ({}.hasOwnProperty.call(OSX_RAM_manufacturers, manId)) return OSX_RAM_manufacturers[manId];
						return manId;
					}
					function getManufacturerLinux(manId) {
						const manIdSearch = manId.replace("0x", "").toUpperCase();
						if (4 === manIdSearch.length && {}.hasOwnProperty.call(LINUX_RAM_manufacturers, manIdSearch)) return LINUX_RAM_manufacturers[manIdSearch];
						return manId;
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux || _freebsd || _openbsd || _netbsd)
								exec(
									'export LC_ALL=C; dmidecode -t memory 2>/dev/null | grep -iE "Size:|Type|Speed|Manufacturer|Form Factor|Locator|Memory Device|Serial Number|Voltage|Part Number"; unset LC_ALL',
									function (error, stdout) {
										if (!error) {
											let devices = stdout.toString().split("Memory Device");
											devices.shift();
											devices.forEach(function (device) {
												let lines = device.split("\n");
												const sizeString = util.getValue(lines, "Size");
												const size = sizeString.indexOf("GB") >= 0 ? 1024 * parseInt(sizeString, 10) * 1024 * 1024 : 1024 * parseInt(sizeString, 10) * 1024;
												if (parseInt(util.getValue(lines, "Size"), 10) > 0) {
													const totalWidth = util.toInt(util.getValue(lines, "Total Width"));
													const dataWidth = util.toInt(util.getValue(lines, "Data Width"));
													result.push({
														size,
														bank: util.getValue(lines, "Bank Locator"),
														type: util.getValue(lines, "Type:"),
														ecc: dataWidth && totalWidth ? totalWidth > dataWidth : false,
														clockSpeed: util.getValue(lines, "Configured Clock Speed:")
															? parseInt(util.getValue(lines, "Configured Clock Speed:"), 10)
															: util.getValue(lines, "Speed:")
															? parseInt(util.getValue(lines, "Speed:"), 10)
															: null,
														formFactor: util.getValue(lines, "Form Factor:"),
														manufacturer: getManufacturerLinux(util.getValue(lines, "Manufacturer:")),
														partNum: util.getValue(lines, "Part Number:"),
														serialNum: util.getValue(lines, "Serial Number:"),
														voltageConfigured: parseFloat(util.getValue(lines, "Configured Voltage:")) || null,
														voltageMin: parseFloat(util.getValue(lines, "Minimum Voltage:")) || null,
														voltageMax: parseFloat(util.getValue(lines, "Maximum Voltage:")) || null,
													});
												} else
													result.push({
														size: 0,
														bank: util.getValue(lines, "Bank Locator"),
														type: "Empty",
														ecc: null,
														clockSpeed: 0,
														formFactor: util.getValue(lines, "Form Factor:"),
														partNum: "",
														serialNum: "",
														voltageConfigured: null,
														voltageMin: null,
														voltageMax: null,
													});
											});
										}
										if (!result.length) {
											result.push({
												size: os.totalmem(),
												bank: "",
												type: "",
												ecc: null,
												clockSpeed: 0,
												formFactor: "",
												partNum: "",
												serialNum: "",
												voltageConfigured: null,
												voltageMin: null,
												voltageMax: null,
											});
											try {
												let stdout = execSync("cat /proc/cpuinfo 2>/dev/null");
												let lines = stdout.toString().split("\n");
												let model = util.getValue(lines, "hardware", ":", true).toUpperCase();
												let version = util.getValue(lines, "revision", ":", true).toLowerCase();
												if ("BCM2835" === model || "BCM2708" === model || "BCM2709" === model || "BCM2835" === model || "BCM2837" === model) {
													const clockSpeed = {
														0: 400,
														1: 450,
														2: 450,
														3: 3200,
													};
													result[0].type = "LPDDR2";
													result[0].type = version && version[2] && "3" === version[2] ? "LPDDR4" : result[0].type;
													result[0].ecc = false;
													result[0].clockSpeed = (version && version[2] && clockSpeed[version[2]]) || 400;
													result[0].clockSpeed = version && version[4] && "d" === version[4] ? 500 : result[0].clockSpeed;
													result[0].formFactor = "SoC";
													stdout = execSync("vcgencmd get_config sdram_freq 2>/dev/null");
													lines = stdout.toString().split("\n");
													let freq = parseInt(util.getValue(lines, "sdram_freq", "=", true), 10) || 0;
													if (freq) result[0].clockSpeed = freq;
													stdout = execSync("vcgencmd measure_volts sdram_p 2>/dev/null");
													lines = stdout.toString().split("\n");
													let voltage = parseFloat(util.getValue(lines, "volt", "=", true)) || 0;
													if (voltage) {
														result[0].voltageConfigured = voltage;
														result[0].voltageMin = voltage;
														result[0].voltageMax = voltage;
													}
												}
											} catch (e) {
												util.noop();
											}
										}
										if (callback) callback(result);
										resolve(result);
									},
								);
							if (_darwin)
								exec("system_profiler SPMemoryDataType", function (error, stdout) {
									if (!error) {
										const allLines = stdout.toString().split("\n");
										const eccStatus = util.getValue(allLines, "ecc", ":", true).toLowerCase();
										let devices = stdout.toString().split("        BANK ");
										let hasBank = true;
										if (1 === devices.length) {
											devices = stdout.toString().split("        DIMM");
											hasBank = false;
										}
										devices.shift();
										devices.forEach(function (device) {
											let lines = device.split("\n");
											const bank = (hasBank ? "BANK " : "DIMM") + lines[0].trim().split("/")[0];
											const size = parseInt(util.getValue(lines, "          Size"));
											if (size)
												result.push({
													size: 1024 * size * 1024 * 1024,
													bank,
													type: util.getValue(lines, "          Type:"),
													ecc: eccStatus ? "enabled" === eccStatus : null,
													clockSpeed: parseInt(util.getValue(lines, "          Speed:"), 10),
													formFactor: "",
													manufacturer: getManufacturerDarwin(util.getValue(lines, "          Manufacturer:")),
													partNum: util.getValue(lines, "          Part Number:"),
													serialNum: util.getValue(lines, "          Serial Number:"),
													voltageConfigured: null,
													voltageMin: null,
													voltageMax: null,
												});
											else
												result.push({
													size: 0,
													bank,
													type: "Empty",
													ecc: null,
													clockSpeed: 0,
													formFactor: "",
													manufacturer: "",
													partNum: "",
													serialNum: "",
													voltageConfigured: null,
													voltageMin: null,
													voltageMax: null,
												});
										});
									}
									if (!result.length) {
										const lines = stdout.toString().split("\n");
										const size = parseInt(util.getValue(lines, "      Memory:"));
										const type = util.getValue(lines, "      Type:");
										if (size && type)
											result.push({
												size: 1024 * size * 1024 * 1024,
												bank: "0",
												type,
												ecc: false,
												clockSpeed: 0,
												formFactor: "",
												manufacturer: "Apple",
												partNum: "",
												serialNum: "",
												voltageConfigured: null,
												voltageMin: null,
												voltageMax: null,
											});
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows) {
								const memoryTypes =
									"Unknown|Other|DRAM|Synchronous DRAM|Cache DRAM|EDO|EDRAM|VRAM|SRAM|RAM|ROM|FLASH|EEPROM|FEPROM|EPROM|CDRAM|3DRAM|SDRAM|SGRAM|RDRAM|DDR|DDR2|DDR2 FB-DIMM|Reserved|DDR3|FBD2|DDR4|LPDDR|LPDDR2|LPDDR3|LPDDR4".split(
										"|",
									);
								const FormFactors = "Unknown|Other|SIP|DIP|ZIP|SOJ|Proprietary|SIMM|DIMM|TSOP|PGA|RIMM|SODIMM|SRIMM|SMD|SSMP|QFP|TQFP|SOIC|LCC|PLCC|BGA|FPBGA|LGA".split(
									"|",
								);
								try {
									util.powerShell(
										"Get-WmiObject Win32_PhysicalMemory | select DataWidth,TotalWidth,Capacity,BankLabel,MemoryType,SMBIOSMemoryType,ConfiguredClockSpeed,FormFactor,Manufacturer,PartNumber,SerialNumber,ConfiguredVoltage,MinVoltage,MaxVoltage | fl",
									).then((stdout, error) => {
										if (!error) {
											let devices = stdout.toString().split(/\n\s*\n/);
											devices.shift();
											devices.forEach(function (device) {
												let lines = device.split("\r\n");
												const dataWidth = util.toInt(util.getValue(lines, "DataWidth", ":"));
												const totalWidth = util.toInt(util.getValue(lines, "TotalWidth", ":"));
												const size = parseInt(util.getValue(lines, "Capacity", ":"), 10) || 0;
												if (size)
													result.push({
														size,
														bank: util.getValue(lines, "BankLabel", ":"),
														type: memoryTypes[
															parseInt(util.getValue(lines, "MemoryType", ":"), 10) || parseInt(util.getValue(lines, "SMBIOSMemoryType", ":"), 10)
														],
														ecc: dataWidth && totalWidth ? totalWidth > dataWidth : false,
														clockSpeed:
															parseInt(util.getValue(lines, "ConfiguredClockSpeed", ":"), 10) || parseInt(util.getValue(lines, "Speed", ":"), 10) || 0,
														formFactor: FormFactors[parseInt(util.getValue(lines, "FormFactor", ":"), 10) || 0],
														manufacturer: util.getValue(lines, "Manufacturer", ":"),
														partNum: util.getValue(lines, "PartNumber", ":"),
														serialNum: util.getValue(lines, "SerialNumber", ":"),
														voltageConfigured: (parseInt(util.getValue(lines, "ConfiguredVoltage", ":"), 10) || 0) / 1e3,
														voltageMin: (parseInt(util.getValue(lines, "MinVoltage", ":"), 10) || 0) / 1e3,
														voltageMax: (parseInt(util.getValue(lines, "MaxVoltage", ":"), 10) || 0) / 1e3,
													});
											});
										}
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							}
						});
					});
				}
				exports.memLayout = memLayout;
			},
			96: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const fs = __webpack_require__(48);
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				let _network = {};
				let _default_iface = "";
				let _ifaces = {};
				let _dhcpNics = [];
				let _networkInterfaces = [];
				let _mac = {};
				let pathToIp;
				function getDefaultNetworkInterface() {
					let ifacename = "";
					let ifacenameFirst = "";
					try {
						let ifaces = os.networkInterfaces();
						let scopeid = 9999;
						for (let dev in ifaces)
							if ({}.hasOwnProperty.call(ifaces, dev))
								ifaces[dev].forEach(function (details) {
									if (details && false === details.internal) {
										ifacenameFirst = ifacenameFirst || dev;
										if (details.scopeid && details.scopeid < scopeid) {
											ifacename = dev;
											scopeid = details.scopeid;
										}
									}
								});
						ifacename = ifacename || ifacenameFirst || "";
						if (_windows) {
							let defaultIp = "";
							const cmd = "netstat -r";
							const result = execSync(cmd, util.execOptsWin);
							const lines = result.toString().split(os.EOL);
							lines.forEach((line) => {
								line = line.replace(/\s+/g, " ").trim();
								if (line.indexOf("0.0.0.0 0.0.0.0") > -1 && !/[a-zA-Z]/.test(line)) {
									const parts = line.split(" ");
									if (parts.length >= 5) defaultIp = parts[parts.length - 2];
								}
							});
							if (defaultIp)
								for (let dev in ifaces)
									if ({}.hasOwnProperty.call(ifaces, dev))
										ifaces[dev].forEach(function (details) {
											if (details && details.address && details.address === defaultIp) ifacename = dev;
										});
						}
						if (_linux) {
							let cmd = "ip route 2> /dev/null | grep default";
							let result = execSync(cmd);
							let parts = result.toString().split("\n")[0].split(/\s+/);
							if ("none" === parts[0] && parts[5]) ifacename = parts[5];
							else if (parts[4]) ifacename = parts[4];
							if (ifacename.indexOf(":") > -1) ifacename = ifacename.split(":")[1].trim();
						}
						if (_darwin || _freebsd || _openbsd || _netbsd || _sunos) {
							let cmd = "";
							if (_linux) cmd = "ip route 2> /dev/null | grep default | awk '{print $5}'";
							if (_darwin) cmd = "route -n get default 2>/dev/null | grep interface: | awk '{print $2}'";
							if (_freebsd || _openbsd || _netbsd || _sunos) cmd = "route get 0.0.0.0 | grep interface:";
							let result = execSync(cmd);
							ifacename = result.toString().split("\n")[0];
							if (ifacename.indexOf(":") > -1) ifacename = ifacename.split(":")[1].trim();
						}
					} catch (e) {
						util.noop();
					}
					if (ifacename) _default_iface = ifacename;
					return _default_iface;
				}
				exports.getDefaultNetworkInterface = getDefaultNetworkInterface;
				function getMacAddresses() {
					let iface = "";
					let mac = "";
					let result = {};
					if (_linux || _freebsd || _openbsd || _netbsd) {
						if ("undefined" === typeof pathToIp)
							try {
								const lines = execSync("which ip").toString().split("\n");
								if (lines.length && -1 === lines[0].indexOf(":") && 0 === lines[0].indexOf("/")) pathToIp = lines[0];
								else pathToIp = "";
							} catch (e) {
								pathToIp = "";
							}
						try {
							const cmd = "export LC_ALL=C; " + (pathToIp ? pathToIp + " link show up" : "/sbin/ifconfig") + "; unset LC_ALL";
							let res = execSync(cmd);
							const lines = res.toString().split("\n");
							for (let i = 0; i < lines.length; i++)
								if (lines[i] && " " !== lines[i][0]) {
									if (pathToIp) {
										let nextline = lines[i + 1].trim().split(" ");
										if ("link/ether" === nextline[0]) {
											iface = lines[i].split(" ")[1];
											iface = iface.slice(0, iface.length - 1);
											mac = nextline[1];
										}
									} else {
										iface = lines[i].split(" ")[0];
										mac = lines[i].split("HWaddr ")[1];
									}
									if (iface && mac) {
										result[iface] = mac.trim();
										iface = "";
										mac = "";
									}
								}
						} catch (e) {
							util.noop();
						}
					}
					if (_darwin)
						try {
							const cmd = "/sbin/ifconfig";
							let res = execSync(cmd);
							const lines = res.toString().split("\n");
							for (let i = 0; i < lines.length; i++)
								if (lines[i] && "\t" !== lines[i][0] && lines[i].indexOf(":") > 0) iface = lines[i].split(":")[0];
								else if (0 === lines[i].indexOf("\tether ")) {
									mac = lines[i].split("\tether ")[1];
									if (iface && mac) {
										result[iface] = mac.trim();
										iface = "";
										mac = "";
									}
								}
						} catch (e) {
							util.noop();
						}
					return result;
				}
				function networkInterfaceDefault(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = getDefaultNetworkInterface();
							if (callback) callback(result);
							resolve(result);
						});
					});
				}
				exports.networkInterfaceDefault = networkInterfaceDefault;
				function parseLinesWindowsNics(sections, nconfigsections) {
					let nics = [];
					for (let i in sections)
						if ({}.hasOwnProperty.call(sections, i))
							if ("" !== sections[i].trim()) {
								let lines = sections[i].trim().split("\r\n");
								let linesNicConfig = nconfigsections && nconfigsections[i] ? nconfigsections[i].trim().split("\r\n") : [];
								let netEnabled = util.getValue(lines, "NetEnabled", ":");
								let adapterType = "9" === util.getValue(lines, "AdapterTypeID", ":") ? "wireless" : "wired";
								let ifacename = util.getValue(lines, "Name", ":").replace(/\]/g, ")").replace(/\[/g, "(");
								let iface = util.getValue(lines, "NetConnectionID", ":").replace(/\]/g, ")").replace(/\[/g, "(");
								if (ifacename.toLowerCase().indexOf("wi-fi") >= 0 || ifacename.toLowerCase().indexOf("wireless") >= 0) adapterType = "wireless";
								if ("" !== netEnabled) {
									const speed = parseInt(util.getValue(lines, "speed", ":").trim(), 10) / 1e6;
									nics.push({
										mac: util.getValue(lines, "MACAddress", ":").toLowerCase(),
										dhcp: "true" === util.getValue(linesNicConfig, "dhcpEnabled", ":").toLowerCase(),
										name: ifacename,
										iface,
										netEnabled: "TRUE" === netEnabled,
										speed: isNaN(speed) ? null : speed,
										operstate: "2" === util.getValue(lines, "NetConnectionStatus", ":") ? "up" : "down",
										type: adapterType,
									});
								}
							}
					return nics;
				}
				function getWindowsNics() {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let cmd = "Get-WmiObject Win32_NetworkAdapter | fl *" + "; echo '#-#-#-#';";
							cmd += "Get-WmiObject Win32_NetworkAdapterConfiguration | fl DHCPEnabled";
							try {
								util.powerShell(cmd).then((data) => {
									data = data.split("#-#-#-#");
									const nsections = (data[0] || "").split(/\n\s*\n/);
									const nconfigsections = (data[1] || "").split(/\n\s*\n/);
									resolve(parseLinesWindowsNics(nsections, nconfigsections));
								});
							} catch (e) {
								resolve([]);
							}
						});
					});
				}
				function getWindowsDNSsuffixes() {
					let iface = {};
					let dnsSuffixes = {
						primaryDNS: "",
						exitCode: 0,
						ifaces: [],
					};
					try {
						const ipconfig = execSync("ipconfig /all", util.execOptsWin);
						const ipconfigArray = ipconfig.split("\r\n\r\n");
						ipconfigArray.forEach((element, index) => {
							if (1 == index) {
								const longPrimaryDNS = element.split("\r\n").filter((element) => element.toUpperCase().includes("DNS"));
								const primaryDNS = longPrimaryDNS[0].substring(longPrimaryDNS[0].lastIndexOf(":") + 1);
								dnsSuffixes.primaryDNS = primaryDNS.trim();
								if (!dnsSuffixes.primaryDNS) dnsSuffixes.primaryDNS = "Not defined";
							}
							if (index > 1)
								if (index % 2 == 0) {
									const name = element.substring(element.lastIndexOf(" ") + 1).replace(":", "");
									iface.name = name;
								} else {
									const connectionSpecificDNS = element.split("\r\n").filter((element) => element.toUpperCase().includes("DNS"));
									const dnsSuffix = connectionSpecificDNS[0].substring(connectionSpecificDNS[0].lastIndexOf(":") + 1);
									iface.dnsSuffix = dnsSuffix.trim();
									dnsSuffixes.ifaces.push(iface);
									iface = {};
								}
						});
						return dnsSuffixes;
					} catch (error) {
						return {
							primaryDNS: "",
							exitCode: 0,
							ifaces: [],
						};
					}
				}
				function getWindowsIfaceDNSsuffix(ifaces, ifacename) {
					let dnsSuffix = "";
					const interfaceName = ifacename + ".";
					try {
						const connectionDnsSuffix = ifaces.filter((iface) => interfaceName.includes(iface.name + ".")).map((iface) => iface.dnsSuffix);
						if (connectionDnsSuffix[0]) dnsSuffix = connectionDnsSuffix[0];
						if (!dnsSuffix) dnsSuffix = "";
						return dnsSuffix;
					} catch (error) {
						return "Unknown";
					}
				}
				function getWindowsWiredProfilesInformation() {
					try {
						const result = execSync("netsh lan show profiles", util.execOptsWin);
						const profileList = result.split("\r\nProfile on interface");
						return profileList;
					} catch (error) {
						if (1 === error.status && error.stdout.includes("AutoConfig")) return "Disabled";
						return [];
					}
				}
				function getWindowsWirelessIfaceSSID(interfaceName) {
					try {
						const result = execSync(`netsh wlan show  interface name="${interfaceName}" | findstr "SSID"`, util.execOptsWin);
						const SSID = result.split("\r\n").shift();
						const parseSSID = SSID.split(":").pop();
						return parseSSID;
					} catch (error) {
						return "Unknown";
					}
				}
				function getWindowsIEEE8021x(connectionType, iface, ifaces) {
					let i8021x = {
						state: "Unknown",
						protocol: "Unknown",
					};
					if ("Disabled" === ifaces) {
						i8021x.state = "Disabled";
						i8021x.protocol = "Not defined";
						return i8021x;
					}
					if ("wired" == connectionType && ifaces.length > 0)
						try {
							const iface8021xInfo = ifaces.find((element) => element.includes(iface + "\r\n"));
							const arrayIface8021xInfo = iface8021xInfo.split("\r\n");
							const state8021x = arrayIface8021xInfo.find((element) => element.includes("802.1x"));
							if (state8021x.includes("Disabled")) {
								i8021x.state = "Disabled";
								i8021x.protocol = "Not defined";
							} else if (state8021x.includes("Enabled")) {
								const protocol8021x = arrayIface8021xInfo.find((element) => element.includes("EAP"));
								i8021x.protocol = protocol8021x.split(":").pop();
								i8021x.state = "Enabled";
							}
						} catch (error) {
							return i8021x;
						}
					else if ("wireless" == connectionType) {
						let i8021xState = "";
						let i8021xProtocol = "";
						try {
							const SSID = getWindowsWirelessIfaceSSID(iface);
							if ("Unknown" !== SSID) {
								i8021xState = execSync(`netsh wlan show profiles "${SSID}" | findstr "802.1X"`, util.execOptsWin);
								i8021xProtocol = execSync(`netsh wlan show profiles "${SSID}" | findstr "EAP"`, util.execOptsWin);
							}
							if (i8021xState.includes(":") && i8021xProtocol.includes(":")) {
								i8021x.state = i8021xState.split(":").pop();
								i8021x.protocol = i8021xProtocol.split(":").pop();
							}
						} catch (error) {
							if (1 === error.status && error.stdout.includes("AutoConfig")) {
								i8021x.state = "Disabled";
								i8021x.protocol = "Not defined";
							}
							return i8021x;
						}
					}
					return i8021x;
				}
				function splitSectionsNics(lines) {
					const result = [];
					let section = [];
					lines.forEach(function (line) {
						if (!line.startsWith("\t") && !line.startsWith(" "))
							if (section.length) {
								result.push(section);
								section = [];
							}
						section.push(line);
					});
					if (section.length) result.push(section);
					return result;
				}
				function parseLinesDarwinNics(sections) {
					let nics = [];
					sections.forEach((section) => {
						let nic = {
							iface: "",
							mtu: null,
							mac: "",
							ip6: "",
							ip4: "",
							speed: null,
							type: "",
							operstate: "",
							duplex: "",
							internal: false,
						};
						const first = section[0];
						nic.iface = first.split(":")[0].trim();
						let parts = first.split("> mtu");
						nic.mtu = parts.length > 1 ? parseInt(parts[1], 10) : null;
						if (isNaN(nic.mtu)) nic.mtu = null;
						nic.internal = parts[0].toLowerCase().indexOf("loopback") > -1;
						section.forEach((line) => {
							if (line.trim().startsWith("ether ")) nic.mac = line.split("ether ")[1].toLowerCase().trim();
							if (line.trim().startsWith("inet6 ") && !nic.ip6) nic.ip6 = line.split("inet6 ")[1].toLowerCase().split("%")[0].split(" ")[0];
							if (line.trim().startsWith("inet ") && !nic.ip4) nic.ip4 = line.split("inet ")[1].toLowerCase().split(" ")[0];
						});
						let speed = util.getValue(section, "link rate");
						nic.speed = speed ? parseFloat(speed) : null;
						if (null === nic.speed) {
							speed = util.getValue(section, "uplink rate");
							nic.speed = speed ? parseFloat(speed) : null;
							if (null !== nic.speed && speed.toLowerCase().indexOf("gbps") >= 0) nic.speed = 1e3 * nic.speed;
						} else if (speed.toLowerCase().indexOf("gbps") >= 0) nic.speed = 1e3 * nic.speed;
						nic.type = util.getValue(section, "type").toLowerCase().indexOf("wi-fi") > -1 ? "wireless" : "wired";
						nic.operstate = util.getValue(section, "status").toLowerCase().indexOf("active") > -1 ? "up" : "down";
						nic.duplex = util.getValue(section, "media").toLowerCase().indexOf("half-duplex") > -1 ? "half" : "full";
						if (nic.ip6 || nic.ip4 || nic.mac) nics.push(nic);
					});
					return nics;
				}
				function getDarwinNics() {
					const cmd = "/sbin/ifconfig -v";
					try {
						const lines = execSync(cmd, {
							maxBuffer: 1024 * 2e4,
						})
							.toString()
							.split("\n");
						const nsections = splitSectionsNics(lines);
						return parseLinesDarwinNics(nsections);
					} catch (e) {
						return [];
					}
				}
				function getLinuxIfaceConnectionName(interfaceName) {
					const cmd = `nmcli device status 2>/dev/null | grep ${interfaceName}`;
					try {
						const result = execSync(cmd).toString();
						const resultFormat = result.replace(/\s+/g, " ").trim();
						const connectionNameLines = resultFormat.split(" ").slice(3);
						const connectionName = connectionNameLines.join(" ");
						return "--" != connectionName ? connectionName : "";
					} catch (e) {
						return "";
					}
				}
				function checkLinuxDCHPInterfaces(file) {
					let result = [];
					try {
						let cmd = `cat ${file} 2> /dev/null | grep 'iface\\|source'`;
						const lines = execSync(cmd, {
							maxBuffer: 1024 * 2e4,
						})
							.toString()
							.split("\n");
						lines.forEach((line) => {
							const parts = line.replace(/\s+/g, " ").trim().split(" ");
							if (parts.length >= 4) if (line.toLowerCase().indexOf(" inet ") >= 0 && line.toLowerCase().indexOf("dhcp") >= 0) result.push(parts[1]);
							if (line.toLowerCase().includes("source")) {
								let file = line.split(" ")[1];
								result = result.concat(checkLinuxDCHPInterfaces(file));
							}
						});
					} catch (e) {
						util.noop();
					}
					return result;
				}
				function getLinuxDHCPNics() {
					let cmd = "ip a 2> /dev/null";
					let result = [];
					try {
						const lines = execSync(cmd, {
							maxBuffer: 1024 * 2e4,
						})
							.toString()
							.split("\n");
						const nsections = splitSectionsNics(lines);
						result = parseLinuxDHCPNics(nsections);
					} catch (e) {
						util.noop();
					}
					try {
						result = checkLinuxDCHPInterfaces("/etc/network/interfaces");
					} catch (e) {
						util.noop();
					}
					return result;
				}
				function parseLinuxDHCPNics(sections) {
					const result = [];
					if (sections && sections.length)
						sections.forEach((lines) => {
							if (lines && lines.length) {
								const parts = lines[0].split(":");
								if (parts.length > 2)
									for (let line of lines)
										if (line.indexOf(" inet ") >= 0 && line.indexOf(" dynamic ") >= 0) {
											const parts2 = line.split(" ");
											const nic = parts2[parts2.length - 1].trim();
											result.push(nic);
											break;
										}
							}
						});
					return result;
				}
				function getLinuxIfaceDHCPstatus(iface, connectionName, DHCPNics) {
					let result = false;
					if (connectionName) {
						const cmd = `nmcli connection show "${connectionName}" 2>/dev/null | grep ipv4.method;`;
						try {
							const lines = execSync(cmd).toString();
							const resultFormat = lines.replace(/\s+/g, " ").trim();
							let dhcStatus = resultFormat.split(" ").slice(1).toString();
							switch (dhcStatus) {
								case "auto":
									result = true;
									break;
								default:
									result = false;
									break;
							}
							return result;
						} catch (e) {
							return DHCPNics.indexOf(iface) >= 0;
						}
					} else return DHCPNics.indexOf(iface) >= 0;
				}
				function getDarwinIfaceDHCPstatus(iface) {
					let result = false;
					const cmd = `ipconfig getpacket "${iface}" 2>/dev/null | grep lease_time;`;
					try {
						const lines = execSync(cmd).toString().split("\n");
						if (lines.length && lines[0].startsWith("lease_time")) result = true;
					} catch (e) {
						util.noop();
					}
					return result;
				}
				function getLinuxIfaceDNSsuffix(connectionName) {
					if (connectionName) {
						const cmd = `nmcli connection show "${connectionName}" 2>/dev/null | grep ipv4.dns-search;`;
						try {
							const result = execSync(cmd).toString();
							const resultFormat = result.replace(/\s+/g, " ").trim();
							const dnsSuffix = resultFormat.split(" ").slice(1).toString();
							return "--" == dnsSuffix ? "Not defined" : dnsSuffix;
						} catch (e) {
							return "Unknown";
						}
					} else return "Unknown";
				}
				function getLinuxIfaceIEEE8021xAuth(connectionName) {
					if (connectionName) {
						const cmd = `nmcli connection show "${connectionName}" 2>/dev/null | grep 802-1x.eap;`;
						try {
							const result = execSync(cmd).toString();
							const resultFormat = result.replace(/\s+/g, " ").trim();
							const authenticationProtocol = resultFormat.split(" ").slice(1).toString();
							return "--" == authenticationProtocol ? "" : authenticationProtocol;
						} catch (e) {
							return "Not defined";
						}
					} else return "Not defined";
				}
				function getLinuxIfaceIEEE8021xState(authenticationProtocol) {
					if (authenticationProtocol) {
						if ("Not defined" == authenticationProtocol) return "Disabled";
						return "Enabled";
					} else return "Unknown";
				}
				function testVirtualNic(iface, ifaceName, mac) {
					const virtualMacs = [
						"00:00:00:00:00:00",
						"00:03:FF",
						"00:05:69",
						"00:0C:29",
						"00:0F:4B",
						"00:0F:4B",
						"00:13:07",
						"00:13:BE",
						"00:15:5d",
						"00:16:3E",
						"00:1C:42",
						"00:21:F6",
						"00:21:F6",
						"00:24:0B",
						"00:24:0B",
						"00:50:56",
						"00:A0:B1",
						"00:E0:C8",
						"08:00:27",
						"0A:00:27",
						"18:92:2C",
						"16:DF:49",
						"3C:F3:92",
						"54:52:00",
						"FC:15:97",
					];
					if (mac)
						return (
							virtualMacs.filter((item) => mac.toUpperCase().toUpperCase().startsWith(item.substr(0, mac.length))).length > 0 ||
							iface.toLowerCase().indexOf(" virtual ") > -1 ||
							ifaceName.toLowerCase().indexOf(" virtual ") > -1 ||
							iface.toLowerCase().indexOf("vethernet ") > -1 ||
							ifaceName.toLowerCase().indexOf("vethernet ") > -1 ||
							iface.toLowerCase().startsWith("veth") ||
							ifaceName.toLowerCase().startsWith("veth") ||
							iface.toLowerCase().startsWith("vboxnet") ||
							ifaceName.toLowerCase().startsWith("vboxnet")
						);
					else return false;
				}
				function networkInterfaces(callback, rescan, defaultString) {
					if ("string" === typeof callback) {
						defaultString = callback;
						rescan = true;
						callback = null;
					}
					if ("boolean" === typeof callback) {
						rescan = callback;
						callback = null;
						defaultString = "";
					}
					if ("undefined" === typeof rescan) rescan = true;
					defaultString = defaultString || "";
					defaultString = "" + defaultString;
					return new Promise((resolve) => {
						process.nextTick(() => {
							let ifaces = os.networkInterfaces();
							let result = [];
							let nics = [];
							let dnsSuffixes = [];
							let nics8021xInfo = [];
							if (_darwin || _freebsd || _openbsd || _netbsd)
								if (JSON.stringify(ifaces) === JSON.stringify(_ifaces) && !rescan) {
									result = _networkInterfaces;
									if (callback) callback(result);
									resolve(result);
								} else {
									const defaultInterface = getDefaultNetworkInterface();
									_ifaces = JSON.parse(JSON.stringify(ifaces));
									nics = getDarwinNics();
									nics.forEach((nic) => {
										if ({}.hasOwnProperty.call(ifaces, nic.iface))
											ifaces[nic.iface].forEach(function (details) {
												if ("IPv4" === details.family || 4 === details.family) nic.ip4subnet = details.netmask;
												if ("IPv6" === details.family || 6 === details.family) nic.ip6subnet = details.netmask;
											});
										result.push({
											iface: nic.iface,
											ifaceName: nic.iface,
											default: nic.iface === defaultInterface,
											ip4: nic.ip4,
											ip4subnet: nic.ip4subnet || "",
											ip6: nic.ip6,
											ip6subnet: nic.ip6subnet || "",
											mac: nic.mac,
											internal: nic.internal,
											virtual: nic.internal ? false : testVirtualNic(nic.iface, nic.iface, nic.mac),
											operstate: nic.operstate,
											type: nic.type,
											duplex: nic.duplex,
											mtu: nic.mtu,
											speed: nic.speed,
											dhcp: getDarwinIfaceDHCPstatus(nic.iface),
											dnsSuffix: "",
											ieee8021xAuth: "",
											ieee8021xState: "",
											carrierChanges: 0,
										});
									});
									_networkInterfaces = result;
									if (defaultString.toLowerCase().indexOf("default") >= 0) {
										result = result.filter((item) => item.default);
										if (result.length > 0) result = result[0];
										else result = [];
									}
									if (callback) callback(result);
									resolve(result);
								}
							if (_linux)
								if (JSON.stringify(ifaces) === JSON.stringify(_ifaces) && !rescan) {
									result = _networkInterfaces;
									if (callback) callback(result);
									resolve(result);
								} else {
									_ifaces = JSON.parse(JSON.stringify(ifaces));
									_dhcpNics = getLinuxDHCPNics();
									const defaultInterface = getDefaultNetworkInterface();
									for (let dev in ifaces) {
										let ip4 = "";
										let ip4subnet = "";
										let ip6 = "";
										let ip6subnet = "";
										let mac = "";
										let duplex = "";
										let mtu = "";
										let speed = null;
										let carrierChanges = 0;
										let dhcp = false;
										let dnsSuffix = "";
										let ieee8021xAuth = "";
										let ieee8021xState = "";
										let type = "";
										if ({}.hasOwnProperty.call(ifaces, dev)) {
											let ifaceName = dev;
											ifaces[dev].forEach(function (details) {
												if ("IPv4" === details.family || 4 === details.family) {
													ip4 = details.address;
													ip4subnet = details.netmask;
												}
												if ("IPv6" === details.family || 6 === details.family)
													if (!ip6 || ip6.match(/^fe80::/i)) {
														ip6 = details.address;
														ip6subnet = details.netmask;
													}
												mac = details.mac;
												const nodeMainVersion = parseInt(process.versions.node.split("."), 10);
												if (mac.indexOf("00:00:0") > -1 && (_linux || _darwin) && !details.internal && nodeMainVersion >= 8 && nodeMainVersion <= 11) {
													if (0 === Object.keys(_mac).length) _mac = getMacAddresses();
													mac = _mac[dev] || "";
												}
											});
											let iface = dev.split(":")[0].trim().toLowerCase();
											const cmd = `echo -n "addr_assign_type: "; cat /sys/class/net/${iface}/addr_assign_type 2>/dev/null; echo;\n            echo -n "address: "; cat /sys/class/net/${iface}/address 2>/dev/null; echo;\n            echo -n "addr_len: "; cat /sys/class/net/${iface}/addr_len 2>/dev/null; echo;\n            echo -n "broadcast: "; cat /sys/class/net/${iface}/broadcast 2>/dev/null; echo;\n            echo -n "carrier: "; cat /sys/class/net/${iface}/carrier 2>/dev/null; echo;\n            echo -n "carrier_changes: "; cat /sys/class/net/${iface}/carrier_changes 2>/dev/null; echo;\n            echo -n "dev_id: "; cat /sys/class/net/${iface}/dev_id 2>/dev/null; echo;\n            echo -n "dev_port: "; cat /sys/class/net/${iface}/dev_port 2>/dev/null; echo;\n            echo -n "dormant: "; cat /sys/class/net/${iface}/dormant 2>/dev/null; echo;\n            echo -n "duplex: "; cat /sys/class/net/${iface}/duplex 2>/dev/null; echo;\n            echo -n "flags: "; cat /sys/class/net/${iface}/flags 2>/dev/null; echo;\n            echo -n "gro_flush_timeout: "; cat /sys/class/net/${iface}/gro_flush_timeout 2>/dev/null; echo;\n            echo -n "ifalias: "; cat /sys/class/net/${iface}/ifalias 2>/dev/null; echo;\n            echo -n "ifindex: "; cat /sys/class/net/${iface}/ifindex 2>/dev/null; echo;\n            echo -n "iflink: "; cat /sys/class/net/${iface}/iflink 2>/dev/null; echo;\n            echo -n "link_mode: "; cat /sys/class/net/${iface}/link_mode 2>/dev/null; echo;\n            echo -n "mtu: "; cat /sys/class/net/${iface}/mtu 2>/dev/null; echo;\n            echo -n "netdev_group: "; cat /sys/class/net/${iface}/netdev_group 2>/dev/null; echo;\n            echo -n "operstate: "; cat /sys/class/net/${iface}/operstate 2>/dev/null; echo;\n            echo -n "proto_down: "; cat /sys/class/net/${iface}/proto_down 2>/dev/null; echo;\n            echo -n "speed: "; cat /sys/class/net/${iface}/speed 2>/dev/null; echo;\n            echo -n "tx_queue_len: "; cat /sys/class/net/${iface}/tx_queue_len 2>/dev/null; echo;\n            echo -n "type: "; cat /sys/class/net/${iface}/type 2>/dev/null; echo;\n            echo -n "wireless: "; cat /proc/net/wireless 2>/dev/null | grep ${iface}; echo;\n            echo -n "wirelessspeed: "; iw dev ${iface} link 2>&1 | grep bitrate; echo;`;
											let lines = [];
											try {
												lines = execSync(cmd).toString().split("\n");
												const connectionName = getLinuxIfaceConnectionName(iface);
												dhcp = getLinuxIfaceDHCPstatus(iface, connectionName, _dhcpNics);
												dnsSuffix = getLinuxIfaceDNSsuffix(connectionName);
												ieee8021xAuth = getLinuxIfaceIEEE8021xAuth(connectionName);
												ieee8021xState = getLinuxIfaceIEEE8021xState(ieee8021xAuth);
											} catch (e) {
												util.noop();
											}
											duplex = util.getValue(lines, "duplex");
											duplex = duplex.startsWith("cat") ? "" : duplex;
											mtu = parseInt(util.getValue(lines, "mtu"), 10);
											let myspeed = parseInt(util.getValue(lines, "speed"), 10);
											speed = isNaN(myspeed) ? null : myspeed;
											let wirelessspeed = util.getValue(lines, "wirelessspeed").split("tx bitrate: ");
											if (null === speed && 2 === wirelessspeed.length) {
												myspeed = parseFloat(wirelessspeed[1]);
												speed = isNaN(myspeed) ? null : myspeed;
											}
											carrierChanges = parseInt(util.getValue(lines, "carrier_changes"), 10);
											const operstate = util.getValue(lines, "operstate");
											type = "up" === operstate ? (util.getValue(lines, "wireless").trim() ? "wireless" : "wired") : "unknown";
											if ("lo" === iface || iface.startsWith("bond")) type = "virtual";
											let internal = ifaces[dev] && ifaces[dev][0] ? ifaces[dev][0].internal : false;
											if (dev.toLowerCase().indexOf("loopback") > -1 || ifaceName.toLowerCase().indexOf("loopback") > -1) internal = true;
											const virtual = internal ? false : testVirtualNic(dev, ifaceName, mac);
											result.push({
												iface,
												ifaceName,
												default: iface === defaultInterface,
												ip4,
												ip4subnet,
												ip6,
												ip6subnet,
												mac,
												internal,
												virtual,
												operstate,
												type,
												duplex,
												mtu,
												speed,
												dhcp,
												dnsSuffix,
												ieee8021xAuth,
												ieee8021xState,
												carrierChanges,
											});
										}
									}
									_networkInterfaces = result;
									if (defaultString.toLowerCase().indexOf("default") >= 0) {
										result = result.filter((item) => item.default);
										if (result.length > 0) result = result[0];
										else result = [];
									}
									if (callback) callback(result);
									resolve(result);
								}
							if (_windows)
								if (JSON.stringify(ifaces) === JSON.stringify(_ifaces) && !rescan) {
									result = _networkInterfaces;
									if (callback) callback(result);
									resolve(result);
								} else {
									_ifaces = JSON.parse(JSON.stringify(ifaces));
									const defaultInterface = getDefaultNetworkInterface();
									getWindowsNics().then(function (nics) {
										nics.forEach((nic) => {
											let found = false;
											Object.keys(ifaces).forEach((key) => {
												if (!found)
													ifaces[key].forEach((value) => {
														if (Object.keys(value).indexOf("mac") >= 0) found = value["mac"] === nic.mac;
													});
											});
											if (!found)
												ifaces[nic.name] = [
													{
														mac: nic.mac,
													},
												];
										});
										nics8021xInfo = getWindowsWiredProfilesInformation();
										dnsSuffixes = getWindowsDNSsuffixes();
										for (let dev in ifaces) {
											let iface = dev;
											let ip4 = "";
											let ip4subnet = "";
											let ip6 = "";
											let ip6subnet = "";
											let mac = "";
											let duplex = "";
											let mtu = "";
											let speed = null;
											let carrierChanges = 0;
											let operstate = "down";
											let dhcp = false;
											let dnsSuffix = "";
											let ieee8021xAuth = "";
											let ieee8021xState = "";
											let type = "";
											if ({}.hasOwnProperty.call(ifaces, dev)) {
												let ifaceName = dev;
												ifaces[dev].forEach(function (details) {
													if ("IPv4" === details.family || 4 === details.family) {
														ip4 = details.address;
														ip4subnet = details.netmask;
													}
													if ("IPv6" === details.family || 6 === details.family)
														if (!ip6 || ip6.match(/^fe80::/i)) {
															ip6 = details.address;
															ip6subnet = details.netmask;
														}
													mac = details.mac;
													const nodeMainVersion = parseInt(process.versions.node.split("."), 10);
													if (mac.indexOf("00:00:0") > -1 && (_linux || _darwin) && !details.internal && nodeMainVersion >= 8 && nodeMainVersion <= 11) {
														if (0 === Object.keys(_mac).length) _mac = getMacAddresses();
														mac = _mac[dev] || "";
													}
												});
												dnsSuffix = getWindowsIfaceDNSsuffix(dnsSuffixes.ifaces, dev);
												let foundFirst = false;
												nics.forEach((detail) => {
													if (detail.mac === mac && !foundFirst) {
														iface = detail.iface || iface;
														ifaceName = detail.name;
														dhcp = detail.dhcp;
														operstate = detail.operstate;
														speed = detail.speed;
														type = detail.type;
														foundFirst = true;
													}
												});
												if (
													dev.toLowerCase().indexOf("wlan") >= 0 ||
													ifaceName.toLowerCase().indexOf("wlan") >= 0 ||
													ifaceName.toLowerCase().indexOf("802.11n") >= 0 ||
													ifaceName.toLowerCase().indexOf("wireless") >= 0 ||
													ifaceName.toLowerCase().indexOf("wi-fi") >= 0 ||
													ifaceName.toLowerCase().indexOf("wifi") >= 0
												)
													type = "wireless";
												const IEEE8021x = getWindowsIEEE8021x(type, dev, nics8021xInfo);
												ieee8021xAuth = IEEE8021x.protocol;
												ieee8021xState = IEEE8021x.state;
												let internal = ifaces[dev] && ifaces[dev][0] ? ifaces[dev][0].internal : false;
												if (dev.toLowerCase().indexOf("loopback") > -1 || ifaceName.toLowerCase().indexOf("loopback") > -1) internal = true;
												const virtual = internal ? false : testVirtualNic(dev, ifaceName, mac);
												result.push({
													iface,
													ifaceName,
													default: iface === defaultInterface,
													ip4,
													ip4subnet,
													ip6,
													ip6subnet,
													mac,
													internal,
													virtual,
													operstate,
													type,
													duplex,
													mtu,
													speed,
													dhcp,
													dnsSuffix,
													ieee8021xAuth,
													ieee8021xState,
													carrierChanges,
												});
											}
										}
										_networkInterfaces = result;
										if (defaultString.toLowerCase().indexOf("default") >= 0) {
											result = result.filter((item) => item.default);
											if (result.length > 0) result = result[0];
											else result = [];
										}
										if (callback) callback(result);
										resolve(result);
									});
								}
						});
					});
				}
				exports.networkInterfaces = networkInterfaces;
				function calcNetworkSpeed(iface, rx_bytes, tx_bytes, operstate, rx_dropped, rx_errors, tx_dropped, tx_errors) {
					let result = {
						iface,
						operstate,
						rx_bytes,
						rx_dropped,
						rx_errors,
						tx_bytes,
						tx_dropped,
						tx_errors,
						rx_sec: null,
						tx_sec: null,
						ms: 0,
					};
					if (_network[iface] && _network[iface].ms) {
						result.ms = Date.now() - _network[iface].ms;
						result.rx_sec = rx_bytes - _network[iface].rx_bytes >= 0 ? (rx_bytes - _network[iface].rx_bytes) / (result.ms / 1e3) : 0;
						result.tx_sec = tx_bytes - _network[iface].tx_bytes >= 0 ? (tx_bytes - _network[iface].tx_bytes) / (result.ms / 1e3) : 0;
						_network[iface].rx_bytes = rx_bytes;
						_network[iface].tx_bytes = tx_bytes;
						_network[iface].rx_sec = result.rx_sec;
						_network[iface].tx_sec = result.tx_sec;
						_network[iface].ms = Date.now();
						_network[iface].last_ms = result.ms;
						_network[iface].operstate = operstate;
					} else {
						if (!_network[iface]) _network[iface] = {};
						_network[iface].rx_bytes = rx_bytes;
						_network[iface].tx_bytes = tx_bytes;
						_network[iface].rx_sec = null;
						_network[iface].tx_sec = null;
						_network[iface].ms = Date.now();
						_network[iface].last_ms = 0;
						_network[iface].operstate = operstate;
					}
					return result;
				}
				function networkStats(ifaces, callback) {
					let ifacesArray = [];
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (util.isFunction(ifaces) && !callback) {
								callback = ifaces;
								ifacesArray = [getDefaultNetworkInterface()];
							} else {
								if ("string" !== typeof ifaces && void 0 !== ifaces) {
									if (callback) callback([]);
									return resolve([]);
								}
								ifaces = ifaces || getDefaultNetworkInterface();
								ifaces.__proto__.toLowerCase = util.stringToLower;
								ifaces.__proto__.replace = util.stringReplace;
								ifaces.__proto__.trim = util.stringTrim;
								ifaces = ifaces.trim().toLowerCase().replace(/,+/g, "|");
								ifacesArray = ifaces.split("|");
							}
							const result = [];
							const workload = [];
							if (ifacesArray.length && "*" === ifacesArray[0].trim()) {
								ifacesArray = [];
								networkInterfaces(false).then((allIFaces) => {
									for (let iface of allIFaces) ifacesArray.push(iface.iface);
									networkStats(ifacesArray.join(",")).then((result) => {
										if (callback) callback(result);
										resolve(result);
									});
								});
							} else {
								for (let iface of ifacesArray) workload.push(networkStatsSingle(iface.trim()));
								if (workload.length)
									Promise.all(workload).then((data) => {
										if (callback) callback(data);
										resolve(data);
									});
								else {
									if (callback) callback(result);
									resolve(result);
								}
							}
						});
					});
				}
				function networkStatsSingle(iface) {
					function parseLinesWindowsPerfData(sections) {
						let perfData = [];
						for (let i in sections)
							if ({}.hasOwnProperty.call(sections, i))
								if ("" !== sections[i].trim()) {
									let lines = sections[i].trim().split("\r\n");
									perfData.push({
										name: util
											.getValue(lines, "Name", ":")
											.replace(/[()[\] ]+/g, "")
											.replace("#", "_")
											.toLowerCase(),
										rx_bytes: parseInt(util.getValue(lines, "BytesReceivedPersec", ":"), 10),
										rx_errors: parseInt(util.getValue(lines, "PacketsReceivedErrors", ":"), 10),
										rx_dropped: parseInt(util.getValue(lines, "PacketsReceivedDiscarded", ":"), 10),
										tx_bytes: parseInt(util.getValue(lines, "BytesSentPersec", ":"), 10),
										tx_errors: parseInt(util.getValue(lines, "PacketsOutboundErrors", ":"), 10),
										tx_dropped: parseInt(util.getValue(lines, "PacketsOutboundDiscarded", ":"), 10),
									});
								}
						return perfData;
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							let ifaceSanitized = "";
							const s = util.isPrototypePolluted() ? "---" : util.sanitizeShellString(iface);
							for (let i = 0; i <= util.mathMin(s.length, 2e3); i++) if (!(void 0 === s[i])) ifaceSanitized += s[i];
							let result = {
								iface: ifaceSanitized,
								operstate: "unknown",
								rx_bytes: 0,
								rx_dropped: 0,
								rx_errors: 0,
								tx_bytes: 0,
								tx_dropped: 0,
								tx_errors: 0,
								rx_sec: null,
								tx_sec: null,
								ms: 0,
							};
							let operstate = "unknown";
							let rx_bytes = 0;
							let tx_bytes = 0;
							let rx_dropped = 0;
							let rx_errors = 0;
							let tx_dropped = 0;
							let tx_errors = 0;
							let cmd, lines, stats;
							if (
								!_network[ifaceSanitized] ||
								(_network[ifaceSanitized] && !_network[ifaceSanitized].ms) ||
								(_network[ifaceSanitized] && _network[ifaceSanitized].ms && Date.now() - _network[ifaceSanitized].ms >= 500)
							) {
								if (_linux)
									if (fs.existsSync("/sys/class/net/" + ifaceSanitized)) {
										cmd =
											"cat /sys/class/net/" +
											ifaceSanitized +
											"/operstate; " +
											"cat /sys/class/net/" +
											ifaceSanitized +
											"/statistics/rx_bytes; " +
											"cat /sys/class/net/" +
											ifaceSanitized +
											"/statistics/tx_bytes; " +
											"cat /sys/class/net/" +
											ifaceSanitized +
											"/statistics/rx_dropped; " +
											"cat /sys/class/net/" +
											ifaceSanitized +
											"/statistics/rx_errors; " +
											"cat /sys/class/net/" +
											ifaceSanitized +
											"/statistics/tx_dropped; " +
											"cat /sys/class/net/" +
											ifaceSanitized +
											"/statistics/tx_errors; ";
										exec(cmd, function (error, stdout) {
											if (!error) {
												lines = stdout.toString().split("\n");
												operstate = lines[0].trim();
												rx_bytes = parseInt(lines[1], 10);
												tx_bytes = parseInt(lines[2], 10);
												rx_dropped = parseInt(lines[3], 10);
												rx_errors = parseInt(lines[4], 10);
												tx_dropped = parseInt(lines[5], 10);
												tx_errors = parseInt(lines[6], 10);
												result = calcNetworkSpeed(ifaceSanitized, rx_bytes, tx_bytes, operstate, rx_dropped, rx_errors, tx_dropped, tx_errors);
											}
											resolve(result);
										});
									} else resolve(result);
								if (_freebsd || _openbsd || _netbsd) {
									cmd = "netstat -ibndI " + ifaceSanitized;
									exec(cmd, function (error, stdout) {
										if (!error) {
											lines = stdout.toString().split("\n");
											for (let i = 1; i < lines.length; i++) {
												const line = lines[i].replace(/ +/g, " ").split(" ");
												if (line && line[0] && line[7] && line[10]) {
													rx_bytes += parseInt(line[7]);
													if ("-" !== line[6].trim()) rx_dropped += parseInt(line[6]);
													if ("-" !== line[5].trim()) rx_errors += parseInt(line[5]);
													tx_bytes += parseInt(line[10]);
													if ("-" !== line[12].trim()) tx_dropped += parseInt(line[12]);
													if ("-" !== line[9].trim()) tx_errors += parseInt(line[9]);
													operstate = "up";
												}
											}
											result = calcNetworkSpeed(ifaceSanitized, rx_bytes, tx_bytes, operstate, rx_dropped, rx_errors, tx_dropped, tx_errors);
										}
										resolve(result);
									});
								}
								if (_darwin) {
									cmd = "ifconfig " + ifaceSanitized + ' | grep "status"';
									exec(cmd, function (error, stdout) {
										result.operstate = (stdout.toString().split(":")[1] || "").trim();
										result.operstate = (result.operstate || "").toLowerCase();
										result.operstate = "active" === result.operstate ? "up" : "inactive" === result.operstate ? "down" : "unknown";
										cmd = "netstat -bdI " + ifaceSanitized;
										exec(cmd, function (error, stdout) {
											if (!error) {
												lines = stdout.toString().split("\n");
												if (lines.length > 1 && "" !== lines[1].trim()) {
													stats = lines[1].replace(/ +/g, " ").split(" ");
													const offset = stats.length > 11 ? 1 : 0;
													rx_bytes = parseInt(stats[offset + 5]);
													rx_dropped = parseInt(stats[offset + 10]);
													rx_errors = parseInt(stats[offset + 4]);
													tx_bytes = parseInt(stats[offset + 8]);
													tx_dropped = parseInt(stats[offset + 10]);
													tx_errors = parseInt(stats[offset + 7]);
													result = calcNetworkSpeed(ifaceSanitized, rx_bytes, tx_bytes, result.operstate, rx_dropped, rx_errors, tx_dropped, tx_errors);
												}
											}
											resolve(result);
										});
									});
								}
								if (_windows) {
									let perfData = [];
									let ifaceName = ifaceSanitized;
									util.powerShell(
										"Get-WmiObject Win32_PerfRawData_Tcpip_NetworkInterface | select Name,BytesReceivedPersec,PacketsReceivedErrors,PacketsReceivedDiscarded,BytesSentPersec,PacketsOutboundErrors,PacketsOutboundDiscarded | fl",
									).then((stdout, error) => {
										if (!error) {
											const psections = stdout.toString().split(/\n\s*\n/);
											perfData = parseLinesWindowsPerfData(psections);
										}
										networkInterfaces(false).then((interfaces) => {
											rx_bytes = 0;
											tx_bytes = 0;
											perfData.forEach((detail) => {
												interfaces.forEach((det) => {
													if (
														(det.iface.toLowerCase() === ifaceSanitized.toLowerCase() ||
															det.mac.toLowerCase() === ifaceSanitized.toLowerCase() ||
															det.ip4.toLowerCase() === ifaceSanitized.toLowerCase() ||
															det.ip6.toLowerCase() === ifaceSanitized.toLowerCase() ||
															det.ifaceName
																.replace(/[()[\] ]+/g, "")
																.replace("#", "_")
																.toLowerCase() ===
																ifaceSanitized
																	.replace(/[()[\] ]+/g, "")
																	.replace("#", "_")
																	.toLowerCase()) &&
														det.ifaceName
															.replace(/[()[\] ]+/g, "")
															.replace("#", "_")
															.toLowerCase() === detail.name
													) {
														ifaceName = det.iface;
														rx_bytes = detail.rx_bytes;
														rx_dropped = detail.rx_dropped;
														rx_errors = detail.rx_errors;
														tx_bytes = detail.tx_bytes;
														tx_dropped = detail.tx_dropped;
														tx_errors = detail.tx_errors;
														operstate = det.operstate;
													}
												});
											});
											if (rx_bytes && tx_bytes)
												result = calcNetworkSpeed(ifaceName, parseInt(rx_bytes), parseInt(tx_bytes), operstate, rx_dropped, rx_errors, tx_dropped, tx_errors);
											resolve(result);
										});
									});
								}
							} else {
								result.rx_bytes = _network[ifaceSanitized].rx_bytes;
								result.tx_bytes = _network[ifaceSanitized].tx_bytes;
								result.rx_sec = _network[ifaceSanitized].rx_sec;
								result.tx_sec = _network[ifaceSanitized].tx_sec;
								result.ms = _network[ifaceSanitized].last_ms;
								result.operstate = _network[ifaceSanitized].operstate;
								resolve(result);
							}
						});
					});
				}
				exports.networkStats = networkStats;
				function networkConnections(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux || _freebsd || _openbsd || _netbsd) {
								let cmd =
									'export LC_ALL=C; netstat -tunap | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN"; unset LC_ALL';
								if (_freebsd || _openbsd || _netbsd)
									cmd =
										'export LC_ALL=C; netstat -na | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN"; unset LC_ALL';
								exec(
									cmd,
									{
										maxBuffer: 1024 * 2e4,
									},
									function (error, stdout) {
										let lines = stdout.toString().split("\n");
										if (!error && (lines.length > 1 || "" != lines[0])) {
											lines.forEach(function (line) {
												line = line.replace(/ +/g, " ").split(" ");
												if (line.length >= 7) {
													let localip = line[3];
													let localport = "";
													let localaddress = line[3].split(":");
													if (localaddress.length > 1) {
														localport = localaddress[localaddress.length - 1];
														localaddress.pop();
														localip = localaddress.join(":");
													}
													let peerip = line[4];
													let peerport = "";
													let peeraddress = line[4].split(":");
													if (peeraddress.length > 1) {
														peerport = peeraddress[peeraddress.length - 1];
														peeraddress.pop();
														peerip = peeraddress.join(":");
													}
													let connstate = line[5];
													let proc = line[6].split("/");
													if (connstate)
														result.push({
															protocol: line[0],
															localAddress: localip,
															localPort: localport,
															peerAddress: peerip,
															peerPort: peerport,
															state: connstate,
															pid: proc[0] && "-" !== proc[0] ? parseInt(proc[0], 10) : null,
															process: proc[1] ? proc[1].split(" ")[0] : "",
														});
												}
											});
											if (callback) callback(result);
											resolve(result);
										} else {
											cmd =
												'ss -tunap | grep "ESTAB\\|SYN-SENT\\|SYN-RECV\\|FIN-WAIT1\\|FIN-WAIT2\\|TIME-WAIT\\|CLOSE\\|CLOSE-WAIT\\|LAST-ACK\\|LISTEN\\|CLOSING"';
											exec(
												cmd,
												{
													maxBuffer: 1024 * 2e4,
												},
												function (error, stdout) {
													if (!error) {
														let lines = stdout.toString().split("\n");
														lines.forEach(function (line) {
															line = line.replace(/ +/g, " ").split(" ");
															if (line.length >= 6) {
																let localip = line[4];
																let localport = "";
																let localaddress = line[4].split(":");
																if (localaddress.length > 1) {
																	localport = localaddress[localaddress.length - 1];
																	localaddress.pop();
																	localip = localaddress.join(":");
																}
																let peerip = line[5];
																let peerport = "";
																let peeraddress = line[5].split(":");
																if (peeraddress.length > 1) {
																	peerport = peeraddress[peeraddress.length - 1];
																	peeraddress.pop();
																	peerip = peeraddress.join(":");
																}
																let connstate = line[1];
																if ("ESTAB" === connstate) connstate = "ESTABLISHED";
																if ("TIME-WAIT" === connstate) connstate = "TIME_WAIT";
																let pid = null;
																let process = "";
																if (line.length >= 7 && line[6].indexOf("users:") > -1) {
																	let proc = line[6].replace('users:(("', "").replace(/"/g, "").split(",");
																	if (proc.length > 2) {
																		process = proc[0].split(" ")[0];
																		pid = parseInt(proc[1], 10);
																	}
																}
																if (connstate)
																	result.push({
																		protocol: line[0],
																		localAddress: localip,
																		localPort: localport,
																		peerAddress: peerip,
																		peerPort: peerport,
																		state: connstate,
																		pid,
																		process,
																	});
															}
														});
													}
													if (callback) callback(result);
													resolve(result);
												},
											);
										}
									},
								);
							}
							if (_darwin) {
								let cmd =
									'netstat -natv | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN"';
								exec(
									cmd,
									{
										maxBuffer: 1024 * 2e4,
									},
									function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\n");
											lines.forEach(function (line) {
												line = line.replace(/ +/g, " ").split(" ");
												if (line.length >= 8) {
													let localip = line[3];
													let localport = "";
													let localaddress = line[3].split(".");
													if (localaddress.length > 1) {
														localport = localaddress[localaddress.length - 1];
														localaddress.pop();
														localip = localaddress.join(".");
													}
													let peerip = line[4];
													let peerport = "";
													let peeraddress = line[4].split(".");
													if (peeraddress.length > 1) {
														peerport = peeraddress[peeraddress.length - 1];
														peeraddress.pop();
														peerip = peeraddress.join(".");
													}
													let connstate = line[5];
													let pid = parseInt(line[8], 10);
													if (connstate)
														result.push({
															protocol: line[0],
															localAddress: localip,
															localPort: localport,
															peerAddress: peerip,
															peerPort: peerport,
															state: connstate,
															pid,
															process: "",
														});
												}
											});
											if (callback) callback(result);
											resolve(result);
										}
									},
								);
							}
							if (_windows) {
								let cmd = "netstat -nao";
								try {
									exec(cmd, util.execOptsWin, function (error, stdout) {
										if (!error) {
											let lines = stdout.toString().split("\r\n");
											lines.forEach(function (line) {
												line = line.trim().replace(/ +/g, " ").split(" ");
												if (line.length >= 4) {
													let localip = line[1];
													let localport = "";
													let localaddress = line[1].split(":");
													if (localaddress.length > 1) {
														localport = localaddress[localaddress.length - 1];
														localaddress.pop();
														localip = localaddress.join(":");
													}
													let peerip = line[2];
													let peerport = "";
													let peeraddress = line[2].split(":");
													if (peeraddress.length > 1) {
														peerport = peeraddress[peeraddress.length - 1];
														peeraddress.pop();
														peerip = peeraddress.join(":");
													}
													let pid = util.toInt(line[4]);
													let connstate = line[3];
													if ("HERGESTELLT" === connstate) connstate = "ESTABLISHED";
													if (connstate.startsWith("ABH")) connstate = "LISTEN";
													if ("SCHLIESSEN_WARTEN" === connstate) connstate = "CLOSE_WAIT";
													if ("WARTEND" === connstate) connstate = "TIME_WAIT";
													if ("SYN_GESENDET" === connstate) connstate = "SYN_SENT";
													if ("LISTENING" === connstate) connstate = "LISTEN";
													if ("SYN_RECEIVED" === connstate) connstate = "SYN_RECV";
													if ("FIN_WAIT_1" === connstate) connstate = "FIN_WAIT1";
													if ("FIN_WAIT_2" === connstate) connstate = "FIN_WAIT2";
													if (connstate)
														result.push({
															protocol: line[0].toLowerCase(),
															localAddress: localip,
															localPort: localport,
															peerAddress: peerip,
															peerPort: peerport,
															state: connstate,
															pid,
															process: "",
														});
												}
											});
											if (callback) callback(result);
											resolve(result);
										}
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							}
						});
					});
				}
				exports.networkConnections = networkConnections;
				function networkGatewayDefault(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = "";
							if (_linux || _freebsd || _openbsd || _netbsd) {
								let cmd = "ip route get 1";
								try {
									exec(
										cmd,
										{
											maxBuffer: 1024 * 2e4,
										},
										function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												const line = lines && lines[0] ? lines[0] : "";
												let parts = line.split(" via ");
												if (parts && parts[1]) {
													parts = parts[1].split(" ");
													result = parts[0];
												}
												if (callback) callback(result);
												resolve(result);
											} else {
												if (callback) callback(result);
												resolve(result);
											}
										},
									);
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							}
							if (_darwin) {
								let cmd = "route -n get default";
								try {
									exec(
										cmd,
										{
											maxBuffer: 1024 * 2e4,
										},
										function (error, stdout) {
											if (!error) {
												const lines = stdout
													.toString()
													.split("\n")
													.map((line) => line.trim());
												result = util.getValue(lines, "gateway");
											}
											if (!result) {
												cmd = "netstat -rn | awk '/default/ {print $2}'";
												exec(
													cmd,
													{
														maxBuffer: 1024 * 2e4,
													},
													function (error, stdout) {
														const lines = stdout
															.toString()
															.split("\n")
															.map((line) => line.trim());
														result = lines.find((line) =>
															/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
																line,
															),
														);
														if (callback) callback(result);
														resolve(result);
													},
												);
											} else {
												if (callback) callback(result);
												resolve(result);
											}
										},
									);
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							}
							if (_windows)
								try {
									exec("netstat -r", util.execOptsWin, function (error, stdout) {
										const lines = stdout.toString().split(os.EOL);
										lines.forEach((line) => {
											line = line.replace(/\s+/g, " ").trim();
											if (line.indexOf("0.0.0.0 0.0.0.0") > -1 && !/[a-zA-Z]/.test(line)) {
												const parts = line.split(" ");
												if (parts.length >= 5 && parts[parts.length - 3].indexOf(".") > -1) result = parts[parts.length - 3];
											}
										});
										if (!result)
											util.powerShell(
												"Get-CimInstance -ClassName Win32_IP4RouteTable | Where-Object { $_.Destination -eq '0.0.0.0' -and $_.Mask -eq '0.0.0.0' }",
											).then((data) => {
												let lines = data.toString().split("\r\n");
												if (lines.length > 1 && !result) {
													result = util.getValue(lines, "NextHop");
													if (callback) callback(result);
													resolve(result);
												}
											});
										else {
											if (callback) callback(result);
											resolve(result);
										}
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.networkGatewayDefault = networkGatewayDefault;
			},
			17: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const fs = __webpack_require__(48);
				const util = __webpack_require__(858);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function time() {
					let t = new Date().toString().split(" ");
					return {
						current: Date.now(),
						uptime: os.uptime(),
						timezone: t.length >= 7 ? t[5] : "",
						timezoneName: Intl ? Intl.DateTimeFormat().resolvedOptions().timeZone : t.length >= 7 ? t.slice(6).join(" ").replace(/\(/g, "").replace(/\)/g, "") : "",
					};
				}
				exports.time = time;
				function getLogoFile(distro) {
					distro = distro || "";
					distro = distro.toLowerCase();
					let result = _platform;
					if (_windows) result = "windows";
					else if (-1 !== distro.indexOf("mac os")) result = "apple";
					else if (-1 !== distro.indexOf("arch")) result = "arch";
					else if (-1 !== distro.indexOf("centos")) result = "centos";
					else if (-1 !== distro.indexOf("coreos")) result = "coreos";
					else if (-1 !== distro.indexOf("debian")) result = "debian";
					else if (-1 !== distro.indexOf("deepin")) result = "deepin";
					else if (-1 !== distro.indexOf("elementary")) result = "elementary";
					else if (-1 !== distro.indexOf("fedora")) result = "fedora";
					else if (-1 !== distro.indexOf("gentoo")) result = "gentoo";
					else if (-1 !== distro.indexOf("mageia")) result = "mageia";
					else if (-1 !== distro.indexOf("mandriva")) result = "mandriva";
					else if (-1 !== distro.indexOf("manjaro")) result = "manjaro";
					else if (-1 !== distro.indexOf("mint")) result = "mint";
					else if (-1 !== distro.indexOf("mx")) result = "mx";
					else if (-1 !== distro.indexOf("openbsd")) result = "openbsd";
					else if (-1 !== distro.indexOf("freebsd")) result = "freebsd";
					else if (-1 !== distro.indexOf("opensuse")) result = "opensuse";
					else if (-1 !== distro.indexOf("pclinuxos")) result = "pclinuxos";
					else if (-1 !== distro.indexOf("puppy")) result = "puppy";
					else if (-1 !== distro.indexOf("raspbian")) result = "raspbian";
					else if (-1 !== distro.indexOf("reactos")) result = "reactos";
					else if (-1 !== distro.indexOf("redhat")) result = "redhat";
					else if (-1 !== distro.indexOf("slackware")) result = "slackware";
					else if (-1 !== distro.indexOf("sugar")) result = "sugar";
					else if (-1 !== distro.indexOf("steam")) result = "steam";
					else if (-1 !== distro.indexOf("suse")) result = "suse";
					else if (-1 !== distro.indexOf("mate")) result = "ubuntu-mate";
					else if (-1 !== distro.indexOf("lubuntu")) result = "lubuntu";
					else if (-1 !== distro.indexOf("xubuntu")) result = "xubuntu";
					else if (-1 !== distro.indexOf("ubuntu")) result = "ubuntu";
					else if (-1 !== distro.indexOf("solaris")) result = "solaris";
					else if (-1 !== distro.indexOf("tails")) result = "tails";
					else if (-1 !== distro.indexOf("feren")) result = "ferenos";
					else if (-1 !== distro.indexOf("robolinux")) result = "robolinux";
					else if (_linux && distro) result = distro.toLowerCase().trim().replace(/\s+/g, "-");
					return result;
				}
				function getFQDN() {
					let fqdn = os.hostname;
					if (_linux || _darwin)
						try {
							const stdout = execSync("hostname -f");
							fqdn = stdout.toString().split(os.EOL)[0];
						} catch (e) {
							util.noop();
						}
					if (_freebsd || _openbsd || _netbsd)
						try {
							const stdout = execSync("hostname");
							fqdn = stdout.toString().split(os.EOL)[0];
						} catch (e) {
							util.noop();
						}
					if (_windows)
						try {
							const stdout = execSync("echo %COMPUTERNAME%.%USERDNSDOMAIN%", util.execOptsWin);
							fqdn = stdout.toString().replace(".%USERDNSDOMAIN%", "").split(os.EOL)[0];
						} catch (e) {
							util.noop();
						}
					return fqdn;
				}
				function osInfo(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								platform: "win32" === _platform ? "Windows" : _platform,
								distro: "unknown",
								release: "unknown",
								codename: "",
								kernel: os.release(),
								arch: os.arch(),
								hostname: os.hostname(),
								fqdn: getFQDN(),
								codepage: "",
								logofile: "",
								serial: "",
								build: "",
								servicepack: "",
								uefi: false,
							};
							if (_linux)
								exec("cat /etc/*-release; cat /usr/lib/os-release; cat /etc/openwrt_release", function (error, stdout) {
									let release = {};
									let lines = stdout.toString().split("\n");
									lines.forEach(function (line) {
										if (-1 !== line.indexOf("=")) release[line.split("=")[0].trim().toUpperCase()] = line.split("=")[1].trim();
									});
									let releaseVersion = (release.VERSION || "").replace(/"/g, "");
									let codename = (release.DISTRIB_CODENAME || release.VERSION_CODENAME || "").replace(/"/g, "");
									if (releaseVersion.indexOf("(") >= 0) {
										codename = releaseVersion.split("(")[1].replace(/[()]/g, "").trim();
										releaseVersion = releaseVersion.split("(")[0].trim();
									}
									result.distro = (release.DISTRIB_ID || release.NAME || "unknown").replace(/"/g, "");
									result.logofile = getLogoFile(result.distro);
									result.release = (releaseVersion || release.DISTRIB_RELEASE || release.VERSION_ID || "unknown").replace(/"/g, "");
									result.codename = codename;
									result.codepage = util.getCodepage();
									result.build = (release.BUILD_ID || "").replace(/"/g, "").trim();
									isUefiLinux().then((uefi) => {
										result.uefi = uefi;
										uuid().then((data) => {
											result.serial = data.os;
											if (callback) callback(result);
											resolve(result);
										});
									});
								});
							if (_freebsd || _openbsd || _netbsd)
								exec("sysctl kern.ostype kern.osrelease kern.osrevision kern.hostuuid machdep.bootmethod", function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										result.distro = util.getValue(lines, "kern.ostype");
										result.logofile = getLogoFile(result.distro);
										result.release = util.getValue(lines, "kern.osrelease").split("-")[0];
										result.serial = util.getValue(lines, "kern.uuid");
										result.codename = "";
										result.codepage = util.getCodepage();
										result.uefi = util.getValue(lines, "machdep.bootmethod").toLowerCase().indexOf("uefi") >= 0;
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_darwin)
								exec("sw_vers; sysctl kern.ostype kern.osrelease kern.osrevision kern.uuid", function (error, stdout) {
									let lines = stdout.toString().split("\n");
									result.serial = util.getValue(lines, "kern.uuid");
									result.distro = util.getValue(lines, "ProductName");
									result.release = util.getValue(lines, "ProductVersion");
									result.build = util.getValue(lines, "BuildVersion");
									result.logofile = getLogoFile(result.distro);
									result.codename = "macOS";
									result.codename = result.release.indexOf("10.4") > -1 ? "Mac OS X Tiger" : result.codename;
									result.codename = result.release.indexOf("10.4") > -1 ? "Mac OS X Tiger" : result.codename;
									result.codename = result.release.indexOf("10.4") > -1 ? "Mac OS X Tiger" : result.codename;
									result.codename = result.release.indexOf("10.5") > -1 ? "Mac OS X Leopard" : result.codename;
									result.codename = result.release.indexOf("10.6") > -1 ? "Mac OS X Snow Leopard" : result.codename;
									result.codename = result.release.indexOf("10.7") > -1 ? "Mac OS X Lion" : result.codename;
									result.codename = result.release.indexOf("10.8") > -1 ? "OS X Mountain Lion" : result.codename;
									result.codename = result.release.indexOf("10.9") > -1 ? "OS X Mavericks" : result.codename;
									result.codename = result.release.indexOf("10.10") > -1 ? "OS X Yosemite" : result.codename;
									result.codename = result.release.indexOf("10.11") > -1 ? "OS X El Capitan" : result.codename;
									result.codename = result.release.indexOf("10.12") > -1 ? "macOS Sierra" : result.codename;
									result.codename = result.release.indexOf("10.13") > -1 ? "macOS High Sierra" : result.codename;
									result.codename = result.release.indexOf("10.14") > -1 ? "macOS Mojave" : result.codename;
									result.codename = result.release.indexOf("10.15") > -1 ? "macOS Catalina" : result.codename;
									result.codename = result.release.startsWith("11.") ? "macOS Big Sur" : result.codename;
									result.codename = result.release.startsWith("12.") ? "macOS Monterey" : result.codename;
									result.uefi = true;
									result.codepage = util.getCodepage();
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) {
								result.release = result.kernel;
								exec("uname -o", function (error, stdout) {
									let lines = stdout.toString().split("\n");
									result.distro = lines[0];
									result.logofile = getLogoFile(result.distro);
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_windows) {
								result.logofile = getLogoFile();
								result.release = result.kernel;
								try {
									const workload = [];
									workload.push(
										util.powerShell(
											"Get-WmiObject Win32_OperatingSystem | select Caption,SerialNumber,BuildNumber,ServicePackMajorVersion,ServicePackMinorVersion | fl",
										),
									);
									workload.push(util.powerShell("(Get-CimInstance Win32_ComputerSystem).HypervisorPresent"));
									workload.push(util.powerShell("Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SystemInformation]::TerminalServerSession"));
									util.promiseAll(workload).then((data) => {
										let lines = data.results[0] ? data.results[0].toString().split("\r\n") : [""];
										result.distro = util.getValue(lines, "Caption", ":").trim();
										result.serial = util.getValue(lines, "SerialNumber", ":").trim();
										result.build = util.getValue(lines, "BuildNumber", ":").trim();
										result.servicepack =
											util.getValue(lines, "ServicePackMajorVersion", ":").trim() + "." + util.getValue(lines, "ServicePackMinorVersion", ":").trim();
										result.codepage = util.getCodepage();
										const hyperv = data.results[1] ? data.results[1].toString().toLowerCase() : "";
										result.hypervisor = -1 !== hyperv.indexOf("true");
										const term = data.results[2] ? data.results[2].toString() : "";
										result.remoteSession = term.toString().toLowerCase().indexOf("true") >= 0;
										isUefiWindows().then((uefi) => {
											result.uefi = uefi;
											if (callback) callback(result);
											resolve(result);
										});
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
							}
						});
					});
				}
				exports.osInfo = osInfo;
				function isUefiLinux() {
					return new Promise((resolve) => {
						process.nextTick(() => {
							fs.stat("/sys/firmware/efi", function (err) {
								if (!err) return resolve(true);
								else
									exec('dmesg | grep -E "EFI v"', function (error, stdout) {
										if (!error) {
											const lines = stdout.toString().split("\n");
											return resolve(lines.length > 0);
										}
										return resolve(false);
									});
							});
						});
					});
				}
				function isUefiWindows() {
					return new Promise((resolve) => {
						process.nextTick(() => {
							try {
								exec('findstr /C:"Detected boot environment" "%windir%\\Panther\\setupact.log"', util.execOptsWin, function (error, stdout) {
									if (!error) {
										const line = stdout.toString().split("\n\r")[0];
										return resolve(line.toLowerCase().indexOf("efi") >= 0);
									} else
										exec("echo %firmware_type%", util.execOptsWin, function (error, stdout) {
											if (!error) {
												const line = stdout.toString() || "";
												return resolve(line.toLowerCase().indexOf("efi") >= 0);
											} else return resolve(false);
										});
								});
							} catch (e) {
								return resolve(false);
							}
						});
					});
				}
				function versions(apps, callback) {
					let versionObject = {
						kernel: os.release(),
						openssl: "",
						systemOpenssl: "",
						systemOpensslLib: "",
						node: process.versions.node,
						v8: process.versions.v8,
						npm: "",
						yarn: "",
						pm2: "",
						gulp: "",
						grunt: "",
						git: "",
						tsc: "",
						mysql: "",
						redis: "",
						mongodb: "",
						apache: "",
						nginx: "",
						php: "",
						docker: "",
						postfix: "",
						postgresql: "",
						perl: "",
						python: "",
						python3: "",
						pip: "",
						pip3: "",
						java: "",
						gcc: "",
						virtualbox: "",
						bash: "",
						zsh: "",
						fish: "",
						powershell: "",
						dotnet: "",
					};
					function checkVersionParam(apps) {
						if ("*" === apps)
							return {
								versions: versionObject,
								counter: 30,
							};
						if (!Array.isArray(apps)) {
							apps = apps.trim().toLowerCase().replace(/,+/g, "|").replace(/ /g, "|");
							apps = apps.split("|");
							const result = {
								versions: {},
								counter: 0,
							};
							apps.forEach((el) => {
								if (el)
									for (let key in versionObject)
										if ({}.hasOwnProperty.call(versionObject, key))
											if (key.toLowerCase() === el.toLowerCase() && !{}.hasOwnProperty.call(result.versions, key)) {
												result.versions[key] = versionObject[key];
												if ("openssl" === key) {
													result.versions.systemOpenssl = "";
													result.versions.systemOpensslLib = "";
												}
												if (!result.versions[key]) result.counter++;
											}
							});
							return result;
						}
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (util.isFunction(apps) && !callback) {
								callback = apps;
								apps = "*";
							} else {
								apps = apps || "*";
								if ("string" !== typeof apps) {
									if (callback) callback({});
									return resolve({});
								}
							}
							const appsObj = checkVersionParam(apps);
							let totalFunctions = appsObj.counter;
							let functionProcessed = (function () {
								return function () {
									if (0 === --totalFunctions) {
										if (callback) callback(appsObj.versions);
										resolve(appsObj.versions);
									}
								};
							})();
							let cmd = "";
							try {
								if ({}.hasOwnProperty.call(appsObj.versions, "openssl")) {
									appsObj.versions.openssl = process.versions.openssl;
									exec("openssl version", function (error, stdout) {
										if (!error) {
											let openssl_string = stdout.toString().split("\n")[0].trim();
											let openssl = openssl_string.split(" ");
											appsObj.versions.systemOpenssl = openssl.length > 0 ? openssl[1] : openssl[0];
											appsObj.versions.systemOpensslLib = openssl.length > 0 ? openssl[0] : "openssl";
										}
										functionProcessed();
									});
								}
								if ({}.hasOwnProperty.call(appsObj.versions, "npm"))
									exec("npm -v", function (error, stdout) {
										if (!error) appsObj.versions.npm = stdout.toString().split("\n")[0];
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "pm2")) {
									cmd = "pm2";
									if (_windows) cmd += ".cmd";
									exec(`${cmd} -v`, function (error, stdout) {
										if (!error) {
											let pm2 = stdout.toString().split("\n")[0].trim();
											if (!pm2.startsWith("[PM2]")) appsObj.versions.pm2 = pm2;
										}
										functionProcessed();
									});
								}
								if ({}.hasOwnProperty.call(appsObj.versions, "yarn"))
									exec("yarn --version", function (error, stdout) {
										if (!error) appsObj.versions.yarn = stdout.toString().split("\n")[0];
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "gulp")) {
									cmd = "gulp";
									if (_windows) cmd += ".cmd";
									exec(`${cmd} --version`, function (error, stdout) {
										if (!error) {
											const gulp = stdout.toString().split("\n")[0] || "";
											appsObj.versions.gulp = (gulp.toLowerCase().split("version")[1] || "").trim();
										}
										functionProcessed();
									});
								}
								if ({}.hasOwnProperty.call(appsObj.versions, "tsc")) {
									cmd = "tsc";
									if (_windows) cmd += ".cmd";
									exec(`${cmd} --version`, function (error, stdout) {
										if (!error) {
											const tsc = stdout.toString().split("\n")[0] || "";
											appsObj.versions.tsc = (tsc.toLowerCase().split("version")[1] || "").trim();
										}
										functionProcessed();
									});
								}
								if ({}.hasOwnProperty.call(appsObj.versions, "grunt")) {
									cmd = "grunt";
									if (_windows) cmd += ".cmd";
									exec(`${cmd} --version`, function (error, stdout) {
										if (!error) {
											const grunt = stdout.toString().split("\n")[0] || "";
											appsObj.versions.grunt = (grunt.toLowerCase().split("cli v")[1] || "").trim();
										}
										functionProcessed();
									});
								}
								if ({}.hasOwnProperty.call(appsObj.versions, "git"))
									if (_darwin) {
										const gitHomebrewExists = fs.existsSync("/usr/local/Cellar/git") || fs.existsSync("/opt/homebrew/bin/git");
										if (util.darwinXcodeExists() || gitHomebrewExists)
											exec("git --version", function (error, stdout) {
												if (!error) {
													let git = stdout.toString().split("\n")[0] || "";
													git = (git.toLowerCase().split("version")[1] || "").trim();
													appsObj.versions.git = (git.split(" ")[0] || "").trim();
												}
												functionProcessed();
											});
										else functionProcessed();
									} else
										exec("git --version", function (error, stdout) {
											if (!error) {
												let git = stdout.toString().split("\n")[0] || "";
												git = (git.toLowerCase().split("version")[1] || "").trim();
												appsObj.versions.git = (git.split(" ")[0] || "").trim();
											}
											functionProcessed();
										});
								if ({}.hasOwnProperty.call(appsObj.versions, "apache"))
									exec("apachectl -v 2>&1", function (error, stdout) {
										if (!error) {
											const apache = (stdout.toString().split("\n")[0] || "").split(":");
											appsObj.versions.apache = apache.length > 1 ? apache[1].replace("Apache", "").replace("/", "").split("(")[0].trim() : "";
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "nginx"))
									exec("nginx -v 2>&1", function (error, stdout) {
										if (!error) {
											const nginx = stdout.toString().split("\n")[0] || "";
											appsObj.versions.nginx = (nginx.toLowerCase().split("/")[1] || "").trim();
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "mysql"))
									exec("mysql -V", function (error, stdout) {
										if (!error) {
											let mysql = stdout.toString().split("\n")[0] || "";
											mysql = mysql.toLowerCase();
											if (mysql.indexOf(",") > -1) {
												mysql = (mysql.split(",")[0] || "").trim();
												const parts = mysql.split(" ");
												appsObj.versions.mysql = (parts[parts.length - 1] || "").trim();
											} else if (mysql.indexOf(" ver ") > -1) {
												mysql = mysql.split(" ver ")[1];
												appsObj.versions.mysql = mysql.split(" ")[0];
											}
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "php"))
									exec("php -v", function (error, stdout) {
										if (!error) {
											const php = stdout.toString().split("\n")[0] || "";
											let parts = php.split("(");
											if (parts[0].indexOf("-")) parts = parts[0].split("-");
											appsObj.versions.php = parts[0].replace(/[^0-9.]/g, "");
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "redis"))
									exec("redis-server --version", function (error, stdout) {
										if (!error) {
											const redis = stdout.toString().split("\n")[0] || "";
											const parts = redis.split(" ");
											appsObj.versions.redis = util.getValue(parts, "v", "=", true);
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "docker"))
									exec("docker --version", function (error, stdout) {
										if (!error) {
											const docker = stdout.toString().split("\n")[0] || "";
											const parts = docker.split(" ");
											appsObj.versions.docker = parts.length > 2 && parts[2].endsWith(",") ? parts[2].slice(0, -1) : "";
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "postfix"))
									exec("postconf -d | grep mail_version", function (error, stdout) {
										if (!error) {
											const postfix = stdout.toString().split("\n") || [];
											appsObj.versions.postfix = util.getValue(postfix, "mail_version", "=", true);
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "mongodb"))
									exec("mongod --version", function (error, stdout) {
										if (!error) {
											const mongodb = stdout.toString().split("\n")[0] || "";
											appsObj.versions.mongodb = (mongodb.toLowerCase().split(",")[0] || "").replace(/[^0-9.]/g, "");
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "postgresql"))
									if (_linux)
										exec("locate bin/postgres", function (error, stdout) {
											if (!error) {
												const postgresqlBin = stdout.toString().split("\n").sort();
												if (postgresqlBin.length)
													exec(postgresqlBin[postgresqlBin.length - 1] + " -V", function (error, stdout) {
														if (!error) {
															const postgresql = stdout.toString().split("\n")[0].split(" ") || [];
															appsObj.versions.postgresql = postgresql.length ? postgresql[postgresql.length - 1] : "";
														}
														functionProcessed();
													});
												else functionProcessed();
											} else {
												exec("psql -V", function (error, stdout) {
													if (!error) {
														const postgresql = stdout.toString().split("\n")[0].split(" ") || [];
														appsObj.versions.postgresql = postgresql.length ? postgresql[postgresql.length - 1] : "";
														appsObj.versions.postgresql = appsObj.versions.postgresql.split("-")[0];
													}
													functionProcessed();
												});
												functionProcessed();
											}
										});
									else if (_windows)
										util.powerShell("Get-WmiObject Win32_Service | select caption | fl").then((stdout) => {
											let serviceSections = stdout.split(/\n\s*\n/);
											for (let i = 0; i < serviceSections.length; i++)
												if ("" !== serviceSections[i].trim()) {
													let lines = serviceSections[i].trim().split("\r\n");
													let srvCaption = util.getValue(lines, "caption", ":", true).toLowerCase();
													if (srvCaption.indexOf("postgresql") > -1) {
														const parts = srvCaption.split(" server ");
														if (parts.length > 1) appsObj.versions.postgresql = parts[1];
													}
												}
											functionProcessed();
										});
									else
										exec("postgres -V", function (error, stdout) {
											if (!error) {
												const postgresql = stdout.toString().split("\n")[0].split(" ") || [];
												appsObj.versions.postgresql = postgresql.length ? postgresql[postgresql.length - 1] : "";
											}
											functionProcessed();
										});
								if ({}.hasOwnProperty.call(appsObj.versions, "perl"))
									exec("perl -v", function (error, stdout) {
										if (!error) {
											const perl = stdout.toString().split("\n") || "";
											while (perl.length > 0 && "" === perl[0].trim()) perl.shift();
											if (perl.length > 0) appsObj.versions.perl = perl[0].split("(").pop().split(")")[0].replace("v", "");
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "python"))
									if (_darwin) {
										const stdout = execSync("sw_vers");
										const lines = stdout.toString().split("\n");
										const osVersion = util.getValue(lines, "ProductVersion", ":");
										const gitHomebrewExists1 = fs.existsSync("/usr/local/Cellar/python");
										const gitHomebrewExists2 = fs.existsSync("/opt/homebrew/bin/python");
										if ((util.darwinXcodeExists() && util.semverCompare("12.0.1", osVersion) < 0) || gitHomebrewExists1 || gitHomebrewExists2) {
											const cmd = gitHomebrewExists1
												? "/usr/local/Cellar/python -V 2>&1"
												: gitHomebrewExists2
												? "/opt/homebrew/bin/python -V 2>&1"
												: "python -V 2>&1";
											exec(cmd, function (error, stdout) {
												if (!error) {
													const python = stdout.toString().split("\n")[0] || "";
													appsObj.versions.python = python.toLowerCase().replace("python", "").trim();
												}
												functionProcessed();
											});
										} else functionProcessed();
									} else
										exec("python -V 2>&1", function (error, stdout) {
											if (!error) {
												const python = stdout.toString().split("\n")[0] || "";
												appsObj.versions.python = python.toLowerCase().replace("python", "").trim();
											}
											functionProcessed();
										});
								if ({}.hasOwnProperty.call(appsObj.versions, "python3"))
									if (_darwin) {
										const gitHomebrewExists = fs.existsSync("/usr/local/Cellar/python3") || fs.existsSync("/opt/homebrew/bin/python3");
										if (util.darwinXcodeExists() || gitHomebrewExists)
											exec("python3 -V 2>&1", function (error, stdout) {
												if (!error) {
													const python = stdout.toString().split("\n")[0] || "";
													appsObj.versions.python3 = python.toLowerCase().replace("python", "").trim();
												}
												functionProcessed();
											});
										else functionProcessed();
									} else
										exec("python3 -V 2>&1", function (error, stdout) {
											if (!error) {
												const python = stdout.toString().split("\n")[0] || "";
												appsObj.versions.python3 = python.toLowerCase().replace("python", "").trim();
											}
											functionProcessed();
										});
								if ({}.hasOwnProperty.call(appsObj.versions, "pip"))
									if (_darwin) {
										const gitHomebrewExists = fs.existsSync("/usr/local/Cellar/pip") || fs.existsSync("/opt/homebrew/bin/pip");
										if (util.darwinXcodeExists() || gitHomebrewExists)
											exec("pip -V 2>&1", function (error, stdout) {
												if (!error) {
													const pip = stdout.toString().split("\n")[0] || "";
													const parts = pip.split(" ");
													appsObj.versions.pip = parts.length >= 2 ? parts[1] : "";
												}
												functionProcessed();
											});
										else functionProcessed();
									} else
										exec("pip -V 2>&1", function (error, stdout) {
											if (!error) {
												const pip = stdout.toString().split("\n")[0] || "";
												const parts = pip.split(" ");
												appsObj.versions.pip = parts.length >= 2 ? parts[1] : "";
											}
											functionProcessed();
										});
								if ({}.hasOwnProperty.call(appsObj.versions, "pip3"))
									if (_darwin) {
										const gitHomebrewExists = fs.existsSync("/usr/local/Cellar/pip3") || fs.existsSync("/opt/homebrew/bin/pip3");
										if (util.darwinXcodeExists() || gitHomebrewExists)
											exec("pip3 -V 2>&1", function (error, stdout) {
												if (!error) {
													const pip = stdout.toString().split("\n")[0] || "";
													const parts = pip.split(" ");
													appsObj.versions.pip3 = parts.length >= 2 ? parts[1] : "";
												}
												functionProcessed();
											});
										else functionProcessed();
									} else
										exec("pip3 -V 2>&1", function (error, stdout) {
											if (!error) {
												const pip = stdout.toString().split("\n")[0] || "";
												const parts = pip.split(" ");
												appsObj.versions.pip3 = parts.length >= 2 ? parts[1] : "";
											}
											functionProcessed();
										});
								if ({}.hasOwnProperty.call(appsObj.versions, "java"))
									if (_darwin)
										exec("/usr/libexec/java_home -V 2>&1", function (error, stdout) {
											if (!error && -1 === stdout.toString().toLowerCase().indexOf("no java runtime"))
												exec("java -version 2>&1", function (error, stdout) {
													if (!error) {
														const java = stdout.toString().split("\n")[0] || "";
														const parts = java.split('"');
														appsObj.versions.java = 3 === parts.length ? parts[1].trim() : "";
													}
													functionProcessed();
												});
											else functionProcessed();
										});
									else
										exec("java -version 2>&1", function (error, stdout) {
											if (!error) {
												const java = stdout.toString().split("\n")[0] || "";
												const parts = java.split('"');
												appsObj.versions.java = 3 === parts.length ? parts[1].trim() : "";
											}
											functionProcessed();
										});
								if ({}.hasOwnProperty.call(appsObj.versions, "gcc"))
									if ((_darwin && util.darwinXcodeExists()) || !_darwin)
										exec("gcc -dumpversion", function (error, stdout) {
											if (!error) appsObj.versions.gcc = stdout.toString().split("\n")[0].trim() || "";
											if (appsObj.versions.gcc.indexOf(".") > -1) functionProcessed();
											else
												exec("gcc --version", function (error, stdout) {
													if (!error) {
														const gcc = stdout.toString().split("\n")[0].trim();
														if (gcc.indexOf("gcc") > -1 && gcc.indexOf(")") > -1) {
															const parts = gcc.split(")");
															appsObj.versions.gcc = parts[1].trim() || appsObj.versions.gcc;
														}
													}
													functionProcessed();
												});
										});
									else functionProcessed();
								if ({}.hasOwnProperty.call(appsObj.versions, "virtualbox"))
									exec(util.getVboxmanage() + " -v 2>&1", function (error, stdout) {
										if (!error) {
											const vbox = stdout.toString().split("\n")[0] || "";
											const parts = vbox.split("r");
											appsObj.versions.virtualbox = parts[0];
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "bash"))
									exec("bash --version", function (error, stdout) {
										if (!error) {
											const line = stdout.toString().split("\n")[0];
											const parts = line.split(" version ");
											if (parts.length > 1) appsObj.versions.bash = parts[1].split(" ")[0].split("(")[0];
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "zsh"))
									exec("zsh --version", function (error, stdout) {
										if (!error) {
											const line = stdout.toString().split("\n")[0];
											const parts = line.split("zsh ");
											if (parts.length > 1) appsObj.versions.zsh = parts[1].split(" ")[0];
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "fish"))
									exec("fish --version", function (error, stdout) {
										if (!error) {
											const line = stdout.toString().split("\n")[0];
											const parts = line.split(" version ");
											if (parts.length > 1) appsObj.versions.fish = parts[1].split(" ")[0];
										}
										functionProcessed();
									});
								if ({}.hasOwnProperty.call(appsObj.versions, "powershell"))
									if (_windows)
										util.powerShell("$PSVersionTable").then((stdout) => {
											const lines = stdout
												.toString()
												.split("\n")
												.map((line) => line.replace(/ +/g, " ").replace(/ +/g, ":"));
											appsObj.versions.powershell = util.getValue(lines, "psversion");
											functionProcessed();
										});
									else functionProcessed();
								if ({}.hasOwnProperty.call(appsObj.versions, "dotnet"))
									util.powerShell(
										'gci "HKLM:\\SOFTWARE\\Microsoft\\NET Framework Setup\\NDP" -recurse | gp -name Version,Release -EA 0 | where { $_.PSChildName -match "^(?!S)\\p{L}"} | select PSChildName, Version, Release',
									).then((stdout) => {
										const lines = stdout.toString().split("\r\n");
										let dotnet = "";
										lines.forEach((line) => {
											line = line.replace(/ +/g, " ");
											const parts = line.split(" ");
											dotnet =
												dotnet ||
												(parts[0].toLowerCase().startsWith("client") && parts.length > 2
													? parts[1].trim()
													: parts[0].toLowerCase().startsWith("full") && parts.length > 2
													? parts[1].trim()
													: "");
										});
										appsObj.versions.dotnet = dotnet.trim();
										functionProcessed();
									});
							} catch (e) {
								if (callback) callback(appsObj.versions);
								resolve(appsObj.versions);
							}
						});
					});
				}
				exports.versions = versions;
				function shell(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							if (_windows) resolve("cmd");
							else {
								let result = "";
								exec("echo $SHELL", function (error, stdout) {
									if (!error) result = stdout.toString().split("\n")[0];
									if (callback) callback(result);
									resolve(result);
								});
							}
						});
					});
				}
				exports.shell = shell;
				function getUniqueMacAdresses() {
					const ifaces = os.networkInterfaces();
					let macs = [];
					for (let dev in ifaces)
						if ({}.hasOwnProperty.call(ifaces, dev))
							ifaces[dev].forEach(function (details) {
								if (details && details.mac && "00:00:00:00:00:00" !== details.mac) {
									const mac = details.mac.toLowerCase();
									if (-1 === macs.indexOf(mac)) macs.push(mac);
								}
							});
					macs = macs.sort(function (a, b) {
						if (a < b) return -1;
						if (a > b) return 1;
						return 0;
					});
					return macs;
				}
				function uuid(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								os: "",
								hardware: "",
								macs: getUniqueMacAdresses(),
							};
							let parts;
							if (_darwin)
								exec("system_profiler SPHardwareDataType -json", function (error, stdout) {
									if (!error)
										try {
											const jsonObj = JSON.parse(stdout.toString());
											if (jsonObj.SPHardwareDataType && jsonObj.SPHardwareDataType.length > 0) {
												const spHardware = jsonObj.SPHardwareDataType[0];
												result.os = spHardware.platform_UUID.toLowerCase();
												result.hardware = spHardware.serial_number;
											}
										} catch (e) {
											util.noop();
										}
									if (callback) callback(result);
									resolve(result);
								});
							if (_linux) {
								const cmd = `echo -n "os: "; cat /var/lib/dbus/machine-id 2> /dev/null; echo;\necho -n "os: "; cat /etc/machine-id 2> /dev/null; echo;\necho -n "hardware: "; cat /sys/class/dmi/id/product_uuid 2> /dev/null; echo;`;
								exec(cmd, function (error, stdout) {
									const lines = stdout.toString().split("\n");
									result.os = util.getValue(lines, "os").toLowerCase();
									result.hardware = util.getValue(lines, "hardware").toLowerCase();
									if (!result.hardware) {
										const lines = fs
											.readFileSync("/proc/cpuinfo", {
												encoding: "utf8",
											})
											.toString()
											.split("\n");
										const serial = util.getValue(lines, "serial");
										result.hardware = serial || "";
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_freebsd || _openbsd || _netbsd)
								exec("sysctl -i kern.hostid kern.hostuuid", function (error, stdout) {
									const lines = stdout.toString().split("\n");
									result.os = util.getValue(lines, "kern.hostid", ":").toLowerCase();
									result.hardware = util.getValue(lines, "kern.hostuuid", ":").toLowerCase();
									if (result.os.indexOf("unknown") >= 0) result.os = "";
									if (result.hardware.indexOf("unknown") >= 0) result.hardware = "";
									if (callback) callback(result);
									resolve(result);
								});
							if (_windows) {
								let sysdir = "%windir%\\System32";
								if ("ia32" === process.arch && Object.prototype.hasOwnProperty.call(process.env, "PROCESSOR_ARCHITEW6432"))
									sysdir = "%windir%\\sysnative\\cmd.exe /c %windir%\\System32";
								util.powerShell("Get-WmiObject Win32_ComputerSystemProduct | select UUID | fl").then((stdout) => {
									let lines = stdout.split("\r\n");
									result.hardware = util.getValue(lines, "uuid", ":").toLowerCase();
									exec(`${sysdir}\\reg query "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography" /v MachineGuid`, util.execOptsWin, function (error, stdout) {
										parts = stdout.toString().split("\n\r")[0].split("REG_SZ");
										result.os = parts.length > 1 ? parts[1].replace(/\r+|\n+|\s+/gi, "").toLowerCase() : "";
										if (callback) callback(result);
										resolve(result);
									});
								});
							}
						});
					});
				}
				exports.uuid = uuid;
			},
			818: (__unused_webpack_module, exports, __webpack_require__) => {
				const exec = __webpack_require__(282).exec;
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				const winPrinterStatus = {
					1: "Other",
					2: "Unknown",
					3: "Idle",
					4: "Printing",
					5: "Warmup",
					6: "Stopped Printing",
					7: "Offline",
				};
				function parseLinuxCupsHeader(lines) {
					const result = {};
					if (lines && lines.length)
						if (lines[0].indexOf(" CUPS v") > 0) {
							const parts = lines[0].split(" CUPS v");
							result.cupsVersion = parts[1];
						}
					return result;
				}
				function parseLinuxCupsPrinter(lines) {
					const result = {};
					const printerId = util.getValue(lines, "PrinterId", " ");
					result.id = printerId ? parseInt(printerId, 10) : null;
					result.name = util.getValue(lines, "Info", " ");
					result.model = lines.length > 0 && lines[0] ? lines[0].split(" ")[0] : "";
					result.uri = util.getValue(lines, "DeviceURI", " ");
					result.uuid = util.getValue(lines, "UUID", " ");
					result.status = util.getValue(lines, "State", " ");
					result.local = util.getValue(lines, "Location", " ").toLowerCase().startsWith("local");
					result.default = null;
					result.shared = util.getValue(lines, "Shared", " ").toLowerCase().startsWith("yes");
					return result;
				}
				function parseLinuxLpstatPrinter(lines, id) {
					const result = {};
					result.id = id;
					result.name = util.getValue(lines, "Description", ":", true);
					result.model = lines.length > 0 && lines[0] ? lines[0].split(" ")[0] : "";
					result.uri = null;
					result.uuid = null;
					result.status = lines.length > 0 && lines[0] ? (lines[0].indexOf(" idle") > 0 ? "idle" : lines[0].indexOf(" printing") > 0 ? "printing" : "unknown") : null;
					result.local = util.getValue(lines, "Location", ":", true).toLowerCase().startsWith("local");
					result.default = null;
					result.shared = util.getValue(lines, "Shared", " ").toLowerCase().startsWith("yes");
					return result;
				}
				function parseDarwinPrinters(printerObject, id) {
					const result = {};
					const uriParts = printerObject.uri.split("/");
					result.id = id;
					result.name = printerObject._name;
					result.model = uriParts.length ? uriParts[uriParts.length - 1] : "";
					result.uri = printerObject.uri;
					result.uuid = null;
					result.status = printerObject.status;
					result.local = "local" === printerObject.printserver;
					result.default = "yes" === printerObject.default;
					result.shared = "yes" === printerObject.shared;
					return result;
				}
				function parseWindowsPrinters(lines, id) {
					const result = {};
					const status = parseInt(util.getValue(lines, "PrinterStatus", ":"), 10);
					result.id = id;
					result.name = util.getValue(lines, "name", ":");
					result.model = util.getValue(lines, "DriverName", ":");
					result.uri = null;
					result.uuid = null;
					result.status = winPrinterStatus[status] ? winPrinterStatus[status] : null;
					result.local = "TRUE" === util.getValue(lines, "Local", ":").toUpperCase();
					result.default = "TRUE" === util.getValue(lines, "Default", ":").toUpperCase();
					result.shared = "TRUE" === util.getValue(lines, "Shared", ":").toUpperCase();
					return result;
				}
				function printer(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux || _freebsd || _openbsd || _netbsd) {
								let cmd = "cat /etc/cups/printers.conf 2>/dev/null";
								exec(cmd, function (error, stdout) {
									if (!error) {
										const parts = stdout.toString().split("<Printer ");
										const printerHeader = parseLinuxCupsHeader(parts[0]);
										for (let i = 1; i < parts.length; i++) {
											const printers = parseLinuxCupsPrinter(parts[i].split("\n"));
											if (printers.name) {
												printers.engine = "CUPS";
												printers.engineVersion = printerHeader.cupsVersion;
												result.push(printers);
											}
										}
									}
									if (0 === result.length)
										if (_linux) {
											cmd = "export LC_ALL=C; lpstat -lp 2>/dev/null; unset LC_ALL";
											exec(cmd, function (error, stdout) {
												const parts = ("\n" + stdout.toString()).split("\nprinter ");
												for (let i = 1; i < parts.length; i++) {
													const printers = parseLinuxLpstatPrinter(parts[i].split("\n"), i);
													result.push(printers);
												}
											});
											if (callback) callback(result);
											resolve(result);
										} else {
											if (callback) callback(result);
											resolve(result);
										}
									else {
										if (callback) callback(result);
										resolve(result);
									}
								});
							}
							if (_darwin) {
								let cmd = "system_profiler SPPrintersDataType -json";
								exec(cmd, function (error, stdout) {
									if (!error)
										try {
											const outObj = JSON.parse(stdout.toString());
											if (outObj.SPPrintersDataType && outObj.SPPrintersDataType.length)
												for (let i = 0; i < outObj.SPPrintersDataType.length; i++) {
													const printer = parseDarwinPrinters(outObj.SPPrintersDataType[i], i);
													result.push(printer);
												}
										} catch (e) {
											util.noop();
										}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_windows)
								util.powerShell("Get-WmiObject Win32_Printer | select PrinterStatus,Name,DriverName,Local,Default,Shared | fl").then((stdout, error) => {
									if (!error) {
										const parts = stdout.toString().split(/\n\s*\n/);
										for (let i = 0; i < parts.length; i++) {
											const printer = parseWindowsPrinters(parts[i].split("\n"), i);
											if (printer.name || printer.model) result.push(parseWindowsPrinters(parts[i].split("\n"), i));
										}
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) resolve(null);
						});
					});
				}
				exports.printer = printer;
			},
			537: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const fs = __webpack_require__(48);
				const path = __webpack_require__(315);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				const _processes_cpu = {
					all: 0,
					all_utime: 0,
					all_stime: 0,
					list: {},
					ms: 0,
					result: {},
				};
				const _services_cpu = {
					all: 0,
					all_utime: 0,
					all_stime: 0,
					list: {},
					ms: 0,
					result: {},
				};
				const _process_cpu = {
					all: 0,
					all_utime: 0,
					all_stime: 0,
					list: {},
					ms: 0,
					result: {},
				};
				const _winStatusValues = {
					0: "unknown",
					1: "other",
					2: "ready",
					3: "running",
					4: "blocked",
					5: "suspended blocked",
					6: "suspended ready",
					7: "terminated",
					8: "stopped",
					9: "growing",
				};
				function parseTimeWin(time) {
					time = time || "";
					if (time)
						return time.substr(0, 4) + "-" + time.substr(4, 2) + "-" + time.substr(6, 2) + " " + time.substr(8, 2) + ":" + time.substr(10, 2) + ":" + time.substr(12, 2);
					else return "";
				}
				function parseTimeUnix(time) {
					let result = time;
					let parts = time.replace(/ +/g, " ").split(" ");
					if (5 === parts.length)
						result =
							parts[4] +
							"-" +
							("0" + ("JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC".indexOf(parts[1].toUpperCase()) / 3 + 1)).slice(-2) +
							"-" +
							("0" + parts[2]).slice(-2) +
							" " +
							parts[3];
					return result;
				}
				function services(srv, callback) {
					if (util.isFunction(srv) && !callback) {
						callback = srv;
						srv = "";
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							if ("string" !== typeof srv) {
								if (callback) callback([]);
								return resolve([]);
							}
							if (srv) {
								let srvString = "";
								srvString.__proto__.toLowerCase = util.stringToLower;
								srvString.__proto__.replace = util.stringReplace;
								srvString.__proto__.trim = util.stringTrim;
								const s = util.sanitizeShellString(srv);
								for (let i = 0; i <= util.mathMin(s.length, 2e3); i++) if (!(void 0 === s[i])) srvString += s[i];
								srvString = srvString.trim().toLowerCase().replace(/, /g, "|").replace(/,+/g, "|");
								if ("" === srvString) srvString = "*";
								if (util.isPrototypePolluted() && "*" !== srvString) srvString = "------";
								let srvs = srvString.split("|");
								let result = [];
								let dataSrv = [];
								if (_linux || _freebsd || _openbsd || _netbsd || _darwin) {
									if ((_linux || _freebsd || _openbsd || _netbsd) && "*" === srvString)
										try {
											const tmpsrv = execSync("systemctl --type=service --no-legend 2> /dev/null").toString().split("\n");
											srvs = [];
											for (const s of tmpsrv) {
												const name = s.split(".service")[0];
												if (name) srvs.push(name);
											}
											srvString = srvs.join("|");
										} catch (d) {
											try {
												srvString = "";
												const tmpsrv = execSync("service --status-all 2> /dev/null").toString().split("\n");
												for (const s of tmpsrv) {
													const parts = s.split("]");
													if (2 === parts.length) srvString += ("" !== srvString ? "|" : "") + parts[1].trim();
												}
												srvs = srvString.split("|");
											} catch (e) {
												try {
													const srvStr = execSync("ls /etc/init.d/ -m 2> /dev/null").toString().split("\n").join("");
													srvString = "";
													if (srvStr) {
														const tmpsrv = srvStr.split(",");
														for (const s of tmpsrv) {
															const name = s.trim();
															if (name) srvString += ("" !== srvString ? "|" : "") + name;
														}
														srvs = srvString.split("|");
													}
												} catch (f) {
													srvString = "";
													srvs = [];
												}
											}
										}
									if (_darwin && "*" === srvString) {
										if (callback) callback(result);
										resolve(result);
									}
									let args = _darwin ? ["-caxo", "pcpu,pmem,pid,command"] : ["-axo", "pcpu,pmem,pid,command"];
									if ("" !== srvString && srvs.length > 0)
										util.execSafe("ps", args).then((stdout) => {
											if (stdout) {
												let lines = stdout.replace(/ +/g, " ").replace(/,+/g, ".").split("\n");
												srvs.forEach(function (srv) {
													let ps;
													if (_darwin)
														ps = lines.filter(function (e) {
															return -1 !== e.toLowerCase().indexOf(srv);
														});
													else
														ps = lines.filter(function (e) {
															return -1 !== e.toLowerCase().indexOf(" " + srv + ":") || -1 !== e.toLowerCase().indexOf("/" + srv);
														});
													const pids = [];
													for (const p of ps) {
														const pid = p.trim().split(" ")[2];
														if (pid) pids.push(parseInt(pid, 10));
													}
													result.push({
														name: srv,
														running: ps.length > 0,
														startmode: "",
														pids,
														cpu: parseFloat(
															ps
																.reduce(function (pv, cv) {
																	return pv + parseFloat(cv.trim().split(" ")[0]);
																}, 0)
																.toFixed(2),
														),
														mem: parseFloat(
															ps
																.reduce(function (pv, cv) {
																	return pv + parseFloat(cv.trim().split(" ")[1]);
																}, 0)
																.toFixed(2),
														),
													});
												});
												if (_linux) {
													let cmd = 'cat /proc/stat | grep "cpu "';
													for (let i in result) for (let j in result[i].pids) cmd += ";cat /proc/" + result[i].pids[j] + "/stat";
													exec(
														cmd,
														{
															maxBuffer: 1024 * 2e4,
														},
														function (error, stdout) {
															let curr_processes = stdout.toString().split("\n");
															let all = parseProcStat(curr_processes.shift());
															let list_new = {};
															let resultProcess = {};
															for (let i = 0; i < curr_processes.length; i++) {
																resultProcess = calcProcStatLinux(curr_processes[i], all, _services_cpu);
																if (resultProcess.pid) {
																	let listPos = -1;
																	for (let i in result)
																		for (let j in result[i].pids) if (parseInt(result[i].pids[j]) === parseInt(resultProcess.pid)) listPos = i;
																	if (listPos >= 0) result[listPos].cpu += resultProcess.cpuu + resultProcess.cpus;
																	list_new[resultProcess.pid] = {
																		cpuu: resultProcess.cpuu,
																		cpus: resultProcess.cpus,
																		utime: resultProcess.utime,
																		stime: resultProcess.stime,
																		cutime: resultProcess.cutime,
																		cstime: resultProcess.cstime,
																	};
																}
															}
															_services_cpu.all = all;
															_services_cpu.list = Object.assign({}, list_new);
															_services_cpu.ms = Date.now() - _services_cpu.ms;
															_services_cpu.result = Object.assign({}, result);
															if (callback) callback(result);
															resolve(result);
														},
													);
												} else {
													if (callback) callback(result);
													resolve(result);
												}
											} else {
												args = ["-o", "comm"];
												util.execSafe("ps", args).then((stdout) => {
													if (stdout) {
														let lines = stdout.replace(/ +/g, " ").replace(/,+/g, ".").split("\n");
														srvs.forEach(function (srv) {
															let ps = lines.filter(function (e) {
																return -1 !== e.indexOf(srv);
															});
															result.push({
																name: srv,
																running: ps.length > 0,
																startmode: "",
																cpu: 0,
																mem: 0,
															});
														});
														if (callback) callback(result);
														resolve(result);
													} else {
														srvs.forEach(function (srv) {
															result.push({
																name: srv,
																running: false,
																startmode: "",
																cpu: 0,
																mem: 0,
															});
														});
														if (callback) callback(result);
														resolve(result);
													}
												});
											}
										});
									else {
										if (callback) callback(result);
										resolve(result);
									}
								}
								if (_windows)
									try {
										let wincommand = "Get-WmiObject Win32_Service";
										if ("*" !== srvs[0]) {
											wincommand += ' -Filter "';
											for (let i = 0; i < srvs.length; i++) wincommand += `Name='${srvs[i]}' or `;
											wincommand = `${wincommand.slice(0, -4)}"`;
										}
										wincommand += " | select Name,Caption,Started,StartMode,ProcessId | fl";
										util.powerShell(wincommand).then((stdout, error) => {
											if (!error) {
												let serviceSections = stdout.split(/\n\s*\n/);
												for (let i = 0; i < serviceSections.length; i++)
													if ("" !== serviceSections[i].trim()) {
														let lines = serviceSections[i].trim().split("\r\n");
														let srvName = util.getValue(lines, "Name", ":", true).toLowerCase();
														let srvCaption = util.getValue(lines, "Caption", ":", true).toLowerCase();
														let started = util.getValue(lines, "Started", ":", true);
														let startMode = util.getValue(lines, "StartMode", ":", true);
														let pid = util.getValue(lines, "ProcessId", ":", true);
														if ("*" === srvString || srvs.indexOf(srvName) >= 0 || srvs.indexOf(srvCaption) >= 0) {
															result.push({
																name: srvName,
																running: "true" === started.toLowerCase(),
																startmode: startMode,
																pids: [pid],
																cpu: 0,
																mem: 0,
															});
															dataSrv.push(srvName);
															dataSrv.push(srvCaption);
														}
													}
												if ("*" !== srvString) {
													let srvsMissing = srvs.filter(function (e) {
														return -1 === dataSrv.indexOf(e);
													});
													srvsMissing.forEach(function (srvName) {
														result.push({
															name: srvName,
															running: false,
															startmode: "",
															pids: [],
															cpu: 0,
															mem: 0,
														});
													});
												}
												if (callback) callback(result);
												resolve(result);
											} else {
												srvs.forEach(function (srvName) {
													result.push({
														name: srvName,
														running: false,
														startmode: "",
														cpu: 0,
														mem: 0,
													});
												});
												if (callback) callback(result);
												resolve(result);
											}
										});
									} catch (e) {
										if (callback) callback(result);
										resolve(result);
									}
							} else {
								if (callback) callback([]);
								resolve([]);
							}
						});
					});
				}
				exports.services = services;
				function parseProcStat(line) {
					let parts = line.replace(/ +/g, " ").split(" ");
					let user = parts.length >= 2 ? parseInt(parts[1]) : 0;
					let nice = parts.length >= 3 ? parseInt(parts[2]) : 0;
					let system = parts.length >= 4 ? parseInt(parts[3]) : 0;
					let idle = parts.length >= 5 ? parseInt(parts[4]) : 0;
					let iowait = parts.length >= 6 ? parseInt(parts[5]) : 0;
					let irq = parts.length >= 7 ? parseInt(parts[6]) : 0;
					let softirq = parts.length >= 8 ? parseInt(parts[7]) : 0;
					let steal = parts.length >= 9 ? parseInt(parts[8]) : 0;
					let guest = parts.length >= 10 ? parseInt(parts[9]) : 0;
					let guest_nice = parts.length >= 11 ? parseInt(parts[10]) : 0;
					return user + nice + system + idle + iowait + irq + softirq + steal + guest + guest_nice;
				}
				function calcProcStatLinux(line, all, _cpu_old) {
					let statparts = line.replace(/ +/g, " ").split(")");
					if (statparts.length >= 2) {
						let parts = statparts[1].split(" ");
						if (parts.length >= 16) {
							let pid = parseInt(statparts[0].split(" ")[0]);
							let utime = parseInt(parts[12]);
							let stime = parseInt(parts[13]);
							let cutime = parseInt(parts[14]);
							let cstime = parseInt(parts[15]);
							let cpuu = 0;
							let cpus = 0;
							if (_cpu_old.all > 0 && _cpu_old.list[pid]) {
								cpuu = ((utime + cutime - _cpu_old.list[pid].utime - _cpu_old.list[pid].cutime) / (all - _cpu_old.all)) * 100;
								cpus = ((stime + cstime - _cpu_old.list[pid].stime - _cpu_old.list[pid].cstime) / (all - _cpu_old.all)) * 100;
							} else {
								cpuu = ((utime + cutime) / all) * 100;
								cpus = ((stime + cstime) / all) * 100;
							}
							return {
								pid,
								utime,
								stime,
								cutime,
								cstime,
								cpuu,
								cpus,
							};
						} else
							return {
								pid: 0,
								utime: 0,
								stime: 0,
								cutime: 0,
								cstime: 0,
								cpuu: 0,
								cpus: 0,
							};
					} else
						return {
							pid: 0,
							utime: 0,
							stime: 0,
							cutime: 0,
							cstime: 0,
							cpuu: 0,
							cpus: 0,
						};
				}
				function calcProcStatWin(procStat, all, _cpu_old) {
					let cpuu = 0;
					let cpus = 0;
					if (_cpu_old.all > 0 && _cpu_old.list[procStat.pid]) {
						cpuu = ((procStat.utime - _cpu_old.list[procStat.pid].utime) / (all - _cpu_old.all)) * 100;
						cpus = ((procStat.stime - _cpu_old.list[procStat.pid].stime) / (all - _cpu_old.all)) * 100;
					} else {
						cpuu = (procStat.utime / all) * 100;
						cpus = (procStat.stime / all) * 100;
					}
					return {
						pid: procStat.pid,
						utime: cpuu > 0 ? procStat.utime : 0,
						stime: cpus > 0 ? procStat.stime : 0,
						cpuu: cpuu > 0 ? cpuu : 0,
						cpus: cpus > 0 ? cpus : 0,
					};
				}
				function processes(callback) {
					let parsedhead = [];
					function getName(command) {
						command = command || "";
						let result = command.split(" ")[0];
						if (":" === result.substr(-1)) result = result.substr(0, result.length - 1);
						if ("[" !== result.substr(0, 1)) {
							let parts = result.split("/");
							if (isNaN(parseInt(parts[parts.length - 1]))) result = parts[parts.length - 1];
							else result = parts[0];
						}
						return result;
					}
					function parseLine(line) {
						let offset = 0;
						let offset2 = 0;
						function checkColumn(i) {
							offset = offset2;
							if (parsedhead[i]) offset2 = line.substring(parsedhead[i].to + offset, 1e4).indexOf(" ");
							else offset2 = 1e4;
						}
						checkColumn(0);
						const pid = parseInt(line.substring(parsedhead[0].from + offset, parsedhead[0].to + offset2));
						checkColumn(1);
						const ppid = parseInt(line.substring(parsedhead[1].from + offset, parsedhead[1].to + offset2));
						checkColumn(2);
						const cpu = parseFloat(line.substring(parsedhead[2].from + offset, parsedhead[2].to + offset2).replace(/,/g, "."));
						checkColumn(3);
						const mem = parseFloat(line.substring(parsedhead[3].from + offset, parsedhead[3].to + offset2).replace(/,/g, "."));
						checkColumn(4);
						const priority = parseInt(line.substring(parsedhead[4].from + offset, parsedhead[4].to + offset2));
						checkColumn(5);
						const vsz = parseInt(line.substring(parsedhead[5].from + offset, parsedhead[5].to + offset2));
						checkColumn(6);
						const rss = parseInt(line.substring(parsedhead[6].from + offset, parsedhead[6].to + offset2));
						checkColumn(7);
						const nice = parseInt(line.substring(parsedhead[7].from + offset, parsedhead[7].to + offset2)) || 0;
						checkColumn(8);
						const started = parseTimeUnix(line.substring(parsedhead[8].from + offset, parsedhead[8].to + offset2).trim());
						checkColumn(9);
						let state = line.substring(parsedhead[9].from + offset, parsedhead[9].to + offset2).trim();
						state =
							"R" === state[0]
								? "running"
								: "S" === state[0]
								? "sleeping"
								: "T" === state[0]
								? "stopped"
								: "W" === state[0]
								? "paging"
								: "X" === state[0]
								? "dead"
								: "Z" === state[0]
								? "zombie"
								: "D" === state[0] || "U" === state[0]
								? "blocked"
								: "unknown";
						checkColumn(10);
						let tty = line.substring(parsedhead[10].from + offset, parsedhead[10].to + offset2).trim();
						if ("?" === tty || "??" === tty) tty = "";
						checkColumn(11);
						const user = line.substring(parsedhead[11].from + offset, parsedhead[11].to + offset2).trim();
						checkColumn(12);
						let cmdPath = "";
						let command = "";
						let params = "";
						let fullcommand = line.substring(parsedhead[12].from + offset, parsedhead[12].to + offset2).trim();
						if ("]" === fullcommand.substr(fullcommand.length - 1)) fullcommand = fullcommand.slice(0, -1);
						if ("[" === fullcommand.substr(0, 1)) command = fullcommand.substring(1);
						else {
							let firstParamPos = fullcommand.indexOf(" -");
							let firstParamPathPos = fullcommand.indexOf(" /");
							firstParamPos = firstParamPos >= 0 ? firstParamPos : 1e4;
							firstParamPathPos = firstParamPathPos >= 0 ? firstParamPathPos : 1e4;
							const firstPos = Math.min(firstParamPos, firstParamPathPos);
							let tmpCommand = fullcommand.substr(0, firstPos);
							const tmpParams = fullcommand.substr(firstPos);
							const lastSlashPos = tmpCommand.lastIndexOf("/");
							if (lastSlashPos >= 0) {
								cmdPath = tmpCommand.substr(0, lastSlashPos);
								tmpCommand = tmpCommand.substr(lastSlashPos + 1);
							}
							if (1e4 === firstPos && tmpCommand.indexOf(" ") > -1) {
								const parts = tmpCommand.split(" ");
								if (fs.existsSync(path.join(cmdPath, parts[0]))) {
									command = parts.shift();
									params = (parts.join(" ") + " " + tmpParams).trim();
								} else {
									command = tmpCommand.trim();
									params = tmpParams.trim();
								}
							} else {
								command = tmpCommand.trim();
								params = tmpParams.trim();
							}
						}
						return {
							pid,
							parentPid: ppid,
							name: _linux ? getName(command) : command,
							cpu,
							cpuu: 0,
							cpus: 0,
							mem,
							priority,
							memVsz: vsz,
							memRss: rss,
							nice,
							started,
							state,
							tty,
							user,
							command,
							params,
							path: cmdPath,
						};
					}
					function parseProcesses(lines) {
						let result = [];
						if (lines.length > 1) {
							let head = lines[0];
							parsedhead = util.parseHead(head, 8);
							lines.shift();
							lines.forEach(function (line) {
								if ("" !== line.trim()) result.push(parseLine(line));
							});
						}
						return result;
					}
					function parseProcesses2(lines) {
						function formatDateTime(time) {
							const month = ("0" + (time.getMonth() + 1).toString()).substr(-2);
							const year = time.getFullYear().toString();
							const day = ("0" + time.getDay().toString()).substr(-2);
							const hours = time.getHours().toString();
							const mins = time.getMinutes().toString();
							const secs = ("0" + time.getSeconds().toString()).substr(-2);
							return year + "-" + month + "-" + day + " " + hours + ":" + mins + ":" + secs;
						}
						let result = [];
						lines.forEach(function (line) {
							if ("" !== line.trim()) {
								line = line.trim().replace(/ +/g, " ").replace(/,+/g, ".");
								const parts = line.split(" ");
								const command = parts.slice(9).join(" ");
								const pmem = parseFloat(((1 * parseInt(parts[3]) * 1024) / os.totalmem()).toFixed(1));
								const elapsed_parts = parts[5].split(":");
								const started = formatDateTime(
									new Date(Date.now() - (elapsed_parts.length > 1 ? 1e3 * (60 * elapsed_parts[0] + elapsed_parts[1]) : 1e3 * elapsed_parts[0])),
								);
								result.push({
									pid: parseInt(parts[0]),
									parentPid: parseInt(parts[1]),
									name: getName(command),
									cpu: 0,
									cpuu: 0,
									cpus: 0,
									mem: pmem,
									priority: 0,
									memVsz: parseInt(parts[2]),
									memRss: parseInt(parts[3]),
									nice: parseInt(parts[4]),
									started,
									state:
										"R" === parts[6]
											? "running"
											: "S" === parts[6]
											? "sleeping"
											: "T" === parts[6]
											? "stopped"
											: "W" === parts[6]
											? "paging"
											: "X" === parts[6]
											? "dead"
											: "Z" === parts[6]
											? "zombie"
											: "D" === parts[6] || "U" === parts[6]
											? "blocked"
											: "unknown",
									tty: parts[7],
									user: parts[8],
									command,
								});
							}
						});
						return result;
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								all: 0,
								running: 0,
								blocked: 0,
								sleeping: 0,
								unknown: 0,
								list: [],
							};
							let cmd = "";
							if ((_processes_cpu.ms && Date.now() - _processes_cpu.ms >= 500) || 0 === _processes_cpu.ms)
								if (_linux || _freebsd || _openbsd || _netbsd || _darwin || _sunos) {
									if (_linux)
										cmd = "export LC_ALL=C; ps -axo pid:11,ppid:11,pcpu:6,pmem:6,pri:5,vsz:11,rss:11,ni:5,lstart:30,state:5,tty:15,user:20,command; unset LC_ALL";
									if (_freebsd || _openbsd || _netbsd) cmd = "export LC_ALL=C; ps -axo pid,ppid,pcpu,pmem,pri,vsz,rss,ni,lstart,state,tty,user,command; unset LC_ALL";
									if (_darwin) cmd = "ps -axo pid,ppid,pcpu,pmem,pri,vsz=xxx_fake_title,rss=fake_title2,nice,lstart,state,tty,user,command -r";
									if (_sunos) cmd = "ps -Ao pid,ppid,pcpu,pmem,pri,vsz,rss,nice,stime,s,tty,user,comm";
									exec(
										cmd,
										{
											maxBuffer: 1024 * 2e4,
										},
										function (error, stdout) {
											if (!error && stdout.toString().trim()) {
												result.list = parseProcesses(stdout.toString().split("\n")).slice();
												result.all = result.list.length;
												result.running = result.list.filter(function (e) {
													return "running" === e.state;
												}).length;
												result.blocked = result.list.filter(function (e) {
													return "blocked" === e.state;
												}).length;
												result.sleeping = result.list.filter(function (e) {
													return "sleeping" === e.state;
												}).length;
												if (_linux) {
													cmd = 'cat /proc/stat | grep "cpu "';
													for (let i = 0; i < result.list.length; i++) cmd += ";cat /proc/" + result.list[i].pid + "/stat";
													exec(
														cmd,
														{
															maxBuffer: 1024 * 2e4,
														},
														function (error, stdout) {
															let curr_processes = stdout.toString().split("\n");
															let all = parseProcStat(curr_processes.shift());
															let list_new = {};
															let resultProcess = {};
															for (let i = 0; i < curr_processes.length; i++) {
																resultProcess = calcProcStatLinux(curr_processes[i], all, _processes_cpu);
																if (resultProcess.pid) {
																	let listPos = result.list
																		.map(function (e) {
																			return e.pid;
																		})
																		.indexOf(resultProcess.pid);
																	if (listPos >= 0) {
																		result.list[listPos].cpu = resultProcess.cpuu + resultProcess.cpus;
																		result.list[listPos].cpuu = resultProcess.cpuu;
																		result.list[listPos].cpus = resultProcess.cpus;
																	}
																	list_new[resultProcess.pid] = {
																		cpuu: resultProcess.cpuu,
																		cpus: resultProcess.cpus,
																		utime: resultProcess.utime,
																		stime: resultProcess.stime,
																		cutime: resultProcess.cutime,
																		cstime: resultProcess.cstime,
																	};
																}
															}
															_processes_cpu.all = all;
															_processes_cpu.list = Object.assign({}, list_new);
															_processes_cpu.ms = Date.now() - _processes_cpu.ms;
															_processes_cpu.result = Object.assign({}, result);
															if (callback) callback(result);
															resolve(result);
														},
													);
												} else {
													if (callback) callback(result);
													resolve(result);
												}
											} else {
												cmd = "ps -o pid,ppid,vsz,rss,nice,etime,stat,tty,user,comm";
												if (_sunos) cmd = "ps -o pid,ppid,vsz,rss,nice,etime,s,tty,user,comm";
												exec(
													cmd,
													{
														maxBuffer: 1024 * 2e4,
													},
													function (error, stdout) {
														if (!error) {
															let lines = stdout.toString().split("\n");
															lines.shift();
															result.list = parseProcesses2(lines).slice();
															result.all = result.list.length;
															result.running = result.list.filter(function (e) {
																return "running" === e.state;
															}).length;
															result.blocked = result.list.filter(function (e) {
																return "blocked" === e.state;
															}).length;
															result.sleeping = result.list.filter(function (e) {
																return "sleeping" === e.state;
															}).length;
															if (callback) callback(result);
															resolve(result);
														} else {
															if (callback) callback(result);
															resolve(result);
														}
													},
												);
											}
										},
									);
								} else if (_windows)
									try {
										util.powerShell(
											"Get-WmiObject Win32_Process | select ProcessId,ParentProcessId,ExecutionState,Caption,CommandLine,ExecutablePath,UserModeTime,KernelModeTime,WorkingSetSize,Priority,PageFileUsage,CreationDate | fl",
										).then((stdout, error) => {
											if (!error) {
												let processSections = stdout.split(/\n\s*\n/);
												let procs = [];
												let procStats = [];
												let list_new = {};
												let allcpuu = 0;
												let allcpus = 0;
												for (let i = 0; i < processSections.length; i++)
													if ("" !== processSections[i].trim()) {
														let lines = processSections[i].trim().split("\r\n");
														let pid = parseInt(util.getValue(lines, "ProcessId", ":", true), 10);
														let parentPid = parseInt(util.getValue(lines, "ParentProcessId", ":", true), 10);
														let statusValue = util.getValue(lines, "ExecutionState", ":");
														let name = util.getValue(lines, "Caption", ":", true);
														let commandLine = util.getValue(lines, "CommandLine", ":", true);
														let commandPath = util.getValue(lines, "ExecutablePath", ":", true);
														let utime = parseInt(util.getValue(lines, "UserModeTime", ":", true), 10);
														let stime = parseInt(util.getValue(lines, "KernelModeTime", ":", true), 10);
														let memw = parseInt(util.getValue(lines, "WorkingSetSize", ":", true), 10);
														allcpuu += utime;
														allcpus += stime;
														result.all++;
														if (!statusValue) result.unknown++;
														if ("3" === statusValue) result.running++;
														if ("4" === statusValue || "5" === statusValue) result.blocked++;
														procStats.push({
															pid,
															utime,
															stime,
															cpu: 0,
															cpuu: 0,
															cpus: 0,
														});
														procs.push({
															pid,
															parentPid,
															name,
															cpu: 0,
															cpuu: 0,
															cpus: 0,
															mem: (memw / os.totalmem()) * 100,
															priority: parseInt(util.getValue(lines, "Priority", ":", true), 10),
															memVsz: parseInt(util.getValue(lines, "PageFileUsage", ":", true), 10),
															memRss: Math.floor(parseInt(util.getValue(lines, "WorkingSetSize", ":", true), 10) / 1024),
															nice: 0,
															started: parseTimeWin(util.getValue(lines, "CreationDate", ":", true)),
															state: !statusValue ? _winStatusValues[0] : _winStatusValues[statusValue],
															tty: "",
															user: "",
															command: commandLine || name,
															path: commandPath,
															params: "",
														});
													}
												result.sleeping = result.all - result.running - result.blocked - result.unknown;
												result.list = procs;
												for (let i = 0; i < procStats.length; i++) {
													let resultProcess = calcProcStatWin(procStats[i], allcpuu + allcpus, _processes_cpu);
													let listPos = result.list
														.map(function (e) {
															return e.pid;
														})
														.indexOf(resultProcess.pid);
													if (listPos >= 0) {
														result.list[listPos].cpu = resultProcess.cpuu + resultProcess.cpus;
														result.list[listPos].cpuu = resultProcess.cpuu;
														result.list[listPos].cpus = resultProcess.cpus;
													}
													list_new[resultProcess.pid] = {
														cpuu: resultProcess.cpuu,
														cpus: resultProcess.cpus,
														utime: resultProcess.utime,
														stime: resultProcess.stime,
													};
												}
												_processes_cpu.all = allcpuu + allcpus;
												_processes_cpu.all_utime = allcpuu;
												_processes_cpu.all_stime = allcpus;
												_processes_cpu.list = Object.assign({}, list_new);
												_processes_cpu.ms = Date.now() - _processes_cpu.ms;
												_processes_cpu.result = Object.assign({}, result);
											}
											if (callback) callback(result);
											resolve(result);
										});
									} catch (e) {
										if (callback) callback(result);
										resolve(result);
									}
								else {
									if (callback) callback(result);
									resolve(result);
								}
							else {
								if (callback) callback(_processes_cpu.result);
								resolve(_processes_cpu.result);
							}
						});
					});
				}
				exports.processes = processes;
				function processLoad(proc, callback) {
					if (util.isFunction(proc) && !callback) {
						callback = proc;
						proc = "";
					}
					return new Promise((resolve) => {
						process.nextTick(() => {
							proc = proc || "";
							if ("string" !== typeof proc) {
								if (callback) callback([]);
								return resolve([]);
							}
							let processesString = "";
							processesString.__proto__.toLowerCase = util.stringToLower;
							processesString.__proto__.replace = util.stringReplace;
							processesString.__proto__.trim = util.stringTrim;
							const s = util.sanitizeShellString(proc);
							for (let i = 0; i <= util.mathMin(s.length, 2e3); i++) if (!(void 0 === s[i])) processesString += s[i];
							processesString = processesString.trim().toLowerCase().replace(/, /g, "|").replace(/,+/g, "|");
							if ("" === processesString) processesString = "*";
							if (util.isPrototypePolluted() && "*" !== processesString) processesString = "------";
							let processes = processesString.split("|");
							let result = [];
							const procSanitized = util.isPrototypePolluted() ? "" : util.sanitizeShellString(proc);
							if (procSanitized && processes.length && "------" !== processes[0]) {
								if (_windows)
									try {
										util.powerShell("Get-WmiObject Win32_Process | select ProcessId,Caption,UserModeTime,KernelModeTime,WorkingSetSize | fl").then(
											(stdout, error) => {
												if (!error) {
													let processSections = stdout.split(/\n\s*\n/);
													let procStats = [];
													let list_new = {};
													let allcpuu = 0;
													let allcpus = 0;
													for (let i = 0; i < processSections.length; i++)
														if ("" !== processSections[i].trim()) {
															let lines = processSections[i].trim().split("\r\n");
															let pid = parseInt(util.getValue(lines, "ProcessId", ":", true), 10);
															let name = util.getValue(lines, "Caption", ":", true);
															let utime = parseInt(util.getValue(lines, "UserModeTime", ":", true), 10);
															let stime = parseInt(util.getValue(lines, "KernelModeTime", ":", true), 10);
															let mem = parseInt(util.getValue(lines, "WorkingSetSize", ":", true), 10);
															allcpuu += utime;
															allcpus += stime;
															procStats.push({
																pid,
																name,
																utime,
																stime,
																cpu: 0,
																cpuu: 0,
																cpus: 0,
																mem,
															});
															let pname = "";
															let inList = false;
															processes.forEach(function (proc) {
																if (name.toLowerCase().indexOf(proc.toLowerCase()) >= 0 && !inList) {
																	inList = true;
																	pname = proc;
																}
															});
															if ("*" === processesString || inList) {
																let processFound = false;
																result.forEach(function (item) {
																	if (item.proc.toLowerCase() === pname.toLowerCase()) {
																		item.pids.push(pid);
																		item.mem += (mem / os.totalmem()) * 100;
																		processFound = true;
																	}
																});
																if (!processFound)
																	result.push({
																		proc: pname,
																		pid,
																		pids: [pid],
																		cpu: 0,
																		mem: (mem / os.totalmem()) * 100,
																	});
															}
														}
													if ("*" !== processesString) {
														let processesMissing = processes.filter(function (name) {
															return (
																0 ===
																procStats.filter(function (item) {
																	return item.name.toLowerCase().indexOf(name) >= 0;
																}).length
															);
														});
														processesMissing.forEach(function (procName) {
															result.push({
																proc: procName,
																pid: null,
																pids: [],
																cpu: 0,
																mem: 0,
															});
														});
													}
													for (let i = 0; i < procStats.length; i++) {
														let resultProcess = calcProcStatWin(procStats[i], allcpuu + allcpus, _process_cpu);
														let listPos = -1;
														for (let j = 0; j < result.length; j++)
															if (result[j].pid === resultProcess.pid || result[j].pids.indexOf(resultProcess.pid) >= 0) listPos = j;
														if (listPos >= 0) result[listPos].cpu += resultProcess.cpuu + resultProcess.cpus;
														list_new[resultProcess.pid] = {
															cpuu: resultProcess.cpuu,
															cpus: resultProcess.cpus,
															utime: resultProcess.utime,
															stime: resultProcess.stime,
														};
													}
													_process_cpu.all = allcpuu + allcpus;
													_process_cpu.all_utime = allcpuu;
													_process_cpu.all_stime = allcpus;
													_process_cpu.list = Object.assign({}, list_new);
													_process_cpu.ms = Date.now() - _process_cpu.ms;
													_process_cpu.result = JSON.parse(JSON.stringify(result));
													if (callback) callback(result);
													resolve(result);
												}
											},
										);
									} catch (e) {
										if (callback) callback(result);
										resolve(result);
									}
								if (_darwin || _linux || _freebsd || _openbsd || _netbsd) {
									const params = ["-axo", "pid,pcpu,pmem,comm"];
									util.execSafe("ps", params).then((stdout) => {
										if (stdout) {
											let procStats = [];
											let lines = stdout
												.toString()
												.split("\n")
												.filter(function (line) {
													if ("*" === processesString) return true;
													if (-1 !== line.toLowerCase().indexOf("grep")) return false;
													let found = false;
													processes.forEach(function (item) {
														found = found || line.toLowerCase().indexOf(item.toLowerCase()) >= 0;
													});
													return found;
												});
											lines.forEach(function (line) {
												let data = line.trim().replace(/ +/g, " ").split(" ");
												if (data.length > 3)
													procStats.push({
														name: data[3].substring(data[3].lastIndexOf("/") + 1),
														pid: parseInt(data[0]) || 0,
														cpu: parseFloat(data[1].replace(",", ".")),
														mem: parseFloat(data[2].replace(",", ".")),
													});
											});
											procStats.forEach(function (item) {
												let listPos = -1;
												let inList = false;
												let name = "";
												for (let j = 0; j < result.length; j++) if (item.name.toLowerCase().indexOf(result[j].proc.toLowerCase()) >= 0) listPos = j;
												processes.forEach(function (proc) {
													if (item.name.toLowerCase().indexOf(proc.toLowerCase()) >= 0 && !inList) {
														inList = true;
														name = proc;
													}
												});
												if ("*" === processesString || inList)
													if (listPos < 0)
														result.push({
															proc: name,
															pid: item.pid,
															pids: [item.pid],
															cpu: item.cpu,
															mem: item.mem,
														});
													else {
														result[listPos].pids.push(item.pid);
														result[listPos].cpu += item.cpu;
														result[listPos].mem += item.mem;
													}
											});
											if ("*" !== processesString) {
												let processesMissing = processes.filter(function (name) {
													return (
														0 ===
														procStats.filter(function (item) {
															return item.name.toLowerCase().indexOf(name) >= 0;
														}).length
													);
												});
												processesMissing.forEach(function (procName) {
													result.push({
														proc: procName,
														pid: null,
														pids: [],
														cpu: 0,
														mem: 0,
													});
												});
											}
											if (_linux) {
												result.forEach(function (item) {
													item.cpu = 0;
												});
												let cmd = 'cat /proc/stat | grep "cpu "';
												for (let i in result) for (let j in result[i].pids) cmd += ";cat /proc/" + result[i].pids[j] + "/stat";
												exec(
													cmd,
													{
														maxBuffer: 1024 * 2e4,
													},
													function (error, stdout) {
														let curr_processes = stdout.toString().split("\n");
														let all = parseProcStat(curr_processes.shift());
														let list_new = {};
														let resultProcess = {};
														for (let i = 0; i < curr_processes.length; i++) {
															resultProcess = calcProcStatLinux(curr_processes[i], all, _process_cpu);
															if (resultProcess.pid) {
																let resultItemId = -1;
																for (let i in result) if (result[i].pids.indexOf(resultProcess.pid) >= 0) resultItemId = i;
																if (resultItemId >= 0) result[resultItemId].cpu += resultProcess.cpuu + resultProcess.cpus;
																list_new[resultProcess.pid] = {
																	cpuu: resultProcess.cpuu,
																	cpus: resultProcess.cpus,
																	utime: resultProcess.utime,
																	stime: resultProcess.stime,
																	cutime: resultProcess.cutime,
																	cstime: resultProcess.cstime,
																};
															}
														}
														result.forEach(function (item) {
															item.cpu = Math.round(100 * item.cpu) / 100;
														});
														_process_cpu.all = all;
														_process_cpu.list = Object.assign({}, list_new);
														_process_cpu.ms = Date.now() - _process_cpu.ms;
														_process_cpu.result = Object.assign({}, result);
														if (callback) callback(result);
														resolve(result);
													},
												);
											} else {
												if (callback) callback(result);
												resolve(result);
											}
										} else {
											if (callback) callback(result);
											resolve(result);
										}
									});
								}
							}
						});
					});
				}
				exports.processLoad = processLoad;
			},
			57: (__unused_webpack_module, exports, __webpack_require__) => {
				const fs = __webpack_require__(48);
				const os = __webpack_require__(37);
				const util = __webpack_require__(858);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const execPromise = util.promisify(__webpack_require__(282).exec);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function system(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								manufacturer: "",
								model: "Computer",
								version: "",
								serial: "-",
								uuid: "-",
								sku: "-",
								virtual: false,
							};
							if (_linux || _freebsd || _openbsd || _netbsd)
								exec("export LC_ALL=C; dmidecode -t system 2>/dev/null; unset LC_ALL", function (error, stdout) {
									let lines = stdout.toString().split("\n");
									result.manufacturer = util.getValue(lines, "manufacturer");
									result.model = util.getValue(lines, "product name");
									result.version = util.getValue(lines, "version");
									result.serial = util.getValue(lines, "serial number");
									result.uuid = util.getValue(lines, "uuid").toLowerCase();
									result.sku = util.getValue(lines, "sku number");
									const cmd = `echo -n "product_name: "; cat /sys/devices/virtual/dmi/id/product_name 2>/dev/null; echo;\n            echo -n "product_serial: "; cat /sys/devices/virtual/dmi/id/product_serial 2>/dev/null; echo;\n            echo -n "product_uuid: "; cat /sys/devices/virtual/dmi/id/product_uuid 2>/dev/null; echo;\n            echo -n "product_version: "; cat /sys/devices/virtual/dmi/id/product_version 2>/dev/null; echo;\n            echo -n "sys_vendor: "; cat /sys/devices/virtual/dmi/id/sys_vendor 2>/dev/null; echo;`;
									try {
										lines = execSync(cmd).toString().split("\n");
										result.manufacturer = "" === result.manufacturer ? util.getValue(lines, "sys_vendor") : result.manufacturer;
										result.model = "" === result.model ? util.getValue(lines, "product_name") : result.model;
										result.version = "" === result.version ? util.getValue(lines, "product_version") : result.version;
										result.serial = "" === result.serial ? util.getValue(lines, "product_serial") : result.serial;
										result.uuid = "" === result.uuid ? util.getValue(lines, "product_uuid").toLowerCase() : result.uuid;
									} catch (e) {
										util.noop();
									}
									if (!result.serial || -1 !== result.serial.toLowerCase().indexOf("o.e.m.")) result.serial = "-";
									if (!result.manufacturer || -1 !== result.manufacturer.toLowerCase().indexOf("o.e.m.")) result.manufacturer = "";
									if (!result.model || -1 !== result.model.toLowerCase().indexOf("o.e.m.")) result.model = "Computer";
									if (!result.version || -1 !== result.version.toLowerCase().indexOf("o.e.m.")) result.version = "";
									if (!result.sku || -1 !== result.sku.toLowerCase().indexOf("o.e.m.")) result.sku = "-";
									if (
										"virtualbox" === result.model.toLowerCase() ||
										"kvm" === result.model.toLowerCase() ||
										"virtual machine" === result.model.toLowerCase() ||
										"bochs" === result.model.toLowerCase() ||
										result.model.toLowerCase().startsWith("vmware") ||
										result.model.toLowerCase().startsWith("droplet")
									) {
										result.virtual = true;
										switch (result.model.toLowerCase()) {
											case "virtualbox":
												result.virtualHost = "VirtualBox";
												break;
											case "vmware":
												result.virtualHost = "VMware";
												break;
											case "kvm":
												result.virtualHost = "KVM";
												break;
											case "bochs":
												result.virtualHost = "bochs";
												break;
										}
									}
									if (result.manufacturer.toLowerCase().startsWith("vmware") || "xen" === result.manufacturer.toLowerCase()) {
										result.virtual = true;
										switch (result.manufacturer.toLowerCase()) {
											case "vmware":
												result.virtualHost = "VMware";
												break;
											case "xen":
												result.virtualHost = "Xen";
												break;
										}
									}
									if (!result.virtual)
										try {
											const disksById = execSync("ls -1 /dev/disk/by-id/ 2>/dev/null").toString();
											if (disksById.indexOf("_QEMU_") >= 0) {
												result.virtual = true;
												result.virtualHost = "QEMU";
											}
											if (disksById.indexOf("_VBOX_") >= 0) {
												result.virtual = true;
												result.virtualHost = "VirtualBox";
											}
										} catch (e) {
											util.noop();
										}
									if (!result.virtual && (os.release().toLowerCase().indexOf("microsoft") >= 0 || os.release().toLowerCase().endsWith("wsl2"))) {
										const kernelVersion = parseFloat(os.release().toLowerCase());
										result.virtual = true;
										result.manufacturer = "Microsoft";
										result.model = "WSL";
										result.version = kernelVersion < 4.19 ? "1" : "2";
									}
									if ((_freebsd || _openbsd || _netbsd) && !result.virtualHost)
										try {
											const procInfo = execSync("dmidecode -t 4");
											const procLines = procInfo.toString().split("\n");
											const procManufacturer = util.getValue(procLines, "manufacturer", ":", true);
											switch (procManufacturer.toLowerCase()) {
												case "virtualbox":
													result.virtualHost = "VirtualBox";
													break;
												case "vmware":
													result.virtualHost = "VMware";
													break;
												case "kvm":
													result.virtualHost = "KVM";
													break;
												case "bochs":
													result.virtualHost = "bochs";
													break;
											}
										} catch (e) {
											util.noop();
										}
									if (fs.existsSync("/.dockerenv") || fs.existsSync("/.dockerinit")) result.model = "Docker Container";
									try {
										const stdout = execSync(
											'dmesg 2>/dev/null | grep -iE "virtual|hypervisor" | grep -iE "vmware|qemu|kvm|xen" | grep -viE "Nested Virtualization|/virtual/"',
										);
										let lines = stdout.toString().split("\n");
										if (lines.length > 0) {
											if ("Computer" === result.model) result.model = "Virtual machine";
											result.virtual = true;
											if (stdout.toString().toLowerCase().indexOf("vmware") >= 0 && !result.virtualHost) result.virtualHost = "VMware";
											if (stdout.toString().toLowerCase().indexOf("qemu") >= 0 && !result.virtualHost) result.virtualHost = "QEMU";
											if (stdout.toString().toLowerCase().indexOf("xen") >= 0 && !result.virtualHost) result.virtualHost = "Xen";
											if (stdout.toString().toLowerCase().indexOf("kvm") >= 0 && !result.virtualHost) result.virtualHost = "KVM";
										}
									} catch (e) {
										util.noop();
									}
									if ("" === result.manufacturer && "Computer" === result.model && "" === result.version)
										fs.readFile("/proc/cpuinfo", function (error, stdout) {
											if (!error) {
												let lines = stdout.toString().split("\n");
												result.model = util.getValue(lines, "hardware", ":", true).toUpperCase();
												result.version = util.getValue(lines, "revision", ":", true).toLowerCase();
												result.serial = util.getValue(lines, "serial", ":", true);
												const model = util.getValue(lines, "model:", ":", true);
												if (
													("BCM2835" === result.model ||
														"BCM2708" === result.model ||
														"BCM2709" === result.model ||
														"BCM2710" === result.model ||
														"BCM2711" === result.model ||
														"BCM2836" === result.model ||
														"BCM2837" === result.model) &&
													model.toLowerCase().indexOf("raspberry") >= 0
												) {
													const rPIRevision = util.decodePiCpuinfo(lines);
													result.model = rPIRevision.model;
													result.version = rPIRevision.revisionCode;
													result.manufacturer = "Raspberry Pi Foundation";
													result.raspberry = {
														manufacturer: rPIRevision.manufacturer,
														processor: rPIRevision.processor,
														type: rPIRevision.type,
														revision: rPIRevision.revision,
													};
												}
											}
											if (callback) callback(result);
											resolve(result);
										});
									else {
										if (callback) callback(result);
										resolve(result);
									}
								});
							if (_darwin)
								exec("ioreg -c IOPlatformExpertDevice -d 2", function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().replace(/[<>"]/g, "").split("\n");
										result.manufacturer = util.getValue(lines, "manufacturer", "=", true);
										result.model = util.getValue(lines, "model", "=", true);
										result.version = util.getValue(lines, "version", "=", true);
										result.serial = util.getValue(lines, "ioplatformserialnumber", "=", true);
										result.uuid = util.getValue(lines, "ioplatformuuid", "=", true).toLowerCase();
										result.sku = util.getValue(lines, "board-id", "=", true);
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows)
								try {
									util.powerShell("Get-WmiObject Win32_ComputerSystemProduct | select Name,Vendor,Version,IdentifyingNumber,UUID | fl").then((stdout, error) => {
										if (!error) {
											let lines = stdout.split("\r\n");
											result.manufacturer = util.getValue(lines, "vendor", ":");
											result.model = util.getValue(lines, "name", ":");
											result.version = util.getValue(lines, "version", ":");
											result.serial = util.getValue(lines, "identifyingnumber", ":");
											result.uuid = util.getValue(lines, "uuid", ":").toLowerCase();
											const model = result.model.toLowerCase();
											if (
												"virtualbox" === model ||
												"kvm" === model ||
												"virtual machine" === model ||
												"bochs" === model ||
												model.startsWith("vmware") ||
												model.startsWith("qemu")
											) {
												result.virtual = true;
												if (model.startsWith("virtualbox")) result.virtualHost = "VirtualBox";
												if (model.startsWith("vmware")) result.virtualHost = "VMware";
												if (model.startsWith("kvm")) result.virtualHost = "KVM";
												if (model.startsWith("bochs")) result.virtualHost = "bochs";
												if (model.startsWith("qemu")) result.virtualHost = "KVM";
											}
											const manufacturer = result.manufacturer.toLowerCase();
											if (manufacturer.startsWith("vmware") || manufacturer.startsWith("qemu") || "xen" === manufacturer) {
												result.virtual = true;
												if (manufacturer.startsWith("vmware")) result.virtualHost = "VMware";
												if (manufacturer.startsWith("xen")) result.virtualHost = "Xen";
												if (manufacturer.startsWith("qemu")) result.virtualHost = "KVM";
											}
											util.powerShell('Get-WmiObject MS_Systeminformation -Namespace "root/wmi" | select systemsku | fl ').then((stdout, error) => {
												if (!error) {
													let lines = stdout.split("\r\n");
													result.sku = util.getValue(lines, "systemsku", ":");
												}
												if (!result.virtual)
													util.powerShell("Get-WmiObject Win32_bios | select Version, SerialNumber, SMBIOSBIOSVersion").then((stdout, error) => {
														if (!error) {
															let lines = stdout.toString();
															if (
																lines.indexOf("VRTUAL") >= 0 ||
																lines.indexOf("A M I ") >= 0 ||
																lines.indexOf("VirtualBox") >= 0 ||
																lines.indexOf("VMWare") >= 0 ||
																lines.indexOf("Xen") >= 0
															) {
																result.virtual = true;
																if (lines.indexOf("VirtualBox") >= 0 && !result.virtualHost) result.virtualHost = "VirtualBox";
																if (lines.indexOf("VMware") >= 0 && !result.virtualHost) result.virtualHost = "VMware";
																if (lines.indexOf("Xen") >= 0 && !result.virtualHost) result.virtualHost = "Xen";
																if (lines.indexOf("VRTUAL") >= 0 && !result.virtualHost) result.virtualHost = "Hyper-V";
																if (lines.indexOf("A M I") >= 0 && !result.virtualHost) result.virtualHost = "Virtual PC";
															}
															if (callback) callback(result);
															resolve(result);
														} else {
															if (callback) callback(result);
															resolve(result);
														}
													});
												else {
													if (callback) callback(result);
													resolve(result);
												}
											});
										} else {
											if (callback) callback(result);
											resolve(result);
										}
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.system = system;
				function bios(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								vendor: "",
								version: "",
								releaseDate: "",
								revision: "",
							};
							let cmd = "";
							if (_linux || _freebsd || _openbsd || _netbsd) {
								if ("arm" === process.arch) cmd = "cat /proc/cpuinfo | grep Serial";
								else cmd = "export LC_ALL=C; dmidecode -t bios 2>/dev/null; unset LC_ALL";
								exec(cmd, function (error, stdout) {
									let lines = stdout.toString().split("\n");
									result.vendor = util.getValue(lines, "Vendor");
									result.version = util.getValue(lines, "Version");
									let datetime = util.getValue(lines, "Release Date");
									result.releaseDate = util.parseDateTime(datetime).date;
									result.revision = util.getValue(lines, "BIOS Revision");
									result.serial = util.getValue(lines, "SerialNumber");
									let language = util.getValue(lines, "Currently Installed Language").split("|")[0];
									if (language) result.language = language;
									if (lines.length && stdout.toString().indexOf("Characteristics:") >= 0) {
										const features = [];
										lines.forEach((line) => {
											if (line.indexOf(" is supported") >= 0) {
												const feature = line.split(" is supported")[0].trim();
												features.push(feature);
											}
										});
										result.features = features;
									}
									const cmd = `echo -n "bios_date: "; cat /sys/devices/virtual/dmi/id/bios_date 2>/dev/null; echo;\n            echo -n "bios_vendor: "; cat /sys/devices/virtual/dmi/id/bios_vendor 2>/dev/null; echo;\n            echo -n "bios_version: "; cat /sys/devices/virtual/dmi/id/bios_version 2>/dev/null; echo;`;
									try {
										lines = execSync(cmd).toString().split("\n");
										result.vendor = !result.vendor ? util.getValue(lines, "bios_vendor") : result.vendor;
										result.version = !result.version ? util.getValue(lines, "bios_version") : result.version;
										datetime = util.getValue(lines, "bios_date");
										result.releaseDate = !result.releaseDate ? util.parseDateTime(datetime).date : result.releaseDate;
									} catch (e) {
										util.noop();
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_darwin) {
								result.vendor = "Apple Inc.";
								exec("system_profiler SPHardwareDataType -json", function (error, stdout) {
									try {
										const hardwareData = JSON.parse(stdout.toString());
										if (hardwareData && hardwareData.SPHardwareDataType && hardwareData.SPHardwareDataType.length) {
											let bootRomVersion = hardwareData.SPHardwareDataType[0].boot_rom_version;
											bootRomVersion = bootRomVersion ? bootRomVersion.split("(")[0].trim() : null;
											result.version = bootRomVersion;
										}
									} catch (e) {
										util.noop();
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_sunos) {
								result.vendor = "Sun Microsystems";
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows)
								try {
									util.powerShell("Get-WmiObject Win32_bios | select Description,Version,Manufacturer,ReleaseDate,BuildNumber,SerialNumber | fl").then(
										(stdout, error) => {
											if (!error) {
												let lines = stdout.toString().split("\r\n");
												const description = util.getValue(lines, "description", ":");
												if (-1 !== description.indexOf(" Version ")) {
													result.vendor = description.split(" Version ")[0].trim();
													result.version = description.split(" Version ")[1].trim();
												} else if (-1 !== description.indexOf(" Ver: ")) {
													result.vendor = util.getValue(lines, "manufacturer", ":");
													result.version = description.split(" Ver: ")[1].trim();
												} else {
													result.vendor = util.getValue(lines, "manufacturer", ":");
													result.version = util.getValue(lines, "version", ":");
												}
												result.releaseDate = util.getValue(lines, "releasedate", ":");
												if (result.releaseDate.length >= 10)
													result.releaseDate = result.releaseDate.substr(0, 4) + "-" + result.releaseDate.substr(4, 2) + "-" + result.releaseDate.substr(6, 2);
												result.revision = util.getValue(lines, "buildnumber", ":");
												result.serial = util.getValue(lines, "serialnumber", ":");
											}
											if (callback) callback(result);
											resolve(result);
										},
									);
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.bios = bios;
				function baseboard(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								manufacturer: "",
								model: "",
								version: "",
								serial: "-",
								assetTag: "-",
								memMax: null,
								memSlots: null,
							};
							let cmd = "";
							if (_linux || _freebsd || _openbsd || _netbsd) {
								if ("arm" === process.arch) cmd = "cat /proc/cpuinfo | grep Serial";
								else cmd = "export LC_ALL=C; dmidecode -t 2 2>/dev/null; unset LC_ALL";
								const workload = [];
								workload.push(execPromise(cmd));
								workload.push(execPromise("export LC_ALL=C; dmidecode -t memory 2>/dev/null"));
								util.promiseAll(workload).then((data) => {
									let lines = data.results[0] ? data.results[0].toString().split("\n") : [""];
									result.manufacturer = util.getValue(lines, "Manufacturer");
									result.model = util.getValue(lines, "Product Name");
									result.version = util.getValue(lines, "Version");
									result.serial = util.getValue(lines, "Serial Number");
									result.assetTag = util.getValue(lines, "Asset Tag");
									const cmd = `echo -n "board_asset_tag: "; cat /sys/devices/virtual/dmi/id/board_asset_tag 2>/dev/null; echo;\n            echo -n "board_name: "; cat /sys/devices/virtual/dmi/id/board_name 2>/dev/null; echo;\n            echo -n "board_serial: "; cat /sys/devices/virtual/dmi/id/board_serial 2>/dev/null; echo;\n            echo -n "board_vendor: "; cat /sys/devices/virtual/dmi/id/board_vendor 2>/dev/null; echo;\n            echo -n "board_version: "; cat /sys/devices/virtual/dmi/id/board_version 2>/dev/null; echo;`;
									try {
										lines = execSync(cmd).toString().split("\n");
										result.manufacturer = !result.manufacturer ? util.getValue(lines, "board_vendor") : result.manufacturer;
										result.model = !result.model ? util.getValue(lines, "board_name") : result.model;
										result.version = !result.version ? util.getValue(lines, "board_version") : result.version;
										result.serial = !result.serial ? util.getValue(lines, "board_serial") : result.serial;
										result.assetTag = !result.assetTag ? util.getValue(lines, "board_asset_tag") : result.assetTag;
									} catch (e) {
										util.noop();
									}
									if (-1 !== result.serial.toLowerCase().indexOf("o.e.m.")) result.serial = "-";
									if (-1 !== result.assetTag.toLowerCase().indexOf("o.e.m.")) result.assetTag = "-";
									lines = data.results[1] ? data.results[1].toString().split("\n") : [""];
									result.memMax = 1024 * util.toInt(util.getValue(lines, "Maximum Capacity")) * 1024 * 1024 || null;
									result.memSlots = util.toInt(util.getValue(lines, "Number Of Devices")) || null;
									let linesRpi = "";
									try {
										linesRpi = fs.readFileSync("/proc/cpuinfo").toString().split("\n");
									} catch (e) {
										util.noop();
									}
									const hardware = util.getValue(linesRpi, "hardware");
									if (hardware.startsWith("BCM")) {
										const rpi = util.decodePiCpuinfo(linesRpi);
										result.manufacturer = rpi.manufacturer;
										result.model = "Raspberry Pi";
										result.serial = rpi.serial;
										result.version = rpi.type + " - " + rpi.revision;
										result.memMax = os.totalmem();
										result.memSlots = 0;
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_darwin) {
								const workload = [];
								workload.push(execPromise("ioreg -c IOPlatformExpertDevice -d 2"));
								workload.push(execPromise("system_profiler SPMemoryDataType"));
								util.promiseAll(workload).then((data) => {
									let lines = data.results[0] ? data.results[0].toString().replace(/[<>"]/g, "").split("\n") : [""];
									result.manufacturer = util.getValue(lines, "manufacturer", "=", true);
									result.model = util.getValue(lines, "model", "=", true);
									result.version = util.getValue(lines, "version", "=", true);
									result.serial = util.getValue(lines, "ioplatformserialnumber", "=", true);
									result.assetTag = util.getValue(lines, "board-id", "=", true);
									let devices = data.results[1] ? data.results[1].toString().split("        BANK ") : [""];
									if (1 === devices.length) devices = data.results[1] ? data.results[1].toString().split("        DIMM") : [""];
									devices.shift();
									result.memSlots = devices.length;
									if ("arm64" === os.arch()) {
										result.memSlots = 0;
										result.memMax = os.totalmem();
									}
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows)
								try {
									const workload = [];
									workload.push(util.powerShell("Get-WmiObject Win32_baseboard | select Model,Manufacturer,Product,Version,SerialNumber,PartNumber,SKU | fl"));
									workload.push(util.powerShell("Get-WmiObject Win32_physicalmemoryarray | select MaxCapacity, MemoryDevices | fl"));
									util.promiseAll(workload).then((data) => {
										let lines = data.results[0] ? data.results[0].toString().split("\r\n") : [""];
										result.manufacturer = util.getValue(lines, "manufacturer", ":");
										result.model = util.getValue(lines, "model", ":");
										if (!result.model) result.model = util.getValue(lines, "product", ":");
										result.version = util.getValue(lines, "version", ":");
										result.serial = util.getValue(lines, "serialnumber", ":");
										result.assetTag = util.getValue(lines, "partnumber", ":");
										if (!result.assetTag) result.assetTag = util.getValue(lines, "sku", ":");
										lines = data.results[1] ? data.results[1].toString().split("\r\n") : [""];
										result.memMax = util.toInt(util.getValue(lines, "MaxCapacity", ":")) || null;
										result.memSlots = util.toInt(util.getValue(lines, "MemoryDevices", ":")) || null;
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.baseboard = baseboard;
				function chassis(callback) {
					const chassisTypes = [
						"Other",
						"Unknown",
						"Desktop",
						"Low Profile Desktop",
						"Pizza Box",
						"Mini Tower",
						"Tower",
						"Portable",
						"Laptop",
						"Notebook",
						"Hand Held",
						"Docking Station",
						"All in One",
						"Sub Notebook",
						"Space-Saving",
						"Lunch Box",
						"Main System Chassis",
						"Expansion Chassis",
						"SubChassis",
						"Bus Expansion Chassis",
						"Peripheral Chassis",
						"Storage Chassis",
						"Rack Mount Chassis",
						"Sealed-Case PC",
						"Multi-System Chassis",
						"Compact PCI",
						"Advanced TCA",
						"Blade",
						"Blade Enclosure",
						"Tablet",
						"Convertible",
						"Detachable",
						"IoT Gateway ",
						"Embedded PC",
						"Mini PC",
						"Stick PC",
					];
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = {
								manufacturer: "",
								model: "",
								type: "",
								version: "",
								serial: "-",
								assetTag: "-",
								sku: "",
							};
							if (_linux || _freebsd || _openbsd || _netbsd) {
								const cmd = `echo -n "chassis_asset_tag: "; cat /sys/devices/virtual/dmi/id/chassis_asset_tag 2>/dev/null; echo;\n            echo -n "chassis_serial: "; cat /sys/devices/virtual/dmi/id/chassis_serial 2>/dev/null; echo;\n            echo -n "chassis_type: "; cat /sys/devices/virtual/dmi/id/chassis_type 2>/dev/null; echo;\n            echo -n "chassis_vendor: "; cat /sys/devices/virtual/dmi/id/chassis_vendor 2>/dev/null; echo;\n            echo -n "chassis_version: "; cat /sys/devices/virtual/dmi/id/chassis_version 2>/dev/null; echo;`;
								exec(cmd, function (error, stdout) {
									let lines = stdout.toString().split("\n");
									result.manufacturer = util.getValue(lines, "chassis_vendor");
									const ctype = parseInt(util.getValue(lines, "chassis_type").replace(/\D/g, ""));
									result.type = ctype && !isNaN(ctype) && ctype < chassisTypes.length ? chassisTypes[ctype - 1] : "";
									result.version = util.getValue(lines, "chassis_version");
									result.serial = util.getValue(lines, "chassis_serial");
									result.assetTag = util.getValue(lines, "chassis_asset_tag");
									if (-1 !== result.manufacturer.toLowerCase().indexOf("o.e.m.")) result.manufacturer = "-";
									if (-1 !== result.version.toLowerCase().indexOf("o.e.m.")) result.version = "-";
									if (-1 !== result.serial.toLowerCase().indexOf("o.e.m.")) result.serial = "-";
									if (-1 !== result.assetTag.toLowerCase().indexOf("o.e.m.")) result.assetTag = "-";
									if (callback) callback(result);
									resolve(result);
								});
							}
							if (_darwin)
								exec("ioreg -c IOPlatformExpertDevice -d 2", function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().replace(/[<>"]/g, "").split("\n");
										result.manufacturer = util.getValue(lines, "manufacturer", "=", true);
										result.model = util.getValue(lines, "model", "=", true);
										result.version = util.getValue(lines, "version", "=", true);
										result.serial = util.getValue(lines, "ioplatformserialnumber", "=", true);
										result.assetTag = util.getValue(lines, "board-id", "=", true);
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos) {
								if (callback) callback(result);
								resolve(result);
							}
							if (_windows)
								try {
									util.powerShell("Get-WmiObject Win32_SystemEnclosure | select Model,Manufacturer,ChassisTypes,Version,SerialNumber,PartNumber,SKU | fl").then(
										(stdout, error) => {
											if (!error) {
												let lines = stdout.toString().split("\r\n");
												result.manufacturer = util.getValue(lines, "manufacturer", ":");
												result.model = util.getValue(lines, "model", ":");
												const ctype = parseInt(util.getValue(lines, "ChassisTypes", ":").replace(/\D/g, ""));
												result.type = ctype && !isNaN(ctype) && ctype < chassisTypes.length ? chassisTypes[ctype - 1] : "";
												result.version = util.getValue(lines, "version", ":");
												result.serial = util.getValue(lines, "serialnumber", ":");
												result.assetTag = util.getValue(lines, "partnumber", ":");
												result.sku = util.getValue(lines, "sku", ":");
												if (-1 !== result.manufacturer.toLowerCase().indexOf("o.e.m.")) result.manufacturer = "-";
												if (-1 !== result.version.toLowerCase().indexOf("o.e.m.")) result.version = "-";
												if (-1 !== result.serial.toLowerCase().indexOf("o.e.m.")) result.serial = "-";
												if (-1 !== result.assetTag.toLowerCase().indexOf("o.e.m.")) result.assetTag = "-";
											}
											if (callback) callback(result);
											resolve(result);
										},
									);
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				exports.chassis = chassis;
			},
			848: (__unused_webpack_module, exports, __webpack_require__) => {
				const exec = __webpack_require__(282).exec;
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function getLinuxUsbType(type, name) {
					let result = type;
					const str = (name + " " + type).toLowerCase();
					if (str.indexOf("camera") >= 0) result = "Camera";
					else if (str.indexOf("hub") >= 0) result = "Hub";
					else if (str.indexOf("keybrd") >= 0) result = "Keyboard";
					else if (str.indexOf("keyboard") >= 0) result = "Keyboard";
					else if (str.indexOf("mouse") >= 0) result = "Mouse";
					else if (str.indexOf("stora") >= 0) result = "Storage";
					else if (str.indexOf("mic") >= 0) result = "Microphone";
					else if (str.indexOf("headset") >= 0) result = "Audio";
					else if (str.indexOf("audio") >= 0) result = "Audio";
					return result;
				}
				function parseLinuxUsb(usb) {
					const result = {};
					const lines = usb.split("\n");
					if (lines && lines.length && lines[0].indexOf("Device") >= 0) {
						const parts = lines[0].split(" ");
						result.bus = parseInt(parts[0], 10);
						if (parts[2]) result.deviceId = parseInt(parts[2], 10);
						else result.deviceId = null;
					} else {
						result.bus = null;
						result.deviceId = null;
					}
					const idVendor = util.getValue(lines, "idVendor", " ", true).trim();
					let vendorParts = idVendor.split(" ");
					vendorParts.shift();
					const vendor = vendorParts.join(" ");
					const idProduct = util.getValue(lines, "idProduct", " ", true).trim();
					let productParts = idProduct.split(" ");
					productParts.shift();
					const product = productParts.join(" ");
					const interfaceClass = util.getValue(lines, "bInterfaceClass", " ", true).trim();
					let interfaceClassParts = interfaceClass.split(" ");
					interfaceClassParts.shift();
					const usbType = interfaceClassParts.join(" ");
					const iManufacturer = util.getValue(lines, "iManufacturer", " ", true).trim();
					let iManufacturerParts = iManufacturer.split(" ");
					iManufacturerParts.shift();
					const manufacturer = iManufacturerParts.join(" ");
					result.id =
						(idVendor.startsWith("0x") ? idVendor.split(" ")[0].substr(2, 10) : "") + ":" + (idProduct.startsWith("0x") ? idProduct.split(" ")[0].substr(2, 10) : "");
					result.name = product;
					result.type = getLinuxUsbType(usbType, product);
					result.removable = null;
					result.vendor = vendor;
					result.manufacturer = manufacturer;
					result.maxPower = util.getValue(lines, "MaxPower", " ", true);
					result.serialNumber = null;
					return result;
				}
				function getDarwinUsbType(name) {
					let result = "";
					if (name.indexOf("camera") >= 0) result = "Camera";
					else if (name.indexOf("touch bar") >= 0) result = "Touch Bar";
					else if (name.indexOf("controller") >= 0) result = "Controller";
					else if (name.indexOf("headset") >= 0) result = "Audio";
					else if (name.indexOf("keyboard") >= 0) result = "Keyboard";
					else if (name.indexOf("trackpad") >= 0) result = "Trackpad";
					else if (name.indexOf("sensor") >= 0) result = "Sensor";
					else if (name.indexOf("bthusb") >= 0) result = "Bluetooth";
					else if (name.indexOf("bth") >= 0) result = "Bluetooth";
					else if (name.indexOf("rfcomm") >= 0) result = "Bluetooth";
					else if (name.indexOf("usbhub") >= 0) result = "Hub";
					else if (name.indexOf(" hub") >= 0) result = "Hub";
					else if (name.indexOf("mouse") >= 0) result = "Mouse";
					else if (name.indexOf("mic") >= 0) result = "Microphone";
					else if (name.indexOf("removable") >= 0) result = "Storage";
					return result;
				}
				function parseDarwinUsb(usb, id) {
					const result = {};
					result.id = id;
					usb = usb.replace(/ \|/g, "");
					usb = usb.trim();
					let lines = usb.split("\n");
					lines.shift();
					try {
						for (let i = 0; i < lines.length; i++) {
							lines[i] = lines[i].trim();
							lines[i] = lines[i].replace(/=/g, ":");
							if ("{" !== lines[i] && "}" !== lines[i] && lines[i + 1] && "}" !== lines[i + 1].trim()) lines[i] = lines[i] + ",";
							lines[i] = lines[i].replace(": Yes,", ': "Yes",');
							lines[i] = lines[i].replace(": No,", ': "No",');
						}
						const usbObj = JSON.parse(lines.join("\n"));
						const removableDrive = "yes" !== usbObj["Built-In"].toLowerCase() && "no" === usbObj["non-removable"].toLowerCase();
						result.bus = null;
						result.deviceId = null;
						result.id = usbObj["USB Address"] || null;
						result.name = usbObj["kUSBProductString"] || usbObj["USB Product Name"] || null;
						result.type = getDarwinUsbType((usbObj["kUSBProductString"] || usbObj["USB Product Name"] || "").toLowerCase() + (removableDrive ? " removable" : ""));
						result.removable = "no" === usbObj["non-removable"].toLowerCase();
						result.vendor = usbObj["kUSBVendorString"] || usbObj["USB Vendor Name"] || null;
						result.manufacturer = usbObj["kUSBVendorString"] || usbObj["USB Vendor Name"] || null;
						result.maxPower = null;
						result.serialNumber = usbObj["kUSBSerialNumberString"] || null;
						if (result.name) return result;
						else return null;
					} catch (e) {
						return null;
					}
				}
				function getWindowsUsbTypeCreation(creationclass, name) {
					let result = "";
					if (name.indexOf("storage") >= 0) result = "Storage";
					else if (name.indexOf("speicher") >= 0) result = "Storage";
					else if (creationclass.indexOf("usbhub") >= 0) result = "Hub";
					else if (creationclass.indexOf("storage") >= 0) result = "Storage";
					else if (creationclass.indexOf("usbcontroller") >= 0) result = "Controller";
					else if (creationclass.indexOf("keyboard") >= 0) result = "Keyboard";
					else if (creationclass.indexOf("pointing") >= 0) result = "Mouse";
					else if (creationclass.indexOf("disk") >= 0) result = "Storage";
					return result;
				}
				function parseWindowsUsb(lines, id) {
					const usbType = getWindowsUsbTypeCreation(util.getValue(lines, "CreationClassName", ":").toLowerCase(), util.getValue(lines, "name", ":").toLowerCase());
					if (usbType) {
						const result = {};
						result.bus = null;
						result.deviceId = util.getValue(lines, "deviceid", ":");
						result.id = id;
						result.name = util.getValue(lines, "name", ":");
						result.type = usbType;
						result.removable = null;
						result.vendor = null;
						result.manufacturer = util.getValue(lines, "Manufacturer", ":");
						result.maxPower = null;
						result.serialNumber = null;
						return result;
					} else return null;
				}
				function usb(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux) {
								const cmd = "export LC_ALL=C; lsusb -v 2>/dev/null; unset LC_ALL";
								exec(
									cmd,
									{
										maxBuffer: 1024 * 1024 * 128,
									},
									function (error, stdout) {
										if (!error) {
											const parts = ("\n\n" + stdout.toString()).split("\n\nBus ");
											for (let i = 1; i < parts.length; i++) {
												const usb = parseLinuxUsb(parts[i]);
												result.push(usb);
											}
										}
										if (callback) callback(result);
										resolve(result);
									},
								);
							}
							if (_darwin) {
								let cmd = "ioreg -p IOUSB -c AppleUSBRootHubDevice -w0 -l";
								exec(
									cmd,
									{
										maxBuffer: 1024 * 1024 * 128,
									},
									function (error, stdout) {
										if (!error) {
											const parts = stdout.toString().split(" +-o ");
											for (let i = 1; i < parts.length; i++) {
												const usb = parseDarwinUsb(parts[i]);
												if (usb) result.push(usb);
											}
											if (callback) callback(result);
											resolve(result);
										}
										if (callback) callback(result);
										resolve(result);
									},
								);
							}
							if (_windows)
								util.powerShell(
									'Get-WmiObject CIM_LogicalDevice | where { $_.Description -match "USB"} | select Name,CreationClassName,DeviceId,Manufacturer | fl',
								).then((stdout, error) => {
									if (!error) {
										const parts = stdout.toString().split(/\n\s*\n/);
										for (let i = 0; i < parts.length; i++) {
											const usb = parseWindowsUsb(parts[i].split("\n"), i);
											if (usb) result.push(usb);
										}
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos || _freebsd || _openbsd || _netbsd) resolve(null);
						});
					});
				}
				exports.usb = usb;
			},
			577: (__unused_webpack_module, exports, __webpack_require__) => {
				const exec = __webpack_require__(282).exec;
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				const _sunos = "sunos" === _platform;
				function parseUsersLinux(lines, phase) {
					let result = [];
					let result_who = [];
					let result_w = {};
					let w_first = true;
					let w_header = [];
					let w_pos = [];
					let who_line = {};
					let is_whopart = true;
					lines.forEach(function (line) {
						if ("---" === line) is_whopart = false;
						else {
							let l = line.replace(/ +/g, " ").split(" ");
							if (is_whopart)
								result_who.push({
									user: l[0],
									tty: l[1],
									date: l[2],
									time: l[3],
									ip: l && l.length > 4 ? l[4].replace(/\(/g, "").replace(/\)/g, "") : "",
								});
							else if (w_first) {
								w_header = l;
								w_header.forEach(function (item) {
									w_pos.push(line.indexOf(item));
								});
								w_first = false;
							} else {
								result_w.user = line.substring(w_pos[0], w_pos[1] - 1).trim();
								result_w.tty = line.substring(w_pos[1], w_pos[2] - 1).trim();
								result_w.ip = line
									.substring(w_pos[2], w_pos[3] - 1)
									.replace(/\(/g, "")
									.replace(/\)/g, "")
									.trim();
								result_w.command = line.substring(w_pos[7], 1e3).trim();
								who_line = result_who.filter(function (obj) {
									return obj.user.substring(0, 8).trim() === result_w.user && obj.tty === result_w.tty;
								});
								if (1 === who_line.length)
									result.push({
										user: who_line[0].user,
										tty: who_line[0].tty,
										date: who_line[0].date,
										time: who_line[0].time,
										ip: who_line[0].ip,
										command: result_w.command,
									});
							}
						}
					});
					if (0 === result.length && 2 === phase) return result_who;
					else return result;
				}
				function parseUsersDarwin(lines) {
					let result = [];
					let result_who = [];
					let result_w = {};
					let who_line = {};
					let is_whopart = true;
					lines.forEach(function (line) {
						if ("---" === line) is_whopart = false;
						else {
							let l = line.replace(/ +/g, " ").split(" ");
							if (is_whopart)
								result_who.push({
									user: l[0],
									tty: l[1],
									date:
										new Date().getFullYear() +
										"-" +
										("0" + ("JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC".indexOf(l[2].toUpperCase()) / 3 + 1)).slice(-2) +
										"-" +
										("0" + l[3]).slice(-2),
									time: l[4],
								});
							else {
								result_w.user = l[0];
								result_w.tty = l[1];
								result_w.ip = "-" !== l[2] ? l[2] : "";
								result_w.command = l.slice(5, 1e3).join(" ");
								who_line = result_who.filter(function (obj) {
									return obj.user === result_w.user && (obj.tty.substring(3, 1e3) === result_w.tty || obj.tty === result_w.tty);
								});
								if (1 === who_line.length)
									result.push({
										user: who_line[0].user,
										tty: who_line[0].tty,
										date: who_line[0].date,
										time: who_line[0].time,
										ip: result_w.ip,
										command: result_w.command,
									});
							}
						}
					});
					return result;
				}
				function users(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux)
								exec('who --ips; echo "---"; w | tail -n +2', function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										result = parseUsersLinux(lines, 1);
										if (0 === result.length)
											exec('who; echo "---"; w | tail -n +2', function (error, stdout) {
												if (!error) {
													lines = stdout.toString().split("\n");
													result = parseUsersLinux(lines, 2);
												}
												if (callback) callback(result);
												resolve(result);
											});
										else {
											if (callback) callback(result);
											resolve(result);
										}
									} else {
										if (callback) callback(result);
										resolve(result);
									}
								});
							if (_freebsd || _openbsd || _netbsd)
								exec('who; echo "---"; w -ih', function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										result = parseUsersDarwin(lines);
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_sunos)
								exec('who; echo "---"; w -h', function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										result = parseUsersDarwin(lines);
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_darwin)
								exec('who; echo "---"; w -ih', function (error, stdout) {
									if (!error) {
										let lines = stdout.toString().split("\n");
										result = parseUsersDarwin(lines);
									}
									if (callback) callback(result);
									resolve(result);
								});
							if (_windows)
								try {
									let cmd = "Get-WmiObject Win32_LogonSession | select LogonId,StartTime | fl" + "; echo '#-#-#-#';";
									cmd += "Get-WmiObject Win32_LoggedOnUser | select antecedent,dependent | fl " + "; echo '#-#-#-#';";
									cmd +=
										'Get-WmiObject Win32_Process -Filter "name=\'explorer.exe\'" | Select @{Name="sessionid";Expression={$_.SessionId}}, @{Name="domain";Expression={$_.GetOwner().Domain}}, @{Name="username";Expression={$_.GetOwner().User}} | fl' +
										"; echo '#-#-#-#';";
									cmd += "query user";
									util.powerShell(cmd).then((data) => {
										if (data) {
											data = data.split("#-#-#-#");
											let sessions = parseWinSessions((data[0] || "").split(/\n\s*\n/));
											let loggedons = parseWinLoggedOn((data[1] || "").split(/\n\s*\n/));
											let queryUser = parseWinUsersQuery((data[3] || "").split("\r\n"));
											let users = parseWinUsers((data[2] || "").split(/\n\s*\n/), queryUser);
											for (let id in loggedons)
												if ({}.hasOwnProperty.call(loggedons, id)) loggedons[id].dateTime = {}.hasOwnProperty.call(sessions, id) ? sessions[id] : "";
											users.forEach((user) => {
												let dateTime = "";
												for (let id in loggedons)
													if ({}.hasOwnProperty.call(loggedons, id))
														if (loggedons[id].user === user.user && (!dateTime || dateTime < loggedons[id].dateTime)) dateTime = loggedons[id].dateTime;
												result.push({
													user: user.user,
													tty: user.tty,
													date: `${dateTime.substr(0, 4)}-${dateTime.substr(4, 2)}-${dateTime.substr(6, 2)}`,
													time: `${dateTime.substr(8, 2)}:${dateTime.substr(10, 2)}`,
													ip: "",
													command: "",
												});
											});
										}
										if (callback) callback(result);
										resolve(result);
									});
								} catch (e) {
									if (callback) callback(result);
									resolve(result);
								}
						});
					});
				}
				function parseWinSessions(sessionParts) {
					const sessions = {};
					sessionParts.forEach((session) => {
						const lines = session.split("\r\n");
						const id = util.getValue(lines, "LogonId");
						const starttime = util.getValue(lines, "starttime");
						if (id) sessions[id] = starttime;
					});
					return sessions;
				}
				function fuzzyMatch(name1, name2) {
					name1 = name1.toLowerCase();
					name2 = name2.toLowerCase();
					let eq = 0;
					let len = name1.length;
					if (name2.length > len) len = name2.length;
					for (let i = 0; i < len; i++) {
						const c1 = name1[i] || "";
						const c2 = name2[i] || "";
						if (c1 === c2) eq++;
					}
					return len > 10 ? eq / len > 0.9 : len > 0 ? eq / len > 0.8 : false;
				}
				function parseWinUsers(userParts, userQuery) {
					const users = [];
					userParts.forEach((user) => {
						const lines = user.split("\r\n");
						const domain = util.getValue(lines, "domain", ":", true);
						const username = util.getValue(lines, "username", ":", true);
						const sessionid = util.getValue(lines, "sessionid", ":", true);
						if (username) {
							const quser = userQuery.filter((item) => fuzzyMatch(item.user, username));
							users.push({
								domain,
								user: username,
								tty: quser && quser[0] && quser[0].tty ? quser[0].tty : sessionid,
							});
						}
					});
					return users;
				}
				function parseWinLoggedOn(loggedonParts) {
					const loggedons = {};
					loggedonParts.forEach((loggedon) => {
						const lines = loggedon.split("\r\n");
						const antecendent = util.getValue(lines, "antecedent", ":", true);
						let parts = antecendent.split(",");
						const domainParts = parts.length > 1 ? parts[0].split("=") : [];
						const nameParts = parts.length > 1 ? parts[1].split("=") : [];
						const domain = domainParts.length > 1 ? domainParts[1].replace(/"/g, "") : "";
						const name = nameParts.length > 1 ? nameParts[1].replace(/"/g, "") : "";
						const dependent = util.getValue(lines, "dependent", ":", true);
						parts = dependent.split("=");
						const id = parts.length > 1 ? parts[1].replace(/"/g, "") : "";
						if (id)
							loggedons[id] = {
								domain,
								user: name,
							};
					});
					return loggedons;
				}
				function parseWinUsersQuery(lines) {
					lines = lines.filter((item) => item);
					let result = [];
					const header = lines[0];
					const headerDelimiter = [];
					if (header) {
						const start = " " === header[0] ? 1 : 0;
						headerDelimiter.push(start - 1);
						let nextSpace = 0;
						for (let i = start + 1; i < header.length; i++)
							if (" " === header[i] && (" " === header[i - 1] || "." === header[i - 1])) nextSpace = i;
							else if (nextSpace) {
								headerDelimiter.push(nextSpace);
								nextSpace = 0;
							}
						for (let i = 1; i < lines.length; i++)
							if (lines[i].trim()) {
								const user = lines[i].substring(headerDelimiter[0] + 1, headerDelimiter[1]).trim() || "";
								const tty = lines[i].substring(headerDelimiter[1] + 1, headerDelimiter[2] - 2).trim() || "";
								result.push({
									user,
									tty,
								});
							}
					}
					return result;
				}
				exports.users = users;
			},
			858: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const fs = __webpack_require__(48);
				const path = __webpack_require__(315);
				const spawn = __webpack_require__(282).spawn;
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const util = __webpack_require__(837);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				const _freebsd = "freebsd" === _platform;
				const _openbsd = "openbsd" === _platform;
				const _netbsd = "netbsd" === _platform;
				let _cores = 0;
				let wmicPath = "";
				let codepage = "";
				let _smartMonToolsInstalled = null;
				const WINDIR = process.env.WINDIR || "C:\\Windows";
				let _psChild;
				let _psResult = "";
				let _psCmds = [];
				let _psPersistent = false;
				const _psToUTF8 = "$OutputEncoding = [System.Console]::OutputEncoding = [System.Console]::InputEncoding = [System.Text.Encoding]::UTF8 ; ";
				const _psCmdStart = "--###START###--";
				const _psError = "--ERROR--";
				const _psCmdSeperator = "--###ENDCMD###--";
				const _psIdSeperator = "--##ID##--";
				const execOptsWin = {
					windowsHide: true,
					maxBuffer: 1024 * 2e4,
					encoding: "UTF-8",
					env: util._extend({}, process.env, {
						LANG: "en_US.UTF-8",
					}),
				};
				function toInt(value) {
					let result = parseInt(value, 10);
					if (isNaN(result)) result = 0;
					return result;
				}
				const stringReplace = new String().replace;
				const stringToLower = new String().toLowerCase;
				const stringToString = new String().toString;
				const stringSubstr = new String().substr;
				const stringTrim = new String().trim;
				const stringStartWith = new String().startsWith;
				const mathMin = Math.min;
				function isFunction(functionToCheck) {
					let getType = {};
					return functionToCheck && "[object Function]" === getType.toString.call(functionToCheck);
				}
				function unique(obj) {
					let uniques = [];
					let stringify = {};
					for (let i = 0; i < obj.length; i++) {
						let keys = Object.keys(obj[i]);
						keys.sort(function (a, b) {
							return a - b;
						});
						let str = "";
						for (let j = 0; j < keys.length; j++) {
							str += JSON.stringify(keys[j]);
							str += JSON.stringify(obj[i][keys[j]]);
						}
						if (!{}.hasOwnProperty.call(stringify, str)) {
							uniques.push(obj[i]);
							stringify[str] = true;
						}
					}
					return uniques;
				}
				function sortByKey(array, keys) {
					return array.sort(function (a, b) {
						let x = "";
						let y = "";
						keys.forEach(function (key) {
							x += a[key];
							y += b[key];
						});
						return x < y ? -1 : x > y ? 1 : 0;
					});
				}
				function cores() {
					if (0 === _cores) _cores = os.cpus().length;
					return _cores;
				}
				function getValue(lines, property, separator, trimmed, lineMatch) {
					separator = separator || ":";
					property = property.toLowerCase();
					trimmed = trimmed || false;
					lineMatch = lineMatch || false;
					for (let i = 0; i < lines.length; i++) {
						let line = lines[i].toLowerCase().replace(/\t/g, "");
						if (trimmed) line = line.trim();
						if (line.startsWith(property) && (lineMatch ? line.match(property + separator) : true)) {
							const parts = trimmed ? lines[i].trim().split(separator) : lines[i].split(separator);
							if (parts.length >= 2) {
								parts.shift();
								return parts.join(separator).trim();
							} else return "";
						}
					}
					return "";
				}
				function decodeEscapeSequence(str, base) {
					base = base || 16;
					return str.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
						return String.fromCharCode(parseInt(arguments[1], base));
					});
				}
				function detectSplit(str) {
					let seperator = "";
					let part = 0;
					str.split("").forEach((element) => {
						if (element >= "0" && element <= "9") {
							if (1 === part) part++;
						} else {
							if (0 === part) part++;
							if (1 === part) seperator += element;
						}
					});
					return seperator;
				}
				function parseTime(t, pmDesignator) {
					pmDesignator = pmDesignator || "";
					t = t.toUpperCase();
					let hour = 0;
					let min = 0;
					let splitter = detectSplit(t);
					let parts = t.split(splitter);
					if (parts.length >= 2) {
						if (parts[2]) parts[1] += parts[2];
						let isPM =
							(parts[1] && parts[1].toLowerCase().indexOf("pm") > -1) ||
							parts[1].toLowerCase().indexOf("p.m.") > -1 ||
							parts[1].toLowerCase().indexOf("p. m.") > -1 ||
							parts[1].toLowerCase().indexOf("n") > -1 ||
							parts[1].toLowerCase().indexOf("ch") > -1 ||
							parts[1].toLowerCase().indexOf("ös") > -1 ||
							(pmDesignator && parts[1].toLowerCase().indexOf(pmDesignator) > -1);
						hour = parseInt(parts[0], 10);
						min = parseInt(parts[1], 10);
						hour = isPM && hour < 12 ? hour + 12 : hour;
						return ("0" + hour).substr(-2) + ":" + ("0" + min).substr(-2);
					}
				}
				function parseDateTime(dt, culture) {
					const result = {
						date: "",
						time: "",
					};
					culture = culture || {};
					let dateFormat = (culture.dateFormat || "").toLowerCase();
					let pmDesignator = culture.pmDesignator || "";
					const parts = dt.split(" ");
					if (parts[0]) {
						if (parts[0].indexOf("/") >= 0) {
							const dtparts = parts[0].split("/");
							if (3 === dtparts.length)
								if (4 === dtparts[0].length) result.date = dtparts[0] + "-" + ("0" + dtparts[1]).substr(-2) + "-" + ("0" + dtparts[2]).substr(-2);
								else if (2 === dtparts[2].length)
									if (dateFormat.indexOf("/d/") > -1 || dateFormat.indexOf("/dd/") > -1)
										result.date = "20" + dtparts[2] + "-" + ("0" + dtparts[1]).substr(-2) + "-" + ("0" + dtparts[0]).substr(-2);
									else result.date = "20" + dtparts[2] + "-" + ("0" + dtparts[1]).substr(-2) + "-" + ("0" + dtparts[0]).substr(-2);
								else {
									const isEN =
										dt.toLowerCase().indexOf("pm") > -1 ||
										dt.toLowerCase().indexOf("p.m.") > -1 ||
										dt.toLowerCase().indexOf("p. m.") > -1 ||
										dt.toLowerCase().indexOf("am") > -1 ||
										dt.toLowerCase().indexOf("a.m.") > -1 ||
										dt.toLowerCase().indexOf("a. m.") > -1;
									if ((isEN || dateFormat.indexOf("/d/") > -1 || dateFormat.indexOf("/dd/") > -1) && 0 !== dateFormat.indexOf("dd/"))
										result.date = dtparts[2] + "-" + ("0" + dtparts[0]).substr(-2) + "-" + ("0" + dtparts[1]).substr(-2);
									else result.date = dtparts[2] + "-" + ("0" + dtparts[1]).substr(-2) + "-" + ("0" + dtparts[0]).substr(-2);
								}
						}
						if (parts[0].indexOf(".") >= 0) {
							const dtparts = parts[0].split(".");
							if (3 === dtparts.length)
								if (dateFormat.indexOf(".d.") > -1 || dateFormat.indexOf(".dd.") > -1)
									result.date = dtparts[2] + "-" + ("0" + dtparts[0]).substr(-2) + "-" + ("0" + dtparts[1]).substr(-2);
								else result.date = dtparts[2] + "-" + ("0" + dtparts[1]).substr(-2) + "-" + ("0" + dtparts[0]).substr(-2);
						}
						if (parts[0].indexOf("-") >= 0) {
							const dtparts = parts[0].split("-");
							if (3 === dtparts.length) result.date = dtparts[0] + "-" + ("0" + dtparts[1]).substr(-2) + "-" + ("0" + dtparts[2]).substr(-2);
						}
					}
					if (parts[1]) {
						parts.shift();
						let time = parts.join(" ");
						result.time = parseTime(time, pmDesignator);
					}
					return result;
				}
				function parseHead(head, rights) {
					let space = rights > 0;
					let count = 1;
					let from = 0;
					let to = 0;
					let result = [];
					for (let i = 0; i < head.length; i++)
						if (count <= rights) {
							if (/\s/.test(head[i]) && !space) {
								to = i - 1;
								result.push({
									from,
									to: to + 1,
									cap: head.substring(from, to + 1),
								});
								from = to + 2;
								count++;
							}
							space = " " === head[i];
						} else {
							if (!/\s/.test(head[i]) && space) {
								to = i - 1;
								if (from < to)
									result.push({
										from,
										to,
										cap: head.substring(from, to),
									});
								from = to + 1;
								count++;
							}
							space = " " === head[i];
						}
					to = 1e3;
					result.push({
						from,
						to,
						cap: head.substring(from, to),
					});
					let len = result.length;
					for (var i = 0; i < len; i++)
						if (0 === result[i].cap.replace(/\s/g, "").length)
							if (i + 1 < len) {
								result[i].to = result[i + 1].to;
								result[i].cap = result[i].cap + result[i + 1].cap;
								result.splice(i + 1, 1);
								len -= 1;
							}
					return result;
				}
				function findObjectByKey(array, key, value) {
					for (let i = 0; i < array.length; i++) if (array[i][key] === value) return i;
					return -1;
				}
				function getWmic() {
					if ("Windows_NT" === os.type() && !wmicPath) {
						wmicPath = WINDIR + "\\system32\\wbem\\wmic.exe";
						if (!fs.existsSync(wmicPath))
							try {
								const wmicPathArray = execSync("WHERE WMIC", execOptsWin).toString().split("\r\n");
								if (wmicPathArray && wmicPathArray.length) wmicPath = wmicPathArray[0];
								else wmicPath = "wmic";
							} catch (e) {
								wmicPath = "wmic";
							}
					}
					return wmicPath;
				}
				function wmic(command) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							try {
								powerShell(getWmic() + " " + command).then((stdout) => {
									resolve(stdout, "");
								});
							} catch (e) {
								resolve("", e);
							}
						});
					});
				}
				function getVboxmanage() {
					return _windows ? `"${process.env.VBOX_INSTALL_PATH || process.env.VBOX_MSI_INSTALL_PATH}\\VBoxManage.exe"` : "vboxmanage";
				}
				function powerShellProceedResults(data) {
					let id = "";
					let parts;
					let res = "";
					if (data.indexOf(_psCmdStart) >= 0) {
						parts = data.split(_psCmdStart);
						const parts2 = parts[1].split(_psIdSeperator);
						id = parts2[0];
						if (parts2.length > 1) data = parts2.slice(1).join(_psIdSeperator);
					}
					if (data.indexOf(_psCmdSeperator) >= 0) {
						parts = data.split(_psCmdSeperator);
						res = parts[0];
					}
					let remove = -1;
					for (let i = 0; i < _psCmds.length; i++)
						if (_psCmds[i].id === id) {
							remove = i;
							_psCmds[i].callback(res);
						}
					if (remove >= 0) _psCmds.splice(remove, 1);
				}
				function powerShellStart() {
					_psChild = spawn("powershell.exe", ["-NoLogo", "-InputFormat", "Text", "-NoExit", "-Command", "-"], {
						stdio: "pipe",
						windowsHide: true,
						maxBuffer: 1024 * 2e4,
						encoding: "UTF-8",
						env: util._extend({}, process.env, {
							LANG: "en_US.UTF-8",
						}),
					});
					if (_psChild && _psChild.pid) {
						_psPersistent = true;
						_psChild.stdout.on("data", function (data) {
							_psResult += data.toString("utf8");
							if (data.indexOf(_psCmdSeperator) >= 0) {
								powerShellProceedResults(_psResult);
								_psResult = "";
							}
						});
						_psChild.stderr.on("data", function () {
							powerShellProceedResults(_psResult + _psError);
						});
						_psChild.on("error", function () {
							powerShellProceedResults(_psResult + _psError);
						});
						_psChild.on("close", function () {
							_psChild.kill();
						});
					}
				}
				function powerShellRelease() {
					try {
						_psChild.stdin.write("exit" + os.EOL);
						_psChild.stdin.end();
						_psPersistent = false;
					} catch (e) {
						_psChild.kill();
					}
				}
				function powerShell(cmd) {
					if (_psPersistent) {
						const id = Math.random().toString(36).substr(2, 10);
						return new Promise((resolve) => {
							process.nextTick(() => {
								function callback(data) {
									resolve(data);
								}
								_psCmds.push({
									id,
									cmd,
									callback,
									start: new Date(),
								});
								try {
									if (_psChild && _psChild.pid)
										_psChild.stdin.write(
											_psToUTF8 + "echo " + _psCmdStart + id + _psIdSeperator + "; " + os.EOL + cmd + os.EOL + "echo " + _psCmdSeperator + os.EOL,
										);
								} catch (e) {
									resolve("");
								}
							});
						});
					} else {
						let result = "";
						return new Promise((resolve) => {
							process.nextTick(() => {
								try {
									const child = spawn("powershell.exe", ["-NoLogo", "-InputFormat", "Text", "-NoExit", "-ExecutionPolicy", "Unrestricted", "-Command", "-"], {
										stdio: "pipe",
										windowsHide: true,
										maxBuffer: 1024 * 2e4,
										encoding: "UTF-8",
										env: util._extend({}, process.env, {
											LANG: "en_US.UTF-8",
										}),
									});
									if (child && !child.pid)
										child.on("error", function () {
											resolve(result);
										});
									if (child && child.pid) {
										child.stdout.on("data", function (data) {
											result += data.toString("utf8");
										});
										child.stderr.on("data", function () {
											child.kill();
											resolve(result);
										});
										child.on("close", function () {
											child.kill();
											resolve(result);
										});
										child.on("error", function () {
											child.kill();
											resolve(result);
										});
										try {
											child.stdin.write(_psToUTF8 + cmd + os.EOL);
											child.stdin.write("exit" + os.EOL);
											child.stdin.end();
										} catch (e) {
											child.kill();
											resolve(result);
										}
									} else resolve(result);
								} catch (e) {
									resolve(result);
								}
							});
						});
					}
				}
				function execSafe(cmd, args, options) {
					let result = "";
					options = options || {};
					return new Promise((resolve) => {
						process.nextTick(() => {
							try {
								const child = spawn(cmd, args, options);
								if (child && !child.pid)
									child.on("error", function () {
										resolve(result);
									});
								if (child && child.pid) {
									child.stdout.on("data", function (data) {
										result += data.toString();
									});
									child.on("close", function () {
										child.kill();
										resolve(result);
									});
									child.on("error", function () {
										child.kill();
										resolve(result);
									});
								} else resolve(result);
							} catch (e) {
								resolve(result);
							}
						});
					});
				}
				function getCodepage() {
					if (_windows) {
						if (!codepage)
							try {
								const stdout = execSync("chcp", execOptsWin);
								const lines = stdout.toString().split("\r\n");
								const parts = lines[0].split(":");
								codepage = parts.length > 1 ? parts[1].replace(".", "") : "";
							} catch (err) {
								codepage = "437";
							}
						return codepage;
					}
					if (_linux || _darwin || _freebsd || _openbsd || _netbsd) {
						if (!codepage)
							try {
								const stdout = execSync("echo $LANG");
								const lines = stdout.toString().split("\r\n");
								const parts = lines[0].split(".");
								codepage = parts.length > 1 ? parts[1].trim() : "";
								if (!codepage) codepage = "UTF-8";
							} catch (err) {
								codepage = "UTF-8";
							}
						return codepage;
					}
				}
				function smartMonToolsInstalled() {
					if (null !== _smartMonToolsInstalled) return _smartMonToolsInstalled;
					_smartMonToolsInstalled = false;
					if (_windows)
						try {
							const pathArray = execSync("WHERE smartctl 2>nul", execOptsWin).toString().split("\r\n");
							if (pathArray && pathArray.length) _smartMonToolsInstalled = pathArray[0].indexOf(":\\") >= 0;
							else _smartMonToolsInstalled = false;
						} catch (e) {
							_smartMonToolsInstalled = false;
						}
					if (_linux || _darwin || _freebsd || _openbsd || _netbsd) {
						const pathArray = execSync("which smartctl 2>/dev/null", execOptsWin).toString().split("\r\n");
						_smartMonToolsInstalled = pathArray.length > 0;
					}
					return _smartMonToolsInstalled;
				}
				function isRaspberry() {
					const PI_MODEL_NO = ["BCM2708", "BCM2709", "BCM2710", "BCM2711", "BCM2835", "BCM2836", "BCM2837", "BCM2837B0"];
					let cpuinfo = [];
					try {
						cpuinfo = fs
							.readFileSync("/proc/cpuinfo", {
								encoding: "utf8",
							})
							.toString()
							.split("\n");
					} catch (e) {
						return false;
					}
					const hardware = getValue(cpuinfo, "hardware");
					return hardware && PI_MODEL_NO.indexOf(hardware) > -1;
				}
				function isRaspbian() {
					let osrelease = [];
					try {
						osrelease = fs
							.readFileSync("/etc/os-release", {
								encoding: "utf8",
							})
							.toString()
							.split("\n");
					} catch (e) {
						return false;
					}
					const id = getValue(osrelease, "id", "=");
					return id && id.indexOf("raspbian") > -1;
				}
				function execWin(cmd, opts, callback) {
					if (!callback) {
						callback = opts;
						opts = execOptsWin;
					}
					let newCmd = "chcp 65001 > nul && cmd /C " + cmd + " && chcp " + codepage + " > nul";
					exec(newCmd, opts, function (error, stdout) {
						callback(error, stdout);
					});
				}
				function darwinXcodeExists() {
					const cmdLineToolsExists = fs.existsSync("/Library/Developer/CommandLineTools/usr/bin/");
					const xcodeAppExists = fs.existsSync("/Applications/Xcode.app/Contents/Developer/Tools");
					const xcodeExists = fs.existsSync("/Library/Developer/Xcode/");
					return cmdLineToolsExists || xcodeExists || xcodeAppExists;
				}
				function nanoSeconds() {
					const time = process.hrtime();
					if (!Array.isArray(time) || 2 !== time.length) return 0;
					return 1e9 * +time[0] + +time[1];
				}
				function countUniqueLines(lines, startingWith) {
					startingWith = startingWith || "";
					const uniqueLines = [];
					lines.forEach((line) => {
						if (line.startsWith(startingWith)) if (-1 === uniqueLines.indexOf(line)) uniqueLines.push(line);
					});
					return uniqueLines.length;
				}
				function countLines(lines, startingWith) {
					startingWith = startingWith || "";
					const uniqueLines = [];
					lines.forEach((line) => {
						if (line.startsWith(startingWith)) uniqueLines.push(line);
					});
					return uniqueLines.length;
				}
				function sanitizeShellString(str, strict) {
					if ("undefined" === typeof strict) strict = false;
					const s = str || "";
					let result = "";
					for (let i = 0; i <= mathMin(s.length, 2e3); i++)
						if (
							!(
								void 0 === s[i] ||
								">" === s[i] ||
								"<" === s[i] ||
								"*" === s[i] ||
								"?" === s[i] ||
								"[" === s[i] ||
								"]" === s[i] ||
								"|" === s[i] ||
								"˚" === s[i] ||
								"$" === s[i] ||
								";" === s[i] ||
								"&" === s[i] ||
								"(" === s[i] ||
								")" === s[i] ||
								"]" === s[i] ||
								"#" === s[i] ||
								"\\" === s[i] ||
								"\t" === s[i] ||
								"\n" === s[i] ||
								"'" === s[i] ||
								"`" === s[i] ||
								'"' === s[i] ||
								s[i].length > 1 ||
								(strict && "@" === s[i]) ||
								(strict && " " === s[i]) ||
								(strict && "{" == s[i]) ||
								(strict && ")" == s[i])
							)
						)
							result += s[i];
					return result;
				}
				function isPrototypePolluted() {
					const s = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
					let notPolluted = true;
					let st = "";
					st.__proto__.replace = stringReplace;
					st.__proto__.toLowerCase = stringToLower;
					st.__proto__.toString = stringToString;
					st.__proto__.substr = stringSubstr;
					notPolluted = notPolluted || !(62 === s.length);
					const ms = Date.now();
					if ("number" === typeof ms && ms > 16e11) {
						const l = (ms % 100) + 15;
						for (let i = 0; i < l; i++) {
							const r = 61.99999999 * Math.random() + 1;
							const rs = parseInt(Math.floor(r).toString(), 10);
							const rs2 = parseInt(r.toString().split(".")[0], 10);
							const q = 61.99999999 * Math.random() + 1;
							const qs = parseInt(Math.floor(q).toString(), 10);
							const qs2 = parseInt(q.toString().split(".")[0], 10);
							notPolluted = notPolluted && !(r === q);
							notPolluted = notPolluted && rs === rs2 && qs === qs2;
							st += s[rs - 1];
						}
						notPolluted = notPolluted && st.length === l;
						let p = Math.random() * l * 0.9999999999;
						let stm = st.substr(0, p) + " " + st.substr(p, 2e3);
						stm.__proto__.replace = stringReplace;
						let sto = stm.replace(/ /g, "");
						notPolluted = notPolluted && st === sto;
						p = Math.random() * l * 0.9999999999;
						stm = st.substr(0, p) + "{" + st.substr(p, 2e3);
						sto = stm.replace(/{/g, "");
						notPolluted = notPolluted && st === sto;
						p = Math.random() * l * 0.9999999999;
						stm = st.substr(0, p) + "*" + st.substr(p, 2e3);
						sto = stm.replace(/\*/g, "");
						notPolluted = notPolluted && st === sto;
						p = Math.random() * l * 0.9999999999;
						stm = st.substr(0, p) + "$" + st.substr(p, 2e3);
						sto = stm.replace(/\$/g, "");
						notPolluted = notPolluted && st === sto;
						const stl = st.toLowerCase();
						notPolluted = notPolluted && stl.length === l && stl[l - 1] && !stl[l];
						for (let i = 0; i < l; i++) {
							const s1 = st[i];
							s1.__proto__.toLowerCase = stringToLower;
							const s2 = stl ? stl[i] : "";
							const s1l = s1.toLowerCase();
							notPolluted = notPolluted && s1l[0] === s2 && s1l[0] && !s1l[1];
						}
					}
					return !notPolluted;
				}
				function hex2bin(hex) {
					return ("00000000" + parseInt(hex, 16).toString(2)).substr(-8);
				}
				function getFilesInPath(source) {
					const lstatSync = fs.lstatSync;
					const readdirSync = fs.readdirSync;
					const join = path.join;
					function isDirectory(source) {
						return lstatSync(source).isDirectory();
					}
					function isFile(source) {
						return lstatSync(source).isFile();
					}
					function getDirectories(source) {
						return readdirSync(source)
							.map(function (name) {
								return join(source, name);
							})
							.filter(isDirectory);
					}
					function getFiles(source) {
						return readdirSync(source)
							.map(function (name) {
								return join(source, name);
							})
							.filter(isFile);
					}
					function getFilesRecursively(source) {
						try {
							let dirs = getDirectories(source);
							let files = dirs
								.map(function (dir) {
									return getFilesRecursively(dir);
								})
								.reduce(function (a, b) {
									return a.concat(b);
								}, []);
							return files.concat(getFiles(source));
						} catch (e) {
							return [];
						}
					}
					if (fs.existsSync(source)) return getFilesRecursively(source);
					else return [];
				}
				function decodePiCpuinfo(lines) {
					const oldRevisionCodes = {
						"0002": {
							type: "B",
							revision: "1.0",
							memory: 256,
							manufacturer: "Egoman",
							processor: "BCM2835",
						},
						"0003": {
							type: "B",
							revision: "1.0",
							memory: 256,
							manufacturer: "Egoman",
							processor: "BCM2835",
						},
						"0004": {
							type: "B",
							revision: "2.0",
							memory: 256,
							manufacturer: "Sony UK",
							processor: "BCM2835",
						},
						"0005": {
							type: "B",
							revision: "2.0",
							memory: 256,
							manufacturer: "Qisda",
							processor: "BCM2835",
						},
						"0006": {
							type: "B",
							revision: "2.0",
							memory: 256,
							manufacturer: "Egoman",
							processor: "BCM2835",
						},
						"0007": {
							type: "A",
							revision: "2.0",
							memory: 256,
							manufacturer: "Egoman",
							processor: "BCM2835",
						},
						"0008": {
							type: "A",
							revision: "2.0",
							memory: 256,
							manufacturer: "Sony UK",
							processor: "BCM2835",
						},
						"0009": {
							type: "A",
							revision: "2.0",
							memory: 256,
							manufacturer: "Qisda",
							processor: "BCM2835",
						},
						"000d": {
							type: "B",
							revision: "2.0",
							memory: 512,
							manufacturer: "Egoman",
							processor: "BCM2835",
						},
						"000e": {
							type: "B",
							revision: "2.0",
							memory: 512,
							manufacturer: "Sony UK",
							processor: "BCM2835",
						},
						"000f": {
							type: "B",
							revision: "2.0",
							memory: 512,
							manufacturer: "Egoman",
							processor: "BCM2835",
						},
						"0010": {
							type: "B+",
							revision: "1.2",
							memory: 512,
							manufacturer: "Sony UK",
							processor: "BCM2835",
						},
						"0011": {
							type: "CM1",
							revision: "1.0",
							memory: 512,
							manufacturer: "Sony UK",
							processor: "BCM2835",
						},
						"0012": {
							type: "A+",
							revision: "1.1",
							memory: 256,
							manufacturer: "Sony UK",
							processor: "BCM2835",
						},
						"0013": {
							type: "B+",
							revision: "1.2",
							memory: 512,
							manufacturer: "Embest",
							processor: "BCM2835",
						},
						"0014": {
							type: "CM1",
							revision: "1.0",
							memory: 512,
							manufacturer: "Embest",
							processor: "BCM2835",
						},
						"0015": {
							type: "A+",
							revision: "1.1",
							memory: 256,
							manufacturer: "512MB\tEmbest",
							processor: "BCM2835",
						},
					};
					const processorList = ["BCM2835", "BCM2836", "BCM2837", "BCM2711"];
					const manufacturerList = ["Sony UK", "Egoman", "Embest", "Sony Japan", "Embest", "Stadium"];
					const typeList = {
						"00": "A",
						"01": "B",
						"02": "A+",
						"03": "B+",
						"04": "2B",
						"05": "Alpha (early prototype)",
						"06": "CM1",
						"08": "3B",
						"09": "Zero",
						"0a": "CM3",
						"0c": "Zero W",
						"0d": "3B+",
						"0e": "3A+",
						"0f": "Internal use only",
						10: "CM3+",
						11: "4B",
						12: "Zero 2 W",
						13: "400",
						14: "CM4",
					};
					const revisionCode = getValue(lines, "revision", ":", true);
					const model = getValue(lines, "model:", ":", true);
					const serial = getValue(lines, "serial", ":", true);
					let result = {};
					if ({}.hasOwnProperty.call(oldRevisionCodes, revisionCode))
						result = {
							model,
							serial,
							revisionCode,
							memory: oldRevisionCodes[revisionCode].memory,
							manufacturer: oldRevisionCodes[revisionCode].manufacturer,
							processor: oldRevisionCodes[revisionCode].processor,
							type: oldRevisionCodes[revisionCode].type,
							revision: oldRevisionCodes[revisionCode].revision,
						};
					else {
						const revision = ("00000000" + getValue(lines, "revision", ":", true).toLowerCase()).substr(-8);
						const memSizeCode = parseInt(hex2bin(revision.substr(2, 1)).substr(5, 3), 2) || 0;
						const manufacturer = manufacturerList[parseInt(revision.substr(3, 1), 10)];
						const processor = processorList[parseInt(revision.substr(4, 1), 10)];
						const typeCode = revision.substr(5, 2);
						result = {
							model,
							serial,
							revisionCode,
							memory: 256 * Math.pow(2, memSizeCode),
							manufacturer,
							processor,
							type: {}.hasOwnProperty.call(typeList, typeCode) ? typeList[typeCode] : "",
							revision: "1." + revision.substr(7, 1),
						};
					}
					return result;
				}
				function promiseAll(promises) {
					const resolvingPromises = promises.map(function (promise) {
						return new Promise(function (resolve) {
							var payload = new Array(2);
							promise
								.then(function (result) {
									payload[0] = result;
								})
								.catch(function (error) {
									payload[1] = error;
								})
								.then(function () {
									resolve(payload);
								});
						});
					});
					var errors = [];
					var results = [];
					return Promise.all(resolvingPromises).then(function (items) {
						items.forEach(function (payload) {
							if (payload[1]) {
								errors.push(payload[1]);
								results.push(null);
							} else {
								errors.push(null);
								results.push(payload[0]);
							}
						});
						return {
							errors,
							results,
						};
					});
				}
				function promisify(nodeStyleFunction) {
					return function () {
						var args = Array.prototype.slice.call(arguments);
						return new Promise(function (resolve, reject) {
							args.push(function (err, data) {
								if (err) reject(err);
								else resolve(data);
							});
							nodeStyleFunction.apply(null, args);
						});
					};
				}
				function promisifySave(nodeStyleFunction) {
					return function () {
						var args = Array.prototype.slice.call(arguments);
						return new Promise(function (resolve) {
							args.push(function (err, data) {
								resolve(data);
							});
							nodeStyleFunction.apply(null, args);
						});
					};
				}
				function linuxVersion() {
					let result = "";
					if (_linux)
						try {
							result = execSync("uname -v").toString();
						} catch (e) {
							result = "";
						}
					return result;
				}
				function plistParser(xmlStr) {
					const tags = ["array", "dict", "key", "string", "integer", "date", "real", "data", "boolean", "arrayEmpty"];
					const startStr = "<plist version";
					let pos = xmlStr.indexOf(startStr);
					let len = xmlStr.length;
					while (">" !== xmlStr[pos] && pos < len) pos++;
					let depth = 0;
					let inTagStart = false;
					let inTagContent = false;
					let inTagEnd = false;
					let metaData = [
						{
							tagStart: "",
							tagEnd: "",
							tagContent: "",
							key: "",
							data: null,
						},
					];
					let c = "";
					let cn = xmlStr[pos];
					while (pos < len) {
						c = cn;
						if (pos + 1 < len) cn = xmlStr[pos + 1];
						if ("<" === c) {
							inTagContent = false;
							if ("/" === cn) inTagEnd = true;
							else if (metaData[depth].tagStart) {
								metaData[depth].tagContent = "";
								if (!metaData[depth].data) metaData[depth].data = "array" === metaData[depth].tagStart ? [] : {};
								depth++;
								metaData.push({
									tagStart: "",
									tagEnd: "",
									tagContent: "",
									key: null,
									data: null,
								});
								inTagStart = true;
								inTagContent = false;
							} else if (!inTagStart) inTagStart = true;
						} else if (">" === c) {
							if ("true/" === metaData[depth].tagStart) {
								inTagStart = false;
								inTagEnd = true;
								metaData[depth].tagStart = "";
								metaData[depth].tagEnd = "/boolean";
								metaData[depth].data = true;
							}
							if ("false/" === metaData[depth].tagStart) {
								inTagStart = false;
								inTagEnd = true;
								metaData[depth].tagStart = "";
								metaData[depth].tagEnd = "/boolean";
								metaData[depth].data = false;
							}
							if ("array/" === metaData[depth].tagStart) {
								inTagStart = false;
								inTagEnd = true;
								metaData[depth].tagStart = "";
								metaData[depth].tagEnd = "/arrayEmpty";
								metaData[depth].data = [];
							}
							if (inTagContent) inTagContent = false;
							if (inTagStart) {
								inTagStart = false;
								inTagContent = true;
								if ("array" === metaData[depth].tagStart) metaData[depth].data = [];
								if ("dict" === metaData[depth].tagStart) metaData[depth].data = {};
							}
							if (inTagEnd) {
								inTagEnd = false;
								if (metaData[depth].tagEnd && tags.indexOf(metaData[depth].tagEnd.substr(1)) >= 0)
									if ("/dict" === metaData[depth].tagEnd || "/array" === metaData[depth].tagEnd) {
										if (depth > 1 && "array" === metaData[depth - 2].tagStart) metaData[depth - 2].data.push(metaData[depth - 1].data);
										if (depth > 1 && "dict" === metaData[depth - 2].tagStart) metaData[depth - 2].data[metaData[depth - 1].key] = metaData[depth - 1].data;
										depth--;
										metaData.pop();
										metaData[depth].tagContent = "";
										metaData[depth].tagStart = "";
										metaData[depth].tagEnd = "";
									} else {
										if ("/key" === metaData[depth].tagEnd && metaData[depth].tagContent) metaData[depth].key = metaData[depth].tagContent;
										else {
											if ("/real" === metaData[depth].tagEnd && metaData[depth].tagContent) metaData[depth].data = parseFloat(metaData[depth].tagContent) || 0;
											if ("/integer" === metaData[depth].tagEnd && metaData[depth].tagContent) metaData[depth].data = parseInt(metaData[depth].tagContent) || 0;
											if ("/string" === metaData[depth].tagEnd && metaData[depth].tagContent) metaData[depth].data = metaData[depth].tagContent || "";
											if ("/boolean" === metaData[depth].tagEnd) metaData[depth].data = metaData[depth].tagContent || false;
											if ("/arrayEmpty" === metaData[depth].tagEnd) metaData[depth].data = metaData[depth].tagContent || [];
											if (depth > 0 && "array" === metaData[depth - 1].tagStart) metaData[depth - 1].data.push(metaData[depth].data);
											if (depth > 0 && "dict" === metaData[depth - 1].tagStart) metaData[depth - 1].data[metaData[depth].key] = metaData[depth].data;
										}
										metaData[depth].tagContent = "";
										metaData[depth].tagStart = "";
										metaData[depth].tagEnd = "";
									}
								metaData[depth].tagEnd = "";
								inTagStart = false;
								inTagContent = false;
							}
						} else {
							if (inTagStart) metaData[depth].tagStart += c;
							if (inTagEnd) metaData[depth].tagEnd += c;
							if (inTagContent) metaData[depth].tagContent += c;
						}
						pos++;
					}
					return metaData[0].data;
				}
				function semverCompare(v1, v2) {
					let res = 0;
					const parts1 = v1.split(".");
					const parts2 = v2.split(".");
					if (parts1[0] < parts2[0]) res = 1;
					else if (parts1[0] > parts2[0]) res = -1;
					else if (parts1[0] === parts2[0] && parts1.length >= 2 && parts2.length >= 2)
						if (parts1[1] < parts2[1]) res = 1;
						else if (parts1[1] > parts2[1]) res = -1;
						else if (parts1[1] === parts2[1])
							if (parts1.length >= 3 && parts2.length >= 3) {
								if (parts1[2] < parts2[2]) res = 1;
								else if (parts1[2] > parts2[2]) res = -1;
							} else if (parts2.length >= 3) res = 1;
					return res;
				}
				function noop() {}
				exports.toInt = toInt;
				exports.execOptsWin = execOptsWin;
				exports.getCodepage = getCodepage;
				exports.execWin = execWin;
				exports.isFunction = isFunction;
				exports.unique = unique;
				exports.sortByKey = sortByKey;
				exports.cores = cores;
				exports.getValue = getValue;
				exports.decodeEscapeSequence = decodeEscapeSequence;
				exports.parseDateTime = parseDateTime;
				exports.parseHead = parseHead;
				exports.findObjectByKey = findObjectByKey;
				exports.getWmic = getWmic;
				exports.wmic = wmic;
				exports.darwinXcodeExists = darwinXcodeExists;
				exports.getVboxmanage = getVboxmanage;
				exports.powerShell = powerShell;
				exports.powerShellStart = powerShellStart;
				exports.powerShellRelease = powerShellRelease;
				exports.execSafe = execSafe;
				exports.nanoSeconds = nanoSeconds;
				exports.countUniqueLines = countUniqueLines;
				exports.countLines = countLines;
				exports.noop = noop;
				exports.isRaspberry = isRaspberry;
				exports.isRaspbian = isRaspbian;
				exports.sanitizeShellString = sanitizeShellString;
				exports.isPrototypePolluted = isPrototypePolluted;
				exports.decodePiCpuinfo = decodePiCpuinfo;
				exports.promiseAll = promiseAll;
				exports.promisify = promisify;
				exports.promisifySave = promisifySave;
				exports.smartMonToolsInstalled = smartMonToolsInstalled;
				exports.linuxVersion = linuxVersion;
				exports.plistParser = plistParser;
				exports.stringReplace = stringReplace;
				exports.stringToLower = stringToLower;
				exports.stringToString = stringToString;
				exports.stringSubstr = stringSubstr;
				exports.stringTrim = stringTrim;
				exports.stringStartWith = stringStartWith;
				exports.mathMin = mathMin;
				exports.WINDIR = WINDIR;
				exports.getFilesInPath = getFilesInPath;
				exports.semverCompare = semverCompare;
			},
			398: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const exec = __webpack_require__(282).exec;
				const util = __webpack_require__(858);
				function vboxInfo(callback) {
					let result = [];
					return new Promise((resolve) => {
						process.nextTick(() => {
							try {
								exec(util.getVboxmanage() + " list vms --long", function (error, stdout) {
									let parts = (os.EOL + stdout.toString()).split(os.EOL + "Name:");
									parts.shift();
									parts.forEach((part) => {
										const lines = ("Name:" + part).split(os.EOL);
										const state = util.getValue(lines, "State");
										const running = state.startsWith("running");
										const runningSinceString = running ? state.replace("running (since ", "").replace(")", "").trim() : "";
										let runningSince = 0;
										try {
											if (running) {
												const sinceDateObj = new Date(runningSinceString);
												const offset = sinceDateObj.getTimezoneOffset();
												runningSince = Math.round((Date.now() - Date.parse(sinceDateObj)) / 1e3) + 60 * offset;
											}
										} catch (e) {
											util.noop();
										}
										const stoppedSinceString = !running ? state.replace("powered off (since", "").replace(")", "").trim() : "";
										let stoppedSince = 0;
										try {
											if (!running) {
												const sinceDateObj = new Date(stoppedSinceString);
												const offset = sinceDateObj.getTimezoneOffset();
												stoppedSince = Math.round((Date.now() - Date.parse(sinceDateObj)) / 1e3) + 60 * offset;
											}
										} catch (e) {
											util.noop();
										}
										result.push({
											id: util.getValue(lines, "UUID"),
											name: util.getValue(lines, "Name"),
											running,
											started: runningSinceString,
											runningSince,
											stopped: stoppedSinceString,
											stoppedSince,
											guestOS: util.getValue(lines, "Guest OS"),
											hardwareUUID: util.getValue(lines, "Hardware UUID"),
											memory: parseInt(util.getValue(lines, "Memory size", "     "), 10),
											vram: parseInt(util.getValue(lines, "VRAM size"), 10),
											cpus: parseInt(util.getValue(lines, "Number of CPUs"), 10),
											cpuExepCap: util.getValue(lines, "CPU exec cap"),
											cpuProfile: util.getValue(lines, "CPUProfile"),
											chipset: util.getValue(lines, "Chipset"),
											firmware: util.getValue(lines, "Firmware"),
											pageFusion: "enabled" === util.getValue(lines, "Page Fusion"),
											configFile: util.getValue(lines, "Config file"),
											snapshotFolder: util.getValue(lines, "Snapshot folder"),
											logFolder: util.getValue(lines, "Log folder"),
											hpet: "enabled" === util.getValue(lines, "HPET"),
											pae: "enabled" === util.getValue(lines, "PAE"),
											longMode: "enabled" === util.getValue(lines, "Long Mode"),
											tripleFaultReset: "enabled" === util.getValue(lines, "Triple Fault Reset"),
											apic: "enabled" === util.getValue(lines, "APIC"),
											x2Apic: "enabled" === util.getValue(lines, "X2APIC"),
											acpi: "enabled" === util.getValue(lines, "ACPI"),
											ioApic: "enabled" === util.getValue(lines, "IOAPIC"),
											biosApicMode: util.getValue(lines, "BIOS APIC mode"),
											bootMenuMode: util.getValue(lines, "Boot menu mode"),
											bootDevice1: util.getValue(lines, "Boot Device 1"),
											bootDevice2: util.getValue(lines, "Boot Device 2"),
											bootDevice3: util.getValue(lines, "Boot Device 3"),
											bootDevice4: util.getValue(lines, "Boot Device 4"),
											timeOffset: util.getValue(lines, "Time offset"),
											rtc: util.getValue(lines, "RTC"),
										});
									});
									if (callback) callback(result);
									resolve(result);
								});
							} catch (e) {
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.vboxInfo = vboxInfo;
			},
			694: (__unused_webpack_module, exports, __webpack_require__) => {
				const os = __webpack_require__(37);
				const exec = __webpack_require__(282).exec;
				const execSync = __webpack_require__(282).execSync;
				const util = __webpack_require__(858);
				let _platform = process.platform;
				const _linux = "linux" === _platform || "android" === _platform;
				const _darwin = "darwin" === _platform;
				const _windows = "win32" === _platform;
				function wifiDBFromQuality(quality) {
					return parseFloat(quality) / 2 - 100;
				}
				function wifiQualityFromDB(db) {
					const result = 2 * (parseFloat(db) + 100);
					return result <= 100 ? result : 100;
				}
				const _wifi_frequencies = {
					1: 2412,
					2: 2417,
					3: 2422,
					4: 2427,
					5: 2432,
					6: 2437,
					7: 2442,
					8: 2447,
					9: 2452,
					10: 2457,
					11: 2462,
					12: 2467,
					13: 2472,
					14: 2484,
					32: 5160,
					34: 5170,
					36: 5180,
					38: 5190,
					40: 5200,
					42: 5210,
					44: 5220,
					46: 5230,
					48: 5240,
					50: 5250,
					52: 5260,
					54: 5270,
					56: 5280,
					58: 5290,
					60: 5300,
					62: 5310,
					64: 5320,
					68: 5340,
					96: 5480,
					100: 5500,
					102: 5510,
					104: 5520,
					106: 5530,
					108: 5540,
					110: 5550,
					112: 5560,
					114: 5570,
					116: 5580,
					118: 5590,
					120: 5600,
					122: 5610,
					124: 5620,
					126: 5630,
					128: 5640,
					132: 5660,
					134: 5670,
					136: 5680,
					138: 5690,
					140: 5700,
					142: 5710,
					144: 5720,
					149: 5745,
					151: 5755,
					153: 5765,
					155: 5775,
					157: 5785,
					159: 5795,
					161: 5805,
					165: 5825,
					169: 5845,
					173: 5865,
					183: 4915,
					184: 4920,
					185: 4925,
					187: 4935,
					188: 4940,
					189: 4945,
					192: 4960,
					196: 4980,
				};
				function wifiFrequencyFromChannel(channel) {
					return {}.hasOwnProperty.call(_wifi_frequencies, channel) ? _wifi_frequencies[channel] : null;
				}
				function wifiChannelFromFrequencs(frequency) {
					let channel = 0;
					for (let key in _wifi_frequencies) if ({}.hasOwnProperty.call(_wifi_frequencies, key)) if (_wifi_frequencies[key] === frequency) channel = util.toInt(key);
					return channel;
				}
				function ifaceListLinux() {
					const result = [];
					const cmd = "iw dev";
					try {
						const all = execSync(cmd)
							.toString()
							.split("\n")
							.map((line) => line.trim())
							.join("\n");
						const parts = all.split("\nInterface ");
						parts.shift();
						parts.forEach((ifaceDetails) => {
							const lines = ifaceDetails.split("\n");
							const iface = lines[0];
							const id = util.toInt(util.getValue(lines, "ifindex", " "));
							const mac = util.getValue(lines, "addr", " ");
							const channel = util.toInt(util.getValue(lines, "channel", " "));
							result.push({
								id,
								iface,
								mac,
								channel,
							});
						});
						return result;
					} catch (e) {
						return [];
					}
				}
				function nmiDeviceLinux(iface) {
					const cmd = `nmcli -t -f general,wifi-properties,capabilities,ip4,ip6 device show ${iface} 2>/dev/null`;
					try {
						const lines = execSync(cmd).toString().split("\n");
						const ssid = util.getValue(lines, "GENERAL.CONNECTION");
						return {
							iface,
							type: util.getValue(lines, "GENERAL.TYPE"),
							vendor: util.getValue(lines, "GENERAL.VENDOR"),
							product: util.getValue(lines, "GENERAL.PRODUCT"),
							mac: util.getValue(lines, "GENERAL.HWADDR").toLowerCase(),
							ssid: "--" !== ssid ? ssid : null,
						};
					} catch (e) {
						return {};
					}
				}
				function nmiConnectionLinux(ssid) {
					const cmd = `nmcli -t --show-secrets connection show ${ssid} 2>/dev/null`;
					try {
						const lines = execSync(cmd).toString().split("\n");
						const bssid = util.getValue(lines, "802-11-wireless.seen-bssids").toLowerCase();
						return {
							ssid: "--" !== ssid ? ssid : null,
							uuid: util.getValue(lines, "connection.uuid"),
							type: util.getValue(lines, "connection.type"),
							autoconnect: "yes" === util.getValue(lines, "connection.autoconnect"),
							security: util.getValue(lines, "802-11-wireless-security.key-mgmt"),
							bssid: "--" !== bssid ? bssid : null,
						};
					} catch (e) {
						return {};
					}
				}
				function wpaConnectionLinux(iface) {
					const cmd = `wpa_cli -i ${iface} status 2>&1`;
					try {
						const lines = execSync(cmd).toString().split("\n");
						const freq = util.toInt(util.getValue(lines, "freq", "="));
						return {
							ssid: util.getValue(lines, "ssid", "="),
							uuid: util.getValue(lines, "uuid", "="),
							security: util.getValue(lines, "key_mgmt", "="),
							freq,
							channel: wifiChannelFromFrequencs(freq),
							bssid: util.getValue(lines, "bssid", "=").toLowerCase(),
						};
					} catch (e) {
						return {};
					}
				}
				function getWifiNetworkListNmi() {
					const result = [];
					const cmd = "nmcli -t -m multiline --fields active,ssid,bssid,mode,chan,freq,signal,security,wpa-flags,rsn-flags device wifi list 2>/dev/null";
					try {
						const stdout = execSync(cmd, {
							maxBuffer: 1024 * 2e4,
						});
						const parts = stdout.toString().split("ACTIVE:");
						parts.shift();
						parts.forEach((part) => {
							part = "ACTIVE:" + part;
							const lines = part.split(os.EOL);
							const channel = util.getValue(lines, "CHAN");
							const frequency = util.getValue(lines, "FREQ").toLowerCase().replace("mhz", "").trim();
							const security = util.getValue(lines, "SECURITY").replace("(", "").replace(")", "");
							const wpaFlags = util.getValue(lines, "WPA-FLAGS").replace("(", "").replace(")", "");
							const rsnFlags = util.getValue(lines, "RSN-FLAGS").replace("(", "").replace(")", "");
							result.push({
								ssid: util.getValue(lines, "SSID"),
								bssid: util.getValue(lines, "BSSID").toLowerCase(),
								mode: util.getValue(lines, "MODE"),
								channel: channel ? parseInt(channel, 10) : null,
								frequency: frequency ? parseInt(frequency, 10) : null,
								signalLevel: wifiDBFromQuality(util.getValue(lines, "SIGNAL")),
								quality: parseFloat(util.getValue(lines, "SIGNAL")),
								security: security && "none" !== security ? security.split(" ") : [],
								wpaFlags: wpaFlags && "none" !== wpaFlags ? wpaFlags.split(" ") : [],
								rsnFlags: rsnFlags && "none" !== rsnFlags ? rsnFlags.split(" ") : [],
							});
						});
						return result;
					} catch (e) {
						return [];
					}
				}
				function getWifiNetworkListIw(iface) {
					const result = [];
					try {
						let iwlistParts = execSync(`export LC_ALL=C; iwlist ${iface} scan 2>&1; unset LC_ALL`).toString().split("        Cell ");
						if (iwlistParts[0].indexOf("resource busy") >= 0) return -1;
						if (iwlistParts.length > 1) {
							iwlistParts.shift();
							for (let i = 0; i < iwlistParts.length; i++) {
								const lines = iwlistParts[i].split("\n");
								const channel = util.getValue(lines, "channel", ":", true);
								const address = lines && lines.length && lines[0].indexOf("Address:") >= 0 ? lines[0].split("Address:")[1].trim().toLowerCase() : "";
								const mode = util.getValue(lines, "mode", ":", true);
								const frequency = util.getValue(lines, "frequency", ":", true);
								const qualityString = util.getValue(lines, "Quality", "=", true);
								const dbParts = qualityString.toLowerCase().split("signal level=");
								const db = dbParts.length > 1 ? util.toInt(dbParts[1]) : 0;
								const quality = db ? wifiQualityFromDB(db) : 0;
								const ssid = util.getValue(lines, "essid", ":", true);
								const isWpa = iwlistParts[i].indexOf(" WPA ") >= 0;
								const isWpa2 = iwlistParts[i].indexOf("WPA2 ") >= 0;
								const security = [];
								if (isWpa) security.push("WPA");
								if (isWpa2) security.push("WPA2");
								const wpaFlags = [];
								let wpaFlag = "";
								lines.forEach(function (line) {
									const l = line.trim().toLowerCase();
									if (l.indexOf("group cipher") >= 0) {
										if (wpaFlag) wpaFlags.push(wpaFlag);
										const parts = l.split(":");
										if (parts.length > 1) wpaFlag = parts[1].trim().toUpperCase();
									}
									if (l.indexOf("pairwise cipher") >= 0) {
										const parts = l.split(":");
										if (parts.length > 1)
											if (parts[1].indexOf("tkip")) wpaFlag = wpaFlag ? "TKIP/" + wpaFlag : "TKIP";
											else if (parts[1].indexOf("ccmp")) wpaFlag = wpaFlag ? "CCMP/" + wpaFlag : "CCMP";
											else if (parts[1].indexOf("proprietary")) wpaFlag = wpaFlag ? "PROP/" + wpaFlag : "PROP";
									}
									if (l.indexOf("authentication suites") >= 0) {
										const parts = l.split(":");
										if (parts.length > 1)
											if (parts[1].indexOf("802.1x")) wpaFlag = wpaFlag ? "802.1x/" + wpaFlag : "802.1x";
											else if (parts[1].indexOf("psk")) wpaFlag = wpaFlag ? "PSK/" + wpaFlag : "PSK";
									}
								});
								if (wpaFlag) wpaFlags.push(wpaFlag);
								result.push({
									ssid,
									bssid: address,
									mode,
									channel: channel ? util.toInt(channel) : null,
									frequency: frequency ? util.toInt(frequency.replace(".", "")) : null,
									signalLevel: db,
									quality,
									security,
									wpaFlags,
									rsnFlags: [],
								});
							}
						}
						return result;
					} catch (e) {
						return -1;
					}
				}
				function parseWifiDarwin(wifiObj) {
					const result = [];
					if (wifiObj)
						wifiObj.forEach(function (wifiItem) {
							const signalLevel = wifiItem.RSSI;
							let security = [];
							let wpaFlags = [];
							if (wifiItem.WPA_IE) {
								security.push("WPA");
								if (wifiItem.WPA_IE.IE_KEY_WPA_UCIPHERS)
									wifiItem.WPA_IE.IE_KEY_WPA_UCIPHERS.forEach(function (ciphers) {
										if (0 === ciphers && -1 === wpaFlags.indexOf("unknown/TKIP")) wpaFlags.push("unknown/TKIP");
										if (2 === ciphers && -1 === wpaFlags.indexOf("PSK/TKIP")) wpaFlags.push("PSK/TKIP");
										if (4 === ciphers && -1 === wpaFlags.indexOf("PSK/AES")) wpaFlags.push("PSK/AES");
									});
							}
							if (wifiItem.RSN_IE) {
								security.push("WPA2");
								if (wifiItem.RSN_IE.IE_KEY_RSN_UCIPHERS)
									wifiItem.RSN_IE.IE_KEY_RSN_UCIPHERS.forEach(function (ciphers) {
										if (0 === ciphers && -1 === wpaFlags.indexOf("unknown/TKIP")) wpaFlags.push("unknown/TKIP");
										if (2 === ciphers && -1 === wpaFlags.indexOf("TKIP/TKIP")) wpaFlags.push("TKIP/TKIP");
										if (4 === ciphers && -1 === wpaFlags.indexOf("PSK/AES")) wpaFlags.push("PSK/AES");
									});
							}
							result.push({
								ssid: wifiItem.SSID_STR,
								bssid: wifiItem.BSSID,
								mode: "",
								channel: wifiItem.CHANNEL,
								frequency: wifiFrequencyFromChannel(wifiItem.CHANNEL),
								signalLevel: signalLevel ? parseInt(signalLevel, 10) : null,
								quality: wifiQualityFromDB(signalLevel),
								security,
								wpaFlags,
								rsnFlags: [],
							});
						});
					return result;
				}
				function wifiNetworks(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							let result = [];
							if (_linux) {
								result = getWifiNetworkListNmi();
								if (0 === result.length)
									try {
										const iwconfigParts = execSync("export LC_ALL=C; iwconfig 2>/dev/null; unset LC_ALL").toString().split("\n\n");
										let iface = "";
										for (let i = 0; i < iwconfigParts.length; i++)
											if (-1 === iwconfigParts[i].indexOf("no wireless") && "" !== iwconfigParts[i].trim()) iface = iwconfigParts[i].split(" ")[0];
										if (iface) {
											const res = getWifiNetworkListIw(iface);
											if (-1 === res)
												setTimeout(function (iface) {
													const res = getWifiNetworkListIw(iface);
													if (-1 != res) result = res;
													if (callback) callback(result);
													resolve(result);
												}, 4e3);
											else {
												result = res;
												if (callback) callback(result);
												resolve(result);
											}
										} else {
											if (callback) callback(result);
											resolve(result);
										}
									} catch (e) {
										if (callback) callback(result);
										resolve(result);
									}
								else {
									if (callback) callback(result);
									resolve(result);
								}
							} else if (_darwin) {
								let cmd = "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s -x";
								exec(
									cmd,
									{
										maxBuffer: 1024 * 4e4,
									},
									function (error, stdout) {
										const output = stdout.toString();
										result = parseWifiDarwin(util.plistParser(output));
										if (callback) callback(result);
										resolve(result);
									},
								);
							} else if (_windows) {
								let cmd = "netsh wlan show networks mode=Bssid";
								util.powerShell(cmd).then((stdout) => {
									const ssidParts = stdout.toString("utf8").split(os.EOL + os.EOL + "SSID ");
									ssidParts.shift();
									ssidParts.forEach((ssidPart) => {
										const ssidLines = ssidPart.split(os.EOL);
										if (ssidLines && ssidLines.length >= 8 && ssidLines[0].indexOf(":") >= 0) {
											const bssidsParts = ssidPart.split(" BSSID");
											bssidsParts.shift();
											bssidsParts.forEach((bssidPart) => {
												const bssidLines = bssidPart.split(os.EOL);
												const bssidLine = bssidLines[0].split(":");
												bssidLine.shift();
												const bssid = bssidLine.join(":").trim().toLowerCase();
												const channel = bssidLines[3].split(":").pop().trim();
												const quality = bssidLines[1].split(":").pop().trim();
												result.push({
													ssid: ssidLines[0].split(":").pop().trim(),
													bssid,
													mode: "",
													channel: channel ? parseInt(channel, 10) : null,
													frequency: wifiFrequencyFromChannel(channel),
													signalLevel: wifiDBFromQuality(quality),
													quality: quality ? parseInt(quality, 10) : null,
													security: [ssidLines[2].split(":").pop().trim()],
													wpaFlags: [ssidLines[3].split(":").pop().trim()],
													rsnFlags: [],
												});
											});
										}
									});
									if (callback) callback(result);
									resolve(result);
								});
							} else {
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.wifiNetworks = wifiNetworks;
				function getVendor(model) {
					model = model.toLowerCase();
					let result = "";
					if (model.indexOf("intel") >= 0) result = "Intel";
					else if (model.indexOf("realtek") >= 0) result = "Realtek";
					else if (model.indexOf("qualcom") >= 0) result = "Qualcom";
					else if (model.indexOf("broadcom") >= 0) result = "Broadcom";
					else if (model.indexOf("cavium") >= 0) result = "Cavium";
					else if (model.indexOf("cisco") >= 0) result = "Cisco";
					else if (model.indexOf("marvel") >= 0) result = "Marvel";
					else if (model.indexOf("zyxel") >= 0) result = "Zyxel";
					else if (model.indexOf("melanox") >= 0) result = "Melanox";
					else if (model.indexOf("d-link") >= 0) result = "D-Link";
					else if (model.indexOf("tp-link") >= 0) result = "TP-Link";
					else if (model.indexOf("asus") >= 0) result = "Asus";
					else if (model.indexOf("linksys") >= 0) result = "Linksys";
					return result;
				}
				function wifiConnections(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							const result = [];
							if (_linux) {
								const ifaces = ifaceListLinux();
								const networkList = getWifiNetworkListNmi();
								ifaces.forEach((ifaceDetail) => {
									const nmiDetails = nmiDeviceLinux(ifaceDetail.iface);
									const wpaDetails = wpaConnectionLinux(ifaceDetail.iface);
									const ssid = nmiDetails.ssid || wpaDetails.ssid;
									const network = networkList.filter((nw) => nw.ssid === ssid);
									const nmiConnection = nmiConnectionLinux(ssid);
									const channel = network && network.length && network[0].channel ? network[0].channel : wpaDetails.channel ? wpaDetails.channel : null;
									const bssid = network && network.length && network[0].bssid ? network[0].bssid : wpaDetails.bssid ? wpaDetails.bssid : null;
									if (ssid && bssid)
										result.push({
											id: ifaceDetail.id,
											iface: ifaceDetail.iface,
											model: nmiDetails.product,
											ssid,
											bssid: network && network.length && network[0].bssid ? network[0].bssid : wpaDetails.bssid ? wpaDetails.bssid : null,
											channel,
											frequency: channel ? wifiFrequencyFromChannel(channel) : null,
											type: nmiConnection.type ? nmiConnection.type : "802.11",
											security: nmiConnection.security ? nmiConnection.security : wpaDetails.security ? wpaDetails.security : null,
											signalLevel: network && network.length && network[0].signalLevel ? network[0].signalLevel : null,
											txRate: null,
										});
								});
								if (callback) callback(result);
								resolve(result);
							} else if (_darwin) {
								let cmd = "system_profiler SPNetworkDataType";
								exec(cmd, function (error, stdout) {
									const parts1 = stdout.toString().split("\n\n    Wi-Fi:\n\n");
									if (parts1.length > 1) {
										const lines = parts1[1].split("\n\n")[0].split("\n");
										const iface = util.getValue(lines, "BSD Device Name", ":", true);
										const model = util.getValue(lines, "hardware", ":", true);
										cmd = "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I";
										exec(cmd, function (error, stdout) {
											const lines2 = stdout.toString().split("\n");
											if (lines.length > 10) {
												const ssid = util.getValue(lines2, "ssid", ":", true);
												const bssid = util.getValue(lines2, "bssid", ":", true);
												const security = util.getValue(lines2, "link auth", ":", true);
												const txRate = util.getValue(lines2, "lastTxRate", ":", true);
												const channel = util.getValue(lines2, "channel", ":", true).split(",")[0];
												const type = "802.11";
												const rssi = util.toInt(util.getValue(lines2, "agrCtlRSSI", ":", true));
												const noise = util.toInt(util.getValue(lines2, "agrCtlNoise", ":", true));
												const signalLevel = rssi - noise;
												if (ssid || bssid)
													result.push({
														id: "Wi-Fi",
														iface,
														model,
														ssid,
														bssid,
														channel: util.toInt(channel),
														frequency: channel ? wifiFrequencyFromChannel(channel) : null,
														type,
														security,
														signalLevel,
														txRate,
													});
											}
											if (callback) callback(result);
											resolve(result);
										});
									}
								});
							} else if (_windows) {
								let cmd = "netsh wlan show interfaces";
								util.powerShell(cmd).then(function (stdout) {
									const allLines = stdout.toString().split("\r\n");
									for (let i = 0; i < allLines.length; i++) allLines[i] = allLines[i].trim();
									const parts = allLines.join("\r\n").split(":\r\n\r\n");
									parts.shift();
									parts.forEach((part) => {
										const lines = part.split("\r\n");
										if (lines.length >= 5) {
											const iface = lines[0].indexOf(":") >= 0 ? lines[0].split(":")[1].trim() : "";
											const model = lines[1].indexOf(":") >= 0 ? lines[1].split(":")[1].trim() : "";
											const id = lines[2].indexOf(":") >= 0 ? lines[2].split(":")[1].trim() : "";
											const ssid = util.getValue(lines, "SSID", ":", true);
											const bssid = util.getValue(lines, "BSSID", ":", true);
											const signalLevel = util.getValue(lines, "Signal", ":", true);
											const type =
												util.getValue(lines, "Radio type", ":", true) ||
												util.getValue(lines, "Type de radio", ":", true) ||
												util.getValue(lines, "Funktyp", ":", true) ||
												null;
											const security =
												util.getValue(lines, "authentication", ":", true) ||
												util.getValue(lines, "Authentification", ":", true) ||
												util.getValue(lines, "Authentifizierung", ":", true) ||
												null;
											const channel =
												util.getValue(lines, "Channel", ":", true) ||
												util.getValue(lines, "Canal", ":", true) ||
												util.getValue(lines, "Kanal", ":", true) ||
												null;
											const txRate =
												util.getValue(lines, "Transmit rate (mbps)", ":", true) ||
												util.getValue(lines, "Transmission (mbit/s)", ":", true) ||
												util.getValue(lines, "Empfangsrate (MBit/s)", ":", true) ||
												null;
											if (model && id && ssid && bssid)
												result.push({
													id,
													iface,
													model,
													ssid,
													bssid,
													channel: util.toInt(channel),
													frequency: channel ? wifiFrequencyFromChannel(channel) : null,
													type,
													security,
													signalLevel,
													txRate: util.toInt(txRate) || null,
												});
										}
									});
									if (callback) callback(result);
									resolve(result);
								});
							} else {
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.wifiConnections = wifiConnections;
				function wifiInterfaces(callback) {
					return new Promise((resolve) => {
						process.nextTick(() => {
							const result = [];
							if (_linux) {
								const ifaces = ifaceListLinux();
								ifaces.forEach((ifaceDetail) => {
									const nmiDetails = nmiDeviceLinux(ifaceDetail.iface);
									result.push({
										id: ifaceDetail.id,
										iface: ifaceDetail.iface,
										model: nmiDetails.product ? nmiDetails.product : null,
										vendor: nmiDetails.vendor ? nmiDetails.vendor : null,
										mac: ifaceDetail.mac,
									});
								});
								if (callback) callback(result);
								resolve(result);
							} else if (_darwin) {
								let cmd = "system_profiler SPNetworkDataType";
								exec(cmd, function (error, stdout) {
									const parts1 = stdout.toString().split("\n\n    Wi-Fi:\n\n");
									if (parts1.length > 1) {
										const lines = parts1[1].split("\n\n")[0].split("\n");
										const iface = util.getValue(lines, "BSD Device Name", ":", true);
										const mac = util.getValue(lines, "MAC Address", ":", true);
										const model = util.getValue(lines, "hardware", ":", true);
										result.push({
											id: "Wi-Fi",
											iface,
											model,
											vendor: "",
											mac,
										});
									}
									if (callback) callback(result);
									resolve(result);
								});
							} else if (_windows) {
								let cmd = "netsh wlan show interfaces";
								util.powerShell(cmd).then(function (stdout) {
									const allLines = stdout.toString().split("\r\n");
									for (let i = 0; i < allLines.length; i++) allLines[i] = allLines[i].trim();
									const parts = allLines.join("\r\n").split(":\r\n\r\n");
									parts.shift();
									parts.forEach((part) => {
										const lines = part.split("\r\n");
										if (lines.length >= 5) {
											const iface = lines[0].indexOf(":") >= 0 ? lines[0].split(":")[1].trim() : "";
											const model = lines[1].indexOf(":") >= 0 ? lines[1].split(":")[1].trim() : "";
											const id = lines[2].indexOf(":") >= 0 ? lines[2].split(":")[1].trim() : "";
											const macParts = lines[3].indexOf(":") >= 0 ? lines[3].split(":") : [];
											macParts.shift();
											const mac = macParts.join(":").trim();
											const vendor = getVendor(model);
											if (iface && model && id && mac)
												result.push({
													id,
													iface,
													model,
													vendor,
													mac,
												});
										}
									});
									if (callback) callback(result);
									resolve(result);
								});
							} else {
								if (callback) callback(result);
								resolve(result);
							}
						});
					});
				}
				exports.wifiInterfaces = wifiInterfaces;
			},
			282: (module) => {
				module.exports = require("child_process");
			},
			702: (module) => {
				module.exports = require("events");
			},
			48: (module) => {
				module.exports = require("fs");
			},
			615: (module) => {
				module.exports = require("http");
			},
			216: (module) => {
				module.exports = require("net");
			},
			315: (module) => {
				module.exports = require("path");
			},
			808: (module) => {
				module.exports = require("net");
			},
			37: (module) => {
				module.exports = require("os");
			},
			837: (module) => {
				module.exports = require("util");
			},
			905: (module) => {
				if ("undefined" === typeof require("https")) {
					var e = new Error("Cannot find module 'require(\"https\")'");
					e.code = "MODULE_NOT_FOUND";
					throw e;
				}
				module.exports = require("https");
			},
			631: (module) => {
				module.exports = {
					i8: "5.11.15",
				};
			},
		};
		var __webpack_module_cache__ = {};
		function __webpack_require__(moduleId) {
			var cachedModule = __webpack_module_cache__[moduleId];
			if (void 0 !== cachedModule) return cachedModule.exports;
			var module = (__webpack_module_cache__[moduleId] = {
				exports: {},
			});
			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			return module.exports;
		}
		(() => {
			__webpack_require__.n = (module) => {
				var getter = module && module.__esModule ? () => module["default"] : () => module;
				__webpack_require__.d(getter, {
					a: getter,
				});
				return getter;
			};
		})();
		(() => {
			__webpack_require__.d = (exports, definition) => {
				for (var key in definition)
					if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key))
						Object.defineProperty(exports, key, {
							enumerable: true,
							get: definition[key],
						});
			};
		})();
		(() => {
			__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		})();
		(() => {
			__webpack_require__.r = (exports) => {
				if ("undefined" !== typeof Symbol && Symbol.toStringTag)
					Object.defineProperty(exports, Symbol.toStringTag, {
						value: "Module",
					});
				Object.defineProperty(exports, "__esModule", {
					value: true,
				});
			};
		})();
		var __webpack_exports__ = {};
		(() => {
			__webpack_require__.r(__webpack_exports__);
			__webpack_require__.d(__webpack_exports__, {
				default: () => Plugin,
			});
			var systeminformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(303);
			var systeminformation__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(systeminformation__WEBPACK_IMPORTED_MODULE_0__);
			var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
			var os__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
			const timestamp = new Date(),
				color = {
					base: ["color: #fff", "background-color: #444", "padding: 2px 4px", "border-radius: 2px"],
					warn: ["color: #eee", "background-color: red"],
					succ: ["background-color: green"],
				},
				log = (text, extra = []) => {
					let style = color.base.join(";") + ";";
					if (extra) style += extra.join(";");
					console.log(`%c${text}`, style);
				};
			let Interval, connecting;
			const changelog = {
				title: "RPC Pc Status Updated",
				version: config.info.version,
				authors: [
					{
						name: "Faelayis",
						discord_id: "328731868096888833",
						github_username: "Faelayis",
					},
				],
				changelog: [
					{
						title: `Added`,
						type: "added",
						items: ["1 and 3 min optional for presence update interval custom", "Features Hide presence when listening spotify songs"],
					},
					{
						title: `Improved`,
						type: "improved",
						items: ["Hide update channel devlop", "Refactor code"],
					},
				],
			};
			class Plugin {
				start() {
					log("[RPC Pc Status] Start!", color.succ);
					if ("undefined" === typeof ZLibrary)
						return BdApi.showToast('RPC Pc Status: Please install "ZeresPluginLibrary" and restart this plugin.', {
							type: "error",
						});
					this.settings = BdApi.loadData("RPCPcStatus", "settings") || {};
					if (1 === this.settings.timestamps) this.startTime = Date.now() / 1e3 - os__WEBPACK_IMPORTED_MODULE_1__.uptime;
					else if (2 === this.settings.timestamps) this.startTime = Date.now() / 100;
					this.connected();
					this.checkForUpdate();
				}
				async connected() {
					if (!this.client) {
						this.client = new (__webpack_require__(487).z)(this.settings.clientID || "879327042498342962");
						this.client.once("connected", () => {
							log("[RPC Pc Status] Connected!", color.succ);
							connecting = false;
							this.startPresence();
							BdApi.showToast("RPC Pc Status: Connected");
						});
						this.client.once("disconnected", () => {
							this.stopPresence();
							if (!connecting && this.settings.clientID) return (connecting = true);
							log("[RPC Pc Status] Disconnected!", color.warn);
							if (connecting)
								BdApi.showToast("Client ID authentication failed make sure your client ID is correct.", {
									type: "error",
								});
							else BdApi.showToast("RPC Pc Status: Disconnected");
						});
					}
				}
				async checkForUpdate() {
					if (
						!this.settings.lastVersionSeen ||
						1 ===
							(function (a, b) {
								a = a
									.toLowerCase()
									.split(/[.-]/)
									.map((x) => (/\d/.test(x[0]) ? x.padStart(10, "0") : x.padEnd(10, "0")))
									.join("");
								b = b
									.toLowerCase()
									.split(/[.-]/)
									.map((x) => (/\d/.test(x[0]) ? x.padStart(10, "0") : x.padEnd(10, "0")))
									.join("");
								if (a === b) return 0;
								return a < b ? -1 : 1;
							})(changelog.version, this.settings.lastChangelogVersionSeen || this.settings.lastVersionSeen)
					) {
						ZLibrary.Modals.showChangelogModal(changelog.title, changelog.version, changelog.changelog);
						this.settings.lastVersionSeen = changelog.version;
						delete this.settings.lastChangelogVersionSeen;
						this.updateSettings();
					}
					ZLibrary?.PluginUpdater?.checkForUpdate?.(
						"RPCPcStatus",
						changelog.version,
						"https://raw.githubusercontent.com/Faelayis/RPC-Pc-Status-BetterDiscord/main/RPCPcStatus.plugin.js",
					);
				}
				async startPresence() {
					systeminformation__WEBPACK_IMPORTED_MODULE_0__.cpu().then((data) => (data.manufacturer ? (this.cpu = `${data.manufacturer} ${data.brand}`) : null));
					await systeminformation__WEBPACK_IMPORTED_MODULE_0__
						.osInfo()
						.then(
							(data) => (
								data.distro ? (this.osdistro = `${data.distro}`) : null,
								data.release ? (this.osrelease = `${data.release}`) : null,
								data.logofile ? (this.oslogo = `${data.logofile}`) : null
							),
						);
					if ("win32" === process.platform) {
						log("[RPC Pc Status] Windows platform");
						this.SImageText = `${this.osdistro} ${this.osrelease}`;
						switch (true) {
							case /(Windows\s10)/g.test(this.osdistro):
								this.oslogo = "windows10";
								break;
							case /(Windows\s11)/g.test(this.osdistro):
								this.oslogo = "windows11";
								break;
							default:
								this.oslogo = null;
								break;
						}
					} else if ("linux" === process.platform) {
						log("[RPC Pc Status] Linux Platform");
						this.SImageText = `${this.osdistro} ${this.osrelease} ${os__WEBPACK_IMPORTED_MODULE_1__.release()}`;
						switch (true) {
							case /(Ubuntu)/g.test(this.osdistro):
								this.oslogo = "linux_ubuntu";
								break;
							case /(Kali)/g.test(this.osdistro):
								this.oslogo = "linux_kali";
								break;
							default:
								this.oslogo = null;
								break;
						}
					} else if ("darwin" === process.platform) {
						log("[RPC Pc Status] Darwin platform");
						this.oslogo = "macOS";
					}
					if (Interval) await clearInterval(Interval);
					Interval = setInterval(async () => {
						if (!this.client) return clearInterval(Interval);
						if (this.settings.automatically?.hide?.spotify || (false && 0) ? true : false) return;
						systeminformation__WEBPACK_IMPORTED_MODULE_0__.currentLoad().then((data) => (this.cpuload = data.currentLoad.toFixed(0)));
						this.client.setActivity({
							details: `CPU ${this.cpuload || "0"}%`,
							state: `RAM ${(function (freemem, totalmem, decimals = 0) {
								if (0 === freemem) return "0 Bytes";
								const k = 1024;
								const i = Math.floor(Math.log(freemem) / Math.log(k));
								const ram = `${parseFloat((totalmem / k ** i).toFixed(decimals < 0 ? 0 : decimals))} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]}`;
								return `${parseFloat((totalmem / k ** i - freemem / k ** i).toFixed(2))}/${ram}`;
							})(os__WEBPACK_IMPORTED_MODULE_1__.freemem(), os__WEBPACK_IMPORTED_MODULE_1__.totalmem())}`,
							assets: {
								large_image: this.settings.hideicon ? void 0 : this.settings.largeImageKey || this.settings.LargeImageKeyColor || "icon_white",
								large_text: this.settings.largeImageText || this.cpu || void 0,
								small_image: this.settings.hideicon ? void 0 : this.settings.smallImageKey || this.oslogo || void 0,
								small_text: this.settings.largeImageText || this.SImageText || void 0,
							},
							buttons: this.buttons && (this.buttons[0] || this.buttons[1]) ? this.buttons : void 0,
							timestamps: {
								start: this.startTime,
							},
						});
					}, this.settings.presenceUpdateInterval ?? 1e3);
				}
				async stopPresence(toast) {
					clearInterval(Interval);
					try {
						this.client.disconnect();
						delete this.client;
					} catch (error) {
						if (!toast) return;
						BdApi.showToast("RPC Pc Status stopped error", {
							type: "error",
						});
						log(`[RPC Pc Status] ${error}`, color.warn);
					}
				}
				async stop() {
					await this.stopPresence();
				}
				async updateSettings() {
					if (1 == this.settings.timestamps) this.startTime = Date.now() / 1e3 - os__WEBPACK_IMPORTED_MODULE_1__.uptime;
					else if (2 == this.settings.timestamps) this.startTime = timestamp;
					else delete this.startTime;
					this.buttons = [];
					if (this.settings.button1Label && this.settings.button1URL)
						this.buttons.push({
							label: this.settings.button1Label,
							url: this.settings.button1URL,
						});
					if (this.settings.button2Label && this.settings.button2URL)
						this.buttons.push({
							label: this.settings.button2Label,
							url: this.settings.button2URL,
						});
					BdApi.saveData("RPCPcStatus", "settings", this.settings);
				}
				getSettingsPanel() {
					const panel = document.createElement("form");
					panel.classList.add("form");
					panel.style.setProperty("width", "100%");
					this.generateSettings(panel);
					return panel;
				}
				generateSettings(panel) {
					new ZLibrary.Settings.SettingGroup("General", {
						collapsible: true,
						shown: true,
						callback: () => {
							this.updateSettings();
						},
					})
						.appendTo(panel)
						.append(
							new ZLibrary.Settings.Dropdown(
								"Color",
								null,
								this.settings.LargeImageKeyColor ?? "icon_white",
								[
									{
										label: "White",
										value: "icon_white",
									},
									{
										label: "Dark",
										value: "icon_dark",
									},
									{
										label: "Red",
										value: "icon_red",
									},
									{
										label: "Yellow",
										value: "icon_yellow",
									},
									{
										label: "Lime",
										value: "icon_lime",
									},
									{
										label: "Aqua",
										value: "icon_aqua",
									},
									{
										label: "Blue",
										value: "icon_blue",
									},
									{
										label: "Orange",
										value: "icon_orange",
									},
								],
								(val) => {
									this.settings.LargeImageKeyColor = val;
								},
							),
							new ZLibrary.Settings.Dropdown(
								"Uptime Timestamp",
								"Weather you want to displays the amount of time your Rich Presence / System was up.",
								this.settings.timestamps ?? 0,
								[
									{
										label: "Off",
										value: 0,
									},
									{
										label: "Show System uptime",
										value: 1,
									},
									{
										label: "Show RPC uptime",
										value: 2,
									},
								],
								(val) => {
									this.settings.timestamps = val;
								},
							),
							new ZLibrary.Settings.Dropdown(
								"Presence update interval",
								null,
								this.settings.presenceUpdateInterval ?? 1e3,
								[
									{
										label: "1 Second",
										value: 1e3,
									},
									{
										label: "3 Second",
										value: 3e3,
									},
									{
										label: "10 Second",
										value: 1e4,
									},
									{
										label: "30 Second",
										value: 3e4,
									},
									{
										label: "1 min",
										value: 6e4,
									},
									{
										label: "3 min",
										value: 18e4,
									},
								],
								(val) => {
									this.settings.presenceUpdateInterval = val;
									clearInterval(Interval);
									setInterval(Interval, val);
									this.startPresence();
								},
							),
							new ZLibrary.Settings.Switch(
								"Hide presence when listening spotify songs",
								"hide presence pc status",
								this.settings.automatically?.hide?.spotify || false,
								(val) => {
									this.settings.automatically = {
										hide: {
											spotify: val,
										},
									};
								},
							),
							new ZLibrary.Settings.Switch("Hide Icon", "presence show only text", this.settings.hideicon || false, (val) => {
								this.settings.hideicon = val;
							}),
						);
					new ZLibrary.Settings.SettingGroup("Button", {
						collapsible: true,
						shown: false,
						callback: () => {
							this.updateSettings();
						},
					})
						.appendTo(panel)
						.append(
							new window.ZeresPluginLibrary.Settings.Textbox("Button 1 Label", "Label for button.", this.settings.button1Label || "", (val) => {
								this.settings.button1Label = val;
							}),
							new ZLibrary.Settings.Textbox("Button 1 URL", "URL for button.", this.settings.button1URL || "", (val) => {
								this.settings.button1URL = val;
							}),
							new ZLibrary.Settings.Textbox("Button 2 Label", "Label for button.", this.settings.button2Label || "", (val) => {
								this.settings.button2Label = val;
							}),
							new ZLibrary.Settings.Textbox("Button 2 URL", "URL for button.", this.settings.button2URL || "", (val) => {
								this.settings.button2URL = val;
							}),
						);
					new ZLibrary.Settings.SettingGroup("Rich Presence (advanced)", {
						collapsible: true,
						shown: false,
						callback: () => {
							this.updateSettings();
						},
					})
						.appendTo(panel)
						.append(
							new ZLibrary.Settings.Textbox("Client ID", "The client ID of your Discord Rich Presence application.", this.settings.clientID || "", (val) => {
								this.settings.clientID = val;
								this.stopPresence();
								this.connected();
							}),
							new ZLibrary.Settings.Textbox(
								"Large Image Key",
								"The name of the asset or url (.png or .jpg) for your large image.",
								this.settings.largeImageKey || "",
								(val) => {
									this.settings.largeImageKey = val;
								},
							),
							new ZLibrary.Settings.Textbox(
								"Large Image Text",
								"The text that appears when your large image is hovered over.",
								this.settings.largeImageText || "",
								(val) => {
									this.settings.largeImageText = val;
								},
							),
							new ZLibrary.Settings.Textbox(
								"Small Image Key",
								"The name of the asset or url (.png or .jpg) for your small image.",
								this.settings.smallImageKey || "",
								(val) => {
									this.settings.smallImageKey = val;
								},
							),
							new ZLibrary.Settings.Textbox(
								"Small Image Text",
								"The text that appears when your small image is hovered over.",
								this.settings.smallImageText || "",
								(val) => {
									this.settings.smallImageText = val;
								},
							),
						);
					new ZLibrary.Settings.SettingGroup("Other", {
						collapsible: true,
						shown: false,
						callback: () => {
							this.updateSettings();
						},
					})
						.appendTo(panel)
						.append(
							new ZLibrary.Settings.RadioGroup(
								"Update Channel",
								null,
								this.settings.updatechannel ?? 0,
								[
									{
										name: "Stable",
										value: 0,
										desc: "",
										color: "#43b581",
									},
								],
								(val) => {
									this.checkForUpdate(val);
								},
							),
						);
				}
			}
		})();
		module.exports.LibraryPluginHack = __webpack_exports__;
	})();
	const PluginExports = module.exports.LibraryPluginHack;
	return PluginExports?.__esModule ? PluginExports.default : PluginExports;
}
module.exports = window.hasOwnProperty("ZeresPluginLibrary")
	? buildPlugin(window.ZeresPluginLibrary.buildPlugin(config))
	: class {
			getName() {
				return config.info.name;
			}
			getAuthor() {
				return config.info.authors.map((a) => a.name).join(", ");
			}
			getDescription() {
				return `${config.info.description}. __**ZeresPluginLibrary was not found! This plugin will not work!**__`;
			}
			getVersion() {
				return config.info.version;
			}
			load() {
				BdApi.showConfirmationModal("Library plugin is needed", [`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
					confirmText: "Download",
					cancelText: "Cancel",
					onConfirm: () => {
						require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
							if (error)
								return require("electron").shell.openExternal(
									"https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js",
								);
							await new Promise((r) => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
						});
					},
				});
			}
			start() {}
			stop() {}
	  };
/*@end@*/
