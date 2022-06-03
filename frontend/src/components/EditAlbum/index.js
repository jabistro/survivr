import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editAlbumThunk, deleteAlbum } from '../../store/albums';
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
            .then(() => history.push(`/users/${userId}/albums/${editingAlbum.id}`))
            .catch(async (res) => {

                console.log(res);

                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
    }

    const deleteHandler = (e, album) => {
        e.preventDefault()
        dispatch(deleteAlbum(editAlbum))
            .then(() => history.push(`/users/${user.id}/albums`))
    }

    return (
        <div className='album-edit-input-box'>
            <h1>Edit Album</h1>
            <form onSubmit={handleOnSubmit}>
                <input
                    type='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                />
                <div className='album-form-edit-buttons'>
                    <button id="album-edit-button" type="submit">Submit</button>
                    <button className='album-delete-button' onClick={(e) => deleteHandler(e, editAlbum)}>DELETE ICON</button>
                </div>
            </form>
        </div>
    );
}

export default EditAlbumForm;
