const { APP_SECRET } = require('../../utils');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const signup = async (parent, args, context, info) => {
    // Encrypt password with hashing
    const password = await bcrypt.hash(args.password, 10);
    // Save user
    let sql = `INSERT INTO user (fullName, username, password)
    VALUES(
        "${args.fullName}",
        "${args.username}",
        "${password}"
    )`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, try again later');
    sql = `SELECT * FROM user WHERE username = "${args.username}"`
    const user = await context.dbService.runSQL(sql);
    //Create token
    const token = jwt.sign({ userId: user[0].id }, APP_SECRET);
    context.res.cookie('token', token);
    return {
        token,
        user: user[0]
    };
};

const login = async (parent, args, context, info) => {
    // Find user
    const sql = `SELECT * FROM user WHERE username = "${args.username}"`;
    const results = await context.dbService.runSQL(sql);
    const user = results[0]
    if (!user) throw new Error('Invalid username or password');
    // valid user password to input password: 
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) throw new Error('Invalid username or password');
    // If all vlid create token
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    context.res.cookie('token', token, {httpOnly: true, secure: false, maxAge: 3600000});
    return {
        token,
        user
    };
};

module.exports = {
    login,
    signup
}