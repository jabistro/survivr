import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../store/albums';
import { Link } from 'react-router-dom';
import './UserAlbums.css';

function UserAlbums() {

    const albums = Object.values(useSelector(state => state.albums));
    const user = useSelector(state => state.session.user);

    return (
        <div className='albums-container'>
            {albums.map(album => {
                if (album.userId === user.id) {     // removed implicit return, only rendered albums for logged in user
                    return <Link className='album-list-link' to={`/users/${user.id}/albums/${album.id}/images`}>
                        <div className='album-list'>{album.title}</div>
                    </Link>
                }
            })}
            <Link className='create-album-button' exact to='/create-album'>
                ADD ALBUM
            </Link>
        </div>
    );
}

export default UserAlbums;
