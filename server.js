// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
//var nodemon = require("nodemon");
var app = express();
// Sets an initial port.
var port = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.static("app/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
// Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// Listner
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});