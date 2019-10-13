const Game = require('../../models/Game');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.create = (request, response) => {
	const { title, publisher } = request.body;

	Game
		.create({
			title, publisher
		}, (error, game) => {
				if (error) {
					logger.error(error);
					return errorResponse(response, error);
				}

				return successResponse(response, game);
		});
}
