var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/mydb";
// Connect Server & Create Collection
MongoClient.connect(uri, function(err, db) {
	if(err) { throw err; }
	console.log("Connected successfully to server");
	db.createCollection("users", function(err, res) {
		if (err) throw err;
		console.log("Collection created!");
		db.close();
	});
	db.createCollection("messages", function(err, res) {
		if (err) throw err;
		console.log("Collection created!");
		db.close();
	});
});
