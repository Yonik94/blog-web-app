import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import minimize from '../assets/minimize.png'
import maximize from '../assets/maximize.png'
export const SideNav = ({location}) => {
    const [isOpen, setOpenStatus] = useState(true);
    const isMarked = (path) => {
        const pathname = location.pathname 
        return pathname.includes('admin') && pathname.includes(path) && isOpen
    }
    return (
        <nav className={`side-nav ${!isOpen ? 'close' : ''}`}>
            <Link className={isMarked('users') ? 'marked' : ''} to="/admin/users">Users</Link>
            <Link className={isMarked('posts') ? 'marked' : ''} to="/admin/posts">Posts</Link>
            <Link className={isMarked('settings') ? 'marked' : ''} to="/admin/settings">Settings</Link>
            {isOpen && <button onClick={() => setOpenStatus(!isOpen)}>
                <img src={minimize} alt="" />
            </button>}
            {!isOpen && <button onClick={() => setOpenStatus(!isOpen)}>
                <img src={maximize} alt="" />
            </button>}
        </nav>
    )
}