import React, { useState } from 'react'
import '../assets/CSS/Incidents.css';
import locicon from '../assets/images/location.png';
import { Map } from '../components';
import { useDispatch } from "react-redux";
import { changeRole, remove } from '../store/roleSlice';
import { useEffect } from 'react';


export const Incidents = () => {
    const dispatch = useDispatch();
    const [AllLocations, setAllLocations] = useState(null);
    const [ incidents, setIncidents] = useState(null);
    const [ locations , setLocations] = useState(null);

    

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

    const [locateOn,setlocateOn] = useState(false);
    const [myLocation, setMyLocation] = useState(null);
    
    const [longitude, setLongitude] = useState(23.696789);
    const [latitude, setLatitude] = useState(90.399721);
    

    const getMyLocation = () => {
        if (locateOn) setlocateOn(false);
        else setlocateOn(true);
        console.log('hi');
     }

     const iconClick= () => {
        if (locateOn) setlocateOn(false);
        else {
          setMyLocation(null);
          setlocateOn(true);
        }
        dispatch(changeRole({
          isAdmin : true,
          role : "admin",
          loggedIn : true 
        }))

     }

     const submitIncident = async () => {
        const incidentType = document.getElementById('IncidentType').value;
        const incidentDate = document.getElementById('IncidentDate').value;
        const incidentLocation = document.getElementById('LocationID').value;
        const incidentDescription = document.getElementById('IncidentDescription').value;
        const affected = document.getElementById('Affected').value;
        const incidentStatus = document.getElementById('IncidentStatus').value;
        const urgency = document.getElementById('Urgency').value;
        console.log(incidentType, incidentDate, incidentLocation, incidentDescription, affected, incidentStatus, urgency);
        const incident = {
          LocationID:  incidentLocation,
          IncidentType: incidentType,
          Description: incidentDescription,
          ReportedBy: localStorage.getItem('user').UserID,
          DateReported: incidentDate,
          Urgency: urgency,
          Status: incidentStatus
        }
        await fetch('http://localhost:5000/incident/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(incident)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.location.reload();
        })


      }


      useEffect( () => {
         fetch('http://localhost:5000/home')
        .then(res => res.json())
        .then(data => {
          setIncidents(data);
          const Maplocations = data.MapLocation;
          Maplocations.push({position: [latitude, longitude], popupText: "You are here"});
          console.log(Maplocations);
          
          setLocations(Maplocations);
          console.log(data);
          
        })

         
        
        
      }, []);

      
     

      const seelocationid=()=>{
        var modal = document.getElementById("locationModal");
        var span = document.getElementsByClassName("close-btn")[0];
        modal.style.display = "block";
        span.onclick = function() {
          modal.style.display = "none";
        }
        window.onclick = function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        }
      }


     const setLocation=()=>{
        
        var ExLoc= document.getElementById("ExLoc").value +", " + document.getElementById("Village").value +", "+
        document.getElementById("Union").value+", "+document.getElementById("Upazila").value+", "
        + document.getElementById("District").value;
        setMyLocation(ExLoc);
        iconClick();
     }

  return (
    <div className='inc-container'>

        <h1 className='section-header' > Your Location </h1>
        <div className="location-box">
            <div className="location-bar">
              <img className='loc-icon' src={locicon} onClick={iconClick} alt="location icon" />             
                <div className="locator">
                {
                  myLocation? myLocation : <button className="locate" onClick={getMyLocation}>locate</button>
                }
                </div>
          </div>
        <form id='location-form' className='location-form' style={{ display : locateOn? "inline-block": "none"}} >
            <div className="form-item">
            <label htmlFor="latitude">Latitude</label>
            <input type='number' id="latitude" name="latitude" onChange={(e)=>{
                setLatitude(e.target.value);
                
            }} style={{ marginLeft: "55px"}} />
            </div>
            <div className="form-item">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" id="longitude" name="longitude" onChange={(e)=> setLongitude(e.target.value)} style={{ marginLeft: "40px"}} />
            </div>
            <div className="form-item">
            <label htmlFor="Division">Division</label>
            <select id="Division" name="Division" onChange={()=> {
              setDistrictIndex(document.getElementById('Division').selectedIndex); 
            }} style={{ marginLeft: "57px"}}>
                {Divisions.map((division) => {
                  return <option value={division}>{division}</option>
                })}
            </select>
                </div>
                <div className="form-item">
            <label htmlFor="District">District</label>
            <select id="District" name="District" style={{ marginLeft: "64px"}}>
                {Districts[DistrictIndex].map((district) =>{
                  return <option value={district}>{district}</option>
                })}
            </select>
              </div>
              <div className="form-item">
            <label htmlFor="Upazila">Upazila</label>
            <input type="text" id="Upazila" name="Upazila" style={{ marginLeft: "63px"}} />
            </div>
            <div className="form-item">
            <label htmlFor="Union">Union</label>
            <input type="text" id="Union" name="Union" style={{ marginLeft: "76px"}} />
            </div>
            <div className="form-item">
            <label htmlFor="Village">Village</label>
            <input type="text" id="Village" name="Village" style={{ marginLeft: "69px"}} />
            </div>
            <div className="form-item">
            <label htmlFor="ExLoc">Exact Location</label>
            <input type="text" id="ExLoc" name="ExLoc"  />
            </div>
            
            <button className='submit-btn' onClick={(e)=>{
              e.preventDefault()
              setLocation();
            }} >Submit</button>
        </form>
    </div>

    { myLocation &&
      <div className="alert-box">
        <h1 >Alert !</h1>
        <p className='alert'>There are some incidents reported in your area. Please stay safe.</p>
    </div>
    }

    <form className='location-form' style={{display:"inline-block"}}>
        <h1 className='section-header'>Report an Incident</h1>
        <div className="form-item">
            <label htmlFor="IncidentType">Incident Type</label>
            <select id="IncidentType" name="IncidentType" style={{marginLeft:"66px"}}>
                <option value="Flood">Flood</option>
                <option value="Earthquake">Earthquake</option>
                <option value="Fire">Fire</option>
                <option value="Cyclone">Cyclone</option>
                <option value="Accident">Accident</option>
                <option value="Others">Others</option>
            </select>
        </div>
        <div className="form-item">
            <label htmlFor="IncidentDate" >Incident Date</label>
            <input type="datetime-local" id="IncidentDate" name="IncidentDate" style={{marginLeft:"66px"}} />
        </div>
        <div className="form-item">
            <label htmlFor="LocationID">Location ID</label>
            <input type="number" id="LocationID" name="LocationID" style={{marginLeft:"82px"}} />
            
          </div>
        <div className="form-item">
            
            <label htmlFor="IncidentLocation">Incident Location</label>
            <input type="text" id="IncidentLocation" name="IncidentLocation" style={{marginLeft:"34px"}} />
            </div>
            
        <div className="form-item">
            
            <label htmlFor="IncidentDescription">Incident Description</label>
            <input id="IncidentDescription" name="IncidentDescription" style={{marginLeft:"10px"}}  />
        </div>
        <div className="form-item">
            <label htmlFor="Affected">Affected Individuals</label>
            <input type="number" id="Affected" name="Affected" style={{marginLeft:"12px"}} />
        </div>
        <div className="form-item">
            <label htmlFor="IncidentStatus">Incident Status</label>
            <select id="IncidentStatus" name="IncidentStatus" style={{marginLeft:"51px"}}>
              <option value="Running">Running</option>
              <option value="Expired">Expired</option>
            </select>
        </div>
        <div className="form-item">
            <label htmlFor="Urgency">Urgency</label>  
            <select id="Urgency" name="Urgency" style={{marginLeft:"107px"}}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
        <button type='button' className='submit-btn' onClick={()=>{
          submitIncident();
          
        }}>Submit</button>
    </form>
    
    

    
    <h1 className='section-header'>Scan your area</h1>
        
        { locations &&
          <Map locations={locations} longitude={longitude} latitude={latitude} defaultZoom={12.5} />
        }



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
          {
            incidents && incidents.incidentList && incidents.incidentList.map(incident => (
              <tr>
                <td>{incident.IncidentID}</td>
                <td>{incident.IncidentType}</td>
                <td>{incident.DateReported}</td>
                <td>{incident.Location}</td>
                <td>{incident.Description}</td>
                <td>{incident.Status}</td>
                <td>{incident.Urgency}</td>
              </tr>
            ))
          }
        </table>

            </div>
  )
}
