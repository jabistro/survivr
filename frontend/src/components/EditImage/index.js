import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editImageThunk } from '../../store/images';
import './EditImage.css'

const EditImage = ({ image, setEdit }) => {
    const [caption, setCaption] = useState(image.caption || '');
    const [title, setTitle] = useState(image.title)
    // const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    // useEffect(() => {
    //     if (user && albums.length === 0) {
    //         const getAlbumsFunc = async () => {
    //             const albumThunk = await dispatch(getUserAlbums(user.id)).then((albums) => {
    //                 setAlbums(albums);
    //             }
    //             );
    //         };
    //         getAlbumsFunc();
    //     }
    // })

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const editingImage = {
            id: image.id,
            userId: user.id,
            imageURL: image.imageURL,
            caption,
            title,
            albumId: image.albumId
        }
        await dispatch(editImageThunk(editingImage))
        setEdit('');
        // .then(() => history.push(`/image/${editImageId}`))
        // .catch(async (res) => {
        //     const data = await res.json()
        //     if (data && errors) setErrors(data.errors)
        // })
    }

    // const updateImage = (e) => {
    //     const file = e.target.files[0];
    //     if (file) setImage(file);
    // };

    // const deleteHandler = (e, image) => {
    //     e.preventDefault()
    //     dispatch(deleteImage(image))
    //         .then(() => history.push(`/users/${user.id}/images`))
    // }

    return (
        <div className='edit-img-container'>
            <form className='edit-img-form' onSubmit={(e) => handleOnSubmit(e)}>
                <div className='edit-img-input-fields'>
                    <input
                        className='edit-img-input'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <span className='edit-img-floating-label'>Title (required)</span>
                </div>
                <div className='edit-img-input-fields'>
                    <textarea
                        className='edit-img-textarea'
                        type='text'
                        onChange={(e) => setCaption(e.target.value)}
                        value={caption}
                        placeholder='Add a caption'
                    />
                    <span className='edit-img-floating-label'>Caption</span>
                </div>
                <button disabled={!title} className="edit-img-button" type='submit'>Done</button>
            </form>
        </div>





        // <div className='img-edit-input-box'>
        //     <h1 className='edited-image-title'>Edit Image</h1>
        //     <img className='edited-image' src={editImage.imageURL}></img>
        //     <form className='image-edit-form' onSubmit={handleOnSubmit}>
        //         <label className='input-words'>Image
        //             <input
        //                 className='edit-image-input'
        //                 type='file'
        //                 onChange={updateImage}
        //                 // value={imageURL}
        //                 placeholder='Image'
        //                 // name='imageUrl'
        //                 accept="image/*"
        //             />
        //         </label>
        //         <label className='input-words'>Caption
        //             <input
        //                 className='edit-image-input'
        //                 type='text'
        //                 onChange={(e) => setCaption(e.target.value)}
        //                 value={caption}
        //                 placeholder='Caption (optional)'
        //                 name='caption'
        //             />
        //         </label>
        //         <label className='input-words'>Album
        //             <select
        //                 className='edit-image-select'
        //                 value={albumId}
        //                 onChange={(e) => setAlbumId(parseInt(e.target.value))}
        //                 name='albumId'
        //             >
        //                 {
        //                     albums.map(album => {
        //                         return <option key={album.id} value={album.id}>{album.title}</option>
        //                     })
        //                 }
        //             </select>
        //         </label>
        //         <div className='img-edit-form-buttons'>
        //             <button className="img-edit-button" type="submit">Submit</button>
        //             <button className='img-delete-button' onClick={(e) => deleteHandler(e, editImage)}>Delete</button>
        //         </div>
        //     </form >
        // </div >
    );
}

export default EditImage;
