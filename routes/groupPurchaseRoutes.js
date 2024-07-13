const express = require('express');
const {
    createGroupPurchase,
    getGroupPurchases,
    joinGroupPurchase
} = require('../controllers/groupPurchaseController');
const router = express.Router();

router.post('/', createGroupPurchase);
router.get('/', getGroupPurchases);
router.post('/join', joinGroupPurchase);

module.exports = router;
