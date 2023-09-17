import React from 'react';
import './VerticalNavbar.css';
import { useLocation } from 'react-router-dom';

export function VerticalNavbar() {
  const location = useLocation();

  return (
    <div className="vertical-navbar">
      <ul>
        <li className={location.pathname === '/section1' ? 'active' : ''}>Section 1</li>
        <li className={location.pathname === '/section2' ? 'active' : ''}>Section 2</li>
        <li className={location.pathname === '/section3' ? 'active' : ''}>Section 3</li>
      </ul>
    </div>
  );
}

export default VerticalNavbar;
