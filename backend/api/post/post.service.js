const logger = require('../../services/logger.service');
const dbService = require('../../services/db.service');
module.exports = {
    query,
    add,
    update,
    remove,
    getBy
}

async function query() {
    const sql = 'SELECT * FROM post';
    return dbService.runSQL(sql);
}

async function add(post) {
    const sql = `INSERT INTO post (title, content)
    VALUES(
        "${post.title}",
        "${post.content}"
    )`;
    await dbService.runSQL(sql);
    return query()
}

async function update(post) {
    const sql = `UPDATE post set
    title = "${post.title}", content = "${post.content}" WHERE id = ${post.id}`;
    await dbService.runSQL(sql);
    return query()
}

async function getBy(id) {
    const sql = `SELECT * FROM post WHERE id = ${id}`;
    return dbService.runSQL(sql);
}

async function remove(id) {
    const sql = `DELETE FROM post WHERE id = ${id}`;
    var okPacket = await dbService.runSQL(sql);
    if (okPacket.affectedRows !== 0) {
        return query()
    } else {
        return `No user removed - user id ${id} `
    }
}