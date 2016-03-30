console.log('user.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	score: Number,
})

mongoose.model('User', UserSchema);