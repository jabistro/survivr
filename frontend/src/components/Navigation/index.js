import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import YourDropdown from './YourDropdown';
import OthersDropdown from './OthersDropdown';

function Navigation({ isLoaded }) {
    const history = useHistory();
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
                <div className='splash-top-right-left'>
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
                </div>
                <div className='splash-top-right-right'>
                    <ProfileButton user={sessionUser} />
                </div>
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
            <div className={sessionUser ? 'splash-header-login' : 'splash-header'}>
                <div className='splash-top-left'>
                    {sessionUser &&
                        <button className='back-button' onClick={() => history.goBack()}>
                            Go Back
                            <i class="fa-solid fa-hand-back-point-left" />
                        </button>
                    }
                    <Link exact to={sessionUser ? `/users/${sessionUser.id}/images` : "/"}>
                        <i id='home-logo' className=" fa-solid fa-xl fa-tent">survivr</i>
                    </Link>
                </div>
                <div className={sessionUser ? 'splash-top-right-logged-in' : 'splash-top-right-logged-out'}>
                    {isLoaded && sessionLinks}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
