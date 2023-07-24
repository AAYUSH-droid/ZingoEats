// const mongoose = require("mongoose");
import mongoose from "mongoose";
const mongoDB: any = process.env.MONGO_URL;

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((data: any) => {
    console.log("DB connected");
  });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;

module.exports = mongoose;
