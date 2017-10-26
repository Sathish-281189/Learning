// In Express, routes are wrapped in a function, which takes the Express instance and a database as arguments.
module.exports = function(app, db) {
	app.get('/', function (request, response) {
		response.send({"statusCode":"202", "status":"Failure", "message":"No Endpoint"});
	});
	app.post('/api/v1/login', function(request, response) {
		var obj = request.body;
		console.log(obj);
		var query = { "email": obj.email, "password": obj.password };
		db.collection("users").findOne(query, function(err, result) {
			if(err) {
				var data = {"statusCode":"202", "status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				console.log(result);
				if(result != null) {
					var data = {"statusCode":"200", "status":"Success", "message": "User logged-in successfully", "userDetails":result };
				} else {
					var data = {"statusCode":"200", "status":"Failure", "message": "Invalid Username/Password.", "userDetails":result };
				}
			}
			response.send(data);
		});
	});
	app.post('/register', function(request, response) {
		var obj = request.body;
		db.collection("users").insertOne(obj, function(err, res){
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"status":"Success", "message": "Student Details inserted successfully" };
			}
			response.send(data);
		});
	});
	app.get('/api/v1/users', function (request, response) {
		db.collection("users").find({}).toArray(function(err, result) {
			if(err){
				var data = {"statusCode":"202", "status": "Success", "message":"Error Occured - Something went wrong." };
			} else {
				var data = {"statusCode":"200", "status": "Success", "message":"User details retrieved successfully", "usersList":result };
			}
			response.send(data);
		});
	});
	app.get('/api/v1/users/:id', (request, response) => {
		console.log(request);
		var query = { _id: parseInt(request.params.id) };
		db.collection("users").findOne(query, function(err, result) {
			if(err) {
				var data = {"statusCode":"202", "status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				var data = {"statusCode":"200", "status":"Success", "message": "Student Details retrieved successfully", "studentDetails":result };
			}
			response.send(data);
		});
	});
};