const INITIAL_STATE = {
    posts: null,
}

export const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
}