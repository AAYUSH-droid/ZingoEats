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
    type: Schema.Types.ObjectId, // Use Schema.Types.ObjectId
    ref: "Category", // Refers to the Category model
  },
});

const Category = mongoose.model("Category", CategorySchema);
const Product = mongoose.model("Product", ProductSchema);

// module.exports = mongoose.model("Product", ProductSchema);
export { Category, Product };
