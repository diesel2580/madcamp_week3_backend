const User = require('../models/User');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("Signup request received with:", { username, email, password }); //test
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        console.log("User registered successfully:", newUser); //
        res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
    } catch (error) {
        console.error("Error during signup:", error); // 로그 추가
        res.status(500).json({ error: 'Failed to register user' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', userId: user._id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
};

exports.addFriend = async (req, res) => {

    const { userId, friendId } = req.body;
    console.log(`Adding friend: userId=${userId}, friendId=${friendId}`); // 로그 추가
    try {
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);
        if (!user || !friend) {
            console.error("User or friend not found"); // 로그 추가
            return res.status(404).json({ error: 'User or friend not found' });
        }
        if (user.friends.includes(friendId)) {
            console.warn("Friend already added"); // 로그 추가
            return res.status(400).json({ error: 'Friend already added' });
        }
        user.friends.push(friendId);
        await user.save();
        console.log(`Friend added successfully: userId=${userId}, friendId=${friendId}`); // 로그 추가
        res.status(200).json({ message: 'Friend added successfully' });
    } catch (error) {
        console.error("Error during addFriend:", error); // 로그 추가
        res.status(500).json({ error: 'Failed to add friend' });
    }
};

// 새로운 API 추가: 현재 로그인된 유저 정보 반환
// exports.getCurrentUser = async (req, res) => {
//     const userId = req.params.id;
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         console.error("Error fetching user:", error); // 로그 추가
//         res.status(500).json({ error: 'Failed to fetch user' });
//     }
// };
exports.getCurrentUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error); // 로그 추가
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};