import React from 'react';
import { Link } from 'react-router-dom';
export const BlogPreview = (props) => {
    return(
        <div>
            {props.isAdmin && <Link to={`/admin/blogs/${props.blog.id}`} >{props.blog.name}</Link>}
            {!props.isadmin && <Link to={`/blogs/${props.blog.id}`} >{props.blog.name}</Link>}
        </div>
    )
}