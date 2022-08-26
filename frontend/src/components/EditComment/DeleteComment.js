import "./DeleteComment.css";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comments";
import { Modal } from '../../context/Modal';

const DeleteComment = ({ commentId }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteComment(commentId));
        setShowModal(false);
    }

    return (
        <div>
            <i onClick={() => setShowModal(true)} className="comment-delete">delete</i>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <div>
                            <h1>Delete Comment</h1>
                            <p>Are you sure you would like to delete this comment?</p>
                        </div>
                        <div>
                            <button onClick={() => setShowModal(false)}>cancel</button>
                            <button onClick={handleDelete}>delete</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default DeleteComment
