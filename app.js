var ex = require("./lyrics.js");
var http = require("http");

var express = require('express'); 
var app = express();

// console.log(ex[selection]);
app.get('/api/lyrics', function (req, res) {
	var selection = Math.floor(Math.random()*lyrics.length);
	res.send(lyrics[selection]);
});



var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
// creating server
http.createServer(function(request, response){
	var selection = Math.floor(Math.random()* ex.length);
	response.writeHead(200,{"Content-type":"text/plain"}); //sending status code, and sending body type
	response.write(ex[selection]);
	response.end();
}).listen(8888);