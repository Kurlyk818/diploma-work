const mongoose = require("mongoose");

const { Schema } = mongoose;

const FavoriteSchema = new Schema({
    name: String,
    type: String,
    imageUrl: String,
    ingredients: [String],
    alergens: [String],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Favorite", FavoriteSchema );