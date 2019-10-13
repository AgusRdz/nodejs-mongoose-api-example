const Publisher = require('../../models/Publisher');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.create = (request, response) => {
	const { company_name, first_party, website } = request.body;

	Publisher
		.create({
			company_name, first_party, website
		}, (error, publiser) => {
			if (error) {
				logger.error(error);
				return errorResponse(response, error);
			}

			return successResponse(response, publiser);
		});
}
