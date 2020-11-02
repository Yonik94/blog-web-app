const blog = async (parent, args, context, info) => {
    let sql = `SELECT blog_id FROM blog_post WHERE post_id = ${parent.postedBy}`;
    let res = await context.dbService.runSQL(sql);
    const blogId = res[0];
    sql = `SELECT * FROM blog WHERE id = ${blogId}`;
    res = await context.dbService.runSQL(sql);
    const blog = res[0];
    return blog;
}
const user = async (parent, args, context, info) => {
    let sql = `SELECT user_id FROM user_post WHERE post_id = ${parent.postedBy}`;
    let res = await context.dbService.runSQL(sql);
    const userId = res[0];
    sql = `SELECT * FROM user WHERE id IN(${usersIds})`;
    res = await context.dbService.runSQL(sql);
    const user = res[0];
    return user;
}

module.exports = {
    blog,
    user
}