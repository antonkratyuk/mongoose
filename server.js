var mongoose = require('mongoose'),
	assert = require('assert'),
	Dishes = require('./models/dishes'),
	url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error occured'));
db.once('open', function(){
	console.log('Correctly connected');
	Dishes.create({name:'DADA', description:'My favourite monkey'}, function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
});