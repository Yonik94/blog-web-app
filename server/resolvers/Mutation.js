const { login, signup } = require('./auth/mutation');
const { addBlog, updateBlog, removeBlog } = require('./blog/mutation.js');
const { addPost, updatePost, removePost } = require('./post/mutation.js');
const { addUser, updateUser, removeUser } = require('./user/mutation.js');

module.exports = {
    signup,
    login,
    addBlog,
    updateBlog,
    removeBlog,
    addPost,
    updatePost,
    removePost,
    addUser,
    updateUser,
    removeUser
}