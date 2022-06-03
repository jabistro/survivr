import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='splash-footer'>
            <div className='splash-footer-left'>
                <Link className='about-link' to='/about'>About</Link>
            </div>
            <div className='splash-footer-right'>
                <a className='linkdin-link' href='https://www.linkedin.com/in/john-allan-hinds-2aba11237/'>
                    <i className="fa-brands fa-xl fa-linkedin"></i>
                </a>
                <a className='github-link' href='https://github.com/jabistro/survivr/wiki'>
                    <i className="fa-brands fa-xl fa-github"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
