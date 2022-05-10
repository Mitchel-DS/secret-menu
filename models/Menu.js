const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
	restaurant: {
		type: String,
	},
	menu_item: {
		type: String,
	},
	description: {
		type: String,
	},
	category: {
		type: String,
	},
	price: {
		type: String,
	}
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;