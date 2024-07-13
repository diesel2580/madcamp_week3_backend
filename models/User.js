const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    groupPurchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GroupPurchase' }],
});

const userDB = mongoose.createConnection('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = userDB.model('User', UserSchema);

// module.exports = mongoose.model('User', UserSchema);
module.exports = User;

