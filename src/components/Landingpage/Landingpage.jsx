import React from 'react'
import "./Landingpage.css"
import {CarouselLanding} from './CarouselLanding.jsx'

import ScrollDiv from './ScrollingComp'


const Landingpage =()=> {
  return (
    <div>
        <div className='second-comp'>
            <div className="landing-page-bg">
            <img className='' src="src/assets/image-26@2x.png" alt="bg_image_landing-page" />
            </div>
<div className="ScrollDiv">
  
<ScrollDiv/>

</div>

<CarouselLanding/>
        </div>

        

    </div>
  )
}
export default Landingpage;