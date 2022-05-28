const fs = require("fs"),
	ncu = require("npm-check-updates"),
	core = require("@actions/core"),
	editJsonFile = require("edit-json-file"),
	package_directory = ["./../package.json", "./../src/package.json"],
	semVer = new RegExp(
		/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/gm,
	);

try {
	(async () => {
		await ncu
			.run({
				packageFile: "./src/package.json",
				upgrade: false,
			})
			.then((x) => {
				core.notice(`npm check updates:\n ${JSON.stringify(x)}`);
			});
		if (process.env.bumpversion) {
			const { version } = require("../package.json");
			core.info(`${process.env.bumpversion} Bump package version: ${version}`);
			for (const key of package_directory) {
				await editJsonFile(`${__dirname}/${key}`, {
					autosave: true,
				}).set(["version", "info.version"][package_directory.indexOf(key)], version);
			}
			fs.readFile("RPCPcStatus.plugin.js", "utf8", async (err, data) => {
				const version_old = await data.match(semVer)[0],
					{ version } = require("../package.json");
				if (require("../src/package.json").info.version === version) {
					core.notice(`RPC Pc Status Upgrade ${version_old} -> ${version}`);
					fs.readFile("README.md", "utf8", async (err, data) => {
						data = await data.replace(semVer, version);
						fs.writeFile("README.md", data, function (err) {
							core.info("Update README.md");
							if (err) throw err;
						});
					});
				}
			});
		} else if (process.env.bumprelease) {
			fs.readFile("RPCPcStatus.devlop.js", "utf8", async (err, data) => {
				const version_old = await data.match(semVer)[0],
					{ version } = require("../packagedev.json");
				core.notice(`RPC Pc Status devlop pre release ${version_old} -> ${version}`);
				core.info(`${process.env.bumpversion} Bump package version: ${version}`);
				await editJsonFile(`${__dirname}/./../src/package.json`, {
					autosave: true,
				}).set("info.version", version);
			});
		}
	})();
} catch (error) {
	core.setFailed(`Action failed with error ${error}`);
}
