module.exports = {
	apps: [
		{
			name: 'bol',
			script: '/home/bitnami/code/bol/server.js',
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
			script: '/home/bitnami/code/api/lib/server/server.js',
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