import React, { useState, useEffect } from 'react';
import './ScrollingComp.css'
import { Link } from 'react-router-dom';

export function ScrollDiv() {
  const [showDiv, setShowDiv] = useState(window.screen.width<550);

  useEffect(() => {
    // Define a function to handle scroll events
    const handleScroll = () => {
      // Check the scroll position here



      if ((window.scrollY > 0.05*(window.screen.height))) {
        setShowDiv(true);
      } 
   else   {
        setShowDiv(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='ScrollDiv'>
      
      {showDiv && (
   <>
   <div className="scroll-div">
 <p>"Unlock your health potential with our Ayurveda-based diagnostic product—ancient wisdom meets modern precision for personalized well-being."</p>
 <Link to="/PatientDashboard" preventScrollReset={true}> 
 <div className="button-29">
   Visit Portal
   </div>
   </Link> 
        </div>
        <div className="scroll-div scroll-div-2">
 
<h1 className='panchkarma'>What is PanchKarma?</h1>
<p>Panchakarma treatment aims to liberate the body from toxins and residues that have accumulated over time. At the heart of a Panchakarma treatment are the five cleansing procedures. These are called Vaman, Virechan, Basti, Nasya, and Raktamokshana.</p>
        </div>

        </>
      )}

    
    </div>
  );
}

export default ScrollDiv;
