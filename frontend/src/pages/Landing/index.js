import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader/PageHeader';
import ContentBox from '../../components/ContentBox/ContentBox';

import './assets/styles.css';

import sharePhoto from './assets/images/traveller.jpg';
import discoverPhoto from './assets/images/jeep-on-river.jpg'
import explorePhoto from './assets/images/walking-people.jpg';


export default function Landing() {
    
    const [ continent, setContinent ] = useState('');
    const [ origin, setOrigin ] = useState('');
    const [ destination, setDestination ] = useState('');
    const [ photo, setPhoto ] = useState('');
    const [ comments, setComments ] = useState('');


    function handleCreateTrip() {  // Capturing the erro on the top of the stack. Improve that.
        try {
            api.post('/trips', {
                continent,
                origin,
                destination,
                photo,
                comments
            });
            
            alert('Congratulations! Registry confirmed.')
        } catch (error) {
            alert('Registry not conluded. Try it again.')
        }
    };


    return (
    
        <div id="page-landing"> 
            <PageHeader />
            
            <main>
                <div className="page-content">
                    <ContentBox 
                    id='share'
                    photo={sharePhoto}
                    title='Share your routes.'
                    text='Come on. Thats the spirit of travelling:
                    sharing your best experiences is gonna make you 
                    feel better and happier. Show the unknow world
                    to this big traveller community. '
                    buttonText='Share'
                    buttonAction='#modal'
                    />
                    <ContentBox 
                    id='discover'
                    photo={discoverPhoto}
                    title='Discover new routes.'
                    text='Come on. Thats the spirit of travelling:
                    sharing your best experiences is gonna make you 
                    feel better and happier. Show the unknow world
                    to this big traveller community. '
                    buttonText='Discover'
                    buttonAction='/discover'
                    />
                    <ContentBox 
                    id='explore'
                    photo={explorePhoto}
                    title='Explore your dreams.'
                    text='Come on. Thats the spirit of travelling:
                    sharing your best experiences is gonna make you 
                    feel better and happier. Show the unknow world
                    to this big traveller community. '
                    buttonText='Explore'
                    buttonAction='/explore'
                    />
                </div>
            </main>    
            
            <br/><br/><br/><br/><br/><br/><br/><br/>
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
                <a href="#" className="modal__overlay" aria-label="Fechar"></a>
                <div className="modal__content">
                    <a href="#" className="modal__close" aria-label="Fechar">x</a>
                    <div className='add-container'>
                        <header>
                            <h2>Tell us about your Trip.</h2>
                            <h3>First, you have to fill the fields above.</h3>
                        </header>
                        <div className="form-container">
                            <form action="" id="form">
                                <div className="input-block">
                                    <label htmlFor="continent">Continent</label>
                                    <input 
                                    id='continent' 
                                    type="text"
                                    value={continent}
                                    onChange={(e) => setContinent(e.target.value)}
                                    />
                                </div>

                                <div className="input-block">
                                    <label htmlFor="origin">Origin</label>
                                    <input 
                                    id='origin' 
                                    type="text"
                                    value={origin}
                                    onChange={(e) => setOrigin(e.target.value)}
                                    />
                                </div>

                                <div className="input-block">
                                    <label htmlFor="destination">Destination</label>
                                    <input 
                                    id='destination' 
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    />
                                </div>

                                <div className="input-block">
                                    <label htmlFor="photo">Choose a photo</label>
                                    <input 
                                    id='photo' 
                                    type='url'
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    />
                                </div>

                                <div className="input-block" id='select-block'>
                                    <label htmlFor="comments">Say something</label>
                                    <textarea 
                                    id='comments' 
                                    type="text"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="button-container">
                            <button 
                            form='form' 
                            type='button'
                            onClick={handleCreateTrip}
                            >
                                Send your route
                            </button>
                        </div>    
                    </div>
                </div>
            </div>     
        </div>          
    );

};

