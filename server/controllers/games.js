console.log('polls.js');

var mongoose = require('mongoose');
var Poll = mongoose.model('Poll', []);
var User = mongoose.model('User', []);

module.exports = (function(){
	return {
		index: function(req, res){
			Poll.find({})
			.populate('_user')
			.exec(function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		show: function(req, res){
			Poll.findOne({_id: req.params.id}, function(err, results){
				if(err){
					console.log(err);
				} else {
					console.log(results);
					res.json(results);
				}
			})
		},
		create: function(req, res){
			req.body.answers = [];
			for(each in req.body.option){
				req.body.answers.push({option: req.body.option[each], votes: 0});
			}
			var poll = new Poll(req.body);
			console.log(poll);
			poll.save(function(err){
				if(err){
					console.log(err);
				} else {
					res.json(poll);
				}
			})
		},
		delete: function(req, res){
			console.log("THISISTHEBODY");
			console.log(req.body);
			Poll.remove({_id: req.body._id}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		update: function(req, res){
			Poll.findOne({_id: req.body.poll._id}, function(err, results){
				if(err){
					console.log(err);
				} else {
					for(each in results.answers){
						if(results.answers[each]._id == req.body.answer._id){
							results.answers[each].votes += 1;
							
						}
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