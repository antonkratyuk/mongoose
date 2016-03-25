var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	require('mongoose-currency').loadType(mongoose);
	var Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
	rating:{
		type: Number,
		min: 1,
		max: 5,
		required: true
	},	
	comment:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required: true
	}
}, {versionKey: false}, {timestamps: true});

var dishSchema = new Schema({
	name:{
		type: String,
		required: true,
		//unique: true
	},
	lable:{
		type:String,
		default:"*"
	},
	price:{
		type: Currency,		
		required:true
	},
	description:{
		type: String,
		required: true
	},
	comments:[commentSchema]{

		default:'No comments'
	}
	
}, {versionKey: false}, {timestamps: true});

var Dish = mongoose.model('Dishes', dishSchema);

module.exports = Dish;