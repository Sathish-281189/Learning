var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/mydb";
// Connect to server
MongoClient.connect(uri, function(err, db) {
	if(err) throw err;
	/*
	 * 1. Method : Drop Collection - drop()
	 * You can delete a table, or collection as it is called in MongoDB, by using the drop() method.
	 * The drop() method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully, otherwise it returns false.
	*/
	/*
	db.collection("users").drop(function(err, result) { // result - boolean
		if(err) throw err;
		console.log("\nMethod 1: Drop Collection\n");
		if(result) {
			console.log("Collection deleted successfully");
		}
		db.close();
	}); */
	
	/*
	 * 2. Method : Drop Collection - dropCollection()
	 * You can also use the dropCollection() method to delete a table (collection).
	 * The dropCollection() method takes two parameters: the name of the collection and a callback function.
	*/
	db.dropCollection("users", function(err, result) { // result - boolean
		if(err) throw err;
		console.log("\nMethod 2: Drop Collection\n");
		if(result) {
			console.log("Collection deleted successfully");
		}
		db.close();
	});
});