import React from 'react';
import { BlogPreview } from './Blog-Preview';
export const BlogList = (props) => {
    return (
        <div>
            {props.blogs.map((blog, index) => <BlogPreview key={index} isAdmin={props.isAdmin} blog={blog} />)}
            {props.isAdmin && <button>Create new blog</button>}
        </div>
    )
}