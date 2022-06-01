import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashBlurb.css'

function SplashBlurb() {
    return (
        <>
            <div className='splash-blurb'>
                The best place to relive all of your favorite survivor moments.
            </div>
            <NavLink to="/signup">
                <button className='splash-blurb-button' type="submit">START FOR FREE</button>
            </NavLink>
        </>
    );
}

export default SplashBlurb;
