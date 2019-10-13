const timeout = require('connect-timeout');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const glob = require('glob');
const sanitizer = require('express-sanitizer');
const compress = require('compression');
const methodOverride = require('method-override');

module.exports = (app, config) => {
	app.use(timeout(30000));
	app.use(cors({
		origin: '*',
		allowedHeaders: [
			'Content-Type',
			'Cache-Control',
			'X-Requested-With',
			'X-Forwarded-Proto',
			'Authorization'
		],
		exposedHeaders: [
			'Content-Type',
			'Cache-Control',
			'X-Requested-With',
			'Authorization'
		],
		methods: [
			'GET',
			'POST',
			'PUT',
			'DELETE'
		],
		preflightContinue: false,
		optionsSuccessStatus: 200
	}));

	// passport

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));

	app.use(sanitizer());
	app.use(compress());
	app.use(methodOverride());
	app.disable('etag');

	const routes = glob.sync(`${config.root}/routes/**/*.js`);
	routes.forEach(route => require(route)(app));

	return app;
}
