"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEventEmitter = void 0;
const events_1 = __importDefault(require("events"));
const util_1 = require("./util");
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
