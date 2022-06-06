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

        console.log(user);

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
        <div className='add-album-input-box'>
            <h1 className='add-album-header'>Add Album</h1>
            <div className='add-form-and-buttons'>
                <form className='add-form' onSubmit={handleSubmit}>
                    <label>Title
                        <input
                            required
                            className='add-input-words'
                            type='title'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder='Title'
                            name='title'
                        />
                    </label>
                    <button id="album-add-button" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AlbumInput;
