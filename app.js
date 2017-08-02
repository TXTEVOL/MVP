var express = require("express");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
var cors = require("cors");
var jsonparser = bodyparser.json({
	limit:'200mb'
});
var app = express();

var client = mongodb.MongoClient;
var programs;
var url =   'mongodb://Allan:Boost@ds149268.mlab.com:49268/programs';
client.connect(url, function(err,db){
	if(err){
		console.log("error connecting");
		process.exit(1);
		throw err;
	}else{
		console.log("connected to our database")
		programs = db.collection("Knites");
	}
})

app.use(cors());
app.use(bodyparser.urlencoded({
	extended:true
}))


/*app.get("/",function(req,res){
	console.log("inserting a new event");
	events.insert({
		"name": "art exhbit A",
		"date": "tommorow"
	}, function(err,doc){
		if(err){
			throw err;
			res.sendStatus(500);
		}else{
			console.log("successfully added event");
			res.sendStatus(200);
		}
	});
	
})*/

app.get("/pullPrograms",function(req,res){
	progams.find().toArray(function(err,docs){
		if(err){
			throw err;
			res.sendStatus(500);
		}else{
			var result = docs.map(function(data){
				return data;
			})
			res.json(result);
		}
	})
})

app.get("/pullProgram",function(req,res){
	programs.find({
		"name":"allan"

	}).limit(1).next( function(err,docs){
		if(err){
			throw err;
			res.sendStatus(500);
		}else{
			
			res.json(docs);
		}
	})
})



var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('Listening on port ' +port);
});




