import React from 'react';
import './Footer.css';
import Profileimg from '../assets/images/profileimg.png';
import 'remixicon/fonts/remixicon.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-app'>
                <div className='footer-top-left'>
                    <img src={Profileimg} alt="Profile" />
                    <p>
                        I am a full stack developer from the Mumbai with 7+ month of experience in companies like Microsoft, Tesla, and Apple.
                    </p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <i className="ri-user-line"></i> 
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className='footer-subscribe'>Send  <i className="ri-arrow-right-line"></i></div>
                </div>
            </div>
            <hr />
            <div className='footer-bottom'>
                <p className="footer-bottom-left">© 2024 Dipesh Sukhdare. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
