module.exports = {
	apps: [
		{
			name: 'bol',
			script: '/home/ubuntu/code/bol/server.js',
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
			script: '/home/ubuntu/code/api/lib/server/server.js',
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