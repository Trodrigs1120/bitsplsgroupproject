var path = require("path");
var orm = require ("../config/bitsORM.js");
//  console.log(orm.getRandArtist())
// console.log(orm.getArtist("eminem"))
// orm.getRandArtist()
module.exports = function (app) {

	app.get ("/api/all", function (req, res) {
        //  orm.getArtist(artistData)
         orm.getArtist("eminem")
         
	});


	

	app.get ("/api/random", function (req, res) {
    orm.getRandArtist()
    console.log("random ran")
    })
	app.get ("/api/register", function (req, res) {
		orm.putUser(user,pass)
	})
}

	// app.post ("/api/new", function (req, res) {
		
	// 	Artist.create ({
	// 		name: req.body.name,
	// 		uWordsNum: req.body.uWordsNum,
	// 		uWords: req.body.uWords,
	// 		uWordsProp: req.body.uWordsProp,
	// 		wordsUArtist: req.body.wordsUArtist,
	// 		numSongs: req.body.numSongs,
	// 		wordsPerSong: req.body.wordsPerSong
	// 	})
	// })

	// app.delete ("/api/delete", function (req, res) {

	// 	Artist.destroy ({
	// 		where:  {
	// 			id: req.body.id
	// 		}
	// 	});
	// });






	// 	Artist.findAll ({
	// 		where: {
	// 			name: req.params.artist
	// 		}
	// 	})
	// 	.then (function (results) {
	// 		res.json (results);
	// 	});
	// });