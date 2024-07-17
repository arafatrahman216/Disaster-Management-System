import Map from '../components/Map';
import '../assets/CSS/CommunityHome.css';
export const CommunityHome = () => {
  return (
    <>
        <section id="details">
        <h2 style={{ textDecoration: 'underline'}}>Community Details</h2>
        <ul>
            <li><span> Incident Type:</span> Fire</li>
            <li><span> Incident Details:</span> A fire caught in Banani DOHS</li>
            <li><span>Number of Members:</span> 100</li>
            <li><span>Community Leader: </span>John Doe </li>
            <li><span >Community Location: </span> Dhaka, Bangladesh</li>
            <li><span >Date Created: </span>01/01/2021</li>
        </ul>

        </section>

        {/* <section id="forums">
            <h2>Discussion Forums</h2>
        </section> */}


        <section id="volunteer">
            <h2>Volunteer and Donation Opportunities</h2>
            <button className='volunteer-donate-btn'>Join as Volunteer</button>
            <button className='volunteer-donate-btn'>Donate Us</button>

        </section>

        <section id="maps">
            <h2>Interactive Maps</h2>
            <span style={{ display: 'block', fontWeight : 'bold'}}>Incident Location : Buet Campus, Dhaka, Bangladesh</span>
            <span style={{ display: 'block', fontWeight : 'bold'}}>Location Coordinates: 23.7264° N, 90.3925° E</span>
            < Map locations={[{ position: [23.7264, 90.3925], popupText: 'Marker 1' }]} 
            longitude={23.7264} latitude={90.3925} defaultZoom={16} />
        </section>
    </>
  )
}
