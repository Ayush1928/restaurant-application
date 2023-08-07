const { verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");
const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const User = require("../Models/User");

//Get User
router.get("/find/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;