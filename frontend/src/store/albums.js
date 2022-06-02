import { csrfFetch } from './csrf';

const LOAD_ALBUMS = "images/LOAD_ALBUMS";
const ADD_ALBUM = 'images/ADD_ALBUM';

const loadAlbums = (albums) => ({
    type: LOAD_ALBUMS,
    albums
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

const albumReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            const allAlbums = {};
            action.albums.forEach((album) => {
                allAlbums[album.id] = album;
            });
            return allAlbums
        default:
            return state;
    }
}

export default albumReducer;
