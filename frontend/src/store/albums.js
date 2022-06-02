import { csrfFetch } from './csrf';

export const getUserAlbums = userId => async dispatch => {
    const response = await csrfFetch(`/api/albums/${userId}`);
    const userAlbums = await response.json();
    return userAlbums;
}
