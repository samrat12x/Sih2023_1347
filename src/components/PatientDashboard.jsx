import React from 'react'
import VerticalNavbar from './VerticalNavbar/VerticalNavbar'
import { Outlet } from 'react-router-dom'

export default function PatientDashboard() {
  return (
    <div>

  <VerticalNavbar/>
  <Outlet/>
    </div>
  )
}
