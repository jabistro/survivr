import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../store/albums';
import { Link } from 'react-router-dom';
import './OthersAlbums.css';

function OthersAlbums() {

    const albums = Object.values(useSelector(state => state.albums));
    const user = useSelector(state => state.session.user);
    const othersAlbums = albums.filter(album => album.userId !== user.id)
    const images = Object.values(useSelector(state => state.images));

    return (
        <div className='others-albums-wrap'>
            <div className='others-album-header'>
                <div className='others-album-header-top'></div>
                <div className='others-album-header-bottom'>
                    <div className='others-album-header-left'>
                        <img alt='' src={require('../../images/torch.png')} className='others-album-header-pfp' />
                        <div className='others-album-header-user-info'>
                            <div className='others-album-header-username'>Survivr</div>
                            <div className='others-album-header-fluff'>Number of users</div>
                        </div>
                    </div>
                    <div className='others-album-header-right'>
                        <div className='others-album-header-right-top'></div>
                        <p className='others-album-header-photo-count'>{images.length} {images.length === 1 ? "Photo" : "Photos"}</p>
                    </div>
                </div>
            </div>
            {/* <div className='others-album-new-album'>
                <Link className='others-album-new-album-icon-and-txt' exact to='/create-album'>
                    <img className='others-album-new-album-icon' alt='' src={require('../../images/new-gallery.jpg')} />
                    <p className='others-album-new-album-txt'>New Album</p>
                </Link>
            </div> */}
            <div className='others-album-container'>
                {othersAlbums.map(album => {
                    return (
                        <div key={album.id} className='others-album-wrap'>
                            <Link className='others-album-pics-link' to={`/users/${user.id}/albums/${album.id}/images`}>
                                <div className='others-album-pics'>
                                    <img className='others-album-pics-one' alt='' src={!(images.filter(image => image.albumId === album.id)[0]) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[0].imageURL} />
                                    <div className='others-album-pics-right'>
                                        <img className='others-album-pics-two' alt='' src={!(images.filter(image => image.albumId === album.id)[1]) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[1].imageURL} />
                                        <img className='others-album-pics-three' alt='' src={!(images.filter(image => image.albumId === album.id)[2]) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[2].imageURL} />
                                    </div>
                                </div>
                            </Link>
                            <div className='others-album-info'>
                                <div className='others-album-title-container'>
                                    <Link className='others-album-title-link' to={`/users/${user.id}/albums/${album.id}/images`}>
                                        <span className='others-album-title'>{album.title}</span>
                                    </Link>
                                </div>
                                <div className='others-album-img-count'>{images.filter(image => image.albumId === album.id).length} items</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>



        // <div className='albums-container'>
        //     {albums.map(album => {
        //         if (album?.userId !== user?.id) {     // removed implicit return, only rendered albums for logged in user
        //             return <Link key={album.id} className='album-list-link' to={`/users/${album.userId}/albums/${album.id}/images`}>
        //                 <div className='album-list'>{album.title}</div>
        //             </Link>
        //         }
        //     })}
        // </div>
    );
}

export default OthersAlbums;
