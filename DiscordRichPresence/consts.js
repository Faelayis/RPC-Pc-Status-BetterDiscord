"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPCOpcode = void 0;
var IPCOpcode;
(function (IPCOpcode) {
	IPCOpcode[(IPCOpcode["HANDSHAKE"] = 0)] = "HANDSHAKE";
	IPCOpcode[(IPCOpcode["FRAME"] = 1)] = "FRAME";
	IPCOpcode[(IPCOpcode["CLOSE"] = 2)] = "CLOSE";
	IPCOpcode[(IPCOpcode["PING"] = 3)] = "PING";
	IPCOpcode[(IPCOpcode["PONG"] = 4)] = "PONG";
	// eslint-disable-next-line no-unused-vars
})((IPCOpcode = exports.IPCOpcode || (exports.IPCOpcode = {})));
