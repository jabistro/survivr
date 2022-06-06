import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createImage } from '../../store/images';
import './ImageInput.css';
import { getUserAlbums } from '../../store/albums';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ImageInput = () => {
    const [albums, setAlbums] = useState([]);
    const [albumId, setAlbumId] = useState(1);
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
                    setAlbumId(albums[0].id)
                }
                );
            };
            getAlbumsFunc();
        }
    })

    useEffect(() => {
        if (!user) {
            history.push('/');
        }
    }, [history, user])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(albumId)
        const newImage = {
            userId: user.id,
            albumId,
            imageURL: imageUrl,
            caption
        };

        const image = await dispatch(createImage(newImage)).then(() => (history.push(`/users/${user.id}/images`)));
        if (image) reset();
    };

    const reset = () => {
        setImageUrl('');
        setAlbumId('');
        setCaption('');
    };

    return (
        <div className='add-img-input-box'>
            <h1 className='add-image-title'>Add Image</h1>
            <div>
                <img id='blank-image' src={require('../../images/5.jpg')}></img>
            </div>
            <form className='image-add-form' onSubmit={(e) => handleSubmit(e)}>
                <label className='add-input-words'>Image URL
                    <input
                        className='add-image-input'
                        type='text'
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        placeholder='Image URL'
                        name='imageUrl'
                    />
                </label>
                <label className='add-input-words'>Caption
                    <input
                        className='add-image-input'
                        type='text'
                        onChange={(e) => setCaption(e.target.value)}
                        value={caption}
                        placeholder='Caption (optional)'
                        name='caption'
                    />
                </label>
                <label className='add-input-words'>Album (if no album, click here)
                    <select
                        required
                        className='add-image-select'
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
                </label>
                <div className='buttons'>
                    <Link to='/create-album'>
                        <button className='add-album-button'>Add Album!</button>
                    </Link>
                    <button disabled={albums.length < 1} className="img-add-button" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ImageInput;
