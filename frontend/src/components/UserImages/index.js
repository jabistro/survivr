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
            <div className='img-list'>
                {userImages.map(image => (
                    <Link to={`/image/${image.id}`}>
                        <img className='img-display' src={image.imageURL}></img>
                    </Link>
                ))}
                <Link className='create-image-button' exact to='/create-image'>
                    ADD IMAGE
                </Link>
            </div>
        </div>
    );
}

export default UserImages;


{/* <div class="gallery">
            <div class="gallery__column">
                {userImages.map(image => {
                    <figure class="gallery__thumb">
                        <Link to={`/image/${image.id}`}>
                            <img src={image.imageURL} class="gallery__image" />
                        </Link>
                        <figcaption class="gallery__caption">{image.caption}</figcaption>
                    </figure>
                })}
            </div>
        </div> */}

{/* <a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link"></a> */ }
