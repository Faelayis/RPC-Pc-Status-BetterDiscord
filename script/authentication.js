const npmLogin = require("npm-cli-login"),
	username = `${process.env.NPM_USER}`,
	password = `${process.env.NPM_PASS}`,
	email = `${process.env.NPM_EMAIL}`,
	registry = "https://npm.pkg.github.com/",
	scope = "@betterdiscordbuilder";

npmLogin(username, password, email, registry, scope);
