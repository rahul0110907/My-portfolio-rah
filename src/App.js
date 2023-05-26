import React from 'react'
import './App.css'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import Project from './Component/Project'
import About from './Component/About'
import Contact from './Component/Contact'
import SocialIcon from './Component/SocialIcon'
import Skills from './Component/Skills'


const App = () => {
  return (
    <div className=''>
      <NavBar/>
      <Home/>
      <SocialIcon/>
      <About/>
    <Skills/>
   <Project/>
   <Contact/>
    </div>
  )
}

export default App