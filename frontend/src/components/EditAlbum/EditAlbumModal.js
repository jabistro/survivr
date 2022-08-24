import "./EditAlbumModal.css";
import React, { useState } from 'react'
import { Modal } from "../../context/Modal";
import EditAlbumForm from ".";
import { MdOutlineModeEditOutline } from 'react-icons/md';

const EditAlbumModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="edit-album-modal-container" onClick={() => setShowModal(true)}>
                <MdOutlineModeEditOutline className='album-imgs-edit-btn' />
                <p className='album-imgs-edit-txt'>Edit album</p>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAlbumForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default EditAlbumModal
