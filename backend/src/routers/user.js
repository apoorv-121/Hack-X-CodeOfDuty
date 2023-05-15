const express = require("express");
const User = require("../model/usermodel");
require("dotenv").config();
const router = new express.Router();
var cors = require("cors");
router.use(
  cors({
    origin: "*",
  })
);

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    const token = await user.generateAuthToken(user);
    user.token = token;
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    if (!user) res.status(400).send("No user found!!");

    const token = await user.generateAuthToken(user);
    user.set("token", token);
    userObj = { ...user._doc, token };
    res.status(201).send(userObj);
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});


module.exports = router;
