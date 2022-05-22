import * as si from "systeminformation";
import * as os from 'os';

const timestamp = new Date(),
	color = {
		base: [
			"color: #fff",
			"background-color: #444",
			"padding: 2px 4px",
			"border-radius: 2px"
		],
		warn: [
			"color: #eee",
			"background-color: red"
		],
		succ: [
			"background-color: green"
		]
	},
	log = (text, extra = []) => {
		let style = color.base.join(';') + ';';
		if (extra) style += extra.join(';');
		console.log(`%c${text}`, style);
	}
let Interval, connecting = undefined;

//added, improved, fixed, progress
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
			items: [
				"Features hide icon",
				"Features update channel stable and devlop",
				"Features presence update interval custom (1, 3, 10, 30) sec",
				"Support all os"
			],
		},
		{
			title: `Improved`,
			type: "improved",
			items: ["Refactor rewrite code (2.0.0)"],
		},
	],
};
export default class Plugin {
	start() {
		log("[RPC Pc Status] Start!", color.succ);
		if (typeof window.ZeresPluginLibrary === "undefined") {
			return BdApi.showToast('RPC Pc Status: Please install "ZeresPluginLibrary" and restart this plugin.', { type: "error" });
		}
		this.settings = BdApi.loadData("RPCPcStatus", "settings") || {};
		if (this.settings.timestamps == 1) {
			this.startTime = Date.now() / 1000 - os.uptime;
		} else if (this.settings.timestamps == 2) {
			this.startTime = Date.now() / 100;
		}
		this.connected();
		this.checkForUpdate();
	}
	async connected() {
		if (!this.client) {
			this.client = new (require("../../DiscordRichPresence").Presence)(this.settings.clientID || "879327042498342962");
			this.client.once("connected", () => {
				// this.client.environment.user.username
				log("[RPC Pc Status] Connected!", color.succ);
				connecting = false;
				this.startPresence();
				BdApi.showToast('RPC Pc Status: Connected');
			});
			this.client.once("disconnected", () => {
				this.stopPresence();
				if (!connecting && this.settings.clientID) return connecting = true;
				log("[RPC Pc Status] Disconnected!", color.warn);
				if (connecting) {
					BdApi.showToast("Client ID authentication failed make sure your client ID is correct.", { type: "error" })
				} else {
					BdApi.showToast('RPC Pc Status: Disconnected');
				}
			});
		}
	}
	async checkForUpdate() {
		if (!this.settings.lastVersionSeen || versionCompare(changelog.version, this.settings.lastVersionSeen) === 1) {
			window.ZeresPluginLibrary.Modals.showChangelogModal(changelog.title, changelog.version, changelog.changelog);
			this.settings.lastVersionSeen = changelog.version;
			this.updateSettings();
		}
		window.ZeresPluginLibrary?.PluginUpdater?.checkForUpdate?.(
			"RPCPcStatus",
			changelog.version,
			"https://raw.githubusercontent.com/Faelayis/RPC-Pc-Status-BetterDiscord/main/RPCPcStatus.plugin.js",
		);

		function versionCompare(a, b) {
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
		}
	}

