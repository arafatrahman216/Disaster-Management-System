import React from 'react'
import '../assets/CSS/Home.css';

import { ImgSlider,Map,Statistics } from '../components';
import { useState } from 'react';
import Arrow from '../assets/images/arrows.png';
import { useEffect } from 'react';

const Home = () => {

  const [ incidents, setIncidents] = useState(null);
  const [ locations , setLocations] = useState(null);
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/home')
    .then(res => res.json())
    .then(data => {
      setIncidents(data);
      setLocations(data.MapLocation);
      setContacts(data.contacts);
      console.log(data);
      
    })
  }, []);


  const [Itable, setItable] = useState('table');
  const [Etable, setEtable] = useState('table');
  const [longitude, setLongitude] = useState(23.7264);
  const [latitude, setLatitude] = useState(90.3925);
  
  const changeDisplay =(d)=> {
    if(d === 'table'){
      return 'none';
    }else{
      return 'table';
    }
  }
  return (
    <>
        <ImgSlider />
        <h1 className='section-header'>Statistics </h1>
        <Statistics />
        
        <h1 className='section-header'>HeatMap of Incidents</h1>
        {
            incidents && incidents.incidentList &&
          <Map locations={locations} longitude={longitude} latitude={latitude} defaultZoom={7} />
        
        }
        <h1 className='section-header clickable' onClick={()=> setItable(changeDisplay(Itable))}>
          Recent List of Incidents <img src={Arrow} className="icon" alt="arrow" /></h1> 
        <table style={{
          display: Itable
        }}>
          <tr>
            <th>Incident ID</th>
            <th>Incident Type</th>
            <th>Incident Date</th>
            <th>Incident Location</th>
            <th>Incident Description</th>
            <th>Incident Status</th>
            <th>Urgency</th>
          </tr>
          
          {incidents && incidents.incidentList && incidents.incidentList.map(incident => (
            <tr>
              <td>{incident.IncidentID}</td>
              <td>{incident.IncidentType}</td>
              <td>{incident.DateReported}</td>
              <td>{incident.Location}</td>
              <td>{incident.Description}</td>
              <td>{incident.Status}</td>
              <td>{incident.Urgency}</td>
            </tr>
          ))}


        </table>

        <h1 className='section-header clickable' onClick={()=>setEtable(changeDisplay(Etable))}> 
          Emergency-Contacts <img src={Arrow} className="icon" alt="arrow" /></h1>
        <table style={{
          display: Etable
        }}>
          <tr>
              <th>Contact ID</th>
              <th>Contact Name</th>
              <th>Designation</th>
              <th>Contact Phone</th>
              <th>Contact Email</th>
          </tr>
          {
            contacts && contacts.map(contact => (
              <tr>
                <td>{contact.contactID}</td>
                <td>{contact.name}</td>
                <td>{contact.designation}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>
            ))
          }
          
        </table>

        
    </>
  )
}



export default Home;
