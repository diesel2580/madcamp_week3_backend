const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    externalUrl: { type: String, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);