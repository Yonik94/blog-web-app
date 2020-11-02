const users = async (parent, args, context, info) => {
    let sql = `SELECT user_id FROM blog_user WHERE blog_id = ${parent.id}`;
    let usersIds = await context().dbService.runSQL(sql);
    if(!blogsIds.length) return [];
        usersIds = usersIds.map(item => item.user_id);
    sql = `SELECT * FROM user WHERE id IN(${usersIds})`;
    const users = await context().dbService.runSQL(sql);
    return users;
}
const posts = async (parent, args, context, info) => {
    let sql = `SELECT post_id FROM blog_post WHERE blog_id = ${parent.id}`;
    let postsIds = await context.dbService.runSQL(sql);
    if(!postsIds.length) return [];
    postsIds = postsIds.map(item => item.post_id)
    sql = `SELECT * FROM post WHERE id IN(${postsIds})`;
    const posts = await context.dbService.runSQL(sql);
    return posts;

}

module.exports = {
    users,
    posts
}