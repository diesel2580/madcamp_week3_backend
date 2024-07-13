const mongoose = require('mongoose');

const connectUsersDB = async () => {
    const userDB = mongoose.createConnection('mongodb://localhost:27017/users', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Users MongoDB connected...');
    return userDB;
};

module.exports = connectUsersDB;


// const mongoose = require('mongoose');

// const connectUsersDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/users', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Users MongoDB connected...');
//     } catch (err) {
//         console.error('Error connecting to Users DB:', err.message); // 수정: 에러 메시지를 명확히 함
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectUsersDB;
