import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/user.action.js';
import { getBlog } from '../actions/blog.action'

import { EditPost } from '../components/Edit-Post';
import { EditUser } from '../components/Edit-User';
import { User } from '../components/User';
import { Blog } from '../pages/Blog';
import { Settings } from '../components/Settings';
import { SideNav } from '../components/Side-Nav';
import { BlogList } from '../components/Blog-List';
import { useState } from 'react';
import { useEffect } from 'react';

export const Admin = (props) => {
    const [blog, setBlog] = useState();
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    const blogs = useSelector(state => state.userReducer.loggedInUser.blogs);
    const dispatch = useDispatch();
    useEffect(() => {
        const blogId = props.match.params.blogId
        if (props.match.params.blogId) {
            dispatch(getBlog(blogId))
                .then(res => {
                    console.log({ res });
                    setBlog(res)
                })
        }
    }, [props.match.params])

    return (
        <div>
            {!loggedInUser && <Redirect to="/" />}
            {!blog && blogs && <BlogList match={props.match} isAdmin={true} blogs={loggedInUser.blogs} />}
            <Router>
                {blog && <div className="admin flex grow">
                    <SideNav location={props.location} ></SideNav>
                    <div className="grow">
                        <Route exact component={EditUser} path="/admin/users/edit" />
                        <Route exact component={EditUser} path="/admin/users/edit/:id" />
                        {loggedInUser && loggedInUser.isAdmin && <Route exact component={User} path="/admin/users" />}
                        <Route exact component={EditPost} path="/admin/posts/edit" />
                        <Route exact component={EditPost} path="/admin/posts/edit/:id" />
                        {/* <Route exact component={Blog} path="/admin/blogs/:blogId" /> */}
                        {loggedInUser && <Route exact component={Settings} path="/admin/settings" />}
                    </div>
                </div>}
            </Router>
        </div>
    );
}
