import './EditProfilePictureModal.css';
import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { editUserThunk } from '../../store/users';

const EditProfilePictureModal = ({ setShowModal }) => {
    const user = useSelector(state => state.session.user);
    const [pfpURL, setPfpURL] = useState(user.pfpURL || '');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editingUser = {
            id: user.id,
            username: user.username,
            email: user.email,
            pfpURL
        }
        await dispatch(editUserThunk(editingUser));
        setShowModal(false);
    }

    const updatePfp = (e) => {
        const file = e.target.files[0];
        if (file) setPfpURL(file);
    };

    // const removePfp = (e) => {
    //     e.preventDefault();

    //     const editingUser = {
    //         id: user.id,
    //         username: user.username,
    //         email: user.email,
    //         pfpURL: ''
    //     }
    //     dispatch(editUserThunk(editingUser));
    //     setShowModal(false);
    // }

    return (
        <>
            <Modal onClose={() => setShowModal(false)}>
                <div className='edit-pfp-wrap'>
                    <h1 className='edit-pfp-header'>Edit profile picture</h1>
                    <input
                        className='edit-pfp-input'
                        type='file'
                        onChange={updatePfp}
                        accept='image/*'
                    />
                    {/* <button onClick={removePfp}>Remove profile picture</button> */}
                    <button className='edit-pfp-submit-btn' type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </Modal>
        </>
    )
}

export default EditProfilePictureModal
