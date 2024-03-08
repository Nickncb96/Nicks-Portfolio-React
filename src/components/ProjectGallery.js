PrcojectGallery.jsx

import React from 'react';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const ProjectGallery = () => {
    return (
        <div className="project-gallery">
            {projectsData.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default PrcojectGallery;