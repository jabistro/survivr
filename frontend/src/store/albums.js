import { csrfFetch } from './csrf';

const LOAD_ALBUMS = "albums/LOAD_ALBUMS";
const ADD_ALBUM = 'albums/ADD_ALBUM';
const DELETE_ALBUM = 'albums/DELETE_ALBUM'

const loadAlbums = (albums) => ({
    type: LOAD_ALBUMS,
    albums
});

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    album
});

const removeAlbum = (albumId) => {
    return {
        type: DELETE_ALBUM,
        albumId
    }
}

export const getUserAlbums = userId => async dispatch => {
    const response = await csrfFetch(`/api/albums/${userId}`);
    const userAlbums = await response.json();
    return userAlbums;
}

export const getAlbums = () => async dispatch => {
    const response = await csrfFetch('/api/albums');

    if (response.ok) {
        const albums = await response.json();
        dispatch(loadAlbums(albums));
    }
}

export const createAlbum = (album) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums`, {
        method: "POST",
        body: JSON.stringify(album)
    });
    const createdAlbum = await response.json();

    if (createdAlbum) {
        dispatch(addAlbum(createdAlbum))
    }
    return createdAlbum
}

export const editAlbumThunk = (editAlbum) => async (dispatch) => {
    const response = await csrfFetch('/api/albums', {
        method: "PUT",
        body: JSON.stringify(editAlbum)
    })
    const editedAlbum = await response.json()
    if (editedAlbum) {

        dispatch(addAlbum(editedAlbum))
        return editedAlbum
    }
}

export const deleteAlbum = (destroyedAlbum) => async (dispatch) => {
    const response = await csrfFetch('/api/albums', {
        method: "DELETE",
        body: JSON.stringify(destroyedAlbum)
    })
    const deletedAlbum = await response.json();
    dispatch(removeAlbum(deletedAlbum))
    return deletedAlbum
}

const albumReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            const allAlbums = {};
            action.albums.forEach((album) => {
                allAlbums[album.id] = album;
            });
            return allAlbums
        case ADD_ALBUM:
            return { ...state, [action.album.id]: action.album }
        case DELETE_ALBUM:
            const deleteState = { ...state }
            delete deleteState[action.albumId]
            return deleteState
        default:
            return state;
    }
}

export default albumReducer;
