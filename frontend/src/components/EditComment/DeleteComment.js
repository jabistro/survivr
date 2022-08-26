import "./DeleteComment.css";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comments";
import { Modal } from '../../context/Modal';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

const DeleteComment = ({ commentId }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteComment(commentId));
        setShowModal(false);
    }

    return (
        <>
            <FaRegTrashAlt title='Delete' onClick={() => setShowModal(true)} className="comment-delete" />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='delete-modal-wrap'>
                        <div className="delete-modal-header">
                            <h1 className="delete-modal-header-txt">Delete Comment</h1>
                            <MdOutlineClose className="delete-modal-close-btn" onClick={() => setShowModal(false)} />
                        </div>
                        <p className="delete-modal-blurb">Are you sure you would like to delete this comment?</p>
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

export default DeleteComment
