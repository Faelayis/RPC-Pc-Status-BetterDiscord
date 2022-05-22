const fs = require("fs");
const package = require("../package.json");
const package_dev = require("../plugins/devlop/package.json");

try {
	(async () => {
		let version;
		fs.readFile("RPCPcStatus.plugin.js", "utf8", async (err, data) => {
			version = await data.split("* @author")[0].split("@version")[1].trim();
			if (package_dev.info.version === package.version) {
				console.log(`${version} -> ${package.version}`);
				fs.readFile("README.md", "utf8", async (err, data) => {
					if (err) throw err;
					data = data.replace(`/v${version}/`, `/v${package.version}/`);
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
