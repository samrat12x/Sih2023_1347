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
    <div className='symptom-fullPage'>
      <div className='symptom-page' >
      <div className='inner-sym'>
<h1>Add your symptoms</h1>
<h3 style={{marginTop:'10px', marginBottom:'10px', fontWeight:'600'}}>Add as many symptoms you can to obtain
most accurate results.</h3>
<Searchbar/>
</div>        
<SVGComponent/>
</div>

<div className='btn-grp'>
<Link to="/PatientDashboard/" preventScrollReset={true}> 
<button className='btn btn-back'  >

Back
</button></Link>


<Link to="/PatientDashboard/Result" preventScrollReset={true}>
   <button className='btn' onClick={ApiCall} >

   Submit
   </button>
   </Link>
   </div>
    </div>
  )
}
