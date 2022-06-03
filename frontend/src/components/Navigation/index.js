import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                <NavLink className='create-image-link' exact to='/create-image'>
                    * IMAGE TESTING *
                </NavLink>
                <NavLink className='create-album-link' exact to='/create-album'>
                    * ALBUM TESTING *
                </NavLink>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">
                    <button className='splash-signup-button' type="submit">SIGN UP</button>
                </NavLink>
            </>
        );
    }

    return (
        <>
            <div className='spash-header'>
                <div className='splash-top-left'>
                    <NavLink exact to="/">
                        <i className="fa-solid fa-2xl fa-tent"></i>
                    </NavLink>
                </div>
                <div className='splash-top-right'>
                    {isLoaded && sessionLinks}
                </div>
            </div>
        </>
    );
}

export default Navigation;
