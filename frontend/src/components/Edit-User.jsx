import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userService } from '../services/user/users.service';
import { addUser, updateUser } from '../actions/user.action';
export const EditUser = (props) => {
    const dispach = useDispatch()
    const [formCred, setFormCred] = useState({
        username: '',
        password: '',
        fullName: ''
    })
    const userId = props.match.params && props.match.params.id

    useEffect(() => {
        (async () => {
            if (userId) {
                const { username, fullName } = await userService.getUserBy(userId)
                setFormCred({ ...formCred, username, fullName })
            }
        })()
    }, [])
    const onSubmit = async (ev) => {
        ev.preventDefault()
        userId ? await dispach(updateUser({ ...formCred, id: userId })) :
            await dispach(addUser(formCred))
        props.history.push('/admin/users');
    }

    return (
        <div className="edit-user flex column align-center">
            <h2>{userId ? 'Edit User' : 'Add User'}</h2>
            <form className="flex column mb1" onSubmit={(event) => onSubmit(event)}>
                <div className="flex align-center">
                    <label className="mr3"> Username (required):</label>
                    <input type="text" placeholder="Username"
                        value={formCred.username}
                        required
                        onChange={(event) => setFormCred({ ...formCred, username: event.target.value })} />
                </div>
                {!userId &&
                    <div className="flex align-center">
                        <label className="mr3">Password (required):</label>
                        <input type="password" placeholder="Password"
                            value={formCred.password}
                            required
                            onChange={(event) => setFormCred({ ...formCred, password: event.target.value })} />
                    </div>}
                <div className="flex align-center">
                    <label className="mr3" >Full name (required):</label>
                    <input type="text" placeholder="Full name"
                        value={formCred.fullName}
                        required
                        onChange={(event) => setFormCred({ ...formCred, fullName: event.target.value })} />
                </div>

                <button className="add-btn">{userId ? 'Edit User' : 'Add User'}</button>
            </form>
        </div>
    )
}