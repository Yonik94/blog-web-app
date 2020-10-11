const bcrypt = require('bcrypt');
const userService = require('../user/user.service');
const logger = require('../../services/logger.service');
const saltRounds = 10;

module.exports = {
    login,
    signup,
    getLoggedInUser
}

async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`);
    if (!username || !password) return Promise.reject('username and password are required!');
    let user = await userService.getByUserName(username);
    if (!user) return Promise.reject('Invalid username or password');
    hash =  user[0].password
    const match = await bcrypt.compare(password, hash);
    if (!match) return Promise.reject('Invalid username or password');
    user = await userService.getBy(user[0].id);
    return user[0];
}

async function signup(username, password) {
    logger.debug(`auth.service - signup with userName: ${username}`)
    if (!username || !password) return Promise.reject('username and password are required!')
    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({username, password: hash, posts: []})
}

async function getLoggedInUser(id) {
    const user = await userService.getBy(id);
    return user
}