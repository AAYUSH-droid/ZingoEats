"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Product = require("../models/productModel");
router.get("/products", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.find();
        res.status(200).send({ data: products });
    }
    catch (err) {
        res.status(400).send({ error: err });
    }
}));
router.get("/products-by-categories", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.aggregate([
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
    }
    catch (err) {
        res.status(400).send({ error: err });
    }
}));
// module.exports = router;
exports.default = router;
