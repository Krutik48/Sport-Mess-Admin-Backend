const mongoose = require('mongoose');

// menu schema - id, day, time, week, items array (array of item ids)
const menuSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    time: {
        type: String,
        required: true,
        enum: ["Breakfast", "Lunch", "Dinner"]
    },
    week: {
        type: String,
        required: true,
        enum: ["Odd", "Even"]
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    mess: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mess'
    }
}, { timestamps: true });


const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;