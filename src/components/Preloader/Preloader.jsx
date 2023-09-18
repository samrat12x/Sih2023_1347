import React from 'react'
import './Preloader.css'
import image from '../../assets/ayurveda-dosha.gif'
export default function Preloader() {
  return (
    <div>
       <h1 className='preloader_h1'>Welcome</h1>
        <img className='preloader_img' src={image} alt="preloader img" /></div>
  )
}
