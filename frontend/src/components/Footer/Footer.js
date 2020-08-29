import React from 'react';

import './assets/styles.css';

import instaIcon from './assets/images/icons/insta.png';
import faceIcon from './assets/images/icons/face.png';
import linkedinIcon from './assets/images/icons/linkedin.png';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="info-container children-container">
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div className="logo-container children-container">
                    <h1><span>G</span>SN</h1>
                    <span>&copy; All rights reserved.</span>
                </div>
                <div className="icons-container children-container">
                    <ul>    
                        <li>
                            <a href='https://instagram.com/boracuri' target='_blank'>
                                <img src={instaIcon} alt="Instagram"/>
                            </a>
                        </li>
                        <li><a href=''><img src={linkedinIcon} alt="Linkedin"/></a></li>
                        <li><a href=''><img src={faceIcon} alt="Facebook"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>



    )
}