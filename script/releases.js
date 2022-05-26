const fs = require("fs"),
	ncu = require("npm-check-updates"),
	core = require("@actions/core"),
	editJsonFile = require("edit-json-file"),
	package_directory = ["./../package.json", "./../plugins/devlop/package.json"],
	semVer = new RegExp(
		/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/gm,
	);

try {
	(async () => {
		await ncu
			.run({
				packageFile: "./plugins/devlop/package.json",
				upgrade: false,
			})
			.then((x) => {
				core.notice(`npm check updates:\n ${JSON.stringify(x)}`);
			});
		if (process.env.bumpversion) {
			const package = require("../package.json");
			core.info(`${process.env.bumpversion} Bump package version: ${package.version}`);
			for (const key of package_directory) {
				await editJsonFile(`${__dirname}/${key}`, {
					autosave: true,
				}).set(["version", "info.version"][package_directory.indexOf(key)], package.version);
			}
		}
		fs.readFile("RPCPcStatus.plugin.js", "utf8", async (err, data) => {
			const version = await data.match(semVer)[0],
				package = require("../package.json");
			if (require("../plugins/devlop/package.json").info.version === package.version) {
				core.notice(`RPC Pc Status Upgrade ${version} -> ${package.version}`);
				fs.readFile("README.md", "utf8", async (err, data) => {
					data = await data.replace(semVer, package.version);
					fs.writeFile("README.md", data, function (err) {
						core.info("Update README.md");
						if (err) throw err;
					});
				});
			}
		});
	})();
} catch (error) {
	core.setFailed(`Action failed with error ${error}`);
}
