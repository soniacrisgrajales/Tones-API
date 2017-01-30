var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/data/tones-database.sqlite'
});

var db = {};
db.minister = sequelize.import('./models/minister.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;