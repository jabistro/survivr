import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editImage, deleteImage } from '../../store/images';
import { getImages } from "../../store/images";
import './EditPhoto.css'

const EditImageForm = () => {
    const allImages = useSelector(state => state.images)
    const editImageId = useParams().imageId
    const editImage = allImages[editImageId] || {};
    const sessionUser = useSelector((state) => state.session.user);
    const [caption, setCaption] = useState(editImage.caption || '');
    const [imageURL, setImageURL] = useState(editImage.imageURL || '');
    const [albumId, setAlbumId] = useState(editImage.albumId || '');

    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        if (!sessionUser || sessionUser.id !== editImage.userId) {
            history.push('/')
        }
    }, [])

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const userId = sessionUser.id;
        const editingImage = {
            id: editImage.id,
            userId,
            imageURL,
            caption,
            albumId
        }
        dispatch(editImage(editingImage))
            .then(() => history.push('/explore'))
            .catch(async (res) => {
                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
    }

    const deleteHandler = (e, image) => {
        e.preventDefault()
        dispatch(deleteImage(editImage))
            .then(() => history.push('/explore'))
    }

    return (
        <div className='inputBox'>
            <h1>Add Image</h1>
            <form onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    onChange={(e) => setImageURL(e.target.value)}
                    value={imageURL}
                    placeholder='Image URL'
                    name='imageUrl'
                />
                <select
                    value={albumId}
                    onChange={(e) => setAlbumId(e.target.value)}
                    name='albumId'
                >
                    {
                        albums.map(album => {
                            return <option key={album.id} value={album.id}>{album.title}</option>
                        })
                    }
                </select>
                <input
                    type='text'
                    onChange={(e) => setCaption(e.target.value)}
                    value={caption}
                    placeholder='Caption (optional)'
                    name='caption'
                />
                <div className='edit-buttons'>
                    <button id="img-edit-button" type="submit">Submit</button>
                    <button className='img-delete-button' onClick={(e) => deleteHandler(e, editPhoto)}>DELETE ICON</button>
                </div>
            </form>
        </div>
    );
}
