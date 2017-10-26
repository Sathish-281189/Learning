// In Express, routes are wrapped in a function, which takes the Express instance and a database as arguments.
module.exports = function(app, db) {
	app.get('/', function (request, response) {
		response.send({"statusCode":"200", "status":"Success"});
	});
	app.get('/api/v1/get-messages/:id', function (request, response) {
		var query = { sendId: parseInt(request.params.id) };
		db.collection("messages").find(query).toArray(function(err, result) {
			if(err){
				var data = {"statusCode":"202", "status": "Success", "message":"Error Occured - Something went wrong." };
			} else {
				var data = {"statusCode":"200", "status": "Success", "message":"Chat lists retrieved successfully", "chatMessages":result };
			}
			response.send(data);
		});
	});
	app.post('/api/v1/send-message', function(request, response) {
		var obj = request.body;
		db.collection("messages").insertOne(obj, function(err, res){
			if(err) {
				var data = {"status":"Failure", "message": "Error Occured - Something went wrong." };
			} else {
				console.log(res);
				var data = {"status":"Success", "message": "Student Details inserted successfully" };
			}
			response.send(data);
		});
	});
	
};