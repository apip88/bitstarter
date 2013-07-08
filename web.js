var express = require('express');
var fs = require('fs');
var buffer = require('buffer');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var data = fs.readFile("index.html");
    var read = buffer.toString();
 response.send(read);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
