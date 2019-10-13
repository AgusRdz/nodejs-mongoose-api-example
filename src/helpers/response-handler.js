exports.successResponse = (response, data) => {
	return response.json(data);
}

exports.errorResponse = (response, data, status = 500) => {
	return response.json(data).status(status);
}
