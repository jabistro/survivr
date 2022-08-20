import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
import { Link, useHistory } from 'react-router-dom';
import './UserImages.css';
import PhotoAlbum from 'react-photo-album';

function UserImages() {

    const history = useHistory();

    const images = Object.values(useSelector(state => state.images));
    const user = useSelector(state => state.session.user);
    const userImages = images.filter(image => image.userId === user.id)

    return (
        <div className='user-img-wrap'>
            <div className='user-img-header'>
                <div className='user-img-header-top'></div>
                <div className='user-img-header-bottom'>
                    <div className='user-img-header-left'>
                        <img alt='' src={require('../../images/deefault.jpg')} className='user-img-header-pfp' />
                        <div className='user-img-header-user-info'>
                            <div className='user-img-header-username'>{`${user.username}`}</div>
                            <div className='user-img-header-fluff'>{`${user.email}`}</div>
                        </div>
                    </div>
                    <div className='user-img-header-right'>
                        <div className='user-img-header-right-top'></div>
                        <p className='user-img-header-photo-count'>{userImages.length} {userImages.length === 1 ? "Photo" : "Photos"}</p>
                    </div>
                </div>
            </div>
            <div className='user-img-container'>
                {userImages.map((image, idx) => (
                    <div className='user-pics' key={idx}>
                        <Link key={image.id} to={`/image/${image.id}`}>
                            <img className='user-img-display' src={image.imageURL} />
                            <div className='user-img-overlay'>
                                <div className='user-img-fluff'>
                                    <p className='user-img-title'>Title</p>
                                    <p className='user-img-username'>by Somebody</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

        // <div className='user-img-wrap'>
        //     <h1 className='your-images'>{user.username}'s Photos</h1>
        //     <Link className='create-image-button' exact to='/create-image'>
        //         ADD IMAGE
        //     </Link>
        //     <div className='user-img-list'>
        //         {userImages.map(image => (
        //             <Link key={image.id} to={`/image/${image.id}`}>
        //                 <img className='user-img-display' src={image.imageURL}></img>
        //             </Link>
        //         ))}
        //     </div>
        // </div>
    );
}

export default UserImages;
