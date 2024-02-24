import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from "redux-thunk";
import {categoriesReducer, postsReducer} from "../reducers";

const inititalState = {
    posts: [],
    categories: []
}

const reducersCombiner = combineReducers({

    posts: postsReducer,
    categories: categoriesReducer

})

export const store = createStore(reducersCombiner, inititalState, applyMiddleware(thunk))