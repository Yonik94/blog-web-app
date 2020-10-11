import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { appContext } from '../appContext';
import { UserPreview } from './User-Preview';
export const UserList = ({ users }) => {
    return <appContext.Consumer>
        {context => {
            return (
                <div className="user-list">
                    <h2>User List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Username</th>
                                <th>Full name</th>
                                <th colSpan="2">Action buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <UserPreview key={user.id} number={index + 1}
                                        deleteUser={context.onDeleteUser} user={user}>
                                    </UserPreview>
                                )
                            })
                            }
                        </tbody>
                    </table>
                    <Link className="add-btn" to="/admin/users/edit">
                        New User
                    </Link>
                </div>
            )
        }}
    </appContext.Consumer>
}