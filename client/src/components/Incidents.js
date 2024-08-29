import React, { useState } from 'react'
import '../assets/CSS/Incidents.css';
import locicon from '../assets/images/location.png';
import { Map } from '../components';
import { useDispatch } from "react-redux";
import { changeRole, remove } from '../store/roleSlice';


export const Incidents = () => {
  const dispatch = useDispatch();
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
    const locations = [
      { position: [23.7264, 90.3925], popupText: 'BUET' },
      { position: [longitude, latitude], popupText: 'My location' }
    ];

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

     const setLocation=()=>{
        
        var ExLoc= document.getElementById("ExLoc").value +", " + document.getElementById("Village").value +", "+
        document.getElementById("Union").value+", "+document.getElementById("Upazila").value+", "
        + document.getElementById("District").value;
        setMyLocation(ExLoc);
        iconClick();
     }

  return (
    <>

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
            <input type='number' id="latitude" name="latitude" onChange={(e)=> setLatitude(e.target.value)} style={{ marginLeft: "55px"}} />
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
            
            <button onClick={(e)=>{
              e.preventDefault()
              setLocation();
            }} >Submit</button>
        </form>
    </div>

    <div className="alert-box">
        <h1 >Alert !</h1>
        <p className='alert'>There are some incidents reported in your area. Please stay safe.</p>
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
