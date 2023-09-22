import React , {useState} from 'react'
import Searchbar from './Searchbar'
import MaleFront from './MaleFront'

import { Link } from 'react-router-dom'
import './Symptoms.css'
import './svgcomponent.css'
import {FaArrowsRotate} from 'react-icons/fa6'
import MaleBack from './MaleBack'
import FemaleFront from './FemaleFrontSVG'
import FemaleBack from './FemaleBack'

export default function  Symptoms() {
const[gender,setGender]=useState('female');


  const[isFront, setIsFront]=useState(true);

function handleRotateBtnClick()
{
setIsFront(d =>!d);
}

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
<div>
{ gender=='male'? isFront? <MaleFront/>:<MaleBack/> : isFront? <FemaleFront/>:<FemaleBack/>  }

{/* rotate btn */}
<button onClick={handleRotateBtnClick} > <FaArrowsRotate></FaArrowsRotate>Rotate</button>
</div>     
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
