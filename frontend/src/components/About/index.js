import React from 'react';
import './About.css'

function About() {
    return (
        <div className='about-container'>
            <img className='bloop-img' src={require('../../images/bloop.jpg')} />
            <p className='about-blurb'>
                "survivr" was single-handedly built by App Academy student John Allan Hinds with the help of a dozen other students.
            </p>
            <div className='about-links'>
                <a className='about-linkdin-link' href='https://www.linkedin.com/in/john-allan-hinds-2aba11237/'>Linkdin
                    <i id='links' className="fa-brands fa-xl fa-linkedin"></i>
                </a>
                <a className='about-github-link' href='https://github.com/jabistro'>Github
                    <i id='links' className="fa-brands fa-xl fa-github"></i>
                </a>
            </div>
        </div>
    );
}

export default About;
