import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
// import HiddenImmunityIdol from '../HiddenImmunityIdol';
import './SplashBlurb.css'

function SplashBlurb() {
    return (
        <div className='splash-wrap'>
            <div className='splash-blurb'>
                The best place to relive all of your favorite survivor moments.
                <Link className='splash-free-link' to="/signup">
                    <button className='splash-blurb-button' type="submit">Start for free</button>
                </Link>
                <Link className='idol-link' to='/hidden-idol' />
            </div>
            <Footer />
        </div>
    );
}

export default SplashBlurb;
