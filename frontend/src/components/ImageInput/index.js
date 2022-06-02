import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeImage } from '../../store/images';
import './ImageInput.css';
import { getUserAlbums } from '../../store/albums';
import { useHistory } from 'react-router-dom';



const ImageInput = () => {
    const [albumId, setAlbumId] = useState(1);
    const [albums, setAlbums] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [caption, setCaption] = useState('');

    const history = useHistory();

    const user = useSelector(state => state.session.user);


    const dispatch = useDispatch();

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

    useEffect(() => {
        console.log(albumId)
    }, [albumId])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newImage = {
            userId: user.id,
            albumId,
            imageURL: imageUrl,
            caption
        };

        console.log(newImage)

        const image = await dispatch(writeImage(newImage)).then(history.push('/'));
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
                    placeholder='Caption'
                    name='caption'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ImageInput;
