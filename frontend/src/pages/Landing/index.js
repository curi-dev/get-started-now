import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader/PageHeader'

import './assets/styles.css';

import sharePhoto from './assets/images/traveller.jpg';
import discoverPhoto from './assets/images/jeep-on-river.jpg'
import explorePhoto from './assets/images/walking-people.jpg';


export default function Landing() {

    const [ tripList, setTripList ] = useState([]);


    async function handleAddTrip() {
        const response = await api.post('/trips');
        const newAddedTrip = response.data;
    
        setTripList([...tripList, newAddedTrip])
    }

    return (
    
        <div id="page-landing"> 
            <PageHeader />
            
            <main>
                <div className="page-content">

                    <div className='inner-container' id='share'>
                        <img src={sharePhoto} alt=""/>
                        <div className="text-container">
                            <h2>Share your routes.</h2>
                            <span>
                                Come on. Thats the spirit of travelling:
                                sharing your best experiences is gonna make you 
                                feel better and happier. Show the unknow world
                                to this big traveller community. 
                            </span>
                            <Link to="#modal">Share</Link> 
                        </div>    
                    </div>    

                    <div className='inner-container' id='discover'>
                        <div className="text-container">
                            <h2>Discover new routes.</h2>
                            <span>
                                Come on. Thats the spirit of travelling:
                                sharing your best experiences is gonna make you 
                                feel better and happier. Show the unknow world
                                to this big traveller community. 
                            </span>
                            <Link to="/discover">Discover</Link>
                        </div>
                        <img src={discoverPhoto} alt="Discover routes"/>
                    </div>

                    <div className='inner-container' id='explore'>
                        <img src={explorePhoto} alt=""/>
                        <div className="text-container">
                            <h2>Explore your dreams.</h2>
                            <span>
                                Come on. Thats the spirit of travelling:
                                sharing your best experiences is gonna make you 
                                feel better and happier. Show the unknow world
                                to this big traveller community. 
                            </span>
                            <Link to="/explore">Explore</Link>
                        </div>
                    </div>
                </div>
            </main>    
            
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            
            <footer>
                <div className="footer-container">
                    <div className="info-container container-children">
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>FAQ</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div className="logo-container container-children">
                        <h1><span>G</span>SN</h1>
                        <span>&copy; Todos os direitos reservados.</span>
                    </div>
                    <div className="social-media-container container-children">
                        <ul>    
                            <li>INSTAGRAM<img src="" alt=""/></li>
                            <li>TWITTER<img src="" alt=""/></li>
                            <li>FACEBOOK<img src="" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </footer>


            <div className="modal" id="modal" tabindex="-1">
                <Link to="#" className="modal__overlay" aria-label="Fechar"></Link>
                <div className="modal__content">
                    <Link to="#" className="modal__close" aria-label="Fechar">x</Link>
                    <div className='add-container'>
                        <header>
                            <h2>Tell us about your Trip.</h2>
                            <h3>First, you have to fill the fields above.</h3>
                        </header>
                        <div className="form-container">
                            <form action="" id="form">
                                <div className="input-block">
                                    <label htmlFor="continent">Continent</label>
                                    <input id='continent' type="text"/>
                                </div>

                                <div className="input-block">
                                    <label htmlFor="origin">Origin</label>
                                    <input id='origin' type="text"/>
                                </div>

                                <div className="input-block">
                                    <label htmlFor="destination">Destination</label>
                                    <input id='destination' type="text"/>
                                </div>

                                <div className="input-block">
                                    <label htmlFor="destination">Choose a photo</label>
                                    <input id='destination' type="text"/>
                                </div>

                                <div className="input-block" id='select-block'>
                                    <label htmlFor="observations">Talk about</label>
                                    <textarea id='observation' type="text"/>
                                </div>

                            </form>
                        </div>
                        <div className="button-container">
                            <button form='form' type='button' onClick={handleAddTrip}>Send your route</button>
                        </div>    
                    </div>
                </div>
            </div>     
        </div>          
    );

};

