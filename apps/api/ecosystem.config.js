module.exports = {
	apps: [
		{
			name: "node-api",
			script: "./dist/main.js",
			exec_mode: "cluster",
			instances: 4,
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
