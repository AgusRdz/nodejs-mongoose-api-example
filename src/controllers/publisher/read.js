const Publisher = require('../../models/Publisher');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.list = (request, response) => {
	Publisher
		.find({})
		.sort('id')
		.exec((error, publishers) => {
			if (error) {
				logger.error(error);
				return errorResponse(response, error);
			}

			return successResponse(response, publishers);
		});
}
