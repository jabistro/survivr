import React from 'react';
import './About.css'

function About() {
    return (
        <div className='about-container'>
            <img className='bloop-img' src={require('../../images/bloop.jpg')} />
            <p className='about-blurb'>
                survivr was built single-handedly by App Academy student John Allan Hinds with the help of a dozen other students.
            </p>
        </div>
    );
}

export default About;
