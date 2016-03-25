var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var dishSchema = new Schema({
	name:{
		type: String,
		required: true,
		unique: true
	},
	description:{
		type: String,
		required: true
	}
}, {timestamps: true});

var Dish = mongoose.model('Dishes', dishSchema);

module.exports = Dish;