const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const publisherSchema = Schema({
	company_name: String,
	first_party: Boolean,
	website: String
}, {
	versionKey: false
});

publisherSchema.pre('remove', next => {
	mongoose.model('Game').remove({ submission_ids: this._id }, next);
	next();
});

module.exports = mongoose.model('Publisher', publisherSchema);
