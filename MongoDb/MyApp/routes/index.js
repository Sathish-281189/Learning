var userRoutes = require('./user_route');
var chatRoutes = require('./chat_route');

module.exports = function(app, db) {
	userRoutes(app, db);
	chatRoutes(app, db);
	// Other route groups could go here, in the future
};