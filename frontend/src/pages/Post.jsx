import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPosts, deletePost } from '../actions/post.action';
import { getLoggedInUser } from '../actions/user.action';
import { appContext } from '../appContext';
import { PostTableList } from '../components/Post-Table-List';
import { PostCardList } from '../components/Post-Card-List';

export const Post = (props) => {
    const dispatch = useDispatch()
    const postState = useSelector(state => state.postReducer);
    const isAdmin = props.match.url.includes('admin');
    useEffect(() => {
        (async () => {
            if (!postState.posts) {
                await dispatch(setPosts());
                await dispatch(getLoggedInUser());
            }
        })()
    }, [])
    const onDeletePost = (id) => {
        dispatch(deletePost(id))
    }

    return (
        <div className="full-width">
            <appContext.Provider value={{ onDeletePost }}>
                {postState.posts && isAdmin && <PostTableList router={props} posts={postState.posts}></PostTableList>}
                {postState.posts && !isAdmin && <PostCardList router={props} posts={postState.posts}></PostCardList>}
                {!postState.posts && <div>Loading...</div>}
            </appContext.Provider>
        </div>
    );
}