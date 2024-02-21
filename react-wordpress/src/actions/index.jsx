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

export  {getAllPosts};