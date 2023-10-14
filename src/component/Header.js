import React from 'react';
import profileImage from './Rkk.png';
import './Header.css'; // Import a CSS file for styling


const Header = () => {
  return (
    <header>
      <img src={profileImage} alt="Profile" class="round-image" /> {/* Add a class for styling */}
      <h1>SUBARAKSHA</h1>
      <p>Web Developer</p>
    </header>
  );
}

export default Header;
