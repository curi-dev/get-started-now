import React from 'react';

import roadBackgroundImage from './assets/images/form-background.jpg';
import checkIcon from './assets/images/icons/check.png';

import './assets/styles.css';

export default function PageRegistry() {

    setTimeout(() => {
        location.replace('/')
    }, 10000)

    return (
        <div className="page-confirm" style={{ backgroundImage: `url(${roadBackgroundImage})`}}>
            <div className="center">
                <img src={checkIcon} alt="Check"/>
                Registry confirmed.
            </div>
        </div>
    );


};