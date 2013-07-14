var express = require('express');
var fs = require('fs');
var buffer = require('buffer');
var htmlfile = "index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var read = fs.readFileSync(htmlfile).toString();
    response.send(read);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
