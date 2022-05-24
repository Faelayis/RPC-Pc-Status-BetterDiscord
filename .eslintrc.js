module.exports = {
	env: {
		node: true,
		browser: true,
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
};
