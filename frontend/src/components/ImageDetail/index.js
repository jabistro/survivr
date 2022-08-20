import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
// import CommentDetail from '../CommentDetail'
import './ImageDetail.css'


const ImageDetail = () => {

    const imageId = useParams().imageId;
    const image = useSelector(state => state.images)[imageId];

    const history = useHistory();
    let sessionUser = useSelector(state => state.session.user);

    const editHandler = image => {
        history.push(`/image/edit/${image.id}`)
    }

    const date = new Date(image.createdAt)

    const month = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ]

    return (
        <>
            {image &&
                <div className='img-detail-wrap'>
                    <div className='img-detail-back'>
                        <div className='img-detail-back-btn-and-words' onClick={() => history.goBack()}>
                            <BiArrowBack className='img-detail-back-btn' />
                            <p className='img-detail-back-words'>Back to photos</p>
                        </div>
                    </div>
                    <img className='img-detail-img' alt='' src={image.imageURL} />
                    <div className='img-detail-info'>Info</div>
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
