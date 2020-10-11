import axios from 'axios';
export const postService = {
    query,
    addPost,
    updatePost,
    getPostBy,
    deletePost
}

async function query() {
    const res = await axios.get('http://localhost:3030/api/post/');
    return res.data
}

async function addPost(post) {
    const res = await axios.post('http://localhost:3030/api/post/', post);
    return res.data
}

async function updatePost(post) {
    const res = await axios.put(`http://localhost:3030/api/post/${post.id}`, post);
    return res.data
}

async function getPostBy(id) {
    const res = await axios.get(`http://localhost:3030/api/post/${id}`);
    return res.data[0]
}

async function deletePost(id) {
    const res = await axios.delete(`http://localhost:3030/api/post/${id}`);
    return res.data
}