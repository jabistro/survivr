import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
import { Link } from 'react-router-dom';
import './OthersImages.css';

function OthersImages() {

    const images = Object.values(useSelector(state => state.images));
    const user = useSelector(state => state.session.user);
    const userImages = images.filter(image => image.userId !== user.id)

    return (

        <div className='other-img-list'>
            {userImages.map(image => (
                <Link key={image.id} to={`/image/${image.id}`}>
                    <img className='other-img-display' src={image.imageURL}></img>
                </Link>
            ))}
        </div>
    );
}

export default OthersImages;
