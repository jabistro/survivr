import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { FaRegStar, FaRegComment } from 'react-icons/fa';
import './AlbumImages.css'
import EditAlbumModal from '../EditAlbum/EditAlbumModal';
import ImageLikeCount from '../Likes/ImageLikeCount/ImageLikeCount';
import ImageCommentCount from './ImageCommentCount';


const AlbumImages = () => {

    const albumId = useParams().albumId;
    const album = useSelector(state => state.albums)[albumId];
    const images = Object.values(useSelector(state => state.images));
    const albumImages = images.filter(image => album?.id === image?.albumId);
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const users = Object.values(useSelector(state => state.users));
    const albumUserArr = users.filter(user => user?.id === (album?.userId));

    useEffect(() => {
        if (!sessionUser) history.push('/')
    }, [history, sessionUser]);

    if (!album) return null;

    return (
        <div className='album-imgs-wrap'>
            <div className='album-imgs-header'>
                <div className='album-imgs-back-and-edit'>
                    <div className='album-imgs-back' onClick={() => history.goBack()}>
                        <BiArrowBack className='album-imgs-back-btn' />
                        <p className='album-imgs-back-txt'>Back to albums list</p>
                    </div>
                    {sessionUser && sessionUser?.id === album?.userId &&
                        <div className='album-imgs-edit' /*onClick={() => editHandler(album)}*/>
                            <EditAlbumModal>
                                <MdOutlineModeEditOutline className='album-imgs-edit-btn' />
                                <p className='album-imgs-edit-txt'>Edit album</p>
                            </EditAlbumModal>
                        </div>
                    }
                </div>
                <h1 className='album-imgs-title'>{album?.title}</h1>
                <p className='album-imgs-header-blurb'>a gallery curated by {albumUserArr[0]?.username}</p>
                <p className='album-imgs-description'>
                    {album?.description.split('\n').map(line => (<div key={line?.id} id={album?.id} className="album-images-content-lines">{line}</div>))}
                </p>
                <p className='album-imgs-header-stats'>{albumImages?.length} items</p>
            </div>
            <div className='album-imgs-container'>
                {albumImages.map(image => {
                    return (
                        <div key={image?.id} className='album-imgs-div'>
                            <Link className='album-imgs-img-link' to={`/image/${image?.id}`}>
                                <img className='album-imgs-img' alt='' src={image?.imageURL} />
                            </Link>
                            <div className='album-imgs-img-fluff'>
                                <div className='album-imgs-img-fluff-left'>
                                    <div className='album-imgs-img-title-container'>
                                        <Link className='album-imgs-title-link' to={`/image/${image?.id}`}>
                                            <span className='album-imgs-img-title'>{image?.title}</span>
                                        </Link>
                                    </div>
                                    <p className='album-imgs-img-username'>by {albumUserArr[0]?.username}</p>
                                </div>
                                <div className='album-imgs-img-fluff-right'>
                                    <div className='album-imgs-img-likes'>
                                        <FaRegStar className='album-imgs-img-like-icon' />
                                        <ImageLikeCount image={image} />
                                        {/* <p className='album-imgs-img-like-txt'></p> */}
                                    </div>
                                    <div className='album-imgs-img-comments'>
                                        <FaRegComment className='album-imgs-img-comment-icon' />
                                        <ImageCommentCount image={image} />
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
