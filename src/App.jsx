import { useState } from 'react'
import Header from './components/Header'
import SVGComponent from './components/SVGComponent'
import './input.css'
import Footer from './components/Footer'
import Landingpage from './components/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Landingpage/>
    {/* <SVGComponent/> */}
    <Footer/>

    
    </>
  )
}

export default App
