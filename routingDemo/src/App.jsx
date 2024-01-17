import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from './component/Dashboard'
import { Landing } from './component/Landing'
import { Navbar } from './component/Navbar'

function App() {


  return (
    <>
    <div>
      
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
