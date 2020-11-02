import {userReducer} from './user.reducer';
import {postReducer} from './post.reducer';
import {blogReducer} from './blog.reducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({postReducer, userReducer, blogReducer});