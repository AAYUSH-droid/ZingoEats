import express, { Express, Request, Response } from "express";
import { deflate } from "zlib";
const router = express.Router();

const Product = require("../models/productModel");

router.get("/products", async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).send({ data: products });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get("/products-by-categories", async (req: Request, res: Response) => {
  try {
    const products = await Product.aggregate([
      { $match: {} },
      {
        $group: {
          _id: "$category",
          products: { $push: "$$ROOT" },
        },
      },
      { $project: { name: "$_id", products: 1, _id: 0 } },
    ]);
    res.status(200).send({ data: products });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// module.exports = router;
export default router;
