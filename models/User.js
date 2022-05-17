const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	mail: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	reviews: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Review' 
	}],
	created: {
		type: Date,
		default: Date.now
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;