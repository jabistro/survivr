import './LikeButton.css';
import React from 'react'
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createLike, removeLike } from '../../../store/likes';

const LikeButton = ({ image }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session?.user);
    const likes = Object.values(useSelector(state => state?.likes));
    const currentLike = likes.filter(like => like?.userId === sessionUser?.id && like?.imageId === image?.id);

    const handleLike = async (e) => {
        e.preventDefault();
        const newLike = {
            userId: sessionUser?.id,
            imageId: image?.id
        }
        await dispatch(createLike(newLike));
    }

    const handleUnlike = async (e) => {
        e.preventDefault();
        await dispatch(removeLike(currentLike[0]?.id));
    }

    if (currentLike.length === 0) {
        return (
            <div>
                <FaRegStar title='Like' className='like-btn-unliked' onClick={handleLike} />
            </div>
        )
    }

    return (
        <div>
            <FaStar title='Unlike' className='like-btn-liked' onClick={handleUnlike} />
        </div>
    )
}

export default LikeButton
