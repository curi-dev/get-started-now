import React from 'react';

import './assets/styles/main.css';

import backgroundImage from './assets/images/main-header.jpg'

function CarrouselHeader() {
    
    return (
        <header className='page-header' style={{ backgroundImage: `url(${backgroundImage})`}}>
            <menu>
                <ul>
                    <li>Home</li>
                    <li>Check-in</li>
                    <li>Gallery</li>
                </ul>
                <ul>
                    <li>My photo</li>
                    <li>Profile</li>
                </ul>
            </menu>
            <div className='header-content'>
                <h1><span>Get</span> Started <br/>Now.</h1>
                <h3>A tribe for <i>off-roaders</i></h3>
                <button type='button'>Register</button>
            </div>
        </header>
    );
};

export default CarrouselHeader;