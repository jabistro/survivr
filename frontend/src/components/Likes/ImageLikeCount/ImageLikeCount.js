import './ImageLikeCount.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getImageLikes } from '../../../store/likes';

const ImageLikeCount = ({ image }) => {
    const dispatch = useDispatch();
    const likes = Object.values(useSelector(state => state.likes));
    const imageLikes = likes.filter(like => like.imageId === image.id)

    useEffect(() => {
        dispatch(getImageLikes());
    }, [dispatch])

    return (
        <div>{imageLikes.length}</div>
    )
}

export default ImageLikeCount
