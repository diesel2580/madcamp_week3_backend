const mongoose = require('mongoose');

const GroupPurchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    targetCount: { type: Number, required: true },
    currentCount: { type: Number, default: 0 }
});

const groupPurchaseDB = mongoose.createConnection('mongodb://localhost:27017/group-purchase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const GroupPurchase = groupPurchaseDB.model('GroupPurchase', GroupPurchaseSchema);


module.exports = GroupPurchase