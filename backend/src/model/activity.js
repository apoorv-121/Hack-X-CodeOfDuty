const { format } = require("date-fns");
const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    month: {
      type: String,
      default: format(Date.now(), "MMM-yyyy"),
    },
    completed: {
      type: Boolean,
      default: false,
    },
    imageURL: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Activity = mongoose.model("activity", activitySchema);
module.exports = Activity;
