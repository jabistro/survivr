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

export const writeImage = (payload) => async (dispatch) => {
    // console.log("TOP OF THUNK IN STORE - data -> ", data);
    try {
        const response = await fetch('/api/images', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // console.log("AFTER RESPONSE IN THUNK - RESPONSE -> ", response);

        if (!response.ok) {
            let error;
            if (response.status === 422) {
                error = await response.json();
                throw new ValidationError(error.errors, response.statusText);
            } else {
                let errorJSON;
                error = await response.text();
                try {
                    // Check if the error is JSON, i.e., from the Pokemon server. If so,
                    // don't throw error yet or it will be caught by the following catch
                    errorJSON = JSON.parse(error);
                } catch {
                    // Case if server could not be reached
                    throw new Error(error);
                }
                throw new Error(`${errorJSON.title}: ${errorJSON.message}`);
            }
        }

        const image = await response.json();

        // console.log(
        //     "AFTER IMAGE = RESPONSE.JSON() IN THUNK - IMAGE -> ",
        //     image
        // );

        dispatch(addImage(image));
        return image;
    } catch (error) {
        throw error;
    }
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
