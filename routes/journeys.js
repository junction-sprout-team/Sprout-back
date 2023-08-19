var express = require('express');
var router = express.Router();
var connectMongo = require('../utils/connectMongo');
require('dotenv').config();

var User = require('../models/user')
var Journey = require('../models/journey')

var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a journeys');
});

router.get("/all", async (req, res) => {
  try {
    await connectMongo();
    var journeys = await Journey.find({});
    var journeys = await Journey.find({ isMatch: false });
    res.status(200).json(journeys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/rideRequest", async (req, res) => {
  try {
    await connectMongo();
    var journeys = await Journey.find({ rideType: "rideRequest", isMatch: false });
    res.status(200).json(journeys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/rideOffer", async (req, res) => {
  try {
    await connectMongo();
    var journeys = await Journey.find({ rideType: "rideOffer", isMatch: false });
    
    res.status(200).json(journeys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    await connectMongo();
    var newJourney = new Journey(req.body);
    await newJourney.save();
    console.log(newJourney._id.toString());

    // Find the user with the matching registerID and update their journeyList
    var updatedUser = await User.findOneAndUpdate(
      { userID: req.body.registerID },
      { $push: { journeyList: newJourney._id.toString() } },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).json({ message: "Journey added successfully" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// journey의 objectID와 match버튼을 누른 사람의 userID 있으면 될 듯.
router.post("/match", async (req, res) => {
  try {
    console.log(req.body);
    await connectMongo();
    var user = await User.findOne({ userID: req.body.userID });

    var idString = req.body.objectID;
    var objectId = new mongoose.Types.ObjectId(idString);

    if (user) {
      // Find the journey with the matching objectID and update its isMatch field to true
      var updatedJourney = await Journey.findByIdAndUpdate(
        objectId,
        { isMatch: true },
        { new: true }
      );
      res.status(200).json({ message: "Journey matched successfully" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



module.exports = router;
