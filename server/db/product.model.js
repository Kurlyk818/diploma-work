const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        lowercase: true,
        required: true,
    },
    imageUrl: String,
    ingredients: [String],
    alergens: [String],
    price: Number,
    amount: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", ProductSchema);