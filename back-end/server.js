var express = require("express");
var app = express();
var port = 8000;
var http = app.listen(port);
var socketio = require('socket.io');
var io = socketio.listen(http);
var personController = require("./controllers/personController");

app.use(express.compress());
app.use(express.static('../front-end', { maxAge: 604800000 }));

/*--- ROUTES ---*/
app.get('/person/getAllPersons', personController.getAllPersons);
app.get('/person/:id', personController.getById);


var guestNumber = 0;
/*--- SOCKET.IO BINDINGS ---*/
io.sockets.on('connection', function (client) {
	var name = "Guest-" + guestNumber;
	client.emit("connected", name);
	guestNumber++;

	client.on('changeName', function(newName){
		name = newName;
	});

    client.on('sendChat', function (msg) {
        io.sockets.emit('updateChat', msg);
    });

    client.on('closeChat', function(author){
		var message = author + " has left."
		io.sockets.emit('personLeaving', message);
	});

	client.on('disconnect', function(){
		var message = name + " has left."
		io.sockets.emit('personLeaving', message);
	});
});

/*--- INIT STATEMENTS ---*/
console.log("Server is running on port " + port + ".");
console.log("Remeber! mySQL server needs to be running!");
