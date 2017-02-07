var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; 
var _ = require('underscore');
var bodyParser = require('body-parser');
var db = require('./database.js');

app.use(bodyParser.json());

// GET /
app.get('/', function(req, res){
	res.send('Root path');
});

// GET /ministers
app.get('/ministers', function(req, res){
	db.minister.findAll().then(function(ministers){
		console.log(ministers);
		res.json(ministers);
	}, function(e){
		res.status(500).send();
	});
});

// GET /songs?minister_id=1
app.get('/songs', function(req, res){
	res.send('List of songs');
	console.log(req.query.minister_id);
});

// POST /ministers
app.post('/ministers', function(req, res){
	console.log(req.body);
	var body = _.pick(req.body, 'name', 'nickname', 'photo_url');
	db.minister.create(body).then(function(todo){
		res.json(todo.toJSON());
	}, function(e){
		res.status(500).json(e);
	});
});

db.sequelize.sync().then(function(){
	app.listen(PORT, function(req, res) {
		console.log('App listening');
	});
});