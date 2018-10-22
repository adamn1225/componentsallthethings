import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project'

class Projects extends Component {
  render() {
    return (
      <div id="portfolio">
        {
          projects.allProjects.map(project => {
            return (
              <Project imgName={project.imgName} title={project.title} description={project.description}  />
            )
          })
        }
      </div>
    )
  }
}

export default Projects;
