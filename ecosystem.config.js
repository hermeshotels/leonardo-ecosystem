module.exports = {
	apps: [
		{
			name: 'bol',
			script: '/home/ubuntu/code/bol/server.js',
			watch: true,
			env: {
				NODE_ENV: 'development',
				APIURL: 'http://34.251.162.93:3000/api'
			},
			env_production: {
				NODE_ENV: 'production',
				APIURL: 'http://34.251.162.93:3000/api'
			}
		},
		{
			name: 'api',
			script: '/home/ubuntu/code/api/lib/server/server.js',
			watch: true,
			env: {
				NODE_ENV: 'development',
				APIURL: 'http://34.251.162.93:3000/api'
			},
			env_production: {
				NODE_ENV: 'production',
				APIURL: 'http://34.251.162.93:3000/api'
			}
		}
	]
}