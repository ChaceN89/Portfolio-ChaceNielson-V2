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
 * @requires SlideTransition from '../../animations/SlideTransition'
 * @requires SectionHeader from '../../components/uiElements/SectionHeader'
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
 * @updated 2024-07-28
 */
import React from 'react';
import { techSkills, skillPageData } from '../../data/pageData/skillsData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SlideTransition from '../../animations/SlideTransition';
import SectionHeader from '../../components/uiElements/SectionHeader';
import SkillCategory from './SkillCategory';

function TechSkills() {

  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className='overflow-hidden'
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
      bgOpacity={20}
    >
      <hr />
        <div className='container mx-auto pb-10'>
          <SlideTransition>
            <div className='py-10 pb-8'>

              <SectionHeader title={skillPageData.title} subtitle={skillPageData.description} />
            </div>
          </SlideTransition>
          <div className='space-y-4 md:space-y-8'>
            {techSkills.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </div>
      <hr />
    </BackgroundWrapper>
  );
}

export default TechSkills;
