const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validator(value) {
      if (value.toLowerCase.includes("password")) {
        throw new error('Password contain "password"');
      }
    },
  },
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    return { error: 'Unable to login', user:{}};
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return { error: 'Password not matched ,Unable to login', user:{}};

  }
  return { error: '', user};

};

//hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
