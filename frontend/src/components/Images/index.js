import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
import { Link } from 'react-router-dom';
import './Images.css';

function Images() {

    const dispatch = useDispatch();
    const images = Object.values(useSelector(state => state.images));

    // console.log(images)

    useEffect(() => {
        dispatch(getImages());
    }, [])

    return (

        <div className='img-list'>
            {images.map(image => (
                <Link to={`/image/${image.id}`}>
                    <img className='img-display' src={image.imageURL}></img>
                </Link>
            ))}
        </div>
    );
}

export default Images;
