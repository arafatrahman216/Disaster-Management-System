
import React, { useEffect, useState } from 'react'
import '../assets/CSS/Header.css';
import Logo from '../assets/images/dms-logo-black.png';
import notification_icon_on from '../assets/images/notification_on.png';
import notification_icon from '../assets/images/notification.png';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
export const Header= () => {
  const navigate = useNavigate();
  const loggedIn = useSelector(state => state.roleState.loggedIn);
  const isAdmin = useSelector(state => state.roleState.isAdmin);
  const [notIcon, setNotIcon] = useState(notification_icon_on);
  const [showNotification, setShowNotification] = useState('none');
  const location = useLocation();
  console.log(location.pathname.split("/"));
  const navBars= ['.nav-incidents','.nav-communities','.nav-announcements','.nav-medicals','.nav-donate' ];

  const SetActive= (command)=>{
      navBars.forEach((bars)=>{
        if (bars===command){
          document.querySelector(command).classList.add('nav-active');
        }
        else{
          document.querySelector(bars).classList.remove('nav-active');
        }
      })
  }

  useEffect(()=>{
    if (navBars.includes(".nav-"+ location.pathname.split("/")[1])) SetActive(".nav-"+ location.pathname.split("/")[1]);
    else{
      navBars.forEach((bars)=>{
        document.querySelector(bars).classList.remove('nav-active');
      })
    }
  }

      ,[location.pathname.split("/")])
  
  const clickNotification=()=>{
    if(notIcon === notification_icon_on){
      setNotIcon(notification_icon);
      setShowNotification('block');
    }else{
      setNotIcon(notification_icon_on);
      setShowNotification('none');
    }
  }

  
  return (
    <>
    <div className='main-header'>
        <div >
        <div className="header-navbar">
            <img src={Logo} className='header-logo' alt="DMS logo" />
          <Link to='/'>
            <h1 className='header-text'>Disaster <br className='breakline'/>Management System</h1>
          </Link>
        
        <div className="nav-links">  
            <ul >
                <li className='nav-incidents' >
                  <Link to='/incidents'>Incidents</Link></li>

                <li className='nav-communities' >
                  <Link  to='/communities'>Community</Link></li>

                <li className='nav-announcements' >
                <Link to='/announcements'>Announcements</Link></li>

                <li className='nav-medicals' >
                  <Link to='/medicals'>Medicals</Link></li>

                <li className='nav-donate' >
                  <Link to='/donate'>Donate</Link></li>
                { !loggedIn &&
                  <li className='nav-login' >
                  <button type="button" className="header-login" 
                  onClick={()=> {
                    navigate('/auth');
                  }}
                  >Login/Register</button></li>
                
                }
                {
                  isAdmin && loggedIn &&
                  <li className='nav-admin' >
                  <Link to='/admin'>Admin</Link></li>
                }
                {
                  !isAdmin && loggedIn &&
                  <li className='nav-login' >
                  <button type="button" className="header-login" 
                  onClick={()=> {
                    navigate('/auth');
                  }}
                  >LogOut</button></li>                  
                }
                

            </ul>
        </div>
        </div>
                <div className="notification-box" onClick={()=>clickNotification()}>
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
        
        
    </div>
    </div>
    </>
  )
}
