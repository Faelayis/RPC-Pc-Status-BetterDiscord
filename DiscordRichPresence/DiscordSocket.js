"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
/* eslint-disable no-invalid-this */
const net_1 = require("net");
const util_1 = require("./util");
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
			util_1.debug("Got header", { opcode, remaining });
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
