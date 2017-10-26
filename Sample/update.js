var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/mydb"

MongoClient.connect(uri, function(err, db) {
	if(err) throw err;
	/*
	 * 1. Update Document - updateOne()
	 * You can update a record, or document as it is called in MongoDB, by using the updateOne() method.
	 * Note: If the query finds more than one record, only the first occurrence is updated.
	 * The first parameter of the updateOne() method is a query object defining which document to update.
	 * The second parameter is an object defining the new values of the document.
	*/
	var where_qry = { name: "Sachin" };
	var new_value = { name: "Sachin Tendulkar", password:"test", email:"srt@gmail.com", role: "Batsman" }; //By default, all fields in the document gets updated, (except the _id field) so remember to set the value of every field, otherwise the value will be left empty.
	db.collection("users").updateOne(where_qry, new_value, function(err, res) {
		if(err) throw err;
		console.log("\nUpdate Single Record\n");
		console.log(res.result);
		if(res.result.nModified != 0) {
			console.log("1 Document Updated");
		} else {
			console.log("No Document Updated");
		}
		db.close();
	});
	
	/*
	 * 2. Update Only Specific Fields
	 * To update only selected fields, use the "$set" operator to prevent the other fields from being left empty
	*/
	var where_qry = { name: "Sathish" };
	var new_value = { $set: { name: "Sathish Kumar"} };
	db.collection("users").updateOne(where_qry, new_value, function(err, res) {
		if(err) throw err;
		console.log("\nUpdate Single Record with Specific Fields\n");
		console.log(res.result);
		if(res.result.nModified != 0) {
			console.log("1 Document Updated");
		} else {
			console.log("No Document Updated");
		}
		db.close();
	});
	
	/*
	 * 3. Update Many Documents - updateMany()
	 * To update all documents that meets the criteria of the query, use the updateMany() method.
	 * Can use regexp
	*/
	// digits: /^[\d]+$/;  Alphabets: /^[aA-zZ]+$/;
	var where_qry = { role: /all/gi }; // All Rounder to Batsman
	var new_value = { $set: { role: "Batsman"} };
	db.collection("users").updateMany(where_qry, new_value, function(err, res) {
		if(err) throw err;
		console.log("\nUpdate Many Documents\n");
		console.log(res.result);
		console.log(res.result.nModified + " document(s) updated");
		db.close();
	});
});
