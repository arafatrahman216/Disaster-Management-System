import React, { useState } from 'react'
import '../assets/CSS/Header.css';
import Logo from '../assets/images/dms-logo-black.png';
import notification_icon_on from '../assets/images/notification_on.png';
import notification_icon from '../assets/images/notification.png';

import { Link } from 'react-router-dom';
export const Header= () => {

  const [notIcon, setNotIcon] = useState(notification_icon_on);
  const [showNotification, setShowNotification] = useState('none');
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
                <li><button type="button" class="header-login">Login/Register</button></li>
                <div className="notification-box" onClick={()=>{
                  if(notIcon === notification_icon_on){
                    setNotIcon(notification_icon);
                    setShowNotification('block');
                  }else{
                    setNotIcon(notification_icon_on);
                    setShowNotification('none');
                  }
                }}>
                  <img src={notIcon} className='notification' alt="notification" />
                </div>
                <div className="notification-modal" style={{
                  display: showNotification
                }}>
                  <div className="notification-modal-content">
                    <h1 style={{
                      textAlign: 'center',
                      textDecoration: 'underline'
                    }}>Notifications</h1>
                    <ul className='notification-list'>
                      <li>Notification 1</li>
                      <li>Notification 2</li>
                      <li>Notification 3</li>
                    </ul>
                  </div>
                </div>
            </ul>
        </div>
        </div>
        
    </div>
    </div>
    </>
  )
}
