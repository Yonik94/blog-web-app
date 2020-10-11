import React from 'react';
import { Link } from 'react-router-dom';

export const UserPreview = (props) => {

    return (
        <tr className="user-preview">
            <td>
                <Link to={`/admin/users/edit/${props.user.id}`}>
                    {props.number}
                </Link>
            </td>
            <td>
                <Link to={`/admin/users/edit/${props.user.id}`}>
                    {props.user.username}
                </Link>
            </td>
            <td>
                <Link to={`/admin/users/edit/${props.user.id}`}>
                    {props.user.fullName}
                </Link>
            </td>
            <td>
                <Link className="edit-btn" to={`/admin/users/edit/${props.user.id}`}>
                    Edit user
                </Link>
            </td>
            <td>
                <button className="delete-btn" onClick={() => props.deleteUser(props.user.id)}>Delete user</button>
            </td>
        </tr>
    );
}