const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
        unique: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    amount: {
        type: Number,
        required: false
    }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;