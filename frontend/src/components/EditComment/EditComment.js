import './EditComment.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editCommentThunk } from '../../store/comments';
import Picker from 'emoji-picker-react';
import { FaRegSmile } from 'react-icons/fa';

const EditComment = ({ comment, image, setEdit }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [content, setContent] = useState(comment.content);
    const [showPicker, setShowPicker] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            id: comment.id,
            userId: user.id,
            imageId: image.id,
            content
        };

        await dispatch(editCommentThunk(newComment));
        setEdit('');
    };

    const onEmojiClick = (event, emojiObject) => {
        setContent(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
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
                    <div className='edit-comment-features'>
                        <FaRegSmile className="add-comment-emoji-icon" onClick={() => setShowPicker(val => !val)} />
                        {showPicker && <Picker
                            className="picker"
                            pickerStyle={{ width: '100%' }}
                            onEmojiClick={onEmojiClick} />}
                    </div>
                </div>
                <div className='edit-comment-btn-container'>
                    <button className='edit-comment-btn' disabled={!content} type='submit'>Done</button>
                </div>
            </form>
        </div>
    )
}

export default EditComment
