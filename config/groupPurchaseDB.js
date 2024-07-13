const mongoose = require('mongoose');

const connectGroupPurchaseDB = async () => {
    const groupPurchaseDB = mongoose.createConnection('mongodb://localhost:27017/group-purchase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Group Purchase MongoDB connected...');
    return groupPurchaseDB;
};

module.exports = connectGroupPurchaseDB;


// const mongoose = require('mongoose');

// const connectGroupPurchaseDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/group-purchase', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Group Purchase MongoDB connected...');
//     } catch (err) {
//         console.error('Error connecting to Group Purchase DB:', err.message); // 수정: 에러 메시지를 명확히 함
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectGroupPurchaseDB;
