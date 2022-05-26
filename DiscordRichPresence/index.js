"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presence = void 0;

class Presence extends require("./SocketManager").SocketManager {
	constructor() {
		super(...arguments);
		this.currentPresence = undefined;
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
			if (presence && this.status != "connected") await this.connect();
			if (presence && this.status != "connected") throw new Error("Status did not become connected.");
			if (this.status == "connected") {
				const payload = { pid: process.pid };
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
			}, 3000);
		}
		setTimeout(
			(() => {
				this.cooldown = false;
				if (this.queuedPresence) {
					this.queuedPresence = false;
					this.setActivity(this.currentPresence);
				}
			}).bind(this),
			1000,
		);
	}
}
exports.Presence = Presence;
