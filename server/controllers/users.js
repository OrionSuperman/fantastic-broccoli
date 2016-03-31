console.log('users.js');

var mongoose = require('mongoose');
var User = mongoose.model('User', []);

module.exports = (function(){
	return {
		show: function(req, res){
			console.log(req);
			User.findOne({_id, req}, function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		create: function(req, res){
			var user = new User(req.body);
			user.save(function(err){
				if(err){
					console.log(err);
				} else {
					res.json(user);
				}
			})
		}
	}
})()