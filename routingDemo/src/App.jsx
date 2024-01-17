import React, { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
// import { Dashboard } from './component/Dashboard'
import { Navbar } from './component/Navbar'

const Dashboard = lazy(()=> import('./component/Dashboard'))

const Landing = lazy(()=>import('./component/Landing'))
function App() {


  return (
    <>
    <div>
      
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/dashboard' element={
          <Suspense fallback={"Loading..."}>
        <Dashboard/>
        </Suspense>
        }></Route>
        <Route path='/' element={
          <Suspense fallback={"Loading..."}>
          <Landing/>
        </Suspense>}/>


      </Routes>
    
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
