/**
 * @file ProjectModal.jsx
 * @module ProjectModal
 * @desc A React component that displays detailed information about a specific project.
 * The component includes project details such as the name, description, skills used, external links, and a carousel of project images.
 * The project is identified by its ID, which is obtained from the URL parameters.
 * If the project ID is invalid, the user is redirected to the home page.
 * 
 * @requires react
 * @requires react-router-dom
 * @requires react-scroll
 * @requires ProjectImageCarousel
 * @requires SectionHeader
 * @requires ExternalLinks
 * @requires SkillBoxContainer
 * 
 * @example
 * // Example usage of ProjectModal
 * import ProjectModal from './ProjectModal';
 * 
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/project/:id" element={<ProjectModal />} />
 *       </Routes>
 *     </Router>
 *   );
 * }
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/web/guides/quick-start | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/pageData/projectData";
import ProjectImageCarousel from "../homeSections/projects/ProjectImageCarousel";
import SectionHeader from "../components/uiElements/SectionHeader";
import ExternalLinks from "../homeSections/projects/ExternalLinks";
import { Element, scroller } from 'react-scroll';
import SkillBoxContainer from "../components/uiElements/SkillBoxContainer";
import { FaArrowAltCircleDown } from "react-icons/fa";


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

  // Scroll to the images section
  const scrollToImages = () => {
    scroller.scrollTo("imagesSection", {
      containerId: "project-modal-container",
      smooth: true
    });
  };

  return (
    <div className="text-primary">
      <div className="py-1">
        <SectionHeader title={project.name} subtitle={project.blurb} />
      </div>

      <div className="flex flex-col-reverse items-center  sm:flex-row justify-start py-2">
        <div className="text-left pr-2">
          <button onClick={scrollToImages} className="button-secondary p-0.5 rounded-full">
            <FaArrowAltCircleDown size={24}/>
          </button>
        </div>
        <ExternalLinks externalLinks={project.externalLinks} />
      </div>

      <hr className="border-primary border-opacity-60" />

      {/* Skill Icons */}
      <SkillBoxContainer stack={fullStack} />

      {/* description */}
      <div className="pb-4">{project.description}</div>

      {/* images */}
      {project.images && project.images.length > 0 && (
        <Element name="imagesSection">
          <div className="pt-4">
            <ProjectImageCarousel images={project.images} id={project.id} title={project.name} />
          </div>
        </Element>
      )}
    </div>
  );
};

export default ProjectModal;
