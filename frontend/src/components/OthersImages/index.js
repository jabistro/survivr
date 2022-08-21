import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
import { Link, useHistory } from 'react-router-dom';
import './OthersImages.css';

function OthersImages() {

    const history = useHistory();

    const images = Object.values(useSelector(state => state.images));
    const user = useSelector(state => state.session.user);
    const othersImages = images.filter(image => image.userId !== user.id)

    return (
        <div className='others-img-wrap'>
            <div className='others-img-header'>
                <div className='others-img-header-top'></div>
                <div className='others-img-header-bottom'>
                    <div className='others-img-header-left'>
                        <img alt='' src={require('../../images/torch.png')} className='others-img-header-pfp' />
                        <div className='others-img-header-user-info'>
                            <div className='others-img-header-username'>Survivr</div>
                            <div className='others-img-header-fluff'>Number of users</div>
                        </div>
                    </div>
                    <div className='others-img-header-right'>
                        <div className='others-img-header-right-top'></div>
                        {/* <div className='others-img-header-count-and-date'> */}
                        <p className='others-img-header-photo-count'>{images.length} {images.length === 1 ? "Photo" : "Photos"}</p>
                        {/* <p className='others-img-header-date'>{user.createdAt}</p> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className='others-img-container'>
                {othersImages.map((image, idx) => (
                    <div className='others-pics' key={idx}>
                        <Link key={image.id} to={`/image/${image.id}`}>
                            <img className='others-img-display' src={image.imageURL} />
                            <div className='others-img-overlay'>
                                <div className='others-img-fluff'>
                                    <p className='others-img-title'>Title</p>
                                    <p className='others-img-username'>by Somebody</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>



        // <div className='other-img-list'>
        //     {userImages.map(image => (
        //         <Link key={image.id} to={`/image/${image.id}`}>
        //             <img className='other-img-display' src={image.imageURL}></img>
        //         </Link>
        //     ))}
        // </div>
    );
}

export default OthersImages;
