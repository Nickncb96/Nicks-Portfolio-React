import React from 'react';

const ProjectCard = ({ project }) => {
    const { title, deployedLink, repositoryLink, screenshot, description, technologies, highlights } = project;

    return (
        <div className="col-lg-6">
            <div className="card bg-light mb-4">
                {/* Project screenshot */}
                <img src={`/assets/${screenshot}`} className="card-img-top" alt={title} />
                <div className="card-body">
                    {/* Project title */}
                    <h5 className="card-title">{title}</h5>
                    {/* Project description */}
                    <p className="card-text">{description}</p>
                    {/* Technologies used */}
                    <p className="card-text">Technologies: {technologies.join(', ')}</p>
                    {/* Highlights */}
                    <ul>
                        {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                    {/* Links to deployed project and GitHub repository */}
                    <p className="card-text">
                        Visit <a href={deployedLink} target="_blank" rel="noopener noreferrer">here</a> to view the deployed project. Repository link is <a href={repositoryLink} target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
