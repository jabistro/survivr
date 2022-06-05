// import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
// import CommentForm from '../CommentForm'
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

    // console.log(date);

    return (
        <>
            {image &&
                <div id='img-detail-container'>
                    <img id='img-detail-img' src={image.imageURL}></img>
                    {sessionUser && sessionUser.id === image.userId && <button className='photo-detail-edit-button' onClick={() => editHandler(image)}>EDIT ICON</button>}
                    <div className='img-detail-info'>
                        <h2 className='img-detail-caption'>{image.caption}</h2>
                        <h3 className='img-detail-date'>{month[date.getMonth()]}{date.getDay() - 1}</h3>
                    </div>
                </div>
            }
        </>
    )
}

export default ImageDetail
