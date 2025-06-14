import React from 'react'
import "./styles/app.css"
import Header from './pages/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Project from './pages/Project'
import Teams from './pages/Teams'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
const App = () => {
  return (
    <div id="app" className="">
      <div id="header" className="glass-bg"><Header /></div>
      <div id="hero" className="checkered-bg"><Hero /></div>
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="team"><Teams /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"><Footer /></div>
    </div>
  )
}

export default App