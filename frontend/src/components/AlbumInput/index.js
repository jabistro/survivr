import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAlbum } from '../../store/albums';
import './AlbumInput.css';


const AlbumInput = () => {
    const [title, setTitle] = useState('');

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
            title
        };

        const album = await dispatch(createAlbum(newAlbum)).then(() => (history.push(`/users/${user.id}/albums`)));
    };

    return (
        <div className='album-add-input-box'>
            <h1 className='add-album-header'>Add Album</h1>
            <div className='add-form-and-buttons'>
                <form onSubmit={handleSubmit}>
                    <label className='add-words-label'>Title
                        <input
                            className='add-words'
                            required
                            type='title'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder='Title'
                            name='title'
                        />
                    </label>
                    <div className='album-form-add-buttons'>
                        <button id="album-add-button" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AlbumInput;
