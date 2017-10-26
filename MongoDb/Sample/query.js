var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/mydb";
// Query Operation 
// 1. https://docs.mongodb.com/manual/tutorial/query-documents/#read-operations-query-argument
// 2. https://docs.mongodb.com/manual/reference/operator/query-comparison/
// Connect to server
MongoClient.connect(uri, function(err, db) {
	if(err) throw err;
	/*
	 * 1. Filter the Result
	 * When finding documents in a collection, you can filter the result by using a query object.
	 * The first argument of the find() method is a query object, and is used to limit the search.
	*/
	var query = { name: "Sachin" };
	db.collection("users").find(query, {name:true, email:true}).toArray(function(err, result) {
		if(err) throw err;
		console.log("\n Filter Record\n");
		console.log(result);
		db.close();
	});
	
	/*
	 * 2. Filter With Regular Expressions
	 * Regular expressions can only be used to query strings.
	 * The first argument of the find() method is a query object, and is used to limit the search.
	*/
	// var query = { name: /^S/ }; // should start with 'S'. Case sensitive
	var query = { name: /n/gi }; // i - case insensitive; g - global (anywhere in string)
	db.collection("users").find(query, {name:true, email:true}).toArray(function(err, result) {
		if(err) throw err;
		console.log("\n Filter With Regular Expressions\n");
		console.log(result);
		db.close();
	});
	
	/*
	 * 3. Sort the Result
	 * Use the sort() method to sort the result in ascending or descending order.
	 * The sort() method takes one parameter, an object defining the sorting order
	 * value - 1:ascending, -1: descending
	*/
	var sort_asc	= { name: 1 };
	// Method 1:
	db.collection("users").find({}).sort(sort_asc).toArray(function(err, result) {
		if(err) throw err;
		console.log("\nMethod 1: Sort the Result\n");
		console.log(result);
		db.close();
	});
	// Method 2:
	var query		= { name: /a/gi };
	var sort_desc	= { name: -1 };
	db.collection("users").find(query, { _id:false, name:true}).sort(sort_desc).toArray(function(err, result) {
		if(err) throw err;
		console.log("\nMethod 2: Sort the Result\n");
		console.log(result);
		db.close();
	});
	
	/*
	 * 4. Limit - limit()
	 * To limit the result in MongoDB, we use the limit() method.
	 * The limit() method takes one parameter, a number defining how many documents to return.
	*/
	db.collection("users").find().sort(sort_asc).limit(2).toArray(function(err, result) { // find() (Or) find({}) - empty object
		if(err) throw err;
		console.log("\nDiaplay data with limit\n");
		console.log(result);
		db.close();
	});
});