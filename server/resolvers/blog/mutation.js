const { getUserId } = require('../../utils');
const addBlog = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `INSERT INTO blog (name, admin_id) VALUES(
        "${args.name}",
        "${userId}"
    )`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    sql = `SELECT * FROM blog WHERE id = ${OkPacket.insertId}`
    const res = await context.dbService.runSQL(sql);
    const newBlog = res[0];
    sql = `INSERT INTO blog_user (blog_id, user_id) VALUES(${newBlog.id}, ${userId})`
    await context.dbService.runSQL(sql);
    // context.pubsub.publish("NEW_BLOG", newBlog)
    return newBlog;
}

const updateBlog = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `UPDATE blog SET
    name = "${args.name}" WHERE id = ${args.id}`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    sql = `SELECT FROM blog WHERE id = ${args.id}`;
    const res = await context.dbService.runSQL(sql);
    const blog = res[0];
    return blog;
}

const removeBlog = async (parent, args, context, info) => {
    const userId = getUserId(context);
    let sql = `SELECT FROM blog WHERE id = ${args.id}`;
    const res = await dbService.runSQL(sql);
    const blog = res[0];
    sql = `DELETE FROM blog WHERE id = ${args.id}`;
    const OkPacket = await context.dbService.runSQL(sql);
    if (!OkPacket.affectedRows) throw new Error('Something went wrong, please try again later');
    return blog;
}

module.exports = {
    addBlog,
    updateBlog,
    removeBlog
}