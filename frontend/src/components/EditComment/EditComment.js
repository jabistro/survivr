import './EditComment.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editCommentThunk } from '../../store/comments';

const EditComment = ({ comment, image, setEdit }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [content, setContent] = useState(comment.content)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            id: comment.id,
            userId: user.id,
            imageId: image.id,
            content
        };

        await dispatch(editCommentThunk(newComment));
        setEdit(false);
    };

    return (
        <div className='edit-comment-wrap'>
            <form className='edit-comment-form-and-btn' onSubmit={handleSubmit}>
                <div className='edit-comment-container'>
                    <textarea
                        placeholder='Add a comment'
                        className='edit-comment-textarea'
                        type='text'
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    ></textarea>
                    <div className='edit-comment-features'></div>
                </div>
                <div className='edit-comment-btn-container'>
                    <button className='edit-comment-btn' disabled={!content} type='submit'>Done</button>
                </div>
            </form>
        </div>
    )
}

export default EditComment
