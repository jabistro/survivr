import { csrfFetch } from './csrf';
import { ValidationError } from "../utils/validationError";

const LOAD_IMAGES = "images/LOAD_IMAGES";
const ADD_IMAGE = 'images/ADD_IMAGE';
const DELETE_IMAGE = 'photo/DELETE_IMAGES'

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

const removeImage = (imageId) => {
    return {
        type: DELETE_IMAGE,
        imageId
    }
}

// export const findOneImage = (albumId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/images/{albumId}`);
//     const images = await response.json();
//     dispatch()
// }

export const getImages = () => async (dispatch) => {
    const response = await csrfFetch(`/api/images`);

    if (response.ok) {
        const images = await response.json();
        dispatch(loadImages(images));
    }
}

// export const createImage = (image) => async (dispatch) => {
//     const response = await csrfFetch(`/api/images`, {
//         method: "POST",
//         body: JSON.stringify(image)
//     });
//     const createdImage = await response.json();

//     if (createdImage) {
//         dispatch(addImage(createdImage))
//     }
//     return createdImage
// }

export const createImage = (imageData) => async (dispatch) => {
    const { albumId, image, title, caption, userId } = imageData;
    const formData = new FormData();
    formData.append("albumId", albumId);
    formData.append("image", image);
    formData.append("title", title)
    formData.append("caption", caption);
    formData.append("userId", userId);

    const response = await csrfFetch('/api/images', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });

    const createdImage = await response.json();

    if (createdImage) {
        dispatch(addImage(createdImage))
    }
    return createdImage
}

export const editImageThunk = (editImageData) => async (dispatch) => {
    const { id, albumId, imageURL, image, caption, title } = editImageData;
    const formData = new FormData();
    formData.append("id", id);
    formData.append("albumId", albumId);
    formData.append("title", title)
    formData.append("imageURL", imageURL);
    formData.append("caption", caption);
    // formData.append("userId", userId);
    if (image) formData.append("image", image);

    const response = await csrfFetch('/api/images', {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    })

    const editedImage = await response.json()

    if (editedImage) {
        dispatch(addImage(editedImage))
    }
    return editedImage
}

// export const editImageThunk = (editImage) => async (dispatch) => {
//     const response = await csrfFetch('/api/images', {
//         method: "PUT",
//         body: JSON.stringify(editImage)
//     })
//     const editedImage = await response.json()
//     if (editedImage) {
//         dispatch(addImage(editedImage))
//     }
//     return editedImage
// }

export const deleteImage = (destroyedImage) => async (dispatch) => {
    const response = await csrfFetch('/api/images', {
        method: "DELETE",
        body: JSON.stringify(destroyedImage)
    })
    const deletedImage = await response.json();
    dispatch(removeImage(deletedImage))
    return deletedImage
}

const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_IMAGES:
            const allImages = {};
            action.images.forEach((image) => {
                allImages[image.id] = image;
            });
            return allImages
        case ADD_IMAGE:
            return { ...state, [action.image.id]: { ...action.image } }
        case DELETE_IMAGE:
            const deleteState = { ...state }
            delete deleteState[action.imageId]
            return deleteState
        default:
            return state;
    }
}

export default imageReducer;
