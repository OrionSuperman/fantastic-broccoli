console.log('games.js');

var mongoose = require('mongoose');
var Game = mongoose.model('Game', []);
var User = mongoose.model('User', []);

var table = [[30, -10, 10],
			 [-10, 20, -20],
			 [10, -20, 30]
			]

module.exports = (function(){
	// return {
	// 	index: function(req, res){
	// 		Game.find({})
	// 		.populate('_user')
	// 		.exec(function(err, results){
	// 			if(err){
	// 				console.log(err);
	// 			} else {
	// 				res.json(results);
	// 			}
	// 		})
	// 	},
		// show: function(req, res){
		// 	Game.findOne({_id: req.params.id}, function(err, results){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			console.log(results);
		// 			res.json(results);
		// 		}
		// 	})
		// },
		create: function(req, res){
			Game.findOne({}, {}, { sort: { 'created_at' : -1} }, function(err, last_game){
				if(!last_game.userA){
					last_game.userA._user = req.body.user._id;
					res.json(last_game);
				} else {
					var game = new Game();
					game.user1._user = req.body._id;
					game.save(function(err){
						if(err){
							console.log(err);
						} else {
							res.json(game);
						}
					});
				}
			});
		},
		// delete: function(req, res){
		// 	console.log("THISISTHEBODY");
		// 	console.log(req.body);
		// 	Game.remove({_id: req.body._id}, function(err, results){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			res.json(results);
		// 		}
		// 	})
		// },
		update: function(req, res){
			Game.findOne({_id: req.body.game._id}, function(err, results){
				if(err){
					console.log(err);
				} else {
					if(results.user1._user == req.body.user._id){
						results.user1.answer = req.body.answer;
					} else {
						results.userA.answer = req.body.answer;
					}

					if(results.user1.answser && results.userA.answer){
						var points = table[results.user1.answer][results.userA.answer];
						User.findOne({_id: results.user1._id}, function(err, user){
							user.score += points;
							user.save(function(err){
								if(err){
									console.log(err);
								}
							})
						})
						User.findOne({_id: results.userA._id}, function(err, user){
							user.score -= points;
							user.save(function(err){
								if(err){
									console.log(err);
								}
							})
						})
					}

					results.save(function(err){
						if(err){
							console.log(err);
						} else {
							res.json(results);
						}
					})
				}
			})
		}
	}
})()