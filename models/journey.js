var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journeySchema = new Schema({
    whoWrite: String,

    isMatch: { type: Boolean, default: false },
    isFinish: { type: Boolean, default: false },

    departure: String,
    destination: String,
    rideType: String,

    pickedDate: String,
    peopleRide: String,
    price: Number,

    introduce: String
});


module.exports = mongoose.model('journey', journeySchema);