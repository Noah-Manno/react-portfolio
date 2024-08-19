import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
