import { csrfFetch } from "./csrf";

const ADD_LIKE = 'likes/ADD_LIKE';
const LOAD_IMAGE_LIKES = 'likes/LOAD_PHOTO_LIKES';
const LOAD_USER_LIKES = 'likes/LOAD_USER_LIKES';
const DELETE_LIKE = 'likes/DELETE_LIKE';

const loadImageLikes = (likes) => {
    return {
        type: LOAD_IMAGE_LIKES,
        likes
    }
}

const loadUserLikes = (likes) => {
    return {
        type: LOAD_USER_LIKES,
        likes
    }
}

const addLike = (like) => {
    return {
        type: ADD_LIKE,
        like
    }
}

const deleteLike = (likeId) => {
    return {
        type: DELETE_LIKE,
        likeId
    }
}

export const getUserLikes = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/likes`);
    if (response.ok) {
        const likes = await response.json();
        dispatch(loadUserLikes(likes));
    }
}

export const getImageLikes = () => async (dispatch) => {
    const response = await csrfFetch(`/api/likes`);

    if (response.ok) {
        const likes = await response.json();
        dispatch(loadImageLikes(likes));
    }
}

export const createLike = (like) => async (dispatch) => {
    const response = await csrfFetch(`/api/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(like),
    });

    if (response.ok) {
        const newLike = await response.json();
        dispatch(addLike(newLike));
        return newLike;
    }
}

export const removeLike = (likeId) => async (dispatch) => {
    const response = await csrfFetch(`/api/likes/${likeId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(deleteLike(likeId));
    }
}

const likeReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ADD_LIKE:
            return {
                ...state,
                [action.like.id]: action.like
            };
        case LOAD_USER_LIKES:
            newState = {};
            action.likes.forEach(like => {
                newState[like.id] = like;
            });
            return newState;
        case LOAD_IMAGE_LIKES:
            newState = {};
            action.likes.forEach(like => {
                newState[like.id] = like;
            });
            return newState;
        case DELETE_LIKE:
            newState = { ...state }
            delete newState[action.likeId];
            return newState;

        default:
            return state;
    }
}


export default likeReducer;
