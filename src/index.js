var express = require("express");
var app = express();

app.get('/', function (request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log("Listening on " + port);
});