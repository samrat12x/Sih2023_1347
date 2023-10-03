import React from 'react';
import './VerticalNavbar.css';
import { useLocation } from 'react-router-dom';

export function VerticalNavbar() {
  const location = useLocation();

  return (
    <div className="vertical-navbar">
      <ul>
        <li className={location.pathname === '/PatientDashboard/' ? 'active' : ''}>Form</li>
        <li className={location.pathname === '/PatientDashboard/Symptoms' ? 'active' : ''}>Symptoms</li>
        <li className={location.pathname === '/PatientDashboard/Result' ? 'active' : ''}>Results</li>
      </ul>
    </div>
  );
}

export default VerticalNavbar;
