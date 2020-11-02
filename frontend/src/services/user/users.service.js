import axios from 'axios';
export const userService = {
    query,
    addUser,
    updateUser,
    getUserBy,
    deleteUser,
    login,
    getLoggedInUser
}

async function query() {
    const res = await axios.get('http://localhost:3030/api/user/');
    return res.data;
}

async function addUser(user) {
    const res = await axios.post('http://localhost:3030/api/user/', user);
    return res.data
}

async function updateUser(user) {
    const res = await axios.put(`http://localhost:3030/api/user/${user.id}`, user);
    return res.data
}

async function getUserBy(id) {
    const res = await axios.get(`http://localhost:3030/api/user/${id}`);
    return res.data[0]
}

async function deleteUser(id) {
    const res = await axios.delete(`http://localhost:3030/api/user/${id}`);
    return res.data
}

async function login(creds) {
    const res = await axios.post(`http://localhost:3030/api/auth/login/`, creds);
    return res.data
}

async function getLoggedInUser() {
    const res = await axios.get(`http://localhost:3030/api/auth/isLoggedIn/`);
    return res.data
}

