import {Map} from '..';
import '../../assets/CSS/CommunityHome.css';
export const CommunityHome = () => {
  return (
    <>
        <section id="details">
        <h2 style={{ textDecoration: 'underline'}}>Community Details</h2>
        <ul>
            <li className='p-28'><span> Incident Type:</span> Others</li>
            <li><span> Incident Details:</span> Quota Movement 2024</li>
            <li><span>Number of Members:</span> whole Bangladesh</li>
            <li><span>Community Leader: </span>John Doe </li>
            <li><span >Community Location: </span>  Bangladesh</li>
            <li><span >Date Created: </span>16/07/2024</li>
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
