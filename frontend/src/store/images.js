import { csrfFetch } from './csrf';

const LOAD_IMAGES = "images/LOAD_IMAGES";
const ADD_IMAGE = 'images/ADD_IMAGE';
const DELETE_IMAGE = 'images/DELETE_IMAGES'
const DELETE_ALBUM = 'albums/DELETE_ALBUM'

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
    formData.append("title", title);
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

export const deleteImage = (imageId) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${imageId}`, {
        method: "DELETE",
        // body: JSON.stringify(destroyedImageId)
    })
    // const deletedImage = await response.json();
    if (response.ok) {
        dispatch(removeImage(imageId))
    }
}

const imageReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_IMAGES:
            newState = {};
            action.images.forEach((image) => {
                newState[image.id] = image;
            });
            return newState
        case ADD_IMAGE:
            return { ...state, [action.image.id]: { ...action.image } }
        case DELETE_ALBUM:
            newState = {};
            Object.values(state).forEach((image) => {
                if (image.albumId !== action.albumId) {
                    newState[image.id] = image;
                }
            })
            return newState
        case DELETE_IMAGE:
            newState = { ...state }
            delete newState[action.imageId]
            return newState
        default:
            return state;
    }
}

export default imageReducer;
