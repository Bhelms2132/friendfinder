// Dependencies
var express = require("express");
var path = require("path");
var nodemon = require("nodemon");
var app = express();
// Sets an initial port.
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
// Listner
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});