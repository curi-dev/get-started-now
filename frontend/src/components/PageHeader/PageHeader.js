import React from 'react';
import { Link } from 'react-router-dom';

import './assets/styles.css';

import contactIcon from './assets/images/icons/mail.png';
import userIcon from './assets/images/icons/user.png';
import searchIcon from './assets/images/icons/search.png';

function PageHeader({ background, children }) {
    
    return (
        <header className='page-header' style={{ backgroundImage: `url(${background})`}}>
            <menu>
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link className='link'>Check-in</Link></li>
                    <li><Link className='link'>Favourites</Link></li>
                </ul>
                <div className="icons-container">
                    <Link><img src={contactIcon} alt="Contact"/></Link>
                    <Link><img src={userIcon} alt="User"/></Link>  
                    <Link><img src={searchIcon} alt="Search"/></Link>  
                </div>
            </menu>
            { children }
        </header>
    );
};

export default PageHeader;