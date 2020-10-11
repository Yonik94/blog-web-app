import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/user.action'
export const Login = (props) => {
    const [inputType, setInputType] = useState('password');
    const [formCred, setFormCred] = useState({ username: '', password: '' });
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    let isOnSubmition = false;
    const dispatch = useDispatch()
    const showPassword = (ev) => {
        ev.preventDefault()
        setInputType('text');
        setTimeout(() => {
            setInputType('password');
        }, 1000);
    }

    useEffect(() => {
        if(loggedInUser) {
            props.history.push('/admin');
        } else if(!loggedInUser && isOnSubmition) {
            console.log('Invalid Username or Password');
            isOnSubmition = false;
        }
    }, [loggedInUser])
    
    const submit = async (ev) => {
        ev.preventDefault();
        await dispatch(login(formCred));
        isOnSubmition = true;
    }
    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={(event) => submit(event)} action="">
                <input type="text" placeholder="Username"
                    required
                    onChange={(event) => setFormCred({ ...formCred, username: event.target.value })} />
                <div>
                    <input type={inputType} required placeholder="Password"
                    onChange={(event) => setFormCred({ ...formCred, password: event.target.value })} />
                    <button onClick={(event) => showPassword(event)}>show</button>
                </div>
                <button>Signup</button>
            </form>
        </div>
    );
}