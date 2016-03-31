console.log('user.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	score: {type: Number, default: 0},
})

mongoose.model('User', UserSchema);