console.log('routes.js');

var users = require('./../controllers/users.js');
var games = require('./../controllers/games.js');

module.exports = function(app){
	app.get('/', function(req, res){

	});

	app.get('/user/:id', function(req, res){
		users.show(req, res);
	});

	app.post('/users', function(req, res){
		users.create(req, res);
	})

	// app.put('/users', function(req, res){
	// 	users.update(req, res);
	// })

	// app.get('/game/:id', function(req, res){
	// 	games.show(req, res);
	// })

	// app.get('/games', function(req, res){
	// 	games.index(req, res);
	// })

	app.post('/games', function(req, res){
		games.create(req, res);
	})

	app.put('/games', function(req, res){
		games.update(req, res);
	})

	// app.post('/games/delete', function(req, res){
	// 	console.log("ROUTES DELETE");
	// 	console.log(req.body);
	// 	games.delete(req, res);
	// })
};