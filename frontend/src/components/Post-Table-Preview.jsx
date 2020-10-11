import React from 'react';
import { Link } from 'react-router-dom';
// import { PostCard } from './Post-Card-Preview';
export const PostTablePreview = (props) => {
    const trim = (text, length) => {
        return (text.length > length) ? `${text.substring(0, length)}...` : text
    }
    return (
        <tr className="post-table-preview">
            <td>
                <Link to={`/admin/posts/edit/${props.post.id}`}>
                    {props.number}
                </Link>
            </td>
            <td className="title">
                <Link to={`/admin/posts/edit/${props.post.id}`}>
                    {trim(props.post.title, 40)}
                </Link>
            </td>
            <td>
                <Link to={`/admin/posts/edit/${props.post.id}`}>
                    {trim(props.post.content, 60)}
                </Link>
            </td>
            <td>
                <Link className="edit-btn" to={`/admin/posts/edit/${props.post.id}`}>
                    Edit post
                </Link>
            </td>
            <td>
                <button className="delete-btn" onClick={() => props.deletePost(props.post.id)}>Delete post</button>
            </td>
        </tr>
    );
}