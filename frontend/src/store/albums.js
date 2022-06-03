import { csrfFetch } from './csrf';

const LOAD_ALBUMS = "images/LOAD_ALBUMS";
const ADD_ALBUM = 'images/ADD_ALBUM';

const loadAlbums = (albums) => ({
    type: LOAD_ALBUMS,
    albums
});

const addAlbum = (album) => ({
    type: ADD_ALBUM,
    album
});

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
        default:
            return state;
    }
}

export default albumReducer;
