const users = (parent, args, context, info) => {
    const sql = `SELECT * FROM user`;
    return context.dbService.runSQL(sql);
}

const user = (parent, args, context, info) => {
    const sql = `SELECT * FROM user WHERE username = ${args.username}`;
    const res = context.dbService.runSQL(sql);
    const user = res[0];
    return user;
}

module.exports = {
    user,
    users
}