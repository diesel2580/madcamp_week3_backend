const GroupPurchase = require('../models/GroupPurchase');


exports.createGroupPurchase = async (req, res) => {
    const { userId, productId, targetCount } = req.body;

    try {
        const newGroupPurchase = new GroupPurchase({ userId, productId, targetCount });
        await newGroupPurchase.save();
        res.status(201).json({ message: 'Group purchase created successfully', groupPurchaseId: newGroupPurchase._id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create group purchase' });
    }
};


exports.getGroupPurchases = async (req, res) => {
    try {
        const groupPurchases = await GroupPurchase.find().populate('productId').populate('userId');
        res.status(200).json(groupPurchases);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch group purchases' });
    }
};

exports.joinGroupPurchase = async (req, res) => {
    const { userId, groupPurchaseId } = req.body;

    try {
        const groupPurchase = await GroupPurchase.findById(groupPurchaseId);
        if (!groupPurchase) {
            return res.status(404).json({ error: 'Group purchase not found' });
        }
        groupPurchase.participants.push(userId);
        groupPurchase.currentCount += 1;
        await groupPurchase.save();
        res.status(200).json({ message: 'Joined group purchase successfully', currentCount: groupPurchase.currentCount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to join group purchase' });
    }
};