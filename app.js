const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectUsersDB = require('./config/usersDB');
const connectGroupPurchaseDB = require('./config/groupPurchaseDB');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const groupPurchaseRoutes = require('./routes/groupPurchaseRoutes');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

const startServer = async () => {
    await connectUsersDB(); // 수정: 유저 데이터베이스 연결
    await connectGroupPurchaseDB(); // 수정: 공동구매 데이터베이스 연결

    // Define Routes
    app.use('/api/users', userRoutes);
    app.use('/api/products', productRoutes);
    app.use('/api/wishlists', wishlistRoutes);
    app.use('/api/group-purchases', groupPurchaseRoutes);

    const PORT = process.env.PORT || 5003;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

startServer();

// //필오한 db 연결
// connectUsersDB();
// connectGroupPurchaseDB();

// // Define Routes
// app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/wishlists', wishlistRoutes);
// app.use('/api/group-purchases', groupPurchaseRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
