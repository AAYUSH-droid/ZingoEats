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
require("dotenv").config();
const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
var _ = require("lodash");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = process.env.MONGO_URL;
        const client = new MongoClient(uri);
        try {
            yield client.connect();
            const productsCollection = client.db("tomato").collection("products");
            const categoriesCollection = client.db("tomato").collection("categories");
            let categories = ["breakfast", "lunch", "dinner", "drinks"].map((category) => {
                return {
                    name: category,
                };
            });
            yield categoriesCollection.insertMany(categories);
            let imageUrls = [
                "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png",
                "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png",
                "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png",
            ];
            let products = [];
            for (let i = 0; i < 10; i++) {
                let newProduct = {
                    name: faker.commerce.productName(),
                    adjective: faker.commerce.productAdjective(),
                    desciption: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    category: _.sample(categories),
                    imageUrl: _.sample(imageUrls),
                };
                products.push(newProduct);
            }
            yield productsCollection.insertMany(products);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            yield client.close();
        }
    });
}
main();
