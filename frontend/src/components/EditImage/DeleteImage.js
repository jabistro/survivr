import "./DeleteImage.css";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Modal } from "../../context/Modal";
import { MdOutlineClose } from "react-icons/md";
import { deleteImage } from "../../store/images";
import { useHistory } from "react-router-dom";

const DeleteImage = ({ image }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user);
    console.log(user.id)

    const handleDelete = async (e) => {
        e.preventDefault();
        history.push(`/users/${user.id}/images`);
        await dispatch(deleteImage(image));
        // history.push(`/users/${user.id}/images`)
        setShowModal(false);
    }

    return (
        <>
            <FaRegTrashAlt title='Delete' onClick={() => setShowModal(true)} className="img-delete-icon" />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='delete-modal-wrap'>
                        <div className="delete-modal-header">
                            <h1 className="delete-modal-header-txt">Delete Photo</h1>
                            <MdOutlineClose className="delete-modal-close-btn" onClick={() => setShowModal(false)} />
                        </div>
                        <p className="delete-modal-blurb">Are you sure you would like to delete this photo?</p>
                        <div className="delete-modal-btn-container">
                            <button className="delete-modal-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="delete-modal-delete-btn" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default DeleteImage
