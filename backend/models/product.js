const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    startdate: {
        type: Date
    },
    enddate: {
        type: Date
    },
    fridge: {
        type: Boolean
    },
    stove: {
        type: Boolean
    },
    kitchen: {
        type: Boolean
    },
    shower: {
        type: Boolean
    },
    waterTanks: {
        type: Boolean
    },
    waterSystem: {
        type: Boolean
    }
})

module.exports = mongoose.model("Product", productSchema);