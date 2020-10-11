import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const MainHeader = (props) => {
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser)
    const url = props.location.pathname
    // setInterval(() => {
    //     console.log(loggedInUser);
    // }, 2000)
    return (
        <div className="main-header">
            <div className="flex align-center justify-center">
                <div>logo</div>
                <h1>MyBlog</h1>
            </div>
            <nav className="main-nav">
                <Link className={`${url.includes('admin') ? 'marked' : ''}`} to="/admin">Admin</Link>
                <Link className={`${url.includes('blog') ? 'marked' : ''}`} to="/blog">Blog</Link>
                <Link className={`${url.includes('login') ? 'marked' : ''}`} to="/login">Login</Link>
            </nav>
        </div>
    )
}