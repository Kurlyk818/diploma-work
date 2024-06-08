require("dotenv").config();
const mongoose = require("mongoose");

const productList = require("./products.json");
const amounts = require("./amounts.json");
const ProductModel = require("../db/product.model");

const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1); // exit the current program
}

const pick = (array) => array[Math.floor(Math.random() * array.length)];

const populateProducts = async () => {
    await ProductModel.deleteMany({});

    const products = productList.map((product) => ({
        // name: product.name,
        // type: product.type,
        // imageUrl: product.imageUrl,
        // ingredients: product.ingredients,
        // allergens: product.allergens,
        // price: product.price,
        ...product,
        amount: pick(amounts)
    }));

    await ProductModel.create(...products);
    console.log("Products created");
}

const main = async () => {
    await mongoose.connect(mongoUrl);

    await populateProducts();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

