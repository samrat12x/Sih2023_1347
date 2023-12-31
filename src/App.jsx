import { useState } from 'react'
import Header from './components/Header'

import './input.css'
import Footer from './components/Footer'
import Landingpage from './components/Landingpage/Landingpage'
import {Form} from './components/Form/Form'
import {VerticalNavbar} from './components/VerticalNavbar/VerticalNavbar'
import Searchbar from './components/SymptomsPage/Searchbar'
import Symptoms from './components/SymptomsPage/Symptoms'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

    <Outlet/>
    
    <Footer/>

    
    </>
  )
}

export default App
