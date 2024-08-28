import React, { useState } from 'react'
import '../assets/CSS/Incidents.css';
import locicon from '../assets/images/location.png';
import { Map } from '../components';

export const Incidents = () => {
    const [DistrictIndex, setDistrictIndex] = useState(0);
    const Divisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Mymensingh", "Rangpur"];

    const Districts = [
    ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
    ["Chattogram", "Cox's Bazar", "Cumilla", "Feni", "Brahmanbaria", "Lakshmipur", "Chandpur", "Noakhali", "Khagrachhari", "Rangamati", "Bandarban"],
    ["Bogura", "Joypurhat", "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj"],
    ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    ["Barishal", "Barguna", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
    ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
    ["Mymensingh", "Netrokona", "Sherpur", "Jamalpur"],
    ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"]
    ];

    const [Location,setLocation] = useState(null);
    const [locateOn,setlocateOn] = useState(false);
    const [myLocation, setMyLocation] = useState(null);
    
    const [longitude, setLongitude] = useState(23.696789);
    const [latitude, setLatitude] = useState(90.399721);
    const locations = [
      { position: [23.7264, 90.3925], popupText: 'BUET' },
      { position: [longitude, latitude], popupText: 'Home' }
    ];

    const getMyLocation = () => {
        if (locateOn) setlocateOn(false);
        else setlocateOn(true);
        console.log('hi');
     }

     const iconClick= () => {
        if (locateOn) setlocateOn(false);
        else setlocateOn(true);
     }

  return (
    <>

        <h1 className='section-header' > Your Location </h1>
        <div className="location-box">
            <div className="location-bar">
              <img className='loc-icon' src={locicon} onClick={iconClick} alt="location icon" />             {
                   myLocation? myLocation : <button className="locate" onClick={getMyLocation}>locate</button>
                }
            </div>
        <form id='location-form' className='location-form' style={{ display : locateOn? "inline-block": "none"}} >
            <label htmlFor="latitude">Latitude</label>
            <input type="text" id="latitude" name="latitude" value="23.7264" />
            <label htmlFor="longitude">Longitude</label>
            <input type="text" id="longitude" name="longitude" value="90.3925" />
            <label htmlFor="Division">Division</label>
            <select id="Division" name="Division" onChange={()=> {
                setDistrictIndex(document.getElementById('Division').selectedIndex); 
              }}>
                {Divisions.map((division) => {
                    return <option value={division}>{division}</option>
                })}
            </select>
            <label htmlFor="District">District</label>
            <select id="District" name="District">
                {Districts[DistrictIndex].map((district) =>{
                    return <option value={district}>{district}</option>
                  })}
            </select>
            <label htmlFor="Upazila">Upazila</label>
            <input type="text" id="Upazila" name="Upazila" value="Dhaka" />
            <label htmlFor="Union">Union</label>
            <input type="text" id="Union" name="Union" value="Dhaka" />
            <label htmlFor="Village">Village</label>
            <input type="text" id="Village" name="Village" value="Dhaka" />
            <label htmlFor="Exact Location">Exact Location</label>
            <input type="text" id="Exact Location" name="Exact Location" value="Dhaka" />
            
            <input type="submit" value="Submit" />
        </form>
    </div>

    <div className="alert-box">
        <h2>Alert</h2>
        <p>There are some incidents reported in your area. Please stay safe.</p>
    </div>
    
    <h1 className='section-header'>Scan your area</h1>
        <Map locations={locations} longitude={longitude} latitude={latitude} defaultZoom={12.5} />



    <h1 className='section-header' >
          Recent List of Incidents </h1> 
        <table className='incident-table' >
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

            </>
  )
}
