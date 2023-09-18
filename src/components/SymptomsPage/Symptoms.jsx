import React from 'react'
import Searchbar from './Searchbar'
import SVGComponent from './SVGComponent'
import { Link } from 'react-router-dom'
import './Symptoms.css'
export default function  Symptoms() {
  
  const ApiCall=()=>{
    console.log("write api call logic here");
  }
  
  return (
    <div>
      <div className='symptom-page' >
      <div>
<h1>Add your symptoms</h1>
<h3>Add as many symptoms you can to obtain
most accurate results.</h3>
<Searchbar/>
</div>        
<SVGComponent/>
</div>
<Link to="/PatientDashboard/" preventScrollReset={true}> Back</Link>


<Link to="/PatientDashboard/Result" preventScrollReset={true}>
   <button onClick={ApiCall} >

   Submit
   </button>
   </Link>
    </div>
  )
}
