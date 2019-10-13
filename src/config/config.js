const path = require('path');
const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || process.env.APP_ENV;

const config = {
	local: {
		root: rootPath,
		port: process.env.PORT || process.env.APP_PORT,
		db: {
			host: process.env.DB_HOST || '127.0.0.1',
			port: process.env.DB_PORT || 27017,
			name: process.env.DB_DATABASE || 'example'
		}
	}
};

module.exports = config[env];
