import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ceateBrowserRouter, RouterProvider } from 'react-router-dom'

import AboutMe from './pages/AboutMe.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/aboutme',
        element: <AboutMe />,
      },
      {
        path: '/contactMe',
        element: <ContactMe />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
