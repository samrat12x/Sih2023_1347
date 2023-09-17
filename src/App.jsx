import { useState } from 'react'
import Header from './components/Header'
import SVGComponent from './components/SVGComponent'
import './input.css'
import Footer from './components/Footer'
import Landingpage from './components/Landingpage/Landingpage'
import {Form} from './components/Form/Form'
import {VerticalNavbar} from './components/VerticalNavbar/VerticalNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Landingpage/>
    {/* <SVGComponent/> */}
    <Form/>
    {/* <VerticalNavbar/> */}
    <Footer/>

    
    </>
  )
}

export default App
