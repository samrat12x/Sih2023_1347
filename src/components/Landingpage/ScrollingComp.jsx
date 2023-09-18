import React, { useState, useEffect } from 'react';
import './ScrollingComp.css'
import { Link } from 'react-router-dom';

export function ScrollDiv() {
  const [showDiv, setShowDiv] = useState(window.screen.width <= 450);

  useEffect(() => {
    // Define a function to handle scroll events
    const handleScroll = () => {
      // Check the scroll position here



      if ((window.scrollY > 0.1*(window.screen.height))) {
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
   
   <div className="scroll-div">
 <p>"Unlock your health potential with our Ayurveda-based diagnostic product—ancient wisdom meets modern precision for personalized well-being."</p>
 <div className="button-29">
   <Link to="/PatientDashboard" preventScrollReset={true}> Visit Portal</Link> 
   </div>
        </div>
      )}

    
    </div>
  );
}

export default ScrollDiv;
