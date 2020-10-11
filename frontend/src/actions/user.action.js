import { userService } from '../services/users.service';

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

export const login = (loginCred) => {
    return async (dispatch) => {
        const user = await userService.login(loginCred);
        return dispatch({type: 'SET_USER', user});
    }
}

export const getLoggedInUser = () => {
    return async (dispatch) => {
        const user = await userService.getLoggedInUser();
        return dispatch({type: 'SET_USER', user});
    }
}