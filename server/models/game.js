console.log('game.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new mongoose.Schema({
	user1: {_user:{type: Schema.Types.ObjectId, ref: 'User'}, answer: Number},
	userA: {_user:{type: Schema.Types.ObjectId, ref: 'User'}, answer: Number},
	created_at: {type: Date, default: new Date}
})

mongoose.model('Game', GameSchema);