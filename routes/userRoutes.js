const express = require('express');
const { signup, login, addFriend, getCurrentUser } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup);//회원가입
router.post('/login', login);//로그인
router.post('/add-friend', addFriend);//친추
router.get('/:id', getCurrentUser);
// router.get('/:id', userController.getCurrentUser);//유저 정보 반환

module.exports = router;
