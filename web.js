var express = require('express');
var fs = require('fs');
var buffer = require('buffer');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFileSync('index.html','utf-8');
    var read = buffer.toString('utf8');
 response.send(read);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
