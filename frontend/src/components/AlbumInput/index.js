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
        <div className='album-input-box'>
            <h1>Add Album</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AlbumInput;
