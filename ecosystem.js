var resolvePath = require('resolve-path')
module.exports = {
	apps: [
		{
			name: 'bol',
			script: resolvePath('/home/bitnami/code/bol/server.js'),
			watch: true,
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		},
		{
			name: 'api',
			script: resolvePath('/home/bitnami/code/api/lib/server/server.js'),
			watch: true,
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
}