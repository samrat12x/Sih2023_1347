import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
export  function CarouselLanding(props) {
  return (
    <div className='carousel-container'>
      <h1  
      style={{fontSize:'40px' , 
      color:'white',
      textAlign:'center', 
      fontFamily:'revert-layer',
      fontWeight:'bold',
      textDecoration: 'underline  dotted',
      padding:'3%'

     
      }}>Learn more</h1>
     
      <Carousel
    swipeable={true}
    draggable={true}
    showDots={false}
    responsive={responsive}
    ssr={false} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="transform 300ms ease-in-out"
    transitionDuration={400}
    containerClass="carousel-container"
   // removeArrowOnDeviceType={["tablet", "mobile"]}
//    deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >   
  
   <div className='carousel-item'> 
        <img className='carousel-img' src="src\assets\rectangle-135@2x.png" alt="" />
    
       <p>
       <b>Cardomon</b>
       <br />

      It is used as an essential oil may help improve air intake during exercise and reduce blood pressure.
       </p>
    </div>
   
    <div className='carousel-item'> 
        <img className='carousel-img' src="src\assets\rectangle-107@2x.png" alt="" />
        <h1></h1>
        <p><b>Triphala</b> <br></br>

Triphala consists of three small fruits: amla, bibhitaki, and haritaki.
It has anti-inflammatory effects</p>
        </div>
    <div className='carousel-item'> 
    <img className='carousel-img' src="src\assets\rectangle-108@2x.png" alt="" />
   
        <p> <b>Manjistha</b><br></br>

This plant may help to positively alter the gut microbiome</p>
    </div>
  



    <div className='carousel-item'> 
        <img className='carousel-img' src="src\assets\image 10.png" alt="" />
    
       <p>
       <b>Ashwagandha</b>
       <br />

      It is believed to help your body manage stress more effectively.
       </p>
    </div>
    <div className='carousel-item'> 
        <img className='carousel-img' src="src\assets\image 11.png" alt="" />
    
       <p>
       <b>Brahmi</b>
       <br />

      It may help improve your body's ability to deal with stress and anxiety.
       </p>
    </div>
    <div className='carousel-item'> 
        <img className='carousel-img' src="src\assets\image 13.png" alt="" />
    
       <p>
       <b>Turmeric</b>
       <br />

      People often use it in curry recipes . it may have an anti-inflimatory and anti-oxidative effect.
       </p>
    </div>
    <div className='carousel-item'> 
        <img className='carousel-img' src="src\assets\image 14.png" alt="" />
    
       <p>
       <b>Neem</b>
       <br />

      It is an antiOxidant and helps with several of the body's functions.
       </p>
    </div>
    <div className='carousel-item'> 
        <img className='carousel-img' src="src\assets\image 18.png" alt="" />
    
       <p>
       <b>Gotu Kola</b>
       <br />

      It adds no aroma or flavor to food , but studies indicate that it may help improve memory.
       </p>
    </div>






   
  </Carousel></div>
  )
}

export default CarouselLanding;




