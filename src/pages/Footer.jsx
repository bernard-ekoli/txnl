import React from 'react'
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div id="footers" className="display-flex Whundred-percent">
        <div className="display-flex Whundred-percent">
            <span className="Whundred-percent display-flex">
                <div><img src="./txnlLogo.png" alt="txnlLogo" /></div>
                <span className="display-flex Whundred-percent Hhundred-percent">TitanX Neural Labs</span>
            </span>
            <div className="Whundred-percent display-flex">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Careers</span>
            </div>
        </div>
        <div className="display-flex Whundred-percent">
            <span>&copy; TitanX Neural Labs Ltd (RC 8308603) is a fully registered software development and AI research company based in Nigeria.</span>
        </div>
    </div>
  )
}

export default Footer