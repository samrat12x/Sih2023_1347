
import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-green-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="src\assets\logo (2).png" alt="Company Logo" className="w-10 h-10" />
          <h1 className="text-white text-xl ml-2">Prabha Veda</h1>
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
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/services" className="text-white">Services</a>
          <a href="/contact" className="text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
