
var Sequelize = require ("sequelize");

var sequelize = new Sequelize("ourRappersDB", "root", "root" {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 6,
		mon: 0,
		idle: 20000
	}
});


module.exports = sequelize;