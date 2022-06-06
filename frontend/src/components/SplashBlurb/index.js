import React from 'react';
import { Link } from 'react-router-dom';
import './SplashBlurb.css'

function SplashBlurb() {
    return (
        <div className='splash-blurb'>
            The best place to relive all of your favorite survivor moments.
            <Link to="/signup">
                <button className='splash-blurb-button' type="submit">START FOR FREE</button>
            </Link>
        </div>
    );
}

export default SplashBlurb;
