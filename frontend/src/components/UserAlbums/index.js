import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserAlbums.css';
import EditProfilePictureModal from '../EditProfilePicture/EditProfilePictureModal';

function UserAlbums() {

    const albums = Object.values(useSelector(state => state.albums));
    const sessionUser = useSelector(state => state.session.user);
    const userAlbums = albums.filter(album => album.userId === sessionUser.id)
    const images = Object.values(useSelector(state => state.images));
    const user = useSelector(state => state.users)[sessionUser.id];
    const userImages = images.filter(image => image.userId === sessionUser.id);
    const [showModal, setShowModal] = useState(false);
    // const date = new Date(user.createdAt)
    // const [year] = [date.getFullYear()];

    return (
        <div className='user-albums-wrap'>
            <div className='user-album-header'>
                <div className='user-album-header-top'></div>
                <div className='user-album-header-bottom'>
                    <div className='user-album-header-left'>
                        <div className='user-album-header-pfp-container'>
                            <div className='user-album-header-edit-div' onClick={() => setShowModal(true)} />
                            <img alt='' src={user?.pfpURL ? user?.pfpURL : require('../../images/deefault.jpg')} className='user-album-header-pfp' onClick={() => setShowModal(true)} />
                        </div>
                        {showModal && <EditProfilePictureModal setShowModal={setShowModal} />}
                        <div className='user-album-header-user-info'>
                            <div className='user-album-header-username'>{`${sessionUser.username}`}</div>
                            <div className='user-album-header-fluff'>{`${sessionUser.email}`}</div>
                        </div>
                    </div>
                    <div className='user-album-header-right'>
                        <div className='user-album-header-right-top'></div>
                        {/* <div> */}
                        {/* <p>Joined {year}</p> */}
                        <p className='user-album-header-photo-count'>{userImages.length} {userImages.length === 1 ? "Photo" : "Photos"}</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className='user-album-new-album'>
                <Link className='user-album-new-album-icon-and-txt' exact to='/create-album'>
                    <img className='user-album-new-album-icon' alt='' src={require('../../images/new-gallery.jpg')} />
                    <p className='user-album-new-album-txt'>New Album</p>
                </Link>
            </div>
            {userAlbums?.length > 0 &&
                <div className='user-album-container'>
                    {userAlbums.map(album => {
                        return (
                            <div key={album.id} className='user-album-wrap'>
                                <Link className='user-album-pics-link' to={`/users/${sessionUser.id}/albums/${album.id}/images`}>
                                    <div className='user-album-pics'>
                                        <img className='user-album-pics-one' title={images.filter(image => image.albumId === album.id)[0] ? images.filter(image => image.albumId === album.id)[0].title : null} alt='' src={!(images.filter(image => image.albumId === album.id)[0]) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[0].imageURL} />
                                        <div className='user-album-pics-right'>
                                            <img className='user-album-pics-two' title={images.filter(image => image.albumId === album.id)[1] ? images.filter(image => image.albumId === album.id)[1].title : null} alt='' src={!(images.filter(image => image.albumId === album.id)[1]) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[1].imageURL} />
                                            <img className='user-album-pics-three' title={images.filter(image => image.albumId === album.id)[2] ? images.filter(image => image.albumId === album.id)[2].title : null} alt='' src={!(images.filter(image => image.albumId === album.id)[2]) ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-PDfavcidh7T4Ocucr_DtQ-Xe_0MA3JQ5h5j93zs2j_S_IT65S1C58fbJsieXcKSGDE&usqp=CAU" : images.filter(image => image.albumId === album.id)[2].imageURL} />
                                        </div>
                                    </div>
                                </Link>
                                <div className='user-album-info'>
                                    <div className='user-album-title-container'>
                                        <Link className='user-album-title-link' to={`/users/${sessionUser.id}/albums/${album.id}/images`}>
                                            <span className='user-album-title'>{album.title}</span>
                                        </Link>
                                    </div>
                                    <div className='user-album-img-count'>{images.filter(image => image.albumId === album.id).length} items</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {userAlbums?.length === 0 &&
                <div className='user-img-no-albums-container'>
                    <p className='user-img-no-albums-header'>You have no Albums!</p>
                    <p className='user-img-no-albums-blurb'>Use the "New Album" button in the top right to add an album.</p>
                </div>
            }
        </div>


        // <div className='albums-container'>
        //     {albums.map(album => {
        //         if (album.userId === user.id) {     // removed implicit return, only rendered albums for logged in user
        //             return (
        //                 <Link key={album.id} className='album-list-link' to={`/users/${user.id}/albums/${album.id}/images`}>
        //                     <div className='album-list'>{album.title}</div>
        //                 </Link>
        //             )
        //         }
        //     })}
        //     <Link className='create-album-button' exact to='/create-album'>
        //         ADD ALBUM
        //     </Link>
        // </div>
    );
}

export default UserAlbums;
