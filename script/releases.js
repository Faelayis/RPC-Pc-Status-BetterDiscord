const fs = require("fs");
const package = require("../package.json");
const version = [];

try {
	fs.readFile("RPCPcStatus.devlop.js", "utf8", async (err, data) => {
		version[0] = await data.split("* @author")[0].split("@version")[1].trim();
		fs.readFile("RPCPcStatus.plugin.js", "utf8", async (err, data) => {
			version[1] = await data.split("* @author")[0].split("@version")[1].trim();
			if (version[0] === package.version) {
				fs.readFile("README.md", "utf8", async (err, data) => {
					if (err) throw err;
					data = data.replace(`/${version[1]}/`, `/${package.version}/`);
					fs.writeFile("README.md", data, function (err) {
						console.log("Update README.md");
					});
				});
				fs.copyFile("RPCPcStatus.devlop.js", "RPCPcStatus.plugin.js", (err) => {
					if (err) throw err;
					console.log("Releases RPCPcStatus.plugin.js Done.");
				});
			}
		});
	});
} catch (error) {
	console.error(error);
}
