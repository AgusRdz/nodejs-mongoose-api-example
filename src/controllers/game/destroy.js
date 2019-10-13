const Game = require('../../models/Game');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.destroy = (request, response) => {
	const { id } = request.params;

	Game
		.findOne({ _id: id }, (error, game) => {
			if (error) {
				logger.error(error);
				return errorResponse(response, error);
			}

			game.remove();
			return successResponse(response, { message: 'Game deleted' });
		});
}
