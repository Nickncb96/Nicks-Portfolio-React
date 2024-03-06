// pages/Projects.js
import React from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projectsData.map(project => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={project.screenshot} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                  <a href={project.repositoryLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
