const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})