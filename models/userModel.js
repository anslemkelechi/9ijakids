const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please Input Firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please Input Lastname"],
    },
    email: {
      type: String,
      required: [true, "Please Input Email Address"],
      validate: [validator.isEmail, "Please provide a valid email address"],
      unique: true,
    },
    phonenumber: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
