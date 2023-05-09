const express = require("express");
const router = new express.Router();
require("dotenv").config();
const cors = require("cors");
const { format, endOfMonth, parse, startOfToday } = require("date-fns");

const Activity = require("../model/activity");

router.use(
  cors({
    origin: "*",
  })
);

router.post("/activities", async (req, res) => {

  const activity = new Activity({
    title: req.body.title,
    month: format(startOfToday(), "MMM-yyyy"),
    completed: false,
  });

  try {
    await activity.save();
    res.status(201).send({ msg: "successfully added" });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/activities", async (req, res) => {
  try {

    const activity = await Activity.findOneAndUpdate(
      { _id: req.body._id },
      { completed: true, imageURL: req.body.imageURL }
    );
    await activity.save();
    res.status(201).send({ msg: "successfully updated" });
  } catch (e) {

    res.status(400).send(e);

  }
});

router.get("/activities", async (req, res) => {
  const currentMonth = format(startOfToday(), "MMM-yyyy");

  const activities = await Activity.find({
    month: currentMonth,
  });

  res.status(200).send(activities);
});

module.exports = router;
