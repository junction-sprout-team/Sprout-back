var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userID: String,
    password: String,
    userName: String
});

module.exports = mongoose.model('user', userSchema);