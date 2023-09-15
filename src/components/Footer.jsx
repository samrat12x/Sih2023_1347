import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 py-8">
      <div className="container mx-auto">
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">Team XYZ - SIH 2023</h2>
          <p className="text-lg mb-2">Developing a Product for Diagnosis and Ayurvedic Cure</p>
          <p className="text-lg">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
