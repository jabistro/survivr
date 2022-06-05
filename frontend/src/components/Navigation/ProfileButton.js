import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/');
    };

    return (
        <>
            <button className='profile-button' onClick={openMenu}>
                <i class="fa-solid fa-2xl fa-id-card"></i>
            </button>
            {showMenu && (
                <div className="profile-button-contents">
                    <ul className="profile-dropdown">
                        <li className="profile-lists">Hi, {user.username}!</li>
                        <li className="profile-lists">{user.email}</li>
                        <li className="profile-lists">
                            <button className="profile-logout-button" onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
