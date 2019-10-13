const log4js = require('log4js');
const path = require('path');
const filename = path.join(__dirname, '../../logs/api.log');
const type = 'file';
const level = 'debug';

log4js.configure({
	appenders: {
		everything: { type, filename }
	},
	categories: {
		default: {
			appenders: ['everything'],
			level
		}
	}
});

const logger = log4js.getLogger();

module.exports = logger;
