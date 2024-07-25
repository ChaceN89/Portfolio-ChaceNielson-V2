import React  from 'react';


import { techSkills } from '../../data/skillsData';
import { interests } from '../../data/interestsData';

import Interests from './Interests';
import SkillSections from './SkillSections';

function AboutMe() {
  return (
    <section id="AboutMe" className='section-wrapper'>
      <h1>Technical Skills</h1>

      <SkillSections techSkills={techSkills}/>
      <hr />
      <Interests interests={interests} />
    </section>
  );
}

export default AboutMe;
