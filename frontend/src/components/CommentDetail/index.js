import { useSelector } from 'react-redux'
import { useHistory, useParams, Link } from 'react-router-dom'
import './CommentDetail.css'


const CommentDetail = () => {
    const comments = Object.values(useSelector(state => state.comments));
    const imageId = useParams().imageId;
    const image = useSelector(state => state.images)[imageId];
    const imageComments = comments.filter(comment => comment.imageId === image.id)
    // const users = useSelector(state => state.users)

    return (
        <div className='comment-container'>
            <div className='comment-list'>
                {imageComments.map(comment => (
                    <p className='comment-display'>
                        {comment.comment}
                    </p>
                ))}
            </div>
            <Link className='add-comment-button' exact to='/add-comment'>
                ADD COMMENT
            </Link>
        </div>
    );

}

export default CommentDetail
