import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeImage } from '../../store/images';
import './ImageInput.css';

const ImageInput = () => {
    const [albumId, setAlbumId] = useState('');
    const [albums, setAlbums] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');

    const userId = useSelector(state => state.user.id);



    useEffect(() => {
        const variable = async () => {
            const albumThunk = await dispatch(somethunk(user.id));
            setAlbums(albumThunk);
        };
    })

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newImage = {
            userId,
            albumId,
            imageUrl,
            caption
        };

        const image = await dispatch(writeImage(newImage));
        // console.log('without await', image)
        if (image) reset();
    };

    const reset = () => {
        setImageUrl('');
        setAlbumId('');
        setCaption('');
    };

    return (
        <div className='inputBox'>
            <h1>Add Image</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    placeholder='Image URL'
                    name='imageUrl'
                />
                <input
                    type='text'
                    value={albumId}
                    onChange={(e) => setAlbumId(e.target.value)}
                    name='albumId'
                    placeholder='AlbumId'
                ></input>
                <input
                    type='text'
                    onChange={(e) => setCaption(e.target.value)}
                    value={caption}
                    placeholder='Caption'
                    name='caption'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ImageInput;
