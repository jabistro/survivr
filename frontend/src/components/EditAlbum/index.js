import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editAlbumThunk, deleteAlbum } from '../../store/albums';
import { getImages } from '../../store/images';
import './EditAlbum.css'

const EditAlbumForm = () => {
    const allAlbums = useSelector(state => state.albums)
    const editAlbumId = useParams().albumId
    const editAlbum = allAlbums[editAlbumId] || {};
    const [title, setTitle] = useState(editAlbum.title || '');

    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

    useEffect(() => {
        if (!user || user.id !== editAlbum.userId) {
            history.push('/')
        }
    }, [])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const userId = user.id;
        const editingAlbum = {
            id: editAlbum.id,
            userId,
            title
        }
        await dispatch(editAlbumThunk(editingAlbum))
            .then(() => history.push(`/users/${userId}/albums/${editAlbum.id}/images`))
            .catch(async (res) => {

                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
    }

    const deleteHandler = (e, album) => {
        e.preventDefault()
        dispatch(deleteAlbum(editAlbum)).then(() => dispatch(getImages()))
            .then(() => history.push(`/users/${user.id}/albums`))
    }

    return (
        <div className='album-edit-input-box'>
            <h1 className='edit-album-header'>Edit Album</h1>
            <div className='edit-form-and-buttons'>
                <form onSubmit={handleOnSubmit}>
                    <label className='input-words'>Title
                        <input
                            required
                            type='title'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder='Title'
                            name='title'
                        />
                    </label>
                    <div className='album-form-edit-buttons'>
                        <button id="album-edit-button" type="submit">Submit</button>
                        <button className='album-delete-button' onClick={(e) => deleteHandler(e, editAlbum)}>DELETE</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditAlbumForm;
