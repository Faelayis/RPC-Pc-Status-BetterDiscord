/* global BdApi */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = void 0;
function debug(...args) {
	if (BdApi ?? false) {
		// eslint-disable-next-line no-one-time-vars/no-one-time-vars
		const developer = BdApi.settings[0].settings.find((args) => args?.id === "developer").settings;
		// if (developer.find((args) => args?.id === "devTools").value ?? false) {
		// 	console.log(`%c[RPC Pc Status] %c${args[0]}`, "color: #FE926B;", "color: #8ebf42; background: # 666; font - size: 20 px;");
		// }
		if (developer.find((args) => args?.id === "debugLogs").value ?? false) {
			console.debug("[RPC Pc Status DEBUG]", ...args);
		}
	}
}
exports.debug = debug;
