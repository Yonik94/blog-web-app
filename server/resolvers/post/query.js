const posts = (parent, args, context, info) => {
    const sql = `SELECT * FROM post`;
    return context.dbService.runSQL(sql);
}

const post = (parent, args, context, info) => {
    const sql = `SELECT * FROM post WHERE id = ${args.id}`;
    const res = context.dbService.runSQL(sql);
    const post = res[0];
    return post;
}

module.exports = {
    posts,
    post
}