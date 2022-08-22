import "./AddImageModal.css";
import React, { useState } from 'react'
import { Modal } from "../../context/Modal";
import ImageInput from ".";

const AddImageModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <i title='Upload' id='img-upload' className="fa-solid fa-cloud-arrow-up" onClick={() => setShowModal(true)}></i>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageInput setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default AddImageModal
