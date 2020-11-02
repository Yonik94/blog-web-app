import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const Settings = () => {
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    const [userDetails, setDetails] = useState({ username: loggedInUser.username, fullName: loggedInUser.fullName });
    const saveUser = (ev) => {
        ev.preventDefault();

    }
    return (
        <div className="settings">
            <h2>
                Edit your settings
            </h2>
            <form className="flex column" onSubmit={(event) => saveUser(event)}>
                <label>Username</label>
                <input className="minimal-input" type="text" value={userDetails.username} onChange={({ target }) => setDetails({ ...userDetails, username: target.value })} />
                <label>Name</label>
                <input className="minimal-input mb2" type="text" value={userDetails.fullName} onChange={({ target }) => setDetails({ ...userDetails, fullName: target.value })} />
                <button className="add-btn">Save changes</button>
            </form>
        </div>
    );
}