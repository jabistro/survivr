import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './ImageDetail.css'
import { getImageLikes } from '../../store/likes';
import { useEffect, useState } from 'react';
import CommentDetail from '../CommentDetail';
import LikeButton from '../Likes/LikeButton/LikeButton';
import EditImage from '../EditImage';
import { FaEdit } from 'react-icons/fa';
import DeleteImage from '../EditImage/DeleteImage';


const ImageDetail = () => {

    const imageId = useParams().imageId;
    const image = useSelector(state => state.images)[imageId];
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.users)
    const comments = Object.values(useSelector(state => state.comments));
    const imageComments = comments.filter(comment => comment.imageId === image.id);
    const likes = Object.values(useSelector(state => state.likes));
    const imageLikes = likes.filter(like => like.imageId === image.id);
    const [edit, setEdit] = useState('');

    useEffect(() => {
        dispatch(getImageLikes());
    }, [dispatch])

    // const editHandler = image => {
    //     history.push(`/image/edit/${image.id}`)
    // }

    // const date = new Date(image.createdAt)

    // const month = [
    //     'january',
    //     'february',
    //     'march',
    //     'april',
    //     'may',
    //     'june',
    //     'july',
    //     'august',
    //     'september',
    //     'october',
    //     'november',
    //     'december'
    // ]

    return (
        <>
            {image &&
                <div className='img-detail-wrap'>
                    <div className='img-detail-top'>
                        <div className='img-detail-back'>
                            <div className='img-detail-back-btn-and-words' onClick={() => history.goBack()}>
                                <BiArrowBack className='img-detail-back-btn' />
                                <p className='img-detail-back-words'>Back to previous</p>
                            </div>
                        </div>
                        <div className='img-detail-img-container'>
                            <img className='img-detail-img' alt='' src={image?.imageURL} />
                        </div>
                        <div className='img-detail-info'>
                            {sessionUser.id === image.userId ? (
                                <DeleteImage image={image} />
                            ) : (
                                <LikeButton className='img-detail-like-btn' image={image} />
                                /* {sessionUser && sessionUser.id === image.userId && <button className='photo-detail-edit-button' onClick={() => editHandler(image)}>EDIT</button>} */
                            )}
                        </div>
                    </div>
                    <div className='img-detail-bottom'>
                        <div className='img-detail-bottom-left'>
                            <div className='img-detail-bottom-info'>
                                <div className='img-detail-bottom-pfp-container'>
                                    <img className='img-detail-bottom-pfp' alt='' src={require('../../images/deefault.jpg')} />
                                </div>
                                <div className='img-detail-bottom-img-info'>
                                    <div className='img-detail-bottom-username'>{users[image?.userId]?.username}</div>
                                    {(sessionUser?.id === image?.userId) && (edit === `image-${image?.id}`) ? (
                                        <EditImage setEdit={setEdit} image={image} />
                                    ) : (
                                        <div className='img-detail-title-and-caption-container'>
                                            <div className='img-detail-title-and-edit-btn'>
                                                <div className='img-detail-bottom-title'>{image?.title}</div>
                                                {(edit !== `image-${image?.id}`) && (sessionUser?.id === image?.userId) &&
                                                    <FaEdit title='Edit' className='img-detail-edit-img-info-btn' onClick={e => setEdit(`image-${image?.id}`)} />
                                                }
                                            </div>
                                            <div className='img-detail-bottom-caption'>{image?.caption}</div>
                                        </div>
                                    )}
                                    <div className='img-detail-bottom-divider'></div>
                                </div>
                            </div>
                            <CommentDetail image={image} />
                            {/* <div className='img-detail-bottom-'></div> */}
                        </div>
                        <div className='img-detail-bottom-right'>
                            <div className='img-detail-bottom-right-left'>
                                <div className='img-detail-bottom-right-left-containers'>
                                    <div className='img-detail-bottom-right-container'>
                                        <p className='img-detail-bottom-right-count'>13,333</p>
                                        <p className='img-detail-bottom-right-txt'>views</p>
                                    </div>
                                    <div className='img-detail-bottom-right-container'>
                                        <p className='img-detail-bottom-right-count'>{imageLikes?.length}</p>
                                        <p className='img-detail-bottom-right-txt'>likes</p>
                                    </div>
                                    <div className='img-detail-bottom-right-container'>
                                        <p className='img-detail-bottom-right-count'>{imageComments?.length}</p>
                                        <p className='img-detail-bottom-right-txt'>comments</p>
                                    </div>
                                </div>
                            </div>
                            <div className='img-detail-bottom-right-right'>Taken on {image?.createdAt}</div>
                        </div>
                    </div>
                </div>
            }
        </>
        // <>
        //     {image &&
        //         <div id='img-detail-container'>
        //             <img id='img-detail-img' src={image.imageURL}></img>
        //             <div className='img-detail-info'>
        //                 {/* {sessionUser && sessionUser.id !== image.userId && <h2 className='poster'>{image.imageUsername}</h2>} */}
        //                 <h2 className='img-detail-caption'>{image.caption}</h2>
        //                 <h3 className='img-detail-date'>{month[date.getMonth()]}{date.getDay() - 1}, {date.getFullYear()}</h3>
        //             </div>
        //             {sessionUser && sessionUser.id === image.userId && <button className='photo-detail-edit-button' onClick={() => editHandler(image)}>EDIT</button>}
        //             {/* <CommentDetail /> */}
        //         </div>
        //     }
        // </>
    )
}

export default ImageDetail