	async startPresence() {
		si.cpu().then((data) => (data.manufacturer ? (this.cpu = `${data.manufacturer} ${data.brand}`) : null));
		await si
			.osInfo()
			.then(
				(data) => (
					data.distro ? (this.osdistro = `${data.distro}`) : null,
					data.release ? (this.osrelease = `${data.release}`) : null,
					data.logofile ? (this.oslogo = `${data.logofile}`) : null
				),
			);
		if (process.platform === "win32") {
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
		} else if (process.platform === "linux") {
			log("[RPC Pc Status] Linux Platform");
			this.SImageText = `${this.osdistro} ${this.osrelease} ${os.release()}`;
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
		} else if (process.platform === "darwin") {
			log("[RPC Pc Status] Darwin platform");
			this.oslogo = "macOS";
		}
		if (Interval) await clearInterval(Interval);
		Interval = setInterval(async () => {
			if (!this.client) return clearInterval(Interval);
			si.currentLoad().then((data) => (this.cpuload = data.currentLoad.toFixed(0)));
			function formatBytes(freemem, totalmem, decimals = 0) {
				if (freemem === 0) {
					return "0 Bytes";
				}
				const k = 1024;
				const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
				const i = Math.floor(Math.log(freemem) / Math.log(k));
				const ramusag = `${parseFloat((totalmem / k ** i - freemem / k ** i).toFixed(2 < 0 ? 0 : 2))} `;
				const ram = `${parseFloat((totalmem / k ** i).toFixed(decimals < 0 ? 0 : decimals))} ${sizes[i]}`;
				return `${ramusag}/${ram}`;
			}
			this.client.setActivity({
				details: `CPU ${this.cpuload || "0"}%`,
				state: `RAM ${formatBytes(os.freemem(), os.totalmem())}`,
				assets: {
					large_image: this.settings.hideicon ? undefined : this.settings.largeImageKey || this.settings.LargeImageKeyColor || "icon_white",
					large_text: this.settings.largeImageText || this.cpu || undefined,
					small_image: this.settings.hideicon ? undefined : this.settings.smallImageKey || this.oslogo || undefined,
					small_text: this.settings.largeImageText || this.SImageText || undefined,
				},
				buttons: this.buttons && (this.buttons[0] || this.buttons[1]) ? this.buttons : undefined,
				timestamps: { start: this.startTime },
			});
		}, this.settings.presenceUpdateInterval ?? 1000);
	}
	async stopPresence(toast) {
		clearInterval(Interval);
		try {
			this.client.disconnect();
			delete this.client;
		} catch (error) {
			if (!toast) return;
			BdApi.showToast("RPC Pc Status stopped error", { type: "error" })
			log(`[RPC Pc Status] ${error}`, color.warn);
		}
	}
	async stop() {
		await this.stopPresence();
	}
	async updateSettings() {
		if (this.settings.timestamps == 1) {
			this.startTime = Date.now() / 1000 - os.uptime;
		} else if (this.settings.timestamps == 2) {
			this.startTime = timestamp;
		} else {
			delete this.startTime;
		}
		this.buttons = [];
		if (this.settings.button1Label && this.settings.button1URL) {
			this.buttons.push({
				label: this.settings.button1Label,
				url: this.settings.button1URL,
			});
		}
		if (this.settings.button2Label && this.settings.button2URL) {
			this.buttons.push({
				label: this.settings.button2Label,
				url: this.settings.button2URL,
			});
		}
		// if (!this.settings.clientID && !(this.settings.clientID !== this.client.clientId)) {
		// 	BdApi.showToast("RPC Pc Status use default Client ID")
		// 	await this.stopPresence();
		// 	this.connected();
		// }
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
		new window.ZeresPluginLibrary.Settings.SettingGroup("General", {
			collapsible: true,
			shown: true,
			callback: () => {
				this.updateSettings();
			},
		}).appendTo(panel)
			.append(
				new window.ZeresPluginLibrary.Settings.Dropdown(
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
				new window.ZeresPluginLibrary.Settings.Dropdown(
					"Uptime Timestamp",
					"Weather you want to displays the amount of time your Rich Presence / System was up.",
					this.settings.timestamps ?? "none",
					[
						{
							label: "Off",
							value: "0",
						},
						{
							label: "Show System uptime",
							value: "1",
						},
						{
							label: "Show RPC uptime",
							value: "2",
						},
					],
					(val) => {
						this.settings.timestamps = val;
					},
				),
				new window.ZeresPluginLibrary.Settings.Dropdown(
					"Presence update interval",
					null,
					this.settings.presenceUpdateInterval ?? 1000,
					[
						{
							label: "1 Second",
							value: 1000,
						},
						{
							label: "3 Second",
							value: 3000,
						},
						{
							label: "10 Second",
							value: 10000,
						},
						{
							label: "30 Second",
							value: 30000,
						},
					],
					(val) => {
						this.settings.presenceUpdateInterval = val;
						clearInterval(Interval);
						setInterval(Interval, val);
						this.startPresence();
					},
				),
				new window.ZeresPluginLibrary.Settings.Switch("Hide Icon", "Hide all icon. show only text", this.settings.hideicon || false, (val) => {
					this.settings.hideicon = val;
				}),
			);
		new window.ZeresPluginLibrary.Settings.SettingGroup("Button", {
			collapsible: true,
			shown: false,
			callback: () => {
				this.updateSettings();
			},
		}).appendTo(panel)
			.append(
				new window.ZeresPluginLibrary.Settings.Textbox("Button 1 Label", "Label for button.", this.settings.button1Label || "", (val) => {
					this.settings.button1Label = val;
				}),
				new window.ZeresPluginLibrary.Settings.Textbox("Button 1 URL", "URL for button.", this.settings.button1URL || "", (val) => {
					this.settings.button1URL = val;
				}),
				new window.ZeresPluginLibrary.Settings.Textbox("Button 2 Label", "Label for button.", this.settings.button2Label || "", (val) => {
					this.settings.button2Label = val;
				}),
				new window.ZeresPluginLibrary.Settings.Textbox("Button 2 URL", "URL for button.", this.settings.button2URL || "", (val) => {
					this.settings.button2URL = val;
				}),
			);
		new window.ZeresPluginLibrary.Settings.SettingGroup("Rich Presence (advanced)", {
			collapsible: true,
			shown: false,
			callback: () => {
				this.updateSettings();
			},
		}).appendTo(panel)
			.append(
				new window.ZeresPluginLibrary.Settings.Textbox("Client ID", "The client ID of your Discord Rich Presence application.", this.settings.clientID || "", (val) => {
					this.settings.clientID = val;
					this.stopPresence();
					this.connected();
				}),
				new window.ZeresPluginLibrary.Settings.Textbox(
					"Large Image Key",
					"The name of the asset or url (.png or .jpg) for your large image.",
					this.settings.largeImageKey || "",
					(val) => {
						this.settings.largeImageKey = val;
					},
				),
				new window.ZeresPluginLibrary.Settings.Textbox(
					"Large Image Text",
					"The text that appears when your large image is hovered over.",
					this.settings.largeImageText || "",
					(val) => {
						this.settings.largeImageText = val;
					},
				),
				new window.ZeresPluginLibrary.Settings.Textbox(
					"Small Image Key",
					"The name of the asset or url (.png or .jpg) for your small image.",
					this.settings.smallImageKey || "",
					(val) => {
						this.settings.smallImageKey = val;
					},
				),
				new window.ZeresPluginLibrary.Settings.Textbox(
					"Small Image Text",
					"The text that appears when your small image is hovered over.",
					this.settings.smallImageText || "",
					(val) => {
						this.settings.smallImageText = val;
					},
				),
			);
		new window.ZeresPluginLibrary.Settings.SettingGroup("Other", {
			collapsible: true,
			shown: false,
			callback: () => {
				this.updateSettings();
			},
		}).appendTo(panel)
			.append(
				new window.ZeresPluginLibrary.Settings.RadioGroup(
					"Update Channel",
					null,
					this.settings.updatechannel ?? 0,
					[
						{
							name: "Stable",
							value: 0,
							desc: "",
							color: "#43b581"
						},
						{
							name: "Devlop",
							value: 1,
							desc: "Come Soon",
							color: "#d83c3e",
							disabled: true
						},
					],
					(val) => {
						this.checkForUpdate(val)
					},
				),
			);
	}
}