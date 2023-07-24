export {};
const mongoose = require("../db/index");
const { Schema } = mongoose;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
