import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import TripItem from '../../components/TripItem/TripItem';
import Footer from '../../components/Footer/Footer';

import api from '../../services/api';

import './assets/styles.css';

import jeepPhoto from './assets/images/jeep-on-river.jpg';

export default function Discover() {

    const [ trips, setTrips ] = useState([]);

    useEffect(() => {
        api.get('/trips').then(response => {
            setTrips(response.data)
        })
    }, [])

    return (
        <div id="page-landing">
            <PageHeader background={jeepPhoto} >
                <div className="discover-header">
                    <h1>Discover.</h1>    
                </div>
            </ PageHeader>         
            <main>
                <div className="page-content">
                    {trips.map(trip => {
                        return ( 
                            <TripItem
                            key={trip.id} 
                            photo={trip.photo}
                            origin={trip.origin}
                            destination={trip.destination}
                            vehicleType={trip.vehicleType}
                            gasolineCost={trip.gasolineCost}
                            totalCost={trip.totalCost}
                            text={trip.comments}
                            />
                        )            
                    })}
                </div>
            </main>

            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>

            <Footer />           
        </div>       
    )
}