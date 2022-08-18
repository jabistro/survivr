import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
import { Link } from 'react-router-dom';
import './UserImages.css';

function UserImages() {

    const images = Object.values(useSelector(state => state.images));
    const user = useSelector(state => state.session.user);
    const userImages = images.filter(image => image.userId === user.id)

    return (
        <div className='user-img-wrap'>
            <div className='user-header'>
                <div className='user-header-top'></div>
                <div className='user-header-bottom'>
                    <div className='user-header-left'>
                        <img alt='' src={require('../../images/deefault.jpg')} className='user-header-pfp' />
                        <div className='user-header-user-info'>
                            <div className='user-header-username'>{`${user.username}`}</div>
                            <div className='user-header-fluff'>bottom "fluff"</div>
                        </div>
                    </div>
                    <div className='user-header-right'>
                        <div className='user-header-right-top'></div>
                        <p className='user-header-photo-count'>{userImages.length} {userImages.length === 1 ? "Photo" : "Photos"}</p>
                    </div>
                </div>
            </div>
            <div className='user-img-container'></div>
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
