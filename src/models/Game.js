const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const gameSchema = Schema({
	title: String,
	publisher: {
		type: Schema.Types.ObjectId,
		ref: 'Publisher'
	}
}, {
	versionKey: false
});

module.exports = mongoose.model('Game', gameSchema);
