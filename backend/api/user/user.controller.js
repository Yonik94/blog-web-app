const userService = require('./user.service');
const logger = require('../../services/logger.service');

module.exports = {
    query,
    getById,
    add,
    update,
    remove
}

async function query(req, res) {
    try {
        const users = await userService.query()
        res.send(users);
    } catch(err) {
        throw err
    }
}

async function getById(req, res) {
    try {
        const user = await userService.getBy(req.params.id)
        res.send(user);
    } catch(err) {
        throw err
    }
}

async function add(req, res) {
    try {
        const users = await userService.add(req.body);
        res.send(users);
    } catch(err) {
        throw err
    }
}

async function update(req, res) {
    try {
        const users = await userService.update(req.body);
        res.send(users);
    } catch(err) {
        throw err
    }
}

async function remove(req, res) {
    try {
        const users = await userService.remove(req.params.id);
        res.send(users);
    } catch(err) {
        throw err
    }
}