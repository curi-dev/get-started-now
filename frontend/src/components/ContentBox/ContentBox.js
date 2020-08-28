import React from 'react';


export default function ContentBox(props) {
    return (
        <div className='inner-container' id={props.id}>
            <img src={props.photo} alt=""/>
            <div className="text-container">
            <h2>{props.title}</h2>
                <span>
                    {props.text}
                </span>
                <a href={props.buttonAction}>{props.buttonText}</a> 
            </div>    
        </div>    
    )
};

