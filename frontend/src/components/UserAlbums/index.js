import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../store/albums';
import { Link } from 'react-router-dom';
import './UserAlbums.css';

function UserAlbums() {

    const albums = Object.values(useSelector(state => state.albums));
    const user = useSelector(state => state.session.user);
    const userAlbums = albums.filter(album => album.userId === user.id)
    const images = Object.values(useSelector(state => state.images));

    return (
        <div className='user-albums-wrap'>
            <div className='user-album-header'>
                <div className='user-album-header-top'></div>
                <div className='user-album-header-bottom'>
                    <div className='user-album-header-left'>
                        <img alt='' src={require('../../images/deefault.jpg')} className='user-album-header-pfp' />
                        <div className='user-album-header-user-info'>
                            <div className='user-album-header-username'>{`${user.username}`}</div>
                            <div className='user-album-header-fluff'>{`${user.email}`}</div>
                        </div>
                    </div>
                    <div className='user-album-header-right'>
                        <div className='user-album-header-right-top'></div>
                        <p className='user-album-header-photo-count'>{userAlbums.length} {userAlbums.length === 1 ? "Album" : "Albums"}</p>
                    </div>
                </div>
            </div>
            <h2 className='user-album-h2'>Want to create an album?</h2>
            <Link className='create-album-btn' exact to='/create-album'>Add an album</Link>
            <div className='user-album-container'>
                {userAlbums.map(album => {
                    return (
                        <div className='user-album-wrap'>
                            <div className='user-album-pics'>
                                <img className='user-album-pics-one' alt='' src={(images.filter(image => image.albumId === album.id)[0].imageURL === undefined) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[0].imageURL} />
                                <div className='user-album-pics-right'>
                                    <img className='user-album-pics-two' alt='' src={(images.filter(image => image.albumId === album.id)[1].imageURL === undefined) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[1].imageURL} />
                                    <img className='user-album-pics-three' alt='' src={!(images.filter(image => image.albumId === album.id)[2].imageURL) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[2].imageURL} />
                                </div>
                            </div>
                            <div className='user-album-info'>
                                <div className='user-album-title-container'>
                                    <span className='user-album-title'>{album.title}</span>
                                </div>
                                <div className='user-album-img-count'>{images.filter(image => image.albumId === album.id).length} items</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>


        // <div className='albums-container'>
        //     {albums.map(album => {
        //         if (album.userId === user.id) {     // removed implicit return, only rendered albums for logged in user
        //             return (
        //                 <Link key={album.id} className='album-list-link' to={`/users/${user.id}/albums/${album.id}/images`}>
        //                     <div className='album-list'>{album.title}</div>
        //                 </Link>
        //             )
        //         }
        //     })}
        //     <Link className='create-album-button' exact to='/create-album'>
        //         ADD ALBUM
        //     </Link>
        // </div>
    );
}

export default UserAlbums;
