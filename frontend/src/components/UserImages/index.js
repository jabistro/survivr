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
        <div className='user-img-container'>
            <h1 className='your-images'>{user.username}'s Photos</h1>
            <Link className='create-image-button' exact to='/create-image'>
                ADD IMAGE
            </Link>
            <div className='img-list'>
                {userImages.map(image => (
                    <Link key={image.id} to={`/image/${image.id}`}>
                        <img className='img-display' src={image.imageURL}></img>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default UserImages;
