const mongoose = require('mongoose');
const { db } = require('../config/config');
const dbUrl = `mongodb://${db.host}:${db.port}/${db.name}`;

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log(`Mongoose default connection is open to: ${dbUrl}`);
});

mongoose.connection.on('error', (err) => {
	console.log(`Mongoose default connection has occured ${err} error`);
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection is disconnected due to application termination');
		process.exit(0)
	});
});

module.exports = { mongoose };
