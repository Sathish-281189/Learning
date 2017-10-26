var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/mydb";
// Connect to server
MongoClient.connect(uri, function(err, db) {
	if(err) throw err;
	/*
	 * 1. Find One - findOne()
	 * To select data from a collection in MongoDB, we can use the findOne() method.
	 * The findOne() method returns the first occurrence in the selection.
	 * The first parameter of the findOne() method is a query object. In this example we use an empty query object, which selects all documents in a collection (but returns only the FIRST document).
	*/
	db.collection("users").findOne({}, function(err, result) { // {} - empty object
		if(err) throw err;
		console.log("\nFind One Record from table\n");
		console.log(result);
		db.close();
	});
	
	/*
	 * 2. Find All - find()
	 * Note: No parameters in the find() method gives you the same result as SELECT * in MySQL.
	 * To select data from a table in MongoDB, we can also use the find() method.
	 * The find() method returns all occurrences in the selection.
	 * The first parameter of the find() method is a query object. In this example we use an empty query object, which selects all documents in the collection.
	*/
	db.collection("users").find({}).toArray(function(err, result) { // {} - empty object
		if(err) throw err;
		console.log("\nFind all data from table\n");
		console.log(result);
		db.close();
	});
	
	/*
	 * 3. Find Some
	 * The second parameter of the find() method is an object describing which fields to include in the result.
	 * This parameter is optional, and if omitted, all fields will be included in the result.
	*/
	// Method 1:
	db.collection("users").find({}, {_id:false, name:true, email:true}).toArray(function(err, result) { // {} - empty object
		if(err) throw err;
		console.log("\nMethod 1: Find Some\n");
		console.log(result);
		db.close();
	});
	// Method 2:
	db.collection("users").find({}, { _id:false }).toArray(function(err, result) { // {} - empty object
		if(err) throw err;
		console.log("\nMethod 2: Find Some\n");
		console.log(result);
		db.close();
	});
	
	/*
	 * 4. Limit - limit()
	 * To limit the result in MongoDB, we use the limit() method.
	 * The limit() method takes one parameter, a number defining how many documents to return.
	*/
	db.collection("users").find().limit(2).toArray(function(err, result) { // find() (Or) find({}) - empty object
		if(err) throw err;
		console.log("\nDiaplay data with limit\n");
		console.log(result);
		db.close();
	});
});