import './ImageCommentCount.css';
import React from 'react'
import { useSelector } from 'react-redux';

const ImageCommentCount = ({ image }) => {
    const comments = Object.values(useSelector(state => state.comments));
    const imageComments = comments.filter(comment => comment.imageId === image.id);

    return (
        <div className='album-imgs-img-comment-txt'>{imageComments.length}</div>
    )
}

export default ImageCommentCount
