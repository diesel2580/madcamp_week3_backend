const express = require('express');
const { createWishlist, getUserWishlists } = require('../controllers/wishlistController');
const router = express.Router();

router.post('/', createWishlist);
router.get('/:userId', getUserWishlists);

module.exports = router;
