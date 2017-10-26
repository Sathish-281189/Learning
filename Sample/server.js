var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/mydb";
//var uri = "mongodb://Nithiyanandam:sathish%40281189@cst-shard-00-00-s7clj.mongodb.net:27017,cst-shard-00-01-s7clj.mongodb.net:27017,cst-shard-00-02-s7clj.mongodb.net:27017/chatdb?ssl=true&replicaSet=CST-shard-0&authSource=admin";
// Connect Server & Create Collection
MongoClient.connect(uri, function(err, db) {
	if(err) { throw err; }
	console.log("\nConnected successfully to server");
	console.log("\nDatabase created!");
	db.close();
});