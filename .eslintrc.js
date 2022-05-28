module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["eslint:recommended"],
	plugins: ["prettier", "no-one-time-vars"],
	parserOptions: {
		ecmaVersion: "latest",
		requireConfigFile: false,
	},
	rules: {
		quotes: ["error", "double"],
		"prettier/prettier": "warn",
		"no-one-time-vars/no-one-time-vars": [
			"error",
			{
				ignoredVariables: ["IPCOpcode", "__webpack_unused_export__"],
			},
		],
	},
	overrides: [
		{
			files: ["src/index.js"],
			parserOptions: {
				sourceType: "module",
			},
			globals: {
				BdApi: true,
				config: true,
				ZLibrary: true,
				document: true,
			},
			rules: {
				"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
			},
		},
		{
			files: ["RPCPcStatus.plugin.js"],
			parser: "@babel/eslint-parser",
			globals: {
				BdApi: true,
				window: true,
				config: true,
				ZLibrary: true,
				document: true,
			},
			rules: {
				"no-unused-vars": 0,
				"no-prototype-builtins": 0,
				"no-async-promise-executor": 0,
				"no-mixed-spaces-and-tabs": 0,
			},
		},
	],
};
