import React from 'react';

const ProjectModalInfo = ({ project }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Project: {project.id}</h3>
      <p className="mt-2">Technologies: {project.technologies.join(', ')}</p>
      <p className="mt-2">{project.description}</p>
    </div>
  );
};

export default ProjectModalInfo;
