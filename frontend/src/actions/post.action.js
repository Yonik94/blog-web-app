import { postService } from '../services/post.service';

export const setPosts = () => {
    return async (dispatch) => {
        const posts = await postService.query();
        return dispatch({ type: 'SET_POSTS', posts });
    }
}

export const addPost = (post) => {
    return async (dispatch) => {
        const posts = await postService.addPost(post);
        return dispatch({ type: 'SET_POSTS', posts });
    }
}

export const updatePosts = (post) => {
    return async (dispatch) => {
        const posts = await postService.updatePost(post);
        return dispatch({ type: 'SET_POSTS', posts });
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        const posts = await postService.deletePost(id);
        return dispatch({ type: 'SET_POSTS', posts });
    }
}