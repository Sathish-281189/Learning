// Refer
/*
1. https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
2. https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
3. https://devcenter.heroku.com/articles/mean-apps-restful-api#prerequisites
4. https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
2. https://github.com/jeffandersen/node-express-sample
3. http://expressjs.com/en/starter/basic-routing.html
4. http://expressjs.com/en/guide/routing.html
*/

// MongoDB
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/mydb";
// https://www.npmjs.com/package/body-parser
var bodyParser = require("body-parser");
// https://www.npmjs.com/package/express
var express = require("express");
var app = express();

// Middleware - CookieParser, bodyParser, logger, authentication, etc...
/*
 * We can use the middlewares using "app.use". That will apply for all request.
 * morgan: logger
 * body-parser: parse the body so you can access parameters in requests in req.body. e.g. req.body.name.
 * cookie-parser: parse the cookies so you can access parameters in cookies req.cookies. e.g. req.cookies.name.
 * serve-favicon: exactly that, serve favicon from route /favicon.ico. Should be call on the top before any other routing/middleware takes place to avoids unnecessary parsing.
 */
 
 // 1. Body Parser Middleware - To access the POST body/data.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // (Or) app.use(bodyParser.json({ type: 'application/json' }));
app.use(function (req, res, next) {
	//Enabling CORS 
	//CORS Middleware : Fix - XMLHttpRequest cannot load http://localhost:3000/api/v1/users. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:4200' is therefore not allowed access.
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,HEAD,OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
	next();
});

// Setting up server
var server = app.listen(3000, function() {
	console.log("Example app listening at http://localhost:3000");
});
var data;
var connectDB = function() {
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		console.log("\nConnected successfully to server");
		console.log("\nDatabase created!");
		db.close();
	});
}
var getUsers = function() {
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		db.collection("users").find({}).toArray(function(err, result) { // {} - empty object
			if(err) throw err;
			console.log(result);
			db.close();
		});
	});
}
app.get('/', function (req, response) {
	response.write('---connectDB----');
	connectDB();
	response.end();
});
//GET API
app.get('/api/v1/users', function (req, response) {
	// Method 1:
	/*
	response.writeHead(200, {'Content-Type': 'application/json'});
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		db.collection("users").find({}).toArray(function(err, result) { // {} - empty object
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"status":"Success", "usersList":result, "message": "Userlist retrieved successfully" };
			}
			response.end(JSON.stringify(data));
			db.close();
		});
	});
	*/
	// Method 2:
	// No need to set 'Content-Type';
	// response.send() instead of response.end() and No need to do "JSON.stringify()"
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		db.collection("users").find({}).toArray(function(err, result) { // {} - empty object
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"status":"Success", "usersList":result, "message": "Userlist retrieved successfully" };
			}
			response.send(data);
			db.close();
		});
	});
});
//GET API
app.get('/api/v1/users/:id', (request, response) => {
	console.log(request);
	response.writeHead(200, {'Content-Type': 'application/json'});
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		var query = { _id: parseInt(request.params.id) };
		db.collection("users").findOne(query, function(err, result) {
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"status":"Success", "studentDetails":result, "message": "Student Details retrieved successfully" };
			}
			response.end(JSON.stringify(data));
			db.close();
		});
	});
});
//POST API
// http://www.concretepage.com/angular-2/angular-2-http-post-example
app.post('/api/v1/users', (request, response) => {
	response.writeHead(200, {'Content-Type': 'application/json'});
	var obj = request.body;
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		db.collection("users").insertOne(obj, function(err, res){
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"status":"Success", "message": "Student Details inserted successfully" };
			}
			response.end(JSON.stringify(data));
			db.close();
		});
	});
});
//PUT API
app.put("/api/v1/users/:id", function(request, response){
	response.writeHead(200, {'Content-Type': 'application/json'});
	var obj = request.body;
	var id = parseInt(request.params.id);
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		var where_qry = { _id: id };
		var new_value = obj;
		db.collection("users").updateOne(where_qry, new_value, function(err, res) {
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"status":"Success", "studentDetails":obj, "message": "Student Details updated successfully" };
			}
			response.end(JSON.stringify(data));
			db.close();
		});
	});
});
// DELETE API
app.delete("/api/v1/users/:id", function(request, response){
	var id = parseInt(request.params.id);
	response.writeHead(200, {'Content-Type': 'application/json'});
	MongoClient.connect(uri, function(err, db) {
		if(err) { throw err; }
		var query = { _id: id };
		db.collection("users").deleteOne(query, function(err, result) {
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"status":"Success", "message": "Student Details deleted successfully" };
			}
			response.end(JSON.stringify(data));
			db.close();
		});
	});
});
// Invalid API
app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});