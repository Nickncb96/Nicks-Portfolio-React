import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        {/* Projects heading */}
        <h2 className="text-center">Projects</h2>
        <div className="row">
          {/* Map through projects and render ProjectCard for each */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
