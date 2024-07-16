import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import { Route, Routes, BrowserRouter, Link, HashRouter  } from "react-router-dom";
import { Cookies, useCookies } from 'react-cookie';


function App() {

const navbar = useRef();
const visionBtn = useRef();
const newsBtn = useRef();
const careersBtn = useRef();
const partnersBtn = useRef();

useEffect(() => {
  const path = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
  if (path === 'Home') {
    visionBtn.current.click();
  }
    if (path === 'Services') {
      careersBtn.current.click();
    }
    if (path === 'About') {
      partnersBtn.current.click();
    }
    if (path === 'Articles') {
      newsBtn.current.click();
    }

}, [])

  return (
    <>
    <BrowserRouter>
    <nav id='nav-bar'>
        <div id='title'>
        <h1 className='montserrat-800'>Tu Lo Tienes</h1>
        </div>
        <div id='nav-btns' ref={navbar}>
        <Link to="/"><button className='nav-btn' ref={visionBtn}>Home</button></Link>
        <Link to="/About" ref={partnersBtn}><button id='partners-btn'  className='nav-btn'>About</button></Link>
        </div>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/> 
    </Routes>
 

    </BrowserRouter>

   

   
    </>
  )
}

export default App
