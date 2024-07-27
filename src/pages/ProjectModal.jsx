import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectData";
import ProjectImageCarousel from "../homeSections/projects/ProjectImageCarousel";

const ProjectModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Check if the project exists based on the id
  const project = projects.find(project => project.id === id.toLowerCase());

  useEffect(() => {
    // If the project is not found, navigate to the home page
    if (!project) {
      navigate('/');
    }
  }, [id, project, navigate]);

  // If project is not found, return null to prevent rendering
  if (!project) {
    return null;
  }

  return (
    <div className="overflow-y-auto max-h-section-height-small p-4">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      {project.description && <div className="mb-4">{project.description}</div>}
      {project.fullStack && project.fullStack.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="flex flex-wrap space-x-3 mb-4">
            {project.fullStack.map((tech, index) => (
              <li key={index} className="bg-gray-200 rounded-full px-3 py-1">{tech}</li>
            ))}
          </ul>
        </>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {project.images && project.images.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Images</h2>
            <ProjectImageCarousel images={project.images} id={project.id} title={project.name} />
          </div>
        )}
        {project.externalLinks && project.externalLinks.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">External Links</h2>
            <div>
              {project.externalLinks.map((link, index) => (
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="m-2 inline-block text-blue-500">
                  {link.icon && <link.icon className="inline-block mr-2" />}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
