import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createImage } from "../../store/images";
import "./ImageInput.css";
import { getUserAlbums } from "../../store/albums";
import { useHistory } from "react-router-dom";

const ImageInput = ({ setShowModal }) => {
  const [albums, setAlbums] = useState([]);
  const [albumId, setAlbumId] = useState(1);
  const [image, setImage] = useState(false);
  const [caption, setCaption] = useState("");
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");

  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && albums.length === 0) {
      const getAlbumsFunc = async () => {
        await dispatch(getUserAlbums(user.id)).then((albums) => {
          setAlbums(albums);
        });
      };
      getAlbumsFunc();
    }
  }, [user, dispatch, albums]);

  useEffect(() => {
    if (albums.length > 0) setAlbumId(albums[0].id);
  }, [albums]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [history, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = {
      userId: user.id,
      albumId,
      image,
      title,
      caption,
    };

    const theImage = await dispatch(createImage(newImage))
      .then(() => history.push(`/users/${user.id}/images`))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    if (theImage) reset();
    setShowModal(false);
  };

  const reset = () => {
    setImage(false);
    setAlbumId("");
    setCaption("");
    setTitle("");
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleAddAlbum = (e) => {
    e.preventDefault();
    history.push("/create-album");
    setShowModal(false);
  };

  return (
    <div className="add-img-container">
      <h1 className="add-img-title">Add photo</h1>
      <ul>
        {errors.map((error, idx) => (
          <li className="add-img-errors" key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <br />
      <form className="add-img-form" onSubmit={(e) => handleSubmit(e)}>
        <label className="add-img-input-container">
          Image
          <input
            className="add-image-file-input"
            type="file"
            onChange={updateImage}
            placeholder="Image"
            accept="image/*"
          />
        </label>
        <div className="add-img-input-fields">
          <input
            className="add-img-input"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <span className="add-img-floating-label">Title (required)</span>
        </div>
        <div className="add-img-input-fields">
          <textarea
            className="add-img-textarea"
            type="text"
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
          />
          <span className="add-img-floating-label">Description</span>
        </div>
        <div className="add-img-select-field">
          Album
          <select
            required
            className="add-img-select"
            value={albumId}
            onChange={(e) => setAlbumId(e.target.value)}
            name="albumId"
          >
            {albums.map((album) => {
              return (
                <option key={album.id} value={album.id}>
                  {album.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="add-img-add-album-container">
          <p className="add-img-add-album-txt">Don't have any albums?</p>
          <button className="add-album-button" onClick={handleAddAlbum}>
            Add an album
          </button>
        </div>
        <button
          disabled={albums.length < 1 || !title || !image}
          className="add-img-button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>

    // <div className='add-img-wrap'>
    //     <div className='add-img-input-box'>
    //         <ul>
    //             {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    //         </ul>
    //         <br />
    //         <h1 className='add-image-title'>Add Image</h1>
    //         <div>
    //             <img id='blank-image' src={require('../../images/5.jpg')}></img>
    //         </div>
    //         <form className='image-add-form' onSubmit={(e) => handleSubmit(e)}>
    //             <label className='add-input-words'>Image
    //                 <input
    //                     className='add-image-input'
    //                     type='file'
    //                     onChange={updateImage}
    //                     // value={image}
    //                     placeholder='Image'
    //                     // name='imageUrl'
    //                     accept="image/*"
    //                 />
    //             </label>
    //             <label className='add-input-words'>Caption
    //                 <input
    //                     className='add-image-input'
    //                     type='text'
    //                     onChange={(e) => setCaption(e.target.value)}
    //                     value={caption}
    //                     placeholder='Caption (optional)'
    //                     name='caption'
    //                 />
    //             </label>
    //             <label className='add-input-words'>Album (if no album, click here)
    //                 <select
    //                     required
    //                     className='add-image-select'
    //                     value={albumId}
    //                     onChange={(e) => setAlbumId(e.target.value)}
    //                     name='albumId'
    //                 >
    //                     {
    //                         albums.map(album => {
    //                             return <option key={album.id} value={album.id}>{album.title}</option>
    //                         })
    //                     }
    //                 </select>
    //             </label>
    //             <div className='buttons'>
    //                 <Link to='/create-album'>
    //                     <button className='add-album-button'>Add Album!</button>
    //                 </Link>
    //                 <button disabled={albums.length < 1} className="img-add-button" type='submit'>Submit</button>
    //             </div>
    //         </form>
    //     </div>
    // </div>
  );
};

export default ImageInput;
