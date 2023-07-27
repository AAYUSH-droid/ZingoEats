require("dotenv").config();
const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
var _ = require("lodash");

async function main() {
  const uri =
    "mongodb+srv://aayush:hello@cluster0.zcrrttf.mongodb.net/FOOD-ORDER-APP?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const productsCollection = client.db("tomato").collection("products");
    const categoriesCollection = client.db("tomato").collection("categories");

    let categories = ["breakfast", "lunch", "dinner", "drinks"].map(
      (category) => {
        return {
          name: category,
        };
      }
    );
    await categoriesCollection.insertMany(categories);

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
    await productsCollection.insertMany(products);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();