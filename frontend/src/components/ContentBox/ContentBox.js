import React from 'react';

import './assets/styles.css';

export default function ContentBox({ id, photo, title, text, children }) {
    return (
        <div className='inner-container' id={id}>
            <img src={photo} alt=""/>
            <div className="text-container">
                <h2>{title}</h2>
                <span>
                    {text}
                </span>
                {children}
            </div>    
        </div>    
    );
};

