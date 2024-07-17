import React from 'react'
import '../assets/CSS/Community.css';
import { useParams,
    useNavigate,
    Outlet,
    Link
 } from 'react-router-dom';
import { useState } from 'react';
import { CommunityHome } from '../components/CommunityHome';
import { useSearchParams } from 'react-router-dom';

const Community = () => {
    const { id } = useParams();
    const LeaderNum = '01735847466';
    const [Num, setNum] = useState('017xxxxxxxx (click to reveal)');
    
  return (
    <div class="community-page">
  <header>
    <h1>Community Name</h1>
    
    <nav className='community-nav'>
      <ul>
        <li><Link to={`/community/${id}`}>Community</Link></li>
        <li><Link to={`/community/${id}/chat`}>Chat</Link></li>
        <li><Link to={`/community/${id}/volunteers`}>Volunteer</Link></li>
        <li><Link to={`/community/${id}/announcement`}>Announcements</Link></li>
      </ul>
    </nav>
  </header>
  
  <Outlet />

  <section id="contact">
    <h2>Contact and Support</h2>
    <ul>
      <li><span>Community Leader:</span> John Doe</li>
      <li><span>Phone:</span><span onClick={()=>{
        setNum(LeaderNum);
      }}> {Num}</span></li>
      <li><span>Email:</span>
        <a href="mailto:arafat@gmail.com">Mail Leader
          </a>
      </li>
    </ul>
  </section>
</div>

  )
}

export default Community