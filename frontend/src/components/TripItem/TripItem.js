import React from 'react';

import './assets/styles.css';

import locationPin from './assets/images/icons/pin.png';
import heartIcon from './assets/images/icons/heart.png';
import whatIcon from './assets/images/icons/what.png';


export default function TripItem({ photo, origin, destination, vehicleType, gasolineCost, totalCost, text }) {
    return (
        <div className='trip-container'>
            <div className="photo-container">
                <img src={photo} alt=""/>
            </div>
            <div className="info-container">
                <div className='top-info-container'>
                    <span id='origin'>
                        <img src={locationPin} alt=""/>
                        Origin: {origin}
                    </span>
                    <span id='destination'>
                        <img src={locationPin} alt=""/>
                        Destination: {destination}
                    </span>
                </div>
                <div className='bottom-info-container'>
                    <ul>
                        <li><img src={whatIcon} alt=""/>  Vehicle type: {vehicleType}</li>
                        <li><img src={whatIcon} alt=""/> Gasoline cost: ${gasolineCost.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})}</li>
                        <li><img src={whatIcon} alt=""/> Total cost: ${totalCost.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})}</li>
                    </ul>
                    <p><i>"{text}"</i></p>
                </div>
                <div className="favourite-star-container">
                    <img src={heartIcon} alt=""/> 
                </div>
            </div>
        </div>    
    );

};