
var Artist = require ("../models/Artist");

module.exports = function (app) {

	app.get ("/api/all", function (req, res) {
		Artist.findAll ({})
		.then (function (results) {
			res.json (results);
		});
	});


	app.get ("/api/:artist", function (req, res) {
		Artist.findAll ({
			where: {
				name: req.params.artist
			}
		})
		.then (function (results) {
			res.json (results);
		});
	});

}