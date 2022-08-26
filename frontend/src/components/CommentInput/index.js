import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../store/comments';
import './CommentInput.css';
import { useHistory } from 'react-router-dom';



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
            imageId: image.id,
            content
        };

        const comment = await dispatch(createComment(newComment));

        setContent("")
    };

    // const handleTextArea = async (e) => {
    //     const textarea = document.querySelector("textarea");
    //     textarea.addEventListener("keyup", e => {
    //         textarea.style.height = "70px";
    //         let scHeight = e.target.scrollHeight;
    //         textarea.style.height = `${scHeight}px`;
    //     })
    // }

    // const handleOne = (e) => setContent(e.target.value);
    // const handleTwo = (e) => SetInputHeight(e, '70px');

    // const handleChange = (e) => {
    //     handleOne();
    //     handleTwo();
    // }

    return (
        <div className='add-comment-wrap'>
            <img className='add-comment-pfp' alt='' src={require('../../images/deefault.jpg')} />
            <form className='add-comment-form-and-btn' onSubmit={handleSubmit}>
                <div className='add-comment-container'>
                    <textarea
                        placeholder='Add a comment'
                        className='add-comment-textarea'
                        type='text'
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    ></textarea>
                    <div className='add-comment-features'></div>
                </div>
                <button className='add-comment-btn' disabled={!content} type='submit'>comment</button>
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
