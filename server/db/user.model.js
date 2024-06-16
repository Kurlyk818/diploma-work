const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type : String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type : String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    phoneNumber: {
        type: String,
        min: 7,
        max: 20,
    },
    location: {
        type: String,
        default: "N/A"
    },
    picturePath: {
        type: String,
        default: "user.png",
    },
},{timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User