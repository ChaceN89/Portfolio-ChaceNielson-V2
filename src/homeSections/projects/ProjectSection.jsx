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
 * @updated 2024-08-05
 */

import React, { useState, useEffect } from 'react';
import { projects, projectPageData } from '../../data/pageData/projectData';
import ProjectCard from './ProjectCard';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../components/uiElements/SectionWrapper';

function ProjectSection() {
  // Determine the initial and additional number of cards based on screen size
  const getInitialCards = () => (window.innerWidth >= 1024 ? 6 : 3); // Initial cards for large screens and small screens
  const getAdditionalCards = () => (window.innerWidth >= 1024 ? 3 : 2); // Additional cards to add for large screens and small screens

  // Retrieve initial state from sessionStorage
  const getInitialVisibleCards = () => {
    const storedVisibleCards = sessionStorage.getItem('visibleCards');
    return storedVisibleCards ? parseInt(storedVisibleCards, 10) : getInitialCards();
  };

  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
  const [additionalCards, setAdditionalCards] = useState(getAdditionalCards());

  useEffect(() => {
    const handleResize = () => {
      setAdditionalCards(getAdditionalCards());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the number of projects to display based on visible cards
  const visibleProjects = projects.slice(0, visibleCards);

  // Handle the 'View More...' button click
  const handleViewMore = () => {
    const newCards = visibleCards + additionalCards;
    setVisibleCards(newCards);
    sessionStorage.setItem('visibleCards', newCards);
  };

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
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {visibleProjects.length < projects.length && (
          <button 
            onClick={handleViewMore} 
            className='w-full border-2 bg-frosted-glass text-secondary rounded-lg p-1.5 mt-6 hover:bg-opacity-70 hover:backdrop-blur-none hover:bg-secondary'
          >
            View More...
          </button>
        )}
      </SectionWrapper>
      <hr />
    </BackgroundWrapper>
  );
}

export default ProjectSection;
