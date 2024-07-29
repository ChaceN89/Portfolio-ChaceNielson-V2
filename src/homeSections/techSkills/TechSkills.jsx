import React from 'react';
import SkillsBox from './SkillsBox';

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
            <SectionHeader title={skillPageData.title} subtitle={skillPageData.description} />
          </SlideTransition>
          <div className='space-y-8'>
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
