import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {getAllPosts, getCategories} from '../actions/index.jsx';

const usePostsLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);
}

const useCategories = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, []);
}
export {usePostsLoader, useCategories}