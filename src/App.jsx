import React from 'react'
import Navbar from './components/Navbar'
import SideNavbar from './components/SideNavbar'
import MainDiv from './components/MainDiv'
import { Route, Routes } from 'react-router-dom'
import Consent from './components/Consent'
import Token from './components/Token'

function App() {
  return (
    <>
    <div className='flex'>
      <Navbar/>
      <SideNavbar/>
      <Routes>
        <Route path='/' element={<MainDiv/>}/>
        <Route path='/consent' element={<Consent/>}/>
        <Route path='/token' element={<Token/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
