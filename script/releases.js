const fs = require("fs");
const editJsonFile = require("edit-json-file");
const package_dir = ["./../package.json", "./../plugins/devlop/package.json"];
let version;

try {
	(async () => {
		if (process.env.version_publish) {
			for (const key of package_dir) {
				await editJsonFile(`${__dirname}/${key}`, {
					autosave: true,
				}).set(["version", "info.version"][package_dir.indexOf(key)], process.env.version_publish);
			}
		}
		const package = require("../package.json");
		const package_dev = require("../plugins/devlop/package.json");
		fs.readFile("RPCPcStatus.plugin.js", "utf8", async (err, data) => {
			version = await data.split("* @author")[0].split("@version")[1].trim();
			if (package_dev.info.version === package.version) {
				console.log(`${version} -> ${package.version}`);
				fs.readFile("README.md", "utf8", async (err, data) => {
					if (err) throw err;
					data = data.replace(/\d{1,2}\.\d{1,2}\.\d{1,3}/g, `${package.version}`);
					console.log(data);
					fs.writeFile("README.md", data, function (err) {
						if (err) throw err;
						console.log("Update README.md");
					});
				});
			}
		});
	})();
} catch (error) {
	console.error(error);
}
