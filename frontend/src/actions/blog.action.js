import { blogService } from '../services/blog/blog.service';

export const setBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogService.query();
        console.log({blogs});
        return dispatch({ type: 'SET_BLOGS', blogs });
    }
}

export const addBlog = (creds) => {
    return async (dispatch) => {
        const blog = await blogService.add(creds);
        if (!blog) return 'failed';
        const blogs = await blogService.query();
        return dispatch({ type: 'SET_BLOGS', blogs });
    }
}

export const getBlog = (id) => {
    return async (dispatch) => {
        const blog = await blogService.getBlogById(id)
        if (!blog) return 'failed';
        return blog
    }
}