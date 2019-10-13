require('dotenv').config();
const express = require('express');
const config = require('./src/config/config');
require('./src/models/index');
const http = require('http');
const app = express();
const server = http.createServer(app);

process.on('uncaughtException', (error, request, response) => {
	process.exit(1);
});

module.exports = require('./src/config/express')(app, config);

server.listen(config.port, () => {
	console.log('listening port: ' + config.port);
});
