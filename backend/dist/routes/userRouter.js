"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const User = require("../models/userModel");
router.post("/create-user", (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        _id: req.body._id,
    });
    user.save((err, user) => {
        if (err) {
            res.status(400).send({ error: err });
        }
        else {
            res.status(200).send({ data: user });
        }
    });
});
exports.default = router;
