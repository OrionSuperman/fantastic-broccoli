console.log('user.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	score: {type: Number, default: 0},
	_games: [{type: Schema.Types.ObjectId, ref: 'Game', default: []}]
})

mongoose.model('User', UserSchema);