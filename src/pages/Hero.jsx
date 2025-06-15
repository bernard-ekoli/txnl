import React, { useRef } from 'react'
import "../styles/hero.css"
const Hero = () => {
    const randomGb = useRef();
    return (
        <div id="heroParent" className="display-flex center-flex Hhundred-percent">
            <div id="glowBoxes" className="glow-box floating-item one" ref={randomGb}></div>
            <div id="glowBoxes" className="glow-box floating-item two" ref={randomGb}></div>
            <div id="glowBoxes" className="glow-box floating-item three" ref={randomGb}></div>
            <div id="hPChild1" className="display-flex Whundred-percent center-flex">
                <span className="display-flex">Welcome to <span className="special"> TitanX Neural Labs</span></span>
                <span>
                    Pioneering the future through cutting-edge AI development,<br /> secure cyber solutions, immersive game experiences,<br /> and innovative web and app technologies.
                </span>
            </div>
            <div id="hPChild2" className="display-flex Whundred-percent">
                <button>Explore Our Projects</button>
                <button>Let's Build</button>
            </div>
            <div id="hPChild3" className="display-flex Whundred-percent">
                <div className="display-flex">
                    <span>AI Systems</span>
                    <span>Neural networks and machine learning solutions</span>
                </div>
                <div className="display-flex">
                    <span>Apps</span>
                    <span>Revolutionary technology platforms</span>
                </div>
                <div className="display-flex">
                    <span>Game Development</span>
                    <span>Immersive gaming experiences and engines</span>
                </div>
            </div>
            <div className="display-flex scroll-down">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00c8ff"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" /></svg>
            </div>
        </div>
    )
}

export default Hero