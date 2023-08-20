var express = require('express');
var router = express.Router();
var connectMongo = require('../utils/connectMongo');
require('dotenv').config();

var User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a users');
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    await connectMongo();
    // Check if the userID or userName already exists in the database
    var existingUser = await User.findOne({ $or: [{ userID: req.body.userID }, { userName: req.body.userName }] });
    if (existingUser) {
      if (existingUser.userID === req.body.userID) {
        res.status(400).json({ message: "userID already exists" });
      } else if (existingUser.userName === req.body.userName) {
        res.status(400).json({ message: "userName already exists" });
      }
    } else {
      // Create a new user using the user model and save it to the database
      var newUser = new User(req.body);
      await newUser.save();
      res.status(200).json({ message: "User added successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    console.log(req.body);
    await connectMongo();
    var existingUser = await User.findOne({ userID: req.body.userID });

    if (existingUser) {
      if (existingUser.password == req.body.password) {
        res.status(200).json({ message: "Success signin" });
      } else {
        console.log("Password doesn't match");
        res.status(400).json({ message: "Password doesn't match" });
      }
    } else {
      console.log("Id does not exist");
      res.status(400).json({ message: "Id does not exist" });
    }
    console.log(existingUser);
  } catch (err) {
    console.error(err);
    console.log("Internal Server Error");
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/change", async (req, res) => {
  try {
    console.log(req.body);
    await connectMongo();
    var updateResult = await User.findOneAndUpdate(
      { userID: req.body.userID },
      { userName: req.body.afterName },
      { new: true }
    );
    if (updateResult) {
      res.status(200).json({ message: "Name changed successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    console.log("Internal Server Error");
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
