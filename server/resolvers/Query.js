const  { blogs, blog } = require('./blog/query');
const  { users, user } = require('./user/query');
const  { posts, post } = require('./post/query');

module.exports = {
    blogs,
    blog,
    posts,
    post,
    users,
    user
}