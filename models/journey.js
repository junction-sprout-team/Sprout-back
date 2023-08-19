var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journeySchema = new Schema({
    registerID: String,

    isMatch: { type: Boolean, default: false },
    isFinish: { type: Boolean, default: false },

    departure: String,
    destination: String,
    rideType: String,

    date: String,
    time: String,
    seatCount: String,
    price: Number,

    intro: String
});


module.exports = mongoose.model('journey', journeySchema);