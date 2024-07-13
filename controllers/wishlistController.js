const Wishlist = require('../models/Wishlist');

exports.createWishlist = async (req, res) => {
    const { userId, productIds } = req.body;

    try {
        const newWishlist = new Wishlist({ userId, products: productIds });
        await newWishlist.save();
        res.status(201).json({ message: 'Wishlist created successfully', wishlistId: newWishlist._id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create wishlist' });
    }
};

exports.getUserWishlists = async (req, res) => {
    const { userId } = req.params;

    try {
        const wishlists = await Wishlist.find({ userId }).populate('products');
        res.status(200).json(wishlists);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch wishlists' });
    }
};
