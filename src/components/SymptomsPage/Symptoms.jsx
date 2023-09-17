import React from 'react'
import Searchbar from './Searchbar'
import SVGComponent from './SVGComponent'
import { Link } from 'react-router-dom'

export default function  Symptoms() {
  return (
    <div>
<h1>Add your symptoms</h1>
<h3>Add as many symptoms you can to obtain
most accurate results.</h3>
<Searchbar/>        
<SVGComponent/>
<Link to="/PatientDashboard/" preventScrollReset={true}> Back</Link>
    </div>
  )
}
