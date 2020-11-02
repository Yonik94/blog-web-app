const { getUserId } = require('../../utils');

const addPost = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `INSERT INTO post (title, content) VALUES(
        "${args.title}",
        "${args.content}",
    )`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    sql = `SELECT * FROM post WHERE id = ${OkPacket.insertId}`
    const res = await context.dbService.runSQL(sql);
    const newPost = res[0];
    // context.pubsub.publish("NEW_POST", newPost);
    return newPost;
}

const updatePost = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `UPDATE post SET
    title = "${args.title}", description = "${args.content}" WHERE id = ${args.id}`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    sql = `SELECT FROM post WHERE id = ${args.id}`;
    const res = await context.dbService.runSQL(sql);
    const post = res[0];
    return post;
}

const removePost = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `SELECT FROM post WHERE id = ${args.id}`;
    const res = await dbService.runSQL(sql);
    const post = res[0];
    sql = `DELETE FROM post WHERE id = ${args.id}`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    return post;
}

module.exports = {
    addPost,
    updatePost,
    removePost
}