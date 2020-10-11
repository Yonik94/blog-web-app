import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getLoggedInUser } from '../actions/user.action';

export const Home = (props) => {
    const dispatch = useDispatch();
    return <Redirect to="/blog" />
}