import React from 'react';
import { Link } from 'react-router-dom';
export const PostCardPreview = (props) => {
    const trim = (text, length) => {
        return (text.length > length) ? `${text.substring(0, length)}...` : text
    }

    return (
        <li className="post-card-preview clean-list">
            <Link className="flex column" to={`/blog/post/${props.post.id}`}>
                <h3 className="title">{trim(props.post.title, 50)}</h3>
                <p className="content">{trim(props.post.content, 100)}</p>
                <h6 className="date">{new Date(props.post.createdAt).toLocaleDateString()}</h6>
            </Link>
        </li>
        )
}