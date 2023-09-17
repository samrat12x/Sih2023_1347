import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './input.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Landingpage from './components/Landingpage/Landingpage.jsx'
import PatientDashboard from './components/PatientDashboard.jsx'
import Form from './components/Form/Form.jsx'
import Symptoms from './components/SymptomsPage/Symptoms.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
      path:'',
      element:<Landingpage/>}
      ,
      {
        path:'/PatientDashboard',
        element:<PatientDashboard />,
        children:[{ 
          path: "",
          element: <Form/>
        },
        {
          path: "/PatientDashboard/Symptoms",
          element: <Symptoms/>
        }]
      
      }
        ,
  

    ]
    
  },
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
   
    <RouterProvider router={router} />

 
  </React.StrictMode>,
)
