const Product = require("../db/product.model");
const  serverErrorHandler  = require("../middleware/ServerErrorHandler");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (err) {
        serverErrorHandler(res, err);
    }
}


const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        return res.status(201).json(savedProduct);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}


const updateProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { $set: req.body },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        return res.json(updatedProduct);
    } catch (err) {
        serverErrorHandler(res, err);
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        return res.json({ message: "Product deleted successfully" });
    } catch (err) {
        serverErrorHandler(res, err);
    }
}

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };