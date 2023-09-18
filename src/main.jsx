import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import './input.css';

import Landingpage from './components/Landingpage/Landingpage.jsx';
import PatientDashboard from './components/PatientDashboard.jsx';
import Form from './components/Form/Form.jsx';
import Symptoms from './components/SymptomsPage/Symptoms.jsx';
import Preloader from './components/Preloader/Preloader.jsx';

// Create your router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Landingpage />
      },
      {
        path: '/PatientDashboard',
        element: <PatientDashboard />,
        children: [
          {
            path: "",
            element: <Form />
          },
          {
            path: "/PatientDashboard/Symptoms",
            element: <Symptoms />
          }
        ]
      }
    ]
  }
]);

// Define a functional component to handle the rendering and loading logic
function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay or async data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 3800); // Replace this with your actual loading logic
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (
        <div className='preloader_screen'>
          <Preloader />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </React.StrictMode>
  );
}

// Render the Main component
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
