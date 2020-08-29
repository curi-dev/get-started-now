import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader/PageHeader';
import ContentBox from '../../components/ContentBox/ContentBox';
import Footer from '../../components/Footer/Footer';

import './assets/styles.css';

import sharePhoto from './assets/images/traveller.jpg';
import discoverPhoto from './assets/images/jeep-on-river.jpg'
import explorePhoto from './assets/images/walking-people.jpg';
import backgroundImage from './assets/images/main-header.jpg';
import modalBackground from './assets/images/form-background-small.jpg';

import quitIcon from './assets/images/icons/quit.png';


export default function Landing() {
    
    const [ origin, setOrigin ] = useState('');
    const [ destination, setDestination ] = useState('');
    const [ vehicleType, setVehicleTYpe ] = useState('');
    const [ gasolineCost, setGasolineCost ] = useState('');
    const [ totalCost, setTotalCost ] = useState('');
    const [ photo, setPhoto ] = useState('');
    const [ comments, setComments ] = useState('');

    const history = useHistory();

    function handleCreateTrip() {  // Capturing the erro on the top of the stack. Improve that.
        try {
            api.post('trips', {
                origin,
                destination,
                vehicleType,
                gasolineCost,
                totalCost,
                photo,
                comments
            });

            setOrigin('');
            setDestination('');
            setVehicleTYpe('');
            setGasolineCost('');
            setTotalCost('');
            setPhoto('');
            setComments('');

            setTimeout(() => {
                history.push('/registered');
            }, 1500)
        } catch (error) {
            alert('Registry not conluded. Try it again.')
        }
    };


    return (
    
        <div id="page-landing"> 
            <PageHeader background={backgroundImage}>
                <div className='header-content'>
                    <h1><span>Get</span> started <br/>now.</h1>
                    <h3>A new tribe for <i>off-roaders</i></h3>
                    <button type='button'>Register</button>
                </div>
            </ PageHeader>
            
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
                    >
                        <a href='#modal' className='btn-do'>Share</a> 
                    </ ContentBox>
                    
                    <ContentBox 
                    id='discover'
                    photo={discoverPhoto}
                    title='Discover new routes.'
                    text='Come on. Thats the spirit of travelling:
                    sharing your best experiences is gonna make you 
                    feel better and happier. Show the unknow world
                    to this big traveller community. '
                    >
                        <Link to='/discover' className='btn-do'>Discover</Link>     
                    </ ContentBox>
                    
                    <ContentBox 
                    id='explore'
                    photo={explorePhoto}
                    title='Explore your dreams.'
                    text='Come on. Thats the spirit of travelling:
                    sharing your best experiences is gonna make you 
                    feel better and happier. Show the unknow world
                    to this big traveller community. '
                    >
                        <Link to='/explore' className='btn-do'>Explore</Link>     
                    </ ContentBox>
                </div>
            </main>    
            
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            
            <Footer />

            <div className="modal" id="modal" tabIndex="-1">
                <a href="#" className="modal__overlay" aria-label="Fechar"></a>
                <div className="modal__content" style={{ backgroundImage: `url(${modalBackground})`}}>
                    <a href="#" className="modal__close" aria-label="Fechar">
                        <img src={quitIcon} alt="Quit"/>
                    </a>
                    <div className='add-container'>
                        <header>
                            <h2>Tell us about your Trip.</h2>
                            <h3>First, you have to fill the fields above.</h3>
                        </header>
                        <div className="form-container">
                            <form action="" id="form">

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
                                    <label htmlFor="vehicle">Vehicle type</label>
                                    <input 
                                    id='vehicle' 
                                    type="text"
                                    value={vehicleType}
                                    onChange={(e) => setVehicleTYpe(e.target.value)}
                                    />
                                </div>

                                <div className="input-block">
                                    <label htmlFor="gasoline">Gasoline cost</label>
                                    <input 
                                    id='gasoline' 
                                    type="number"
                                    value={gasolineCost}
                                    onChange={(e) => setGasolineCost(e.target.value)}
                                    />
                                </div>

                                <div className="input-block">
                                    <label htmlFor="total">Total cost</label>
                                    <input 
                                    id='total' 
                                    type="number"
                                    value={totalCost}
                                    onChange={(e) => setTotalCost(e.target.value)}
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

