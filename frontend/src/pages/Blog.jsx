import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBlogs } from '../actions/blog.action';
import { BlogList } from '../components/Blog-List';

export const Blog = (props) => {
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogReducer.blogs)
    useEffect(() => {
        (async () => {
            if (!blogs) {
                dispatch(setBlogs());
            }
        })();
    }, []);

    return (
        <div className="full-width">
            {blogs &&
                <div>
                    <BlogList blogs={blogs} />
                </div>}
            {!blogs && <h2>Loading</h2>}
        </div>
    );
}