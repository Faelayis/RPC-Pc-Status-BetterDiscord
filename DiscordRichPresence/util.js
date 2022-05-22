"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = void 0;
function debug(...args) {
	if (!process.env["EZP-DEBUG"]) return;
	console.debug("[EZP]", ...args);
}
exports.debug = debug;
