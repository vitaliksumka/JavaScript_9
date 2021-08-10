var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response) {
	console.log('Start page is running');
	response.send("<h1>Welcome to the lesson regarding AJAX</h1>");
});

server.get("/userGet", function(request, response) {
	console.log(request.query);
	var obj = request.query;
	obj.userName = "ValidatedByPOST";
	obj.userSecondName = "ValidatedByPOST";
	obj.userAge = "ValidatedByPOST";
	obj.userLocation = "ValidatedByPOST";
	response.send("You have successfully used Get method : "+ JSON.stringify(request.query));
});

server.post("/userPost", function(request, response) {
	console.log(request.body);
	var obj = request.body;
	obj.userName = "ValidatedByPOST";
	obj.userSecondName = "ValidatedByPOST";
	obj.userAge = "ValidatedByPOST";
	obj.userLocation = "ValidatedByPOST";
	response.send("You have successfully used Post method : "+ JSON.stringify(request.body));
});

server.listen(3000);
