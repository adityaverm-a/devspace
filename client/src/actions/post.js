import axios from 'axios';
import { infoAlert, successAlert} from './alert';
import { ADD_COMMENT, ADD_POST, DELETE_POST, GET_POST, GET_POSTS, POST_ERROR, REMOVE_COMMENT, UPDATE_LIKES } from './types';

//Get all posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

//Get post by ID
export const getPost = (postId) => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${postId}`);

        dispatch({ type: GET_POST, payload: res.data });
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

//Add a Post
export const addPost = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post(`/api/posts`, formData, config);

        dispatch({ type: ADD_POST, payload: res.data });
        
        dispatch(successAlert('Post Added!'));
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

//Add Like 
export const addLike = (postId) => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`);

        dispatch({ type: UPDATE_LIKES, payload: { postId, likes: res.data } });
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

//Remove Like 
export const removeLike = (postId) => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`);

        dispatch({ type: UPDATE_LIKES, payload: { postId, likes: res.data } })
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

//Add a comment
export const addComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);

        dispatch({ type: ADD_COMMENT, payload: res.data });

        dispatch(successAlert('Comment Posted!'));
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

//Remove a comment
export const removeComment = (postId, commentId) => async dispatch => {
    try {
        await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

        dispatch({ type: REMOVE_COMMENT, payload: commentId });

        dispatch(infoAlert('Comment Deleted!'));
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}

// Delete Post
export const deletePost = (postId) => async dispatch => {
    try {
        await axios.delete(`/api/posts/${postId}`);

        dispatch({ type: DELETE_POST, payload: postId });

        dispatch(infoAlert('Post Deleted!', 'success'));
    } catch (err) {
        dispatch({ type: POST_ERROR, payload: { msg: err.response.statusText, status: err.response.status } });
    }
}