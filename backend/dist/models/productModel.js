"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Category = void 0;
// const mongoose = require("../db/index");
// import mongoose from "../db/index";
const mongoose = require("../db/index");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const CategorySchema = new Schema({
    name: String,
});
const ProductSchema = new Schema({
    name: String,
    description: String,
    price: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category", // Refers to the Category model
    },
});
const Category = mongoose.model("Category", CategorySchema);
exports.Category = Category;
const Product = mongoose.model("Product", ProductSchema);
exports.Product = Product;
