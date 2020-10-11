import React from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../appContext';

import { PostTablePreview } from './Post-Table-Preview';
export const PostTableList = (props) => {

    const isAdmin = props.router.match.url.includes('admin') ? true : false
    return <appContext.Consumer>
        {context => {
            return (
                <div className="post-table-list">
                    <h2>Posts List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>title</th>
                                <th>Content</th>
                                <th colSpan="2">Action buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.posts.map((post, index) => {
                                return <PostTablePreview key={post.id} number={index + 1}
                                    deletePost={context.onDeletePost}
                                    post={post}></PostTablePreview>
                            })}
                        </tbody>
                    </table>
                    <Link className="add-btn" to="/admin/posts/edit">
                        Add post
                </Link>
                </div>)
        }}
    </appContext.Consumer >
}