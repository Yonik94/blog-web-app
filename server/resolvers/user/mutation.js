const { getUserId } = require('../../utils');
const bcrypt = require('bcryptjs');
const addUser = async (parent, args, context, info) => {
    const userId = getUserId(context);
    const password = await bcrypt.hash(args.password, 10)
    let sql = `INSERT INTO user (name, username, password) VALUES(
        "${args.fullName}",
        "${args.username}"
        "${password}"
    )`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    sql = `SELECT name, username FROM user WHERE id = ${OkPacket.insertId}`
    const res = await context.dbService.runSQL(sql);
    const newUser = res[0];
    // context.pubsub.publish("NEW_USER", newUser)
    return newUser;
}

const updateUser = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `UPDATE user SET
    name = "${args.fullName}", username = "${args.username}" WHERE id = ${args.id}`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    sql = `SELECT FROM username WHERE id = ${args.id}`;
    const res = await context.dbService.runSQL(sql);
    const user = res[0];
    return user;
}

const removeUser = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `SELECT FROM user WHERE id = ${args.id}`;
    const res = await dbService.runSQL(sql);
    const user = res[0];
    sql = `DELETE FROM user WHERE id = ${args.id}`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    return user;
}

module.exports = {
    addUser,
    updateUser,
    removeUser
}