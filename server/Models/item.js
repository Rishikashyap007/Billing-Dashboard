const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    customerSellingPrice: {
        type: Number,
        required: true,
    },
    itemStatus: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
