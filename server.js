var mongoose = require('mongoose'),
	assert = require('assert'),
	Dishes = require('./models/dishes'),
	url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error occured'));
db.once('open', function(){
	console.log('Correctly connected');
	Dishes.create({name:'DOD01', description:'My favourite monkey'}, function(err, res){
		if(err) throw err;
		console.log(res);		

		var id = res._id;
		Dishes.findByIdAndUpdate(id, {$set:{name:'DODO DONETSK SHAHTAR'}}, {new:true})
		.exec(function(err, doc){
			if(err) throw err;
			console.log('Updated : ' + doc);
			doc.comments.push({rating:5, comment:'Thats good', author:'Makiavelli'});
			doc.save(function(err, dish){
				if(err) throw err;
				console.log(dish);
			});

		});
	});

	
});