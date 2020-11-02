const posts = async (parent, args, context, info) => {
    let sql = `SELECT post_id FROM user_post WHERE user_id = ${parent.id}`
    let postsIds = await context.dbService.runSQL(sql);
    if(!postsIds.length) return [];
    postsIds = postsIds.map(item => item.post_id);
    sql = `SELECT * FROM post WHERE id IN(${postsIds})`;
    const posts = await context.dbService.runSQL(sql);
    return posts;
}
const blogs = async (parent, args, context, info) => {
    let sql = `SELECT blog_id FROM blog_user WHERE user_id = ${parent.id}`
    let blogsIds = await context.dbService.runSQL(sql);
    if(!blogsIds.length) return [];
    blogsIds = blogsIds.map(item => item.blog_id);
    sql = `SELECT * FROM blog WHERE id IN(${blogsIds})`;
    const blogs = await context.dbService.runSQL(sql);
    return blogs;
}

 module.exports = {
     posts,
     blogs
 }