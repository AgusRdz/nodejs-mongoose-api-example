const Publisher = require('../../models/Publisher');
const Game = require('../../models/Game');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.destroy = (request, response) => {
	const { id } = request.params;

	Game
		.deleteMany({
			publisher: id
		}, (error, game) => {
			if (error) {
				logger.error(error);
				return errorResponse(response, error);
			}

			Publisher
				.deleteOne({ _id: id }, (error, publisher) => {
					if (error) {
						logger.error(error);
						return errorResponse(response, error);
					}

					return successResponse(response, { message: 'Publisher deleted' });
				});
		});
}
