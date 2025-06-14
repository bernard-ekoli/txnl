import React from 'react'
import "../styles/project.css"
import { projects } from '../jsons/projects'
const Project = () => {
  return (
    <div id="projects" className="display-flex">
      <div id="projectsChild" className="display-flex Whundred-percent">
        <div className="display-flex Whundred-percent">
          <span>Our Projects</span>
          <span>Explore our cutting-edge projects across AI, FinTech, Gaming, and Developer Tools</span>
        </div>
        <div className="display-flex Whundred-percent">
          {projects.map((item, pindex) => {
            return (
              <div key={pindex} id="projectsList" className="display-flex">
                <div className="display-flex Hhundred-percent Whundred-percent">
                  <div className="Whundred-percent"><span>{item.category}</span></div>
                  <div className="Whundred-percent"><span>{item.stage}</span></div>
                </div>
                <div className="display-flex Hhundred-percent Whundred-percent">
                  <span>{item.name}</span>
                  <span>{item.description}</span>
                </div>
                <div className="display-flex Hhundred-percent Whundred-percent">
                  {
                    item.technologies.map((item, index) => {
                      return (
                        <span key={index}>{item}</span>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project