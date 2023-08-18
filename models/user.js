var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    name: String
});

module.exports = mongoose.model('user', userSchema);