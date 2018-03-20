var Sequelize = require ("sequelize");

var sequelize = require ("../config/connection.js");

var artist = sequelize.define ("artist", {
	
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},


	name: {
		type: Sequelize.STRING,
	},

	uWordsNum: {
		type: Sequelize.INTEGER,
	},

	uWords: {
		type: Sequelize.STRING,
	},

	uWordsProp: {
		type: Sequelize.FLOAT,
	},

	wordsUToArtist: {
		type: Sequelize.STRING,
	},

	numSongs: {
		type: Sequelize.INTEGER,
	},

	wordsPerSong: {
		type: Sequelize.FLOAT,
	}
}, {
	timestamps: false
});