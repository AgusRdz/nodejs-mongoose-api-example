const Game = require('../../models/Game');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.update = (request, response) => {
	const { title, publisher } = request.body;
	const { id } = request.params;

	Game
		.updateOne({
			_id: id
		}, {
			title,
			publisher
		}, {
			omitUndefined: true
		}, (error, game) => {
			if (error) {
				logger.error(error);
				return errorResponse(response, error);
			}

			return successResponse(response, { message: 'Game updated' });
		});
}
