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
    <div className='carousel-container'><Carousel
    swipeable={true}
    draggable={true}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    //autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={1000}
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
  
   
  </Carousel></div>
  )
}

export default CarouselLanding;




