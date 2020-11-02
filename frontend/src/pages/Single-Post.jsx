import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postService } from '../services/post/post.service';
export const SinglePost = (props) => {
    const postId = props.match.params.id;
    const [post, setPost] = useState({});
    useEffect(() => {
        (async () => {
            const currPost = await postService.getPostBy(postId);
            setPost(currPost)
        })()
    }, [])
    return (
        <div>
            {post && <div className="single-post">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                </div> }
            {!post && <h2>Loading...</h2>}
        </div>
    );
}