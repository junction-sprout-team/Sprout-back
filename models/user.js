var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userID: String,
    password: String,
    userName: String,
    journeyList: {
        type: [String],
        default: []
    }
});


module.exports = mongoose.model('user', userSchema);