import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { FaRegStar, FaRegComment } from 'react-icons/fa';
// import CommentForm from '../CommentForm'
import './AlbumImages.css'
import EditAlbumModal from '../EditAlbum/EditAlbumModal';


const AlbumImages = () => {

    const albumId = useParams().albumId;
    const album = useSelector(state => state.albums)[albumId];
    console.log(album)
    const images = Object.values(useSelector(state => state.images));
    const albumImages = images.filter(image => album.id === image.albumId)
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        if (!user) history.push('/')
    }, [])

    const editHandler = album => {
        history.push(`/album/edit/${album.id}`)
    }

    if (!album) return null;

    return (
        <div className='album-imgs-wrap'>
            <div className='album-imgs-header'>
                <div className='album-imgs-back-and-edit'>
                    <div className='album-imgs-back' onClick={() => history.goBack()}>
                        <BiArrowBack className='album-imgs-back-btn' />
                        <p className='album-imgs-back-txt'>Back to albums list</p>
                    </div>
                    {user && user.id === album.userId &&
                        <div className='album-imgs-edit' /*onClick={() => editHandler(album)}*/>
                            <EditAlbumModal>
                                <MdOutlineModeEditOutline className='album-imgs-edit-btn' />
                                <p className='album-imgs-edit-txt'>Edit album</p>
                            </EditAlbumModal>
                        </div>
                    }
                </div>
                <h1 className='album-imgs-title'>{album.title}</h1>
                <p className='album-imgs-header-blurb'>a gallery curated by USERNAME</p>
                <p className='album-imgs-description'>{album.description}</p>
                <p className='album-imgs-header-stats'>{albumImages.length} items</p>
            </div>
            <div className='album-imgs-container'>
                {albumImages.map(image => {
                    return (
                        <div key={image.id} className='album-imgs-div'>
                            <Link className='album-imgs-img-link' to={`/image/${image.id}`}>
                                <img className='album-imgs-img' alt='' src={image.imageURL} />
                            </Link>
                            <div className='album-imgs-img-fluff'>
                                <div className='album-imgs-img-fluff-left'>
                                    <div className='album-imgs-img-title-container'>
                                        <Link className='album-imgs-title-link' to={`/image/${image.id}`}>
                                            <span className='album-imgs-img-title'>{image.title}</span>
                                        </Link>
                                    </div>
                                    <p className='album-imgs-img-username'>by Somebody</p>
                                </div>
                                <div className='album-imgs-img-fluff-right'>
                                    <div className='album-imgs-img-likes'>
                                        <FaRegStar className='album-imgs-img-like-icon' />
                                        <p className='album-imgs-img-like-txt'></p>
                                    </div>
                                    <div className='album-imgs-img-comments'>
                                        <FaRegComment className='album-imgs-img-comment-icon' />
                                        <p className='album-imgs-img-comment-txt'>91</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>




        // <div className='albumImages-container'>
        //     <div>
        //         <h1 className='album-title-and-edit-button'>
        //             <div className='album-title'>
        //                 {album.title}
        //             </div>
        //             <div className={user.id === album.userId ? 'edit-album-button' : 'no-button'}>
        //                 {user && user.id === album.userId && <i id='edit-album-icon' class="fa-solid fa-xs fa-pen-to-square" onClick={() => editHandler(album)}>Edit Album Name</i>}
        //             </div>
        //         </h1>
        //     </div>
        //     {images.map(image => {
        //         if (album.id == image.albumId) {
        //             return (
        //                 <Link key={image.id} to={`/image/${image.id}`}>
        //                     <img className='album-imgs' src={image.imageURL}></img>
        //                 </Link>
        //             )
        //         }
        //     })}
        //     {album.userId === user.id ? <Link className='create-image-button' exact to='/create-image'>ADD IMAGE</Link> : <></>}
        // </div>
    )
}

export default AlbumImages;
