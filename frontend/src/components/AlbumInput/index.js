import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAlbum } from '../../store/albums';
import './AlbumInput.css';


const AlbumInput = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {

        if (!user) {
            history.push('/');
        }
    }, [history, user])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAlbum = {
            userId: user.id,
            title,
            description
        };

        const album = await dispatch(createAlbum(newAlbum)).then(() => (history.push(`/users/${user.id}/albums`)));
    };

    return (
        <div className='add-album-wrap'>
            <div className='add-album-container'>
                <h1 className='add-album-header'>Add Album</h1>
                <div className='add-album-form-and-buttons'>
                    <form className='add-album-form' onSubmit={handleSubmit}>
                        <div className='add-album-input-fields'>
                            <input
                                className='add-album-input'
                                type='text'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <span className='add-album-floating-label'>Title (required)</span>
                        </div>
                        <div className='add-album-input-fields'>
                            <textarea
                                className='add-album-textarea'
                                type='text'
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                            <span className='add-album-floating-label'>Description</span>
                        </div>
                        <div className='album-form-add-buttons'>
                            <button disabled={!title} id="add-album-form-button" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AlbumInput;
