import React  from 'react';


import { techSkills } from '../../data/skillsData';
import { interests } from '../../data/interestsData';

import Interests from './Interests';
import SkillSections from './SkillSections';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';

import SlideTransition from '../../routing/SlideTransition';

function AboutMe() {
  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className='min-h-section-height'
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
      bgOpacity={20}
    >
      <SlideTransition>

        <div className='section-wrapper z-50'>
          <h2 className='pt-10'>Technical Skills</h2>
            <div className='py-10'>
              <SkillSections techSkills={techSkills}/>
            </div>
            <hr />
            <h2 className='pt-10'>My Interests</h2>
            <div className='py-10'>
              <Interests interests={interests} />
            </div>
        </div>
      </SlideTransition>
    </BackgroundWrapper>
  );
}

export default AboutMe;
