import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../../store/albums';

function Albums() {

    const dispatch = useDispatch();
    const albums = Object.values(useSelector(state => state.albums));

    // console.log(images)

    useEffect(() => {
        dispatch(getAlbums());
    }, [])

    return (
        <ul>
            {albums.map(album => (
                <li key={album.id}>
                    <div className='album-list'>{album.title}</div>
                </li>
            ))}
        </ul>
    );
}

export default Albums;
