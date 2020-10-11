const authService = require('./auth.service');
const logger = require('../../services/logger.service');
const jwt = require('jsonwebtoken');
const userService = require('../user/user.service');
require('dotenv').config();

module.exports = {
    login,
    signup,
    getLoggedIn
}

async function getLoggedIn(req, res) {
    console.log(req.cookies.token);
    const cookie = req.cookies && req.cookies.token
    const token = cookie
    if(token) {
        const userId = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log({userId});
        const user = await authService.getLoggedInUser(userId);
        res.send(user);
    } else {
        res.send()
    }
}

async function login(req, res) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password);
        const accessToken = jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);
        // await res.cookie('token', accessToken, {httpOnly: true, secure: false, maxAge: 3600000});
        res.cookie('num', 1234);
        res.json(user);
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const { userName, password, } = req.body
        logger.debug(userName + ', ' + password)
        const account = await authService.signup(userName, password);
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account));
        const user = await authService.login(userName, password);
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.cookie('token', accessToken, {httpOnly: true, maxAge: 3600000, secure: false});
        res.json(user);
    } catch (err) {
        logger.error('[SIGNUP] ' + err)
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

