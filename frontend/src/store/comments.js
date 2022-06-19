import { csrfFetch } from './csrf';

const LOAD_COMMENTS = "images/LOAD_COMMENTS";
const ADD_COMMENT = 'images/ADD_COMMENTS';
const DELETE_COMMENT = 'photo/DELETE_COMMENTS'

const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments
});

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    };
};

const removeComment = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

// export const findOneImage = (albumId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/images/{albumId}`);
//     const images = await response.json();
//     dispatch()
// }

export const getComments = () => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments));
    }
}

export const createComment = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify(comment)
    });
    const createdComment = await response.json();

    if (createdComment) {
        dispatch(addComment(createdComment))
    }
    return createdComment
}

export const editCommentThunk = (editComment) => async (dispatch) => {
    const response = await csrfFetch('/api/comments', {
        method: "PUT",
        body: JSON.stringify(editComment)
    })
    const editedComment = await response.json()
    if (editedComment) {
        dispatch(addComment(editedComment))
    }
    return editedComment
}

export const deleteComment = (destroyedComment) => async (dispatch) => {
    const response = await csrfFetch('/api/comments', {
        method: "DELETE",
        body: JSON.stringify(destroyedComment)
    })
    const deletedComment = await response.json();
    dispatch(removeComment(deletedComment))
    return deletedComment
}

const commentReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            const allComments = {};
            action.comments.forEach((comment) => {
                allComments[comment.id] = comment;
            });
            return allComments
        case ADD_COMMENT:
            return { ...state, [action.comment.id]: action.comment }
        case DELETE_COMMENT:
            const deleteState = { ...state }
            delete deleteState[action.commentId]
            return deleteState
        default:
            return state;
    }
}

export default commentReducer;
