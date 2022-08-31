import './ImageUsername.css';
import React from 'react'
import { useSelector } from 'react-redux';

const ImageUsername = ({ image }) => {
    const users = useSelector(state => state.users)

    return (
        <div>{users[image?.userId]?.username}</div>
    )
}

export default ImageUsername
