import React from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";
import {baseEndpoint} from "../apiParams.jsx";

const getAllPosts = () => {
    return (dispatch) => {
        axios.get(baseEndpoint + 'posts').then(response => {
            dispatch({ type: 'GET_ALL_POSTS', payload: response.data})
        }).catch(err => console.error('Si è verificato un errore: ', err))
    }
};

const getCategories = () => {
    return (dispatch) => {
        axios.get(baseEndpoint + 'categories').then(response => {
            dispatch({ type: 'GET_CATEGORIES', payload: response.data })

        }).catch(err => console.error(err));
    };
};

export {getAllPosts, getCategories};