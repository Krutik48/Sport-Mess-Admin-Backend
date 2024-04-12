const mongoose = require('mongoose');

// mess schema - id, name (unique)

const messSchema = new mongoose.Schema({
    messName: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Mess = mongoose.model('Mess', messSchema);
module.exports = Mess;