import React from 'react'
import '../assets/CSS/Home.css';
import { ImgSlider,Map,Statistics } from '../components';
import { useState } from 'react';
import Arrow from '../assets/images/arrows.png';

const Home = () => {

  const [Itable, setItable] = useState('none');
  const [Etable, setEtable] = useState('none');
  const [longitude, setLongitude] = useState(23.7264);
  const [latitude, setLatitude] = useState(90.3925);
  const locations = [
    { position: [23.7264, 90.3925], popupText: 'BUET' },
    { position: [23.696789, 90.399721], popupText: 'DU' },
    { position: [longitude, latitude], popupText: 'Home' }
  ];
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
        <Map locations={locations} longitude={longitude} latitude={latitude} defaultZoom={7} />
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
          <tr>
            <td>1</td>
            <td>Flood</td>
            <td>2021-09-01</td>
            <td>Dhaka</td>
            <td>Heavy Rainfall</td>
            <td>Active</td>
            <td>High</td>

          </tr>
          <tr>
            <td>2</td>
            <td>Earthquake</td>
            <td>2021-09-02</td>
            <td>Chattogram</td>
            <td>7.8 Richter Scale</td>  
            <td>Active</td>
            <td>High</td>
          </tr> 
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
              <th>Contact Address</th>
              <th>Contact Email</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Dr. Arafat</td>
              <td>Doctor</td>
              <td>01777777777</td>
              <td>Dhaka</td>
              <td> arafat@gmail.com </td>
          </tr>
          <tr>
              <td>2</td>
              <td>DG Harun</td>
              <td>Dg</td>
              <td>01777777777</td>
              <td>Dhaka</td>
              <td> harun@gmail.com </td>
          </tr>
        </table>

        
    </>
  )
}


export default Home;