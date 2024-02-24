function postsReducer(state = [], action) {
    switch (action.type) {
        case 'GET_ALL_POSTS':
            return {
                ...state,
                posts: action.payload
            }

        default: break;
    }

    return state
}

function categoriesReducer(state = [], action) {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }

        default: break;
    }

    return state
}

export {postsReducer, categoriesReducer}