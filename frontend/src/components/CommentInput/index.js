import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../store/comments';
import './CommentInput.css';
import { getImages } from '../../store/images';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



const CommentInput = ({ image }) => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [content, setContent] = useState('')

    useEffect(() => {

        if (!user) {
            history.push('/');
        }
    }, [history, user])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            userId: user.id,
            content
        };

        const comment = await dispatch(createComment(newComment)).then(() => (history.push(`/image/${image.id}`)));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder='Add a comment'
                ></textarea>
                <button type='submit'>comment</button>
            </form>
        </div>



        // <div className='album-add-input-box'>
        //     <h1 className='add-album-header'>Add Album</h1>
        //     <div className='add-form-and-buttons'>
        //         <form onSubmit={handleSubmit}>
        //             <label className='add-words-label'>Title
        //                 <input
        //                     className='add-words'
        //                     required
        //                     type='title'
        //                     onChange={(e) => setTitle(e.target.value)}
        //                     value={title}
        //                     placeholder='Title'
        //                     name='title'
        //                 />
        //             </label>
        //             <div className='album-form-add-buttons'>
        //                 <button id="album-add-button" type='submit'>Submit</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    );
};

export default CommentInput;
