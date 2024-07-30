import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/pageData/projectData";
import ProjectImageCarousel from "../homeSections/projects/ProjectImageCarousel";
import SectionHeader from "../components/uiElements/SectionHeader";
import SkillBox from "../components/uiElements/SkillBox";
import ExternalLinks from "../homeSections/projects/ExternalLinks";
import { Link as ScrollLink } from 'react-scroll';
import { globals } from "../data/globals";

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
    <div className="text-primary">
      <div className="py-1">
        <SectionHeader title={project.name} subtitle={project.blurb} />
      </div>

      <ExternalLinks externalLinks={project.externalLinks} />
 
      <hr className="border-primary border-opacity-60" />

      {/* Skill Icons */}
      <div className="p-4">
        {fullStack && fullStack.length > 0 && (
          <div className="grid text-sm md:text-base grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {fullStack.map((singleSkill, index) => (
              <SkillBox key={index} skill={singleSkill} />
            ))}
          </div>
        )}
      </div>

      {/* description */}
      <div className="pb-4">{project.description}</div>

      {/* images */}
      {project.images && project.images.length > 0 && (
        <div className="pt-4">
          <ProjectImageCarousel images={project.images} id={project.id} title={project.name} />
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
