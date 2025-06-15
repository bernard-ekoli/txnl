import React from 'react'
import "../styles/header.css"

const Header = () => {
  return (
    <div id="headers" className="display-flex Whundred-percent Hhundred-percent">
      <div id="headerFirstChild" className="display-flex center-flex Whundred-percent Hhundred-percent">
        <div className="display-flex center-flex Hhundred-percent">
          <img src="./txnlLogo.png" alt="" className="pointer" />
        </div>
        <div className="display-flex Whundred-percent Hhundred-percent"><span className="pointer">TitanX Neural Labs</span></div>
      </div>
      <div id="headerSecondChild" className="display-flex Whundred-percent Hhundred-percent">
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Documents</span>
        <span>Team</span>
        <span>Contact</span>
        <div><button className="pointer">Get Started</button></div>
      </div>
    </div>
  )
}

export default Header