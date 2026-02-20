import React from 'react';
import './footer.css';
import logo from '../assets/photos/nppaLogoLight.webp';

const Footer = () => {
    return (
    <footer>  
        <img src={logo} alt="logo" /> 
        <div className='footer-content'> 
            <ul>
                <li>About Us</li>
                <li>Home</li>
                <li>Solutions</li>
                <li>Cases</li>
                <li>Insights</li>
            </ul>
            <ul>
                <li>Audiences</li>
                <li>Clients</li>
                <li>Practitioners</li>
            </ul>
            <ul>
                <li>Connect with us</li>
                <li className='icons'>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">in</a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">f</a>
                </li>
            </ul>       
        </div>
         <p>&copy; {new Date().getFullYear()} NP|PA ENGAGE, Inc. All rights reserved.</p>
    </footer>
    );};

export default Footer;