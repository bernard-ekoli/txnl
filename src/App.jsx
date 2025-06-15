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
    <div id="app" className="Whundred-percent">
      <div id="header" className="glass-bg display-flex center-flex"><Header /></div>
      <div id="hero" className="checkered-bg display-flex center-flex"><Hero /></div>
      <div id="about" className="display-flex center-flex"><About /></div>
      <div id="project" className="display-flex center-flex"><Project /></div>
      <div id="team" className="display-flex center-flex"><Teams /></div>
      <div id="contact" className="display-flex center-flex"><Contact /></div>
      <div id="footer" className="display-flex center-flex"><Footer /></div>
    </div>
  )
}

export default App