var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/mydb";
// Connect to server
MongoClient.connect(uri, function(err, db) {
	if(err) throw err;
	/*
	 * 1. Delete Document - deleteOne()
	 * To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.
	 * The first parameter of the deleteOne() method is a query object defining which document to delete.
	 * Note: If the query finds more than one document, only the first occurrence is deleted.
	*/
	var query = { name: "Rohit" };
	db.collection("users").deleteOne(query, function(err, res) {
		if(err) throw err;
		console.log("\nDelete Single Record or Document\n");
		console.log(res.result); // { n: 1, ok: 1 } - which tells us if the execution went OK, and how many documents were affected.
		console.log(res.result.n); // Return the number of deleted documents
		console.log(res.deletedCount); // Return the number of deleted documents
		if(res.deletedCount == 0) {
			console.log("No Document Deleted");
		} else {
			console.log("1 Document Deleted");
		}
		db.close();
	});
	
	/*
	 * 2. Delete Many - deleteMany()
	 * To delete more than one document, use the deleteMany() method.
	 * The first parameter of the deleteMany() method is a query object defining which documents to delete.
	 * Can use regular expression
	*/
	// var query = { name: /^S/ }; // should start with 'S'. Case sensitive
	var query = { name: /a/gi }; // i - case insensitive; g - global (anywhere in string)
	db.collection("users").deleteMany(query, function(err, res) {
		if(err) throw err;
		console.log("\nDelete Multiple Record or Document\n");
		console.log(res.result);
		console.log(res.result.n);
		console.log(res.deletedCount);
		console.log(res.result.n + " document(s) deleted");
		db.close();
	});
});