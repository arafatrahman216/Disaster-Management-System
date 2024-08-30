import React from 'react'
import Logo from '../assets/images/dms-logo-transparent.png';
import '../assets/CSS/Footer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const loggedIn = useSelector(state => state.roleState.loggedIn);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Link to="/" className="footer-logo-text">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <table className="footer-table">
          <tbody>
            <tr>
                <td className='footer-head'>
                  <Link to="/">Home</Link>
                </td>
                <td className='footer-head'>About</td>
                <td className='footer-head'>Contacts</td>
            </tr>
            <tr>
                <td>
                  <Link to="/incidents">Incidents</Link>
                </td>
                <td>FAQ</td>
                <td>
                      <a href='mailto:arafatrahman219@gmail.com'>Mail us</a>
                </td>

            </tr>
            <tr>
                <td>
                  <Link to="/communities">Communities</Link>
                </td>
                <td>
                  <Link to="/guidelines">Guidelines</Link>
                </td>
                <td></td>

            </tr>
            <tr>
                <td>
                <Link to="/medicals">Hospitals and Shelters</Link>
                </td>
                <td><Link to="/announcements">Announcements</Link></td>
                <td></td>

            </tr>
            {
              loggedIn &&
              <tr> <Link to="/auth/login">Logout</Link></tr>
            }
          </tbody>
        </table>

        <div className="footer-copy">
          <p>&copy; DMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer};
