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

export const getComments = (imageId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/images/${imageId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments));
    }
}

export const createComment = (comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });
    const createdComment = await response.json();

    if (createdComment) {
        dispatch(addComment(createdComment))
    }
    return createdComment
}

export const editCommentThunk = (editComment) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${editComment.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editComment)
    })
    const editedComment = await response.json()
    if (editedComment) {
        dispatch(addComment(editedComment))
    }
    return editedComment
}

export const deleteComment = (commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        // body: JSON.stringify(commentId)
    })
    // const deletedComment = await response.json();
    if (response.ok) {
        dispatch(removeComment(commentId))
    }
}

const commentReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS:
            newState = {};
            action.comments.forEach((comment) => {
                newState[comment.id] = comment;
            });
            return newState;
        case ADD_COMMENT:
            return { ...state, [action.comment.id]: action.comment }
        case DELETE_COMMENT:
            newState = { ...state };
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
}

export default commentReducer;
