console.log('users.js');

var mongoose = require('mongoose');
var User = mongoose.model('User', []);

module.exports = (function(){
	return {
	
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