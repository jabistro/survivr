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
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/signup">
                    <i class="fa-solid fa-xl fa-pen">Sign Up</i>
                </NavLink>
                <LoginFormModal />
            </>
        );
    }

    return (
        <div className='spash-container'>
            <NavLink exact to="/">
                <i class="fa-solid fa-2xl fa-tent"></i>
            </NavLink>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;
