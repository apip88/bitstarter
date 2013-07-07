var express = require('express');
var fs = require('fs');
var buf = require('buffer');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//var data = fs.readFile("index.html");
//var read = buf.toString(data);
var read = fs.readFile("inedex.html","utf-8");
 response.send(read);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
