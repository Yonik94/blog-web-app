import { userService } from '../services/user/users.service';
import { authService } from '../services/auth/auth.service';

export const setUsers = () => {
    return async (dispatch) => {
        const users = await userService.query();
        return dispatch({ type: 'SET_USERS', users });
    }
}

export const addUser = (user) => {
    return async (dispatch) => {
        const users = await userService.addUser(user);
        return dispatch({ type: 'SET_USERS', users });
    }
}

export const updateUser = (user) => {
    return async (dispatch) => {
        const users = await userService.updateUser(user);
        return dispatch({ type: 'SET_USERS', users });
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        const users = await userService.deleteUser(id);
        return dispatch({ type: 'SET_USERS', users });
    }
}

export const loginSignup = (loginCred) => {
    return async (dispatch) => {
        const res = await authService.loginSignup(loginCred);
        console.log(res.user);
        return dispatch({type: 'SET_USER', user: res.user});
    }
}

export const getLoggedInUser = () => {
    return async (dispatch) => {
        const user = await userService.getLoggedInUser();
        return dispatch({type: 'SET_USER', user});
    }
}