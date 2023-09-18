import React from 'react'
import VerticalNavbar from './VerticalNavbar/VerticalNavbar'
import { Outlet } from 'react-router-dom'
import './PatientDashboard.css'
export default function PatientDashboard() {
  return (
    <div className='PatientDashboard'>

<div className='bunny-left'>  <VerticalNavbar/></div>
  <div className='bunny-right'>

  <Outlet/>
  </div>
    
    
    </div>
  )
}
