import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/user.action.js';

import { EditPost } from '../components/Edit-Post';
import { EditUser } from '../components/Edit-User';
import { User } from '../components/User';
import { Blog } from '../pages/Blog';
import { Settings } from '../components/Settings';
import { SideNav } from '../components/Side-Nav';

export const Admin = (props) => {
    return (
        <Router>
            <div className="flex grow">
                <SideNav location={props.location} ></SideNav>
                <div className="grow">
                    <Route exact component={EditUser} path="/admin/users/edit" />
                    <Route exact component={EditUser} path="/admin/users/edit/:id" />
                    <Route exact component={User} path="/admin/users" />
                    <Route exact component={EditPost} path="/admin/posts/edit" />
                    <Route exact component={EditPost} path="/admin/posts/edit/:id" />
                    <Route exact component={Blog} path="/admin/posts/" />
                    <Route exact component={Settings} path="/admin/settings" />
                </div>
            </div>
        </Router>
    );
}
