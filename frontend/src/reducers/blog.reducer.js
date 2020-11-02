const INITIAL_STATE = {
    blogs: null,
    userBlogs: null
}

export const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                ...state,
                blogs: action.blogs
            }
        case 'SET_USER_BLOGS':
            return {
                ...state,
                userBlogs: action.blogs
            }
        default:
            return state
    }
}