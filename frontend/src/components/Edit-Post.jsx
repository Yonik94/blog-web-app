import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postService } from '../services/post.service';
import { addPost, updatePosts } from '../actions/post.action';
export const EditPost = (props) => {
    const dispach = useDispatch()
    const [postCred, setPostCred] = useState({
        title: '',
        content: ''
    });
    const postId = props.match.params && props.match.params.id;
    useEffect(() => {
        (async () => {
            if (postId) {
                const {title, content} = await postService.getPostBy(postId)
                setPostCred({ ...postCred, title, content })
            }
        })()
    }, [])

    const onSubmit = async (ev) => {
        ev.preventDefault()
        postId ? await dispach(updatePosts({ ...postCred, id: postId })) :
            await dispach(addPost(postCred))
        props.history.push('/admin/posts');
    }

    return (
        <div className="edit-post flex column align-center">
            <h2>{postId ? 'Edit Post' : 'Add Post'}</h2>
            <form className="flex column" onSubmit={(event) => onSubmit(event)}>
                <input type="text" placeholder="Post title"
                    maxLength="400"
                    value={postCred.title}
                    onChange={(event) => setPostCred({ ...postCred, title: event.target.value })} />

                <textarea placeholder="Enter your post content" maxLength="10000"
                    value={postCred.content}
                    onChange={(event) => setPostCred({ ...postCred, content: event.target.value })} />
                <button className="add-btn">{postId ? 'Edit Post' : 'Add Post'}</button>
            </form>
        </div>
    );
}
