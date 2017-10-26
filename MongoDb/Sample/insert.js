var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/mydb";
// Insert Into Collection
MongoClient.connect(uri, function(err, db) {
	if(err) throw err;
	console.log("Connected successfully to server");
	// Insert Single Record
	// var obj = { name: "Sathish", password:"test", email:"c.nithiyanandam@gmail.com" }; // If you do not specify an _id field, then MongoDB will add one for you and assign a unique id for each document.
	/*
	db.collection("users").insertOne(obj, function(err, res){
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
	});
	*/
	// Insert Multiple Record
	// If you do specify the _id field, the value must be unique for each document
	var obj =	[
					{ _id:1, name: "Sachin", password:"test", email:"srt@gmail.com", role: "Batsman" },
					{ _id:2, name: "Sathish", password:"test", email:"sathish@gmail.com", role: "All Rounder" },
					{ _id:3, name: "Rohit", password:"test", email:"iamrohit@gmail.com", role: "Batsman" },
					{ _id:4, name: "Pollard", password:"test", email:"pollard@gmail.com", role: "All Rounder" },
					{ _id:5, name: "Malinga", password:"test", email:"malingaslinga@gmail.com", role: "Bowler" }
				];
	db.collection("users").insertMany(obj, function(err, res){
		if(err) throw err;
		console.log(res);
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});	
});