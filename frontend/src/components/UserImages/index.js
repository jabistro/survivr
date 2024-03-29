import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './UserImages.css';
import EditProfilePictureModal from '../EditProfilePicture/EditProfilePictureModal';
import { getUsers } from '../../store/users';

function UserImages() {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const images = Object.values(useSelector(state => state.images));
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.users);
    const user = users[sessionUser.id];
    const userImages = images.filter(image => image.userId === sessionUser?.id);
    const date = new Date(user?.createdAt);
    const year = date.getFullYear();

    useEffect(() => {
        dispatch(sessionActions.restoreUser());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <div className='user-img-wrap'>
            <div className='user-img-header'>
                <div className='user-img-header-top'></div>
                <div className='user-img-header-bottom'>
                    <div className='user-img-header-left'>
                        <div className='user-img-header-pfp-container'>
                            <div className='user-img-header-edit-div' onClick={() => setShowModal(true)} />
                            <img alt='' src={users[sessionUser?.id]?.pfpURL ? users[sessionUser?.id]?.pfpURL : require('../../images/deefault.jpg')} className='user-img-header-pfp' onClick={() => setShowModal(true)} />
                        </div>
                        {showModal && <EditProfilePictureModal setShowModal={setShowModal} />}
                        <div className='user-img-header-user-info'>
                            <div className='user-img-header-username'>{`${sessionUser?.username}`}</div>
                            <div className='user-img-header-fluff'>{`${sessionUser?.email}`}</div>
                        </div>
                    </div>
                    <div className='user-img-header-right'>
                        <div className='user-img-header-right-top'></div>
                        <div className='user-img-header-count-and-joined'>
                            <p className='user-img-header-photo-count'>{userImages.length} {userImages.length === 1 ? "Photo" : "Photos"}</p>
                            <p className='user-img-header-joined'>Joined {year}</p>
                        </div>
                    </div>
                </div>
            </div>
            {userImages?.length > 0 &&
                <div className='user-img-container'>
                    {userImages.map((image, idx) => (
                        <div className='user-pics' key={idx}>
                            <Link key={image?.id} to={`/image/${image?.id}`}>
                                <img alt='' className='user-img-display' src={image?.imageURL} />
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
            }
            {userImages?.length === 0 &&
                <div className='user-img-no-imgs-container'>
                    <p className='user-img-no-imgs-header'>You have no photos uploaded!</p>
                    <p className='user-img-no-imgs-blurb'>Use the upload button in the top right to add a photo.</p>
                </div>
            }
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
