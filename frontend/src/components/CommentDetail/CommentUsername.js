import "./CommentUsername.css";
import React from 'react'
import { useSelector } from "react-redux";

const CommentUsername = ({ comment }) => {
    const users = Object.values(useSelector(state => state.users));
    const commentUser = users.filter(user => user.id === comment.userId)

    return (
        <p className="comment-username">{commentUser[0]?.username}</p>
    )
}

export default CommentUsername
