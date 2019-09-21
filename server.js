var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));


// parse app to url
app.use(bodyParser.urlencoded({ extended: true }));


// parse application/json
app.use(bodyParser.json());


// handlebars set
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// import routes
var routes = require("./controllers/burgers_controller.js");


app.use(routes);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});