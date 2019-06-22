var express = require("express");



var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");


app.use("/", routes);

app.listen(port);
console.log("Listening on Port " + port);