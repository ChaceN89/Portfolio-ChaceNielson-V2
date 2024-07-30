/**
 * @file ProjectSection.jsx
 * @module ProjectSection
 * @desc React component that renders a section displaying project cards.
 * This component uses BackgroundWrapper and SectionWrapper for layout
 * and applies a background image with adjustable opacity.
 *
 * @component ProjectSection
 * 
 * @requires react
 * @requires projects, projectPageData from '../../data/pageData/projectData'
 * @requires ProjectCard from './ProjectCard'
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires SectionWrapper from '../../components/uiElements/SectionWrapper'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of ProjectSection component
 * import ProjectSection from './ProjectSection';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <ProjectSection />
 *     </div>
 *   );
 * }
 * 
 * @exports ProjectSection
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import { projects, projectPageData } from '../../data/pageData/projectData';
import ProjectCard from './ProjectCard';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../components/uiElements/SectionWrapper';
 
function ProjectSection() {
  return (
    <BackgroundWrapper 
      className='relative' 
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      bgOpacity={20}
    >
      <SectionWrapper
        title={projectPageData.title}
        subtitle={projectPageData.description}
      >
        <div className='card-grid-wrapper'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </SectionWrapper>
      <hr />
    </BackgroundWrapper>
  );
}

export default ProjectSection;
