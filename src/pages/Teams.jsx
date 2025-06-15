import React from 'react'
import "../styles/teams.css"
import { useInView } from '../preBuiltTools/flyin'
const Teams = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  return (
    <div id="teams" className="display-flex Whundred-percent">
      <div id="teamsChild" className="display-flex Whundred-percent">
        <div id="tC1" className="display-flex Whundred-percent">
          <span>Meet the Visionary</span>
          <span>Founded by Bernard Edet Ekoli</span>
        </div>
        <div id="tC2" className="display-flex Whundred-percent">
          <div className={`display-flex center-flex Whundred-percent fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
            <img src="./titanX.png" alt="Titan'sImage" />
          </div>
          <div className={`display-flex Whundred-percent fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
            <span>"A Vision to Build the Future"</span>
            <span>
              TitanX Neural Labs Ltd was born from the dream of one developer with a mission: to build intelligent systems that rival the world's best. Founded by Bernard Edet Ekoli, TXNL is driven by passion, curiosity, and the desire to redefine what technology can do for Africa and beyond.
            </span>
          </div>
        </div>
        <div id="tC3" className="display-flex Whundred-percent">
          <div className="display-flex Whundred-percent">
            <span className="Whundred-percent">Join Our Team</span>
            <span className="Whundred-percent">We're always looking for talented individuals to join our mission. If you're passionate about cutting-edge technology and innovation, we'd love to hear from you.</span>
            <div className="display-flex Whundred-percent"><button>View Open Positions</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams