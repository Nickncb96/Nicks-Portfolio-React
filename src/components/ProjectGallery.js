import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectGallery = () => {
    return (
        <div className="project-gallery">
            {projectsData.map(project => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <Link to={`/projects/${project.id}`}>
                        <img src={project.screenshot} alt={project.title} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProjectGallery;