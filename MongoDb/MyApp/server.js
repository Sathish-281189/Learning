// Next, use Mongoose - http://mongoosejs.com/docs/index.html
const MongoClient	= require('mongodb').MongoClient;
const bodyParser	= require('body-parser');
const express		= require('express');
//const logger		= require('morgan')
const dbconfig		= require('./config/db');
const app			= express();
const port 			= 3000;

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json()); // (Or) app.use(bodyParser.json({ type: 'application/json' }));
app.use(function (req, res, next) {
	//Enabling CORS 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,HEAD,OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
	next();
});

// MongoDB
MongoClient.connect(dbconfig.url, function(err, db) {
	if(err) throw err;
	console.log("\nConnected successfully to server");
	console.log("\nDatabase created!");
	// Routes
	require('./routes') (app, db);
	// Setting up server
	app.listen(port, function() {
		console.log("Example app listening at http://localhost:3000");
	});
});
