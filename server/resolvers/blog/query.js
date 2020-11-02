const blogs = (parent, args, context, info) => {
    const sql = `SELECT * FROM blog`;
    return context.dbService.runSQL(sql);
}

const blog = async (parent, args, context, info) => {
    const sql = `SELECT * FROM blog WHERE id = ${args.id}`;
    const res = await context.dbService.runSQL(sql);
    const blog = res[0]
    return blog;
}

module.exports = {
    blogs,
    blog
}