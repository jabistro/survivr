import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/images';
import { Link, useHistory } from 'react-router-dom';
import './UserImages.css';
import EditProfilePictureModal from '../EditProfilePicture/EditProfilePictureModal';

function UserImages() {

    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const images = Object.values(useSelector(state => state.images));
    const sessionUser = useSelector(state => state.session.user);
    const user = useSelector(state => state.users)[sessionUser.id];
    const userImages = images.filter(image => image.userId === user.id);

    // const date = new Date(user.createdAt)
    // const [year] = [date.getFullYear()];

    return (
        <div className='user-img-wrap'>
            <div className='user-img-header'>
                <div className='user-img-header-top'></div>
                <div className='user-img-header-bottom'>
                    <div className='user-img-header-left'>
                        <img alt='' src={user?.pfpURL ? user?.pfpURL : require('../../images/deefault.jpg')} className='user-img-header-pfp' onClick={() => setShowModal(true)} />
                        {showModal && <EditProfilePictureModal setShowModal={setShowModal} />}
                        <div className='user-img-header-user-info'>
                            <div className='user-img-header-username'>{`${sessionUser?.username}`}</div>
                            <div className='user-img-header-fluff'>{`${sessionUser?.email}`}</div>
                        </div>
                    </div>
                    <div className='user-img-header-right'>
                        <div className='user-img-header-right-top'></div>
                        {/* <div className='user-img-header-count-and-date'> */}
                        {/* <div> */}
                        <p className='user-img-header-photo-count'>{userImages?.length} {userImages?.length === 1 ? "Photo" : "Photos"}</p>
                        {/* <p>Joined {year}</p> */}
                        {/* </div> */}
                        {/* <p className='user-img-header-date'>{user.createdAt}</p> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className='user-img-container'>
                {userImages.map((image, idx) => (
                    <div className='user-pics' key={idx}>
                        <Link key={image?.id} to={`/image/${image?.id}`}>
                            <img className='user-img-display' src={image?.imageURL} />
                            <div className='user-img-overlay'>
                                <div className='user-img-fluff'>
                                    <p className='user-img-title'>{image?.title}</p>
                                    <p className='user-img-username'>by {sessionUser?.username}</p>
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
