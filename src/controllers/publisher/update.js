const Publisher = require('../../models/Publisher');
const logger = require('../../services/logger');
const { successResponse, errorResponse } = require('../../helpers/response-handler');

exports.update = (request, response) => {
	const { company_name, first_party, website } = request.body;
	const { id } = request.params;

	Publisher
		.updateOne({
			_id: id
		}, {
			company_name,
			first_party,
			website
		}, {
			omitUndefined: true
		}, (error, publisher) => {
			if (error) {
				logger.error(error);
				return errorResponse(response, error);
			}

			return successResponse(response, { message: 'Publiser updated' });
		});
}
