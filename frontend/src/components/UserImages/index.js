import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
import { Link } from 'react-router-dom';
import './UserImages.css';

function UserImages() {

    const dispatch = useDispatch();
    const images = Object.values(useSelector(state => state.images));
    const user = useSelector(state => state.session.user);
    const userImages = images.filter(image => image.userId === user.id)

    useEffect(() => {
        dispatch(getImages());
    }, [])

    return (

        <div className='img-list'>
            {userImages.map(image => (
                <Link to={`/image/${image.id}`}>
                    <img className='img-display' src={image.imageURL}></img>
                </Link>
            ))}
        </div>
    );
}

export default UserImages;
