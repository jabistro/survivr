import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editAlbumThunk, deleteAlbum } from '../../store/albums';
import { getImages } from '../../store/images';
import './EditAlbum.css'

const EditAlbumForm = ({ setShowModal }) => {
    const user = useSelector(state => state.session.user);
    const allAlbums = useSelector(state => state.albums)
    const editAlbumId = useParams().albumId
    const editAlbum = allAlbums[editAlbumId] || {};
    const [title, setTitle] = useState(editAlbum.title || '');
    const [description, setDescription] = useState(editAlbum.description || '');
    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const dispatch = useDispatch();


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
            title,
            description
        }
        await dispatch(editAlbumThunk(editingAlbum))
            .then(() => history.push(`/users/${userId}/albums/${editAlbum.id}/images`))
            .catch(async (res) => {

                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
        setShowModal(false);
    }

    const deleteHandler = (e, album) => {
        e.preventDefault();
        dispatch(deleteAlbum(editAlbum));
        history.push(`/users/${user.id}/albums`);
        setShowModal(false);
    }

    return (
        <div className='edit-album-container'>
            <h1 className='edit-album-header'>Edit Album</h1>
            <div className='edit-album-form-and-buttons'>
                <form className='edit-album-form'>
                    <div className='edit-album-input-fields'>
                        <input
                            className='edit-album-input'
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <span className='edit-album-floating-label'>Title (required)</span>
                    </div>
                    <div className='edit-album-input-fields'>
                        <textarea
                            className='edit-album-textarea'
                            type='text'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        <span className='edit-album-floating-label'>Description</span>
                    </div>
                </form>
                <div className='edit-album-form-buttons'>
                    <button className='edit-album-delete-btn' onClick={(e) => deleteHandler(e, editAlbum)}>Delete album</button>
                    <button disabled={!title} id="edit-album-form-button" type='submit' onClick={(e) => handleOnSubmit(e)}>Submit</button>
                </div>
            </div>
        </div>









        // <div className='album-edit-input-box'>
        //     <h1 className='edit-album-header'>Edit Album</h1>
        //     <div className='edit-form-and-buttons'>
        //         <form onSubmit={handleOnSubmit}>
        //             <label className='input-words'>Title
        //                 <input
        //                     required
        //                     type='title'
        //                     onChange={(e) => setTitle(e.target.value)}
        //                     value={title}
        //                     placeholder='Title'
        //                     name='title'
        //                 />
        //             </label>
        //             <div className='album-form-edit-buttons'>
        //                 <button id="album-edit-button" type="submit">Submit</button>
        //                 <button className='album-delete-button' onClick={(e) => deleteHandler(e, editAlbum)}>DELETE</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    );
}

export default EditAlbumForm;
