console.log('games.js');

var mongoose = require('mongoose');
var Game = mongoose.model('Game', []);
var User = mongoose.model('User', []);

var table = [[30, -10, 10],
			 [-10, 20, -20],
			 [10, -20, 30]
			];

var gameQueue = [];

module.exports = (function(){
	return {
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
		show: function(req, res){
			Game.findOne({_id: req.params.id}, function(err, results){
				if(err){
					console.log(err);
				} else {
					// console.log(results);
					res.json(results);
				}
			})
		},
		create: function(req, res){
			if(gameQueue.length > 0 && gameQueue[gameQueue.length-1].user1._user != req.body._id){

				var newgame = gameQueue.pop();
				newgame.userA._user = req.body._id;
				newgame.save(function(err){
					if(err){
						console.log(err);
					} else {
						res.json(newgame);
					}
				});
			} else {
				var game = new Game();
				game.user1._user = req.body._id;
				game.save(function(err){
					if(err){
						console.log(err);
					} else {
						gameQueue.push(game);
						res.json(game);
					}
				});
			}
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
			// console.log(req.body);
			Game.findOne({_id: req.body.game._id}, function(err, results){
				if(err){
					console.log(err);
				} else {
					// console.log("FIRST");
					if(results.user1._user == req.body.user._id){
						// console.log("SECOND");
						results.user1.answer = req.body.answer;
					} else {
						// console.log("THIRD");
						results.userA.answer = req.body.answer;
						// console.log(results.userA);
						// console.log(results.user1);
					}

					
					results.save(function(err){
						if(err){
							console.log(err);
						} else {
							console.log("**************************************");
							console.log(results);
							if(results.user1.answer && results.userA.answer){
								console.log("FOURTH");

								var points = table[results.user1.answer][results.userA.answer];
								User.findOne({_id: results.user1._user}, function(err, user){
									console.log("FIFTH");
									console.log(points);
									console.log(user.score);
									user.score += points;
									console.log(user.score);
									user.save(function(err){
										if(err){
											console.log(err);
										}
										console.log("SIXTH");
										console.log(user);
									})
								})
								User.findOne({_id: results.userA._user}, function(err, user){
									console.log("SEVENTH");
									console.log(points);
									console.log(user.score);
									user.score -= points;
									console.log(user.score);
									user.save(function(err){
										if(err){
											console.log(err);
										}
										console.log("EIGTH");
										console.log(user);
									})
								})
							}
							console.log("NINTH");
							res.json(results);
						}
					})
				}
			})
		}
	}
})()