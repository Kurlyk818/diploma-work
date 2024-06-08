const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
    client: {
        name: String,
        email: String,
        address: String
    },
    products: [{
        name: String,
        imageUrl: String,
        price: Number,
        quantity: Number
    }],
    totalCost: Number,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", OrderSchema );