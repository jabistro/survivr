import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
// import CommentForm from '../CommentForm'
import './AlbumImages.css'


const AlbumImages = () => {

    const albumId = useParams().albumId;
    const album = useSelector(state => state.albums)[albumId];
    const images = Object.values(useSelector(state => state.images));
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        if (!user) history.push('/')
    }, [])

    const editHandler = album => {
        history.push(`/album/edit/${album.id}`)
    }

    return (
        <div className='albumImages-container'>
            <div>
                <h1 className='album-title-and-edit-button'>
                    <div className='album-title'>
                        {album.title}
                    </div>
                    <div className={user.id === album.userId ? 'edit-album-button' : 'no-button'}>
                        {user && user.id === album.userId && <i id='edit-album-icon' class="fa-solid fa-xs fa-pen-to-square" onClick={() => editHandler(album)}>Edit Album Name</i>}
                    </div>
                </h1>
            </div>
            {images.map(image => {
                if (album.id === image.albumId) {
                    return (
                        <Link key={image.id} to={`/image/${image.id}`}>
                            <img className='album-imgs' src={image.imageURL}></img>
                        </Link>
                    )
                }
            })}
            {album.userId === user.id ? <Link className='create-image-button' exact to='/create-image'>ADD IMAGE</Link> : <></>}
        </div>
    )
}

export default AlbumImages;
