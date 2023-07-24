"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require("mongoose");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoDB = process.env.MONGO_URL;
mongoose_1.default
    .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
    console.log("DB connected");
});
// Get the default connection
const db = mongoose_1.default.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
module.exports = db;
// module.exports = mongoose;
exports.default = mongoose_1.default;
