import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getBlog } from '../actions/blog.action'
import { PostCardList } from '../components/Post-Card-List'
export const SingleBlog = (props) => {
    const dispatch = useDispatch()
    const [blog, setBlog] = useState();
    const selectedBlogId = props.match.params.blogId;
    useEffect(() => {
        if(blog) return
        dispatch(getBlog(selectedBlogId))
            .then(blog => {
                console.log({blog});
                setBlog(blog);
            })
            .then(() => console.log({ blog }))
    }, [])
    return (
        <div>
            {blog && <div> <PostCardList posts={blog.posts} /></div>}
            {!blog && <div>...loading</div>}
        </div>
    )
}