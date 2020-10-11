const userService = require('./post.service');
const logger = require('../../services/logger.service');

module.exports = {
    query,
    add,
    update,
    remove,
    getById
}

async function query(req, res) {
    try {
        const posts = await userService.query()
        res.send(posts);
    } catch(err) {
        throw err
    }
}
async function getById(req, res) {
    try {
        const post = await userService.getBy(req.params.id)
        res.send(post);
    } catch(err) {
        throw err
    }
}

async function add(req, res) {
    try {
        const posts = await userService.add(req.body);
        res.send(posts);
    } catch(err) {
        throw err
    }
}

async function update(req, res) {
    try {
        const posts = await userService.update(req.body);
        res.send(posts);
    } catch(err) {
        throw err
    }
}

async function remove(req, res) {
    req.body = 2
    try {
        const posts = await userService.remove(req.params.id);
        res.send(posts);
    } catch(err) {
        throw err
    }
}