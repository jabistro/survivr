import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';

function Images() {

    const dispatch = useDispatch();
    const images = Object.values(useSelector(state => state.images));

    // console.log(images)

    useEffect(() => {
        dispatch(getImages());
    }, [])

    return (
        <ul>
            {images.map(image => (
                <li key={image.id}>
                    <img src={image.imageURL}></img>
                </li>
            ))}
        </ul>
    );
}

export default Images;
