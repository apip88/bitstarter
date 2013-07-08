var express = require('express');
var fs = require('fs');
var buffer = require('buffer');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var data = fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	console.log(data);
});
    var read = buffer.toString('utf-8');
 response.send(read);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
