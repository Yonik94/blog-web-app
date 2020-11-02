import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const MainHeader = (props) => {
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    const url = props.location.pathname;
    return (
        <div className={url.includes('admin') ? "admin-header" : "main-header"}>
            <div className="flex align-center justify-center">
                <img src="" alt="" />
                <nav className="main-nav">
                    {loggedInUser && <Link className={`${url.includes('admin') ? 'marked' : ''}`} to="/admin/blogs">Admin</Link>}
                    <Link className={`${url.includes('blog') ? 'marked' : ''}`} to="/blog">Blogs</Link>
                </nav>
            </div>
            <div>
                {loggedInUser && < span> Hello {loggedInUser.fullName}</span>}
                {!loggedInUser && <div>
                    <Link to="/login"> Login </Link>
                    <Link to="/signup"><strong>Get started</strong></Link>
                    </div>}
            </div>

        </div>
    )
}