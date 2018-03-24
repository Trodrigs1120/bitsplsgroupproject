
var orm = require ("/bitsORM");

module.exports = function (app) {

	app.get ("/api/all", function (req, res) {
		orm.getArtist(ArtistData)
	});


	

	app.get ("/api/random", function (req, res) {
	orm.getRandArtist()
	})
	app.get ("/api/register", function (req, res) {
		orm.putUser(user,pass)
	})
