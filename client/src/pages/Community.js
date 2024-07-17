import React from 'react'
import '../assets/CSS/Community.css';
import { useParams,
    useNavigate,
    Outlet,
    Link
 } from 'react-router-dom';
import { useState } from 'react';

const Community = () => {
    const { id } = useParams();

    
  return (
    <div class="community-page">
  <header>
    <h1>Community Name</h1>
    <Outlet />
    <nav className='community-nav'>
      <ul>
        <li><a href="/forums">Forums</a></li>
        <li><a href="/chat">Chat</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#volunteer">Volunteer</a></li>
        <li><a href="#alerts">Announcements</a></li>
      </ul>
    </nav>
  </header>

  <section id="forums">
    <h2>Discussion Forums</h2>
  </section>

  <section id="chat">
    <h2>Real-Time Chat</h2>
  </section>

  <section id="volunteer">
    <h2>Volunteer and Donation Opportunities</h2>
  </section>

  <section id="maps">
    <h2>Interactive Maps</h2>
  </section>

  <section id="stories">
    <h2>Success Stories and Testimonials</h2>
  </section>

  <section id="contact">
    <h2>Contact and Support</h2>
  </section>
</div>

  )
}

export default Community