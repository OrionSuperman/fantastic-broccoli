console.log('routes.js');

var users = require('./../controllers/users.js');
var polls = require('./../controllers/polls.js');

module.exports = function(app){
	app.get('/', function(req, res){

	});

	// app.get('/users', function(req, res){
	// 	users.index(req, res);
	// });

	app.post('/users', function(req, res){
		users.create(req, res);
	})

	// app.put('/users', function(req, res){
	// 	users.update(req, res);
	// })

	app.get('/poll/:id', function(req, res){
		polls.show(req, res);
	})

	app.get('/polls', function(req, res){
		polls.index(req, res);
	})

	app.post('/polls', function(req, res){
		polls.create(req, res);
	})

	app.put('/polls', function(req, res){
		polls.update(req, res);
	})

	app.post('/polls/delete', function(req, res){
		console.log("ROUTES DELETE");
		console.log(req.body);
		polls.delete(req, res);
	})
};