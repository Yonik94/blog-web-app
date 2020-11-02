import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginSignup } from '../actions/user.action'

import eye from '../assets/eye.png'
import witness from '../assets/witness.png'

export const Login = (props) => {
    const [inputType, setInputType] = useState('password');
    const [formCred, setFormCred] = useState({ username: '', password: '' });
    const [passwordImg, setImg] = useState(eye);
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    let isOnSubmition = false;
    const dispatch = useDispatch()
    const isLogin = props.location.pathname.includes('login') ? true : false
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
            props.history.push('/admin/blogs');
        } else if(!loggedInUser && isOnSubmition) {
            console.log('Invalid Username or Password');
            isOnSubmition = false;
        }
    }, [loggedInUser])
    
    const submit = async (ev) => {
        ev.preventDefault();
        if(!isAllValid()) return
        await dispatch(loginSignup(formCred));
        isOnSubmition = true;
    }

    const isAllValid = () => {
        if(!formCred.username || !formCred.password) return false;
        if(!isLogin && !formCred.fullName) return false;
        return true;
    }
    return (
        <div className="login-page flex column align-center grow">
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={(event) => submit(event)} action="">
                {!isLogin && <input className="minimal-input" type="text" placeholder="Full name"
                required
                onChange={(event) => setFormCred({ ...formCred, fullName: event.target.value })}/>}
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
                <button className="add-btn">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
        </div>
    );
}