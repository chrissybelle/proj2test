var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars"); 
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); // NEED TO FIX
app.use(passport.initialize());
app.use(passport.session());

// require("./controllers/placesController.js")(app);
var routes = require("./controllers/usersController.js");
// app.use(routes);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});