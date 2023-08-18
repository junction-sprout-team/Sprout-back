var express = require('express');
var router = express.Router();
var connectMongo = require('../utils/connectMongo');
require('dotenv').config();

var User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource123');
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    await connectMongo();
    // Check if the email or name already exists in the database
    var existingUser = await User.findOne({ $or: [{ email: req.body.email }, { name: req.body.name }] });
    if (existingUser) {
      if (existingUser.email === req.body.email) {
        res.status(400).json({ message: "Email already exists" });
      } else if (existingUser.name === req.body.name) {
        res.status(400).json({ message: "Name already exists" });
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
    var existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      if (existingUser.password == req.body.password) {
        res.status(200).json({ message: "Success signin" });
      } else {
        res.status(400).json({ message: "비밀번호가 일치하지 않습니다" });
      }
    } else {
      res.status(400).json({ message: "아이디가 존재하지 않습니다" });
    }
    console.log(existingUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
