import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from "redux-thunk";
import {postsReducer} from "../reducers";

const inititalState = {
    posts: []
}

const reducersCombiner = combineReducers({

    posts: postsReducer

})

export const store = createStore(reducersCombiner, inititalState, applyMiddleware(thunk))