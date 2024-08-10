import React from 'react'
import '../assets/CSS/Header.css';
import Logo from '../assets/images/dms-logo-black.png';
import { Link } from 'react-router-dom';
export const Header= () => {
  return (
    <>
    <div className='header'>
        <div class="bg-gray-200 p-4 relative  ">
        <div class="header-navbar">
            <img src={Logo} className='header-logo' alt="DMS logo" />
            <h1 className='header-text'>Disaster<br/>Management System</h1>
        
        <div class="nav-links">  
            <ul class="flex">
                <li><Link>Incidents</Link></li>
                <li><Link>Community</Link></li>
                <li><Link>Announcements</Link>
                </li>
                <li><Link>Guidelines</Link></li>
                <li><Link>Donate</Link></li>
                <li><button type="button" class="header-login"><Link to="./auth">Login/Register</Link></button></li>
            </ul>
        </div>
        </div>
        
    </div>
    </div>
    </>
  )
}
