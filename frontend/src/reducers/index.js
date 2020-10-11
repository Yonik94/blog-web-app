import {userReducer} from './user.reducer';
import {postReducer} from './post.reducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({postReducer, userReducer})