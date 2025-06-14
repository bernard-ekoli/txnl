import React from 'react'
import "../styles/about.css"
import { useInView } from '../preBuiltTools/flyin'
const About = () => {
    const [ref, isVisible] = useInView({ threshold: 0.2 });
    return (
        <div id="abouts" className="display-flex Whundred-percent">
            <div id="aboutChild1" className="display-flex Whundred-percent">
                <span>About TitanX Neural Labs</span>
                <span>We are a cutting-edge technology laboratory pushing the boundaries of what's<br /> possible in artificial intelligence, financial technology, gaming, and developer <br /> tools.</span>
            </div>
            <div id="aboutChild2" className="display-flex center-flex Whundred-percent">
                <div id="aCC1" className="display-flex Whundred-percent Hhundred-percent center-flex">
                    <div className={`display-flex fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
                        <span>Our Mission</span>
                        <span>To engineer cutting-edge software, AI systems, and tools that empower the bold — creators, developers, gamers, and visionaries — to build faster, think sharper, and dominate the digital world.
                            We don’t follow trends — we build what’s next.</span>
                    </div>
                    <div className={`display-flex fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
                        <span>Our Vision</span>
                        <span>To lead a future where African-built intelligence competes on a global level, merging raw innovation with real-world execution. Our goal is simple:
                            Replace excuses with systems, and turn young tech rebels into global game-changers.
                        </span>
                    </div>
                </div>
                <div id="aCC2" className="display-flex Whundred-percent">
                    <div id="aCCC" className="display-flex Whundred-percent">
                        <div className={`display-flex fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
                            <span>3</span>
                            <span>AI Models Deployed</span>
                        </div>
                        <div className={`display-flex fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
                            <span>10+</span>
                            <span>Active Projects</span>
                        </div>
                        <div className={`display-flex fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
                            <span>100</span>
                            <span>Users Served</span>
                        </div>
                        <div className={`display-flex fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
                            <span>15+</span>
                            <span>Team Members</span>
                        </div>
                    </div>
                    <div id="aCCC2" className={`fly-in-section ${isVisible ? "visible" : ""}`} ref={ref}>
                        <span>Core Values</span>
                        <ul>
                            <li>Innovation through intelligent design</li>
                            <li>Future-forward thinking and development</li>
                            <li>Collaborative problem-solving</li>
                            <li>Ethical AI and responsible technology</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About