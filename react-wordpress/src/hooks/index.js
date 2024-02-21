import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {getAllPosts} from '../actions/index.jsx';

const usePostsLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);
}

export {usePostsLoader}