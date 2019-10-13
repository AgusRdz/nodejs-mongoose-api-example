const Game = require('../../models/Game');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.list = (request, response) => {
	Game
		.find({})
		.populate('publisher')
		.sort('id')
		.exec((error, publishers) => {
			if (error) {
				logger.error(error);
				return errorResponse(response, error);
			}

			return successResponse(response, publishers);
		});
}
