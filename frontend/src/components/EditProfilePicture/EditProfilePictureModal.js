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

    return (
        <>
            <Modal onClose={() => setShowModal(false)}>
                <div className='edit-pfp-wrap'>
                    <input
                        className='edit-pfp-input'
                        type='file'
                        onChange={updatePfp}
                        accept='image/*'
                    />
                    <button type='submit' onClick={handleSubmit}>submit</button>
                </div>
            </Modal>
        </>
    )
}

export default EditProfilePictureModal
