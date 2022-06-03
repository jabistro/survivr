import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
// import CommentForm from '../CommentForm'
import './AlbumImages.css'


const AlbumImages = () => {

    const albumId = useParams().albumId;
    const album = useSelector(state => state.albums)[albumId];
    const images = Object.values(useSelector(state => state.images));
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    console.log(images);

    useEffect(() => {
        if (!user) history.push('/')
    }, [])

    const editHandler = album => {
        history.push(`/album/edit/${album.id}`)
    }

    return (
        <div>
            <h1>{album.title}</h1>
            {user && user.id === album.userId && <button className='album-edit-button' onClick={() => editHandler(album)}>EDIT ICON</button>}
            {images.map(image => {
                console.log(album.id, image.albumId)
                if (album.id === image.albumId) {
                    return (
                        <img className='album-imgs' src={image.imageURL}></img>
                    )
                }
            })}
        </div>
    )
}

export default AlbumImages;
