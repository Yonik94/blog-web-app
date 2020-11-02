const jwt = require('jsonwebtoken');
const APP_SECRET = '7e9ca002f0ea22d744ffb9017c0a6ffd94d1c20768e37a08ce971238baee4a2f42f571b8f13c71a8452f98d089487abda00ed4a9085a5db0505d6cc42094a693';

module.exports = {
    APP_SECRET,
    getUserId
}

function getUserId(context) {
    const token = context.cookies && context.cookies.token;
    const { userId } = jwt.verify(token, APP_SECRET);
    if (userId) {
        return userId;
    }
    throw new Error('Not authenticated');
}