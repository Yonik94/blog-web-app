import { blogQueries } from './blog.query';
import { blogMutations } from './blog.mutation';
import { client } from '../index'

export const blogService = {
    query,
    add,
    getBlogById
}

async function query(selectedKeys, name = null) {
    const res = await client.query({
        query: blogQueries.blogsQuery(selectedKeys, name)
    });
    const blogs = res.data.blogs;
    client.clearStore();
    return blogs;
}

async function add(blogCreds) {
    const res = await client.mutate({
        mutation: blogMutations.addBlog(blogCreds)
    });
    return res.data.addBlog;
}

async function getBlogById(selectedKeys, id) {
    const res = await client.query({
        query: blogQueries.getBlogById(selectedKeys, id)
    })
    console.log({res});
    return res.data.blog
}