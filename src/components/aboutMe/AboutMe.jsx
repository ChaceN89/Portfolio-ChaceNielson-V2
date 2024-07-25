import React  from 'react';


import { techSkills } from '../../data/skillsData';
import { interests } from '../../data/interestsData';

import Interests from './Interests';
import SkillSections from './SkillSections';

function AboutMe() {
  return (
    <section id="AboutMe" className='section-wrapper'>
      <h2 className='pt-10'>Technical Skills</h2>
      <div className='py-10'>
        <SkillSections techSkills={techSkills}/>
      </div>
      <hr />
      <h2 className='pt-10'>My Interests</h2>
      <div className='py-10'>
        <Interests interests={interests} />
      </div>
    </section>
  );
}

export default AboutMe;
