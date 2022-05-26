module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["eslint:recommended"],
	plugins: ["prettier"],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		"prettier/prettier": "warn",
	},
	overrides: [
		{
			files: ["plugins/devlop/index.js"],
			parserOptions: {
				sourceType: "module",
			},
			globals: {
				BdApi: true,
				config: true,
				ZLibrary: true,
				document: true,
			},
		},
	],
};
