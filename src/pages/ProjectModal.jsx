import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectData";
import ProjectImageCarousel from "../homeSections/projects/ProjectImageCarousel";
import { BsFileEarmarkPdf } from "react-icons/bs";
import openPdf from "../functions/openDocs";

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

  // Combine mainStack and extraStack if extraStack exists
  const fullStack = project.extendedStack ? [...project.mainStack, ...project.extendedStack] : project.mainStack;

  return (
    <div className="overflow-y-auto max-h-section-height-small p-4">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      {project.description && <div className="mb-4">{project.description}</div>}
      {fullStack && fullStack.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="flex flex-wrap space-x-3 mb-4">
            {fullStack.map((tech, index) => (
              <div key={index} className="flex items-center mr-2">
                {tech.icon && (
                  <tech.icon 
                    className="inline-block mr-1" 
                    style={{ color: tech.color || 'inherit' }} 
                    size={40}
                  />
                )}
                {tech.svg_path && (
                  <img 
                    src={`${process.env.PUBLIC_URL}/svg-icons/${tech.svg_path}`} 
                    alt={tech.name} 
                    className="inline-block mr-1 h-12" 
                  />
                )}
                {tech.name && <span>{tech.name}</span>}
              </div>
            ))}
          </ul>
        </>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {project.images && project.images.length > 0 && (
          <div className="row-span-2">
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

        {project.pdfs && project.pdfs.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">PDFs</h2>
            <div>
              {project.pdfs.map((pdf, index) => (
                <button
                  key={index} 

                  onClick={(e) => {
                    e.preventDefault();
                    openPdf(pdf.link);
                  }} 
                  className="m-2 inline-block text-blue-500"
                >
                  <BsFileEarmarkPdf className="inline-block mr-2" />
                  {pdf.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
