
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


	Project.findAll({order: 'title DESC'})
// yields ORDER BY title DESC


	app.post ("/api/new", function (req, res) {
		
		Artist.create ({
			name: req.body.name,
			uWordsNum: req.body.uWordsNum,
			uWords: req.body.uWords,
			uWordsProp: req.body.uWordsProp,
			wordsUArtist req.body.wordsUArtist,
			numSongs: req.body.numSongs,
			wordsPerSong: req.body.wordsPerSong
		})

	app.delete ("/api/delete", function (req, res) {

		Artist.destroy ({
			where:  {
				id: req.body.id
			}
		});
	});


};



	// 	Artist.findAll ({
	// 		where: {
	// 			name: req.params.artist
	// 		}
	// 	})
	// 	.then (function (results) {
	// 		res.json (results);
	// 	});
	// });