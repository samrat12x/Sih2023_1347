import React from 'react'
import "./Landingpage.css"
import {CarouselLanding} from './CarouselLanding.jsx'
import { Link } from 'react-router-dom'


const Landingpage =()=> {
  return (
    <div>
        <div className='second-comp'>
            <div className="landing-page-bg">
            <img className='' src="src/assets/image-26@2x.png" alt="bg_image_landing-page" />
            </div>
            <Link to="/PatientDashboard" preventScrollReset={true}> Let's Go</Link>
<CarouselLanding/>
        </div>

        

    </div>
  )
}
export default Landingpage;