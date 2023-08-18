var express = require('express');
var router = express.Router();
var connectMongo = require('../utils/connectMongo');
require('dotenv').config();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource123');
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    await connectMongo();
    console.log("connect");
    res.status(200).json({ message: "User added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
