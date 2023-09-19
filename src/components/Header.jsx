
import React, { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import logo from '../assets/logo (4).png'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
         
          
          <img src={logo} alt="Company Logo" className="w-10 h-10" style={{borderRadius:'50%'}}/>
          
          
          <Link to="">  <h1 className="text-white text-xl ml-2">AyurCure</h1>
          </Link>
        </div>
        <div className="md:hidden">
          <button className={`text-white focus:outline-none ${isNavOpen ? 'text-blue-300' : ''}`} onClick={toggleNav}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isNavOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <nav className={`md:flex md:items-center space-x-4 ${isNavOpen ? 'block' : 'hidden'}`}>
          {/* <div="/" className="text-white">Home</a>
          <div="/about" className="text-white">About</a>
          <div="/services" className="text-white">Services</a>
          <div="/contact" className="text-white">Contact</a> */}
          <div className="text-white">Home</div>
          <div className="text-white">About</div>
          <div  className="text-white">Services</div>
          <div className="text-white">Contact</div> 

        </nav>
      </div>
    </header>
  );
};

export default Header;
