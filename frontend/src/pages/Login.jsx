import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/user.action'

import eye from '../assets/eye.png'
import witness from '../assets/witness.png'
export const Login = (props) => {
    const [inputType, setInputType] = useState('password');
    const [formCred, setFormCred] = useState({ username: '', password: '' });
    const [passwordImg, setImg] = useState(eye);
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    let isOnSubmition = false;
    const dispatch = useDispatch()
    const showPassword = (ev) => {
        ev.preventDefault()
        setInputType('text');
        setImg(witness)
        setTimeout(() => {
            setInputType('password');
            setImg(eye)
        }, 2000);
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
        <div className="login-page flex column align-center grow">
            <h2>Login</h2>
            <form onSubmit={(event) => submit(event)} action="">
                <input className="minimal-input" type="text" placeholder="Username"
                    required
                    onChange={(event) => setFormCred({ ...formCred, username: event.target.value })} />
                <div className="relative">
                    <input className="minimal-input relative" type={inputType} required placeholder="Password"
                    onChange={(event) => setFormCred({ ...formCred, password: event.target.value })} />
                    <button className="show-pass-btn" onClick={(event) => showPassword(event)}>
                        <img src={passwordImg} alt="show-password-img"/>
                    </button>
                </div>
                <button className="add-btn">Login</button>
            </form>
        </div>
    );
}