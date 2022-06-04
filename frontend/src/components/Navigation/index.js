import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import YourDropdown from './YourDropdown';
import OthersDropdown from './OthersDropdown';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const [click, setClick] = useState(false);
    const [yourDropdown, setYourDropdown] = useState(false);
    const [othersDropdown, setOthersDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const onYourMouseEnter = () => setYourDropdown(true);
    const onYourMouseLeave = () => setYourDropdown(false);
    const onOthersMouseEnter = () => setOthersDropdown(true);
    const onOthersMouseLeave = () => setOthersDropdown(false);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className='nav-item'>
                    <div
                        className='nav-links'
                        onMouseEnter={() => onYourMouseEnter()}
                        onMouseLeave={() => onYourMouseLeave()}
                    >
                        <p>You</p>
                        {yourDropdown && <YourDropdown />}
                    </div>
                </div>
                <div className='nav-item'>
                    <div
                        className='nav-links'
                        onMouseEnter={() => onOthersMouseEnter()}
                        onMouseLeave={() => onOthersMouseLeave()}
                    >
                        <p>Explore</p>
                        {othersDropdown && <OthersDropdown />}
                    </div>
                </div>
                <ProfileButton user={sessionUser} />
                <Link className='create-image-link' exact to='/create-image'>
                    * IMAGE TESTING *
                </Link>
                <Link className='create-album-link' exact to='/create-album'>
                    * ALBUM TESTING *
                </Link>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <Link to="/signup">
                    <button className='splash-signup-button' type="submit">SIGN UP</button>
                </Link>
            </>
        );
    }

    return (
        <nav>
            <div className='spash-header'>
                <div className='splash-top-left'>
                    <Link exact to="/">
                        <i className="fa-solid fa-2xl fa-tent"></i>
                    </Link>
                </div>
                <div className='splash-top-right'>
                    {isLoaded && sessionLinks}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
