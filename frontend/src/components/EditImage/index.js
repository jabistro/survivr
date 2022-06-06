import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editImageThunk, deleteImage } from '../../store/images';
import { getUserAlbums } from '../../store/albums';
import './EditImage.css'

const EditImageForm = () => {
    const allImages = useSelector(state => state.images)
    const editImageId = useParams().imageId
    const editImage = allImages[editImageId] || {};
    const [caption, setCaption] = useState(editImage.caption || '');
    const [imageURL, setImageURL] = useState(editImage.imageURL || '');
    const [albumId, setAlbumId] = useState(editImage.albumId || '');
    const [albums, setAlbums] = useState([]);

    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

    useEffect(() => {
        if (!user || user.id !== editImage.userId) {
            history.push('/')
        }
    }, [])

    useEffect(() => {
        if (user && albums.length === 0) {
            const getAlbumsFunc = async () => {
                const albumThunk = await dispatch(getUserAlbums(user.id)).then((albums) => {
                    setAlbums(albums);
                    console.log(albums)
                }
                );
            };
            getAlbumsFunc();
        }
    })

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const userId = user.id;
        const editingImage = {
            id: editImage.id,
            userId,
            imageURL,
            caption,
            albumId
        }
        await dispatch(editImageThunk(editingImage))
            .then(() => history.push(`/image/${editImageId}`))
            .catch(async (res) => {
                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
    }

    const deleteHandler = (e, image) => {
        e.preventDefault()
        dispatch(deleteImage(editImage))
            .then(() => history.push(`/users/${user.id}/images`))
    }

    return (
        <div className='img-edit-input-box'>
            <h1 className='edited-image-title'>Edit Image</h1>
            <img className='edited-image' src={editImage.imageURL}></img>
            <form className='image-edit-form' onSubmit={handleOnSubmit}>
                <label className='input-words'>Image URL
                    <input
                        className='edit-image-input'
                        type='text'
                        onChange={(e) => setImageURL(e.target.value)}
                        value={imageURL}
                        placeholder='Image URL'
                        name='imageUrl'
                    />
                </label>
                <label className='input-words'>Caption
                    <input
                        className='edit-image-input'
                        type='text'
                        onChange={(e) => setCaption(e.target.value)}
                        value={caption}
                        placeholder='Caption (optional)'
                        name='caption'
                    />
                </label>
                <label className='input-words'>Album
                    <select
                        className='edit-image-select'
                        value={albumId}
                        onChange={(e) => setAlbumId(parseInt(e.target.value))}
                        name='albumId'
                    >
                        {
                            albums.map(album => {
                                return <option key={album.id} value={album.id}>{album.title}</option>
                            })
                        }
                    </select>
                </label>
                <div className='img-edit-form-buttons'>
                    <button className="img-edit-button" type="submit">Submit</button>
                    <button className='img-delete-button' onClick={(e) => deleteHandler(e, editImage)}>Delete</button>
                </div>
            </form >
        </div >
    );
}

export default EditImageForm;
