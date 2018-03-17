var express = require ("express");

var bodyParser = require ("body-parser");

var methodOverride = require ("method-override");

var exphbs = require ("express-handlebars");

var mysql = require("mysql");

//=====================================

var app = express ();

app.use (bodyParser.urlencoded ({
	extended: false
}));

app.use (methodOverride ("_method"));

app.engine ("handlebars", exphbs ({defaultLayout: "main"}));
app.set ("view engine", "handlebars");

var PORT = 3000;

app.listen (PORT, function () {
	console.log ("now listening on port: " + PORT);
});

var connection = mysql.createConnection ({
	host: "localhost",
	user: "root",
	password: "root",
	database: "ourRappersDB"
});

connection.connect (function (err) {
	if (err) throw err;
	console.log("now connected to database as ID: " + connection.threadId);
})

app.get ("/", function (req, res) {
	connection.query ("SELECT * FROM rapStats", function (err, data) {
		res.render ("index", {rapStats : data});
	})
})