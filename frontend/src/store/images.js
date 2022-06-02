import { csrfFetch } from './csrf';
import { ValidationError } from "../utils/validationError";

const LOAD_IMAGES = "images/LOAD_IMAGES";
const ADD_IMAGE = 'images/ADD_IMAGE';

const loadImages = (images) => ({
    type: LOAD_IMAGES,
    images
});

export const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image
    };
};

export const getImages = () => async (dispatch) => {
    const response = await csrfFetch(`/api/images`);

    if (response.ok) {
        const images = await response.json();
        dispatch(loadImages(images));
    }
}

const initialState = { entries: [], isLoading: true };

export const writeImage = (image) => async (dispatch) => {

    console.log('HIT THUNK ----------')

    const response = await csrfFetch('/api/images', {
        method: 'POST',
        body: JSON.stringify(image)
    });
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMAGES:
            const allImages = {};
            action.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return allImages
        default:
            return state;
        case ADD_IMAGE:
            // console.log('IN REDUCER ADD ONE CASE - ACTION -> ', action);
            if (!state[action.image.id]) {
                const newState = {
                    ...state,
                    [action.image.id]: action.image,
                };
                const imageList = newState.images.map((id) => newState[id]);
                imageList.push(action.image);
                newState.images = sortList(imageList);
                return newState;
            }
            return {
                ...state,
                [action.image.id]: {
                    ...state[action.image.id],
                    ...action.image,
                },
            };
    }
}

export default imageReducer;
