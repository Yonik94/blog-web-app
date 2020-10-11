const logger = require('../../services/logger.service');
const dbService = require('../../services/db.service');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    query,
    getBy,
    add,
    update,
    remove,
    getByUserName
}

async function query() {
    const sql = 'SELECT * FROM user';
    return dbService.runSQL(sql);
}

async function add(user) {
    const hash = await bcrypt.hash(user.password, saltRounds)
    const sql = `INSERT INTO user (username, password, fullName)
    VALUES(
        "${user.username}",
        "${hash}",
        "${user.fullName}"
    )`;
    await dbService.runSQL(sql);
    return query()
}

async function update(user) {
    const sql = `UPDATE user set
    username = "${user.username}", fullName = "${user.fullName}" WHERE id = ${user.id}`;
    await dbService.runSQL(sql);
    return query()
}

async function getBy(id) {
    const sql = `SELECT id, username, fullName FROM user WHERE id = ${id}`;
    return dbService.runSQL(sql);
}

async function remove(id) {
    const sql = `DELETE FROM user WHERE id = ${id}`;
    var okPacket = await dbService.runSQL(sql);
    if (okPacket.affectedRows !== 0) {
        return query()
    } else {
        return `No user removed - user id ${id} `
    }
} 

async function getByUserName(username) {
    const sql = `SELECT * FROM user WHERE username = "${username}"`;
    return await dbService.runSQL(sql);
}


















// module.exports = {
//     query,
//     getById,
//     getByUserName,
//     add,
//     addForm
// }

// async function query(filterBy = {}) {
//     const criteria = _buildCriteria(filterBy);
//     const collection = await dbService.getCollection('user');
//     try {
//         const users = await collection.find(criteria).toArray();
//         users.forEach(user => {
//             delete user.password
//         });
//         return users
//     } catch (err) {
//         console.log('ERROR: cannot find users');
//         logger.error(err);
//         throw err;
//     }
// }

// async function getById(userId) {
//     const collection = await dbService.getCollection('user');
//     try {
//         const user = await collection.findOne({ "_id": ObjectId(userId) });
//         delete user.password;
//         return user
//     } catch (err) {
//         console.log(`ERROR: while finding user ${userId}`);
//         logger.error(err);
//         throw err;
//     }
// }

// async function getByUserName(userName) {
//     const collection = await dbService.getCollection('user');
//     try {
//         const user = await collection.findOne({ userName });
//         return user
//     } catch (err) {
//         console.log(`ERROR: while finding user ${userName}`);
//         logger.error(err);
//         throw err;
//     }
// }

// async function add(user) {
//     const collection = await dbService.getCollection('user');
//     try {
//         await collection.insertOne(user);
//         delete user.password
//         return user
//     } catch (err) {
//         console.log(`ERROR: while insert user`);
//         logger.error(err);
//         throw err;
//     }
// }

// async function addForm(form, userId) {
//     try {
//         const collection = await dbService.getCollection('user');
//         const user = await collection.findOne({ "_id": ObjectId(userId) });
//         const forms = user.forms;
//         (forms) ? forms.push(form._id) : forms = [form._id];
//         await collection.updateOne({ "_id": ObjectId(userId) }, {$set: {forms: forms}});
//         const updatedUser = await getById(userId);
//         return updatedUser;
//     } catch (err) {
//         logger.error(err);
//         throw err
//     }
// }

// function _buildCriteria(filterBy) {
//     var searchString = new RegExp(filterBy.txt, 'i');
//     const criteria = { $or: [{ fullName: { $regex: searchString } }, { email: { $regex: searchString } }] }
//     return criteria;
// }
