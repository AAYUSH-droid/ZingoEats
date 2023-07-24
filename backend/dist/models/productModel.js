"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require("../db/index");
const index_1 = __importDefault(require("../db/index"));
const Schema = index_1.default.Schema;
// const ObjectId = Schema.ObjectId;
const CategorySchema = new Schema({
    name: String,
});
const ProductSchema = new Schema({
    name: String,
    description: String,
    price: String,
    category: String,
});
module.exports = index_1.default.model("Product", ProductSchema);
