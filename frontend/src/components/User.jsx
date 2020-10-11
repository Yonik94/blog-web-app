//import settings
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import services:
import { setUsers, deleteUser } from '../actions/user.action.js';
import { appContext } from '../appContext';
// import components:
import { UserList } from './User-List';

export const User = (props) => {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer);
    useEffect(() => {
        (async () => {
            if (!userState.users) {
                await dispatch(setUsers());
            }
        })()
    }, [])
    
    const onDeleteUser = (id) => {
        dispatch(deleteUser(id));
    }

    if (userState.users) {
        return (
            <div>
                <appContext.Provider value={{onDeleteUser}}>
                    <UserList match={props.match} users={userState.users}></UserList>
                </appContext.Provider>
            </div >
        )
    } else {
        return <div>loading...</div>
    }
}