import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
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
            <ul>
                {images.map(image => (
                    <li key={image.id}>
                        <img className='img-display' src={image.imageURL}></img>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Images;
