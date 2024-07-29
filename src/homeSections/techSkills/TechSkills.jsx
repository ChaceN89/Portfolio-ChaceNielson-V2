/**
 * @file TechSkills.js
 * @module TechSkills
 * @desc React component that displays the technical skills section with categories.
 * This component uses the BackgroundWrapper for the background, SlideTransition for animations, 
 * and SectionHeader for the section header. It maps through the techSkills data and renders SkillCategory components.
 *
 * @component TechSkills
 * 
 * @requires react
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires SectionWrapper from '../../components/uiElements/SectionWrapper'
 * @requires SkillCategory from './SkillCategory'
 * @requires techSkills, skillPageData from '../../data/pageData/skillsData'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of TechSkills component
 * import TechSkills from './TechSkills';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <TechSkills />
 *     </div>
 *   );
 * }
 * 
 * @exports TechSkills
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-29
 */
import React from 'react';
import { techSkills, skillPageData } from '../../data/pageData/skillsData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SkillCategory from './SkillCategory';
import SectionWrapper from '../../components/uiElements/SectionWrapper';

function TechSkills() {

  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className='overflow-hidden'
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
      bgOpacity={20}
    >
      <hr />
      <SectionWrapper
        title={skillPageData.title}
        subtitle={skillPageData.description}
      >
        <div className='space-y-4 md:space-y-8'>
          {techSkills.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </SectionWrapper>
      <hr />
    </BackgroundWrapper>
  );
}

export default TechSkills;
