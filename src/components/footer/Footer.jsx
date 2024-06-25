import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        {/* <img src={logo} alt="" /> */}
                        <Link to="/">ShowGen</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>

                    </div>
                    <div className="footer__content__menu">
                        <a href="https://notion-one-jade.vercel.app/" target="_blank" rel="noopener noreferrer">Notion</a>
                        <a href="https://one-note-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">OneNote</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href="https://global-post.vercel.app/" target="_blank" rel="noopener noreferrer">Global Post</a>
                        <a href="https://ad-shield.vercel.app/" target="_blank" rel="noopener noreferrer">Ad_Shield</a>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Footer;
