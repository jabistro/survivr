import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='splash-footer'>
            <div className='splash-footer-left'>About</div>
            <div className='splash-footer-right'>
                <a url='https://www.linkedin.com/in/john-allan-hinds-2aba11237/'>
                    <i class="fa-brands fa-xl fa-linkedin"></i>
                </a>
                <a url='https://github.com/jabistro/survivr/wiki'>
                    <i class="fa-brands fa-xl fa-github"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
