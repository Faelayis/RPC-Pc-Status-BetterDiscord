import { time, osInfo, cpu, currentLoad } from "systeminformation";
import { release, freemem, totalmem } from "os";

const color = {
		base: ["color: #FE926B;,", "color: #FFFFFF;"],
		succ: ["color: #FE926B;,", "color: #00FF00;"],
		warn: ["color: #FE926B;,", "color: #FFFF00;"],
		error: ["color: #FE926B;,", "color: #FF0000;"],
	},
	log = (text, extra) => {
		console.log(`%c[RPC Pc Status] %c${text}`, ...(extra ?? color.base));
	};
let Interval,
	connecting = undefined;

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
			title: "Update",
			type: "added",
			items: ["Text ShowToast"],
		},
		{
			title: "Fixed",
			type: "fixed",
			items: ["Type cannot read property"],
		},
		{
			title: "Improved",
			type: "improved",
			items: ["Stop Plugin", "Shorten code", "Algorithm show premid"],
		},
	],
};
export default class Plugin {
	start() {
		log("Start!", color.succ);
		if (typeof ZLibrary === "undefined") {
			return BdApi.showToast("RPC Pc Status: Please install ZeresPluginLibrary and restart this plugin.", { type: "error" });
		}
		this.checkos();
		this.startTimeStamps = [undefined, Math.round(Date.now() / 1000 - time().uptime), new Date()];
		this.settings = BdApi.loadData("RPCPcStatus", "settings") || {};
		this.generateconfig();
		this.connected();
		this.checkForUpdate();
	}
	generateconfig() {
		if (!this.settings.customstatus_hide) {
			this.settings.customstatus_hide = ["invisible"];
		}
		if (this.settings.show_premid === undefined) {
			this.settings.show_premid = true;
		}
		this.updateSettings();
	}
	async connected() {
		try {
			if (!this.client) {
				this.client = new (require("../DiscordRichPresence").Presence)(this.settings.clientID || "879327042498342962");
				this.client.once("connected", () => {
					// this.client.environment.user.username
					log("Connected!", color.succ);
					connecting = false;
					this.startPresence();
					BdApi.showToast("RPC Pc Status: Connected", { type: "success" });
				});
				this.client.once("disconnected", () => {
					this.stopPresence();
					if (!connecting && this.settings.clientID) return (connecting = true);
					log("Disconnected!", color.warn);
					if (connecting) {
						BdApi.showToast("RPC Pc Status: Client ID Authentication Failed", { type: "warn" });
					} else {
						BdApi.showToast("RPC Pc Status: Disconnected");
					}
				});
			}
		} catch (error) {
			BdApi.showToast(`RPC Pc Status: Error connected ${error.name ?? ""}`, { type: "error" });
		}
	}
	async checkForUpdate(toast) {
		if (!this.settings.lastVersionSeen || changelog.version !== this.settings.lastVersionSeen) {
			ZLibrary.Modals.showChangelogModal(changelog.title, changelog.version, changelog.changelog);
			this.settings.lastVersionSeen = changelog.version;
			this.updateSettings();
		}
		ZLibrary.PluginUpdater.checkForUpdate?.(
			"RPCPcStatus",
			changelog.version,
			`https://raw.githubusercontent.com/Faelayis/RPC-Pc-Status-BetterDiscord/main/${this.settings.updatechannel === 1 ? "pre-release" : ""}/RPCPcStatus.plugin.js`,
			versioner,
			comparator,
		);
		function versioner(file) {
			return (
				file.match(
					new RegExp(
						/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/,
					),
				)[0] || "0.0.0"
			);
		}
		function comparator(current, remote) {
			switch (current !== remote) {
				case true:
					toast && BdApi.showToast(`RPC Pc Status: Update Available ${remote}`);
					return true;
				case false:
					toast && BdApi.showToast(`RPC Pc Status: You are now using ${current} latest version`);
					return false;
				default:
					toast && BdApi.showToast("RPC Pc Status: Update Not Available");
					return false;
			}
		}
	}
	formatRAM(freemem, totalmem, decimals = 0) {
		if (freemem === 0) {
			return "0 Bytes";
		}
		const kilobyte = 1024,
			i = Math.floor(Math.log(freemem) / Math.log(kilobyte)),
			ram = `${parseFloat((totalmem / kilobyte ** i).toFixed(decimals < 0 ? 0 : decimals))} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]}`;
		return `${parseFloat((totalmem / kilobyte ** i - freemem / kilobyte ** i).toFixed(2))}/${ram}`;
	}
	async checkos() {
		cpu().then((data) => (data.manufacturer ? (this.cpu = `${data.manufacturer} ${data.brand}`) : null));
		await osInfo().then(
			(data) => (
				data.distro ? (this.osdistro = `${data.distro}`) : null,
				data.release ? (this.osrelease = `${data.release}`) : null,
				data.logofile ? (this.oslogo = `${data.logofile}`) : null
			),
		);
		if (process.platform === "win32") {
			log("Windows Platform");
			this.SImageText = `${this.osdistro} ${this.osrelease}`;
			switch (true) {
				case /(Windows\s10)/g.test(this.osdistro):
					this.oslogo = "windows10";
					break;
				case /(Windows\s11)/g.test(this.osdistro):
					this.oslogo = "windows11";
					break;
				default:
					this.oslogo = undefined;
					break;
			}
		} else if (process.platform === "linux") {
			log("Linux Platform");
			this.SImageText = `${this.osdistro} ${this.osrelease} ${release()}`;
			switch (true) {
				case /(Ubuntu)/g.test(this.osdistro):
					this.oslogo = "linux_ubuntu";
					break;
				case /(Kali)/g.test(this.osdistro):
					this.oslogo = "linux_kali";
					break;
				default:
					this.oslogo = undefined;
					break;
			}
		} else if (process.platform === "darwin") {
			log("Darwin Platform");
			this.SImageText = `${this.osdistro} ${this.osrelease}`;
			this.oslogo = "macOS";
		}
	}
	async startPresence() {
		if (Interval) await clearInterval(Interval);
		Interval = setInterval(async () => {
			if (!this.client) return clearInterval(Interval);
			if (this.settings.automatically?.hide?.spotify && ZLibrary.DiscordModules.UserActivityStore.getActivity()?.name === "Spotify" ? true : false)
				return this.client.setActivity(null);
			if (this.settings.customstatus_hide?.includes(ZLibrary.DiscordModules.UserSettingsStore.status)) return this.client.setActivity(null);
			if (this.settings.show_premid && BdApi) {
				const has = BdApi.findModuleByProps("getActivities")
					.getActivities()
					.find((data) => data.assets?.large_text?.match(/(PreMiD)/));
				if (has) return this.client.setActivity(null);
			}
			const presence = {
				details: `CPU ${(await currentLoad().then((data) => data.currentLoad.toFixed(0))) || "0"}%`,
				state: `RAM ${this.formatRAM(freemem(), totalmem())}`,
				assets: {
					large_image: this.settings.hideicon ? undefined : this.settings.largeImageKey || this.settings.LargeImageKeyColor || "icon_white",
					large_text: this.settings.largeImageText || this.cpu || undefined,
					small_image: this.settings.hideicon ? undefined : this.settings.smallImageKey || this.oslogo || undefined,
					small_text: this.settings.largeImageText || this.SImageText || undefined,
				},
				buttons: this.buttons && (this.buttons[0] || this.buttons[1]) ? this.buttons : undefined,
				timestamps: { start: this.startTimeStamps[this.settings.timestamps || 0] },
			};
			if ((this.settings.show_game_playing || false) && BdApi) {
				const activity = BdApi.findModuleByProps("getActivities")
					.getActivities()
					.find((data) => {
						if (data?.name === "Custom Status") return;
						if (data?.name === "Spotify") return;
						if (data?.application_id === "879327042498342962") return;
						if (data?.application_id === this.settings.clientID) return;
						return data;
					});
				if (activity?.name) {
					presence.details = `${presence.details} | ${presence.state}`;
					presence.state = `Playing ${activity.name}`;
				}
			}
			this.client.setActivity(presence);
		}, this.settings.presenceUpdateInterval ?? 2500);
	}
	async stopPresence(toast) {
		clearInterval(Interval);
		try {
			this.client.disconnect();
			delete this.client;
		} catch (error) {
			if (!toast) return;
			BdApi.showToast("RPC Pc Status Stopped Error", { type: "error" });
			log(`${error}`, color.error);
		}
	}
	async stop() {
		await this.stopPresence();
	}
	async updateSettings() {
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
				!this.settings.clientID
					? new ZLibrary.Settings.Dropdown(
							"Color Picker",
							undefined,
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
							(value) => {
								this.settings.LargeImageKeyColor = value;
							},
					  )
					: undefined,
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
					(value) => {
						this.settings.timestamps = value;
					},
				),
				new ZLibrary.Settings.Dropdown(
					"Presence update interval",
					null,
					this.settings.presenceUpdateInterval ?? 2500,
					[
						{
							label: "1 Second",
							value: 1000,
						},
						{
							label: `2.5 Second ${this.settings.presenceUpdateInterval === 2500 || !this.settings.presenceUpdateInterval ? "" : "(Recommend)"}`,
							value: 2500,
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
						{
							label: "1 min",
							value: 60000,
						},
						{
							label: "3 min",
							value: 180000,
						},
					],
					(value) => {
						this.settings.presenceUpdateInterval = value;
						clearInterval(Interval);
						setInterval(Interval, value);
						this.startPresence();
					},
				),
				new ZLibrary.Settings.Switch("Show Premid", undefined, this.settings.show_premid, (value) => {
					this.settings.show_premid = value;
				}),
				new ZLibrary.Settings.Switch(
					"Show games playing",
					!BdApi ? "Library plugin is needed BDFDB!" : undefined,
					this.settings.show_game_playing || false,
					(value) => {
						this.settings.show_game_playing = value;
					},
					{ disabled: !BdApi },
				),
				new ZLibrary.Settings.Switch("Hide icon and image asset", undefined, this.settings.hideicon || false, (value) => {
					this.settings.hideicon = value;
				}),
				new ZLibrary.Settings.Switch("Hide when listening spotify songs", undefined, this.settings.automatically?.hide?.spotify || false, (value) => {
					this.settings.automatically = { hide: { spotify: value } };
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
				new ZLibrary.Settings.Textbox("Button 1 Label", "Label for button.", this.settings.button1Label || "", (value) => {
					this.settings.button1Label = value;
				}),
				new ZLibrary.Settings.Textbox("Button 1 URL", "URL for button.", this.settings.button1URL || "", (value) => {
					this.settings.button1URL = value;
				}),
				new ZLibrary.Settings.Textbox("Button 2 Label", "Label for button.", this.settings.button2Label || "", (value) => {
					this.settings.button2Label = value;
				}),
				new ZLibrary.Settings.Textbox("Button 2 URL", "URL for button.", this.settings.button2URL || "", (value) => {
					this.settings.button2URL = value;
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
				new ZLibrary.Settings.Textbox("Client ID", "The client ID of your Discord Rich Presence application.", this.settings.clientID || "", (value) => {
					this.settings.clientID = value;
					this.stopPresence();
					this.connected();
				}),
				new ZLibrary.Settings.Textbox(
					"Large Image Key or URL",
					"The name of the asset or url (.gif .png or .jpg) for your large image.",
					this.settings.largeImageKey || "",
					(value) => {
						this.settings.largeImageKey = value;
					},
				),
				new ZLibrary.Settings.Textbox("Large Image Text", "The text that appears when your large image is hovered over.", this.settings.largeImageText || "", (value) => {
					this.settings.largeImageText = value;
				}),
				new ZLibrary.Settings.Textbox(
					"Small Image Key or URL",
					"The name of the asset or url (.gif .png or .jpg) for your small image.",
					this.settings.smallImageKey || "",
					(value) => {
						this.settings.smallImageKey = value;
					},
				),
				new ZLibrary.Settings.Textbox("Small Image Text", "The text that appears when your small image is hovered over.", this.settings.smallImageText || "", (value) => {
					this.settings.smallImageText = value;
				}),
			);
		new ZLibrary.Settings.SettingGroup("Hide when custom status", {
			collapsible: true,
			shown: false,
			callback: () => {
				this.updateSettings();
			},
		})
			.appendTo(panel)
			.append(
				new ZLibrary.Settings.Switch("Online", undefined, this.settings.customstatus_hide?.includes("online") ?? false, (value) => {
					value ? this.settings.customstatus_hide.push("online") : (this.settings.customstatus_hide = this.settings.customstatus_hide.filter((x) => x !== "online"));
				}),
				new ZLibrary.Settings.Switch("Idle", undefined, this.settings.customstatus_hide?.includes("idle") ?? false, (value) => {
					value ? this.settings.customstatus_hide.push("idle") : (this.settings.customstatus_hide = this.settings.customstatus_hide.filter((x) => x !== "idle"));
				}),
				new ZLibrary.Settings.Switch("Do Not Disturb", undefined, this.settings.customstatus_hide?.includes("dnd") ?? false, (value) => {
					value ? this.settings.customstatus_hide.push("dnd") : (this.settings.customstatus_hide = this.settings.customstatus_hide.filter((x) => x !== "dnd"));
				}),
				new ZLibrary.Settings.Switch("Invisible", undefined, this.settings.customstatus_hide?.includes("invisible") ?? true, (value) => {
					value ? this.settings.customstatus_hide.push("invisible") : (this.settings.customstatus_hide = this.settings.customstatus_hide.filter((x) => x !== "invisible"));
				}),
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
					undefined,
					this.settings.updatechannel ?? 0,
					[
						{
							name: "Stable",
							value: 0,
							desc: undefined,
							color: "#43b581",
						},
						{
							name: "Pre release",
							value: 1,
							desc: undefined,
							color: "#d29922",
						},
					],
					(value) => {
						ZLibrary.PluginUpdater.removeUpdateNotice("RPCPcStatus");
						this.settings.updatechannel = value;
						this.checkForUpdate(true);
					},
				),
			);
	}
}
