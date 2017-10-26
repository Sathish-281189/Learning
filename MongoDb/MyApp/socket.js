var express	= require('express');
var app		= express();
var http	= require('http');
var server	= http.createServer(app);

// Socket.IO is a framework that enables real-time bidirectional event-based communication, in other words you can create your own events that will allow the server to communicate with the clients and vice-versa. You can add listeners to these events and also emit events from both sides (client and server), once an event is emitted it will trigger its listener on the other side to execute an specific task. To emit events you can use the function emit() passing the event name and your data, and to add a listener you have to use the function on() with the event name as the first parameter and the callback function as the second.
var io		= require('socket.io').listen(server);

var chat = {
	start: function(){
		server.listen(8000);
		io.set("origins", "*:*");
		io.on('connection', function (socket) {
			// You can use 'socket' to emit and receive events.
			// When any connected client emit this event, we will receive it here.
			socket.on('newMessage', function (data) {
				socket.emit('chatUpdate',data); // for all.
				socket.broadcast.emit('chatUpdate',data); // for all except me.
			});
			socket.on('newUser', function (data) {
				socket.emit('chatUpdate',{'userName':'', 'text':data+' has entered the room'});
				socket.broadcast.emit('chatUpdate', {'userName':'','text':data+' has entered the room'});
			});
		});	
	}
}
module.exports = chat;