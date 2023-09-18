import React from 'react';
import './VerticalNavbar.css';
import { useLocation } from 'react-router-dom';

export function VerticalNavbar() {
  const location = useLocation();

  return (
    <div className="vertical-navbar">
      <ul>
        <li className={location.pathname === '/section1' ? 'active' : ''}>Form</li>
        <li className={location.pathname === '/section2' ? 'active' : ''}>Symptoms</li>
        <li className={location.pathname === '/section3' ? 'active' : ''}>Results</li>
      </ul>
    </div>
  );
}

export default VerticalNavbar;
