import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import YourDropdown from './YourDropdown';
import OthersDropdown from './OthersDropdown';
import AddImageModal from '../ImageInput/AddImageModal';

function Navigation({ isLoaded }) {
    // const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const users = useSelector(state => state.users);
    // const [click, setClick] = useState(false);
    const [yourDropdown, setYourDropdown] = useState(false);
    const [othersDropdown, setOthersDropdown] = useState(false);
    const [profileButtonOpened, setProfileButtonOpened] = useState(false);

    // const handleClick = () => setClick(!click);

    const onYourMouseEnter = () => setYourDropdown(true);
    const onYourMouseLeave = () => setYourDropdown(false);
    const onOthersMouseEnter = () => setOthersDropdown(true);
    const onOthersMouseLeave = () => setOthersDropdown(false);
    const onProfileButtonMouseEnter = () => setProfileButtonOpened(true);
    const onProfileButtonMouseLeave = () => setProfileButtonOpened(false);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='splash-top-right-right'>
                <AddImageModal />
                <div
                    className={profileButtonOpened ? 'profile-button-container' : 'profile-button-container-closed'}
                    onMouseEnter={() => onProfileButtonMouseEnter()}
                    onMouseLeave={() => onProfileButtonMouseLeave()}
                    onClick={() => onProfileButtonMouseLeave()}
                >
                    {profileButtonOpened && <ProfileButton user={sessionUser} />}
                    <img alt="" src={users[sessionUser.id]?.pfpURL ? users[sessionUser.id]?.pfpURL : require('../../images/deefault.jpg')} className='profile-button' /*onClick={openMenu}*/ />
                </div>
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <Link className='splash-login-link' to="/login">
                    <button className='splash-login-button' type="submit">Log In</button>
                </Link>
                <Link className='splash-signup-link' to="/signup">
                    <button className='splash-signup-button' type="submit">Sign Up</button>
                </Link>
            </>
        );
    }

    return (
        <div className={sessionUser ? 'splash-header-login' : 'splash-header'}>
            <div className='splash-top-left'>
                {/* {sessionUser &&
                        <button className='back-button' onClick={() => history.goBack()}>
                            Go Back
                            <i class="fa-solid fa-hand-back-point-left" />
                        </button>
                    } */}
                <Link className='home-logo-and-text' exact to={sessionUser ? `/users/${sessionUser.id}/images` : "/"}>
                    <img className='home-logo' alt='' src={require('../../images/torch.png')} />
                    <div>survivr</div>
                </Link>
                {sessionUser &&
                    <div className='splash-top-right-left'>
                        <div className='nav-item'>
                            <div
                                className='nav-links'
                                onMouseEnter={() => onYourMouseEnter()}
                                onMouseLeave={() => onYourMouseLeave()}
                            >
                                <p className='nav-txt'>You</p>
                                {yourDropdown && <YourDropdown />}
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div
                                className='nav-links'
                                onMouseEnter={() => onOthersMouseEnter()}
                                onMouseLeave={() => onOthersMouseLeave()}
                            >
                                <p className='nav-txt'>Explore</p>
                                {othersDropdown && <OthersDropdown />}
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className={sessionUser ? 'splash-top-right-logged-in' : 'splash-top-right-logged-out'}>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
