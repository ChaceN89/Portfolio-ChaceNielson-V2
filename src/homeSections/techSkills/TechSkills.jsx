import React from 'react';
import SkillsBox from './SkillsBox';

import { techSkills, skillPageData } from '../../data/pageData/skillsData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SlideTransition from '../../routing/SlideTransition';

function TechSkills() {

  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className=''
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
      bgOpacity={20}
    >
      <hr />
      <SlideTransition>
        <div className='py-10 px-2 container mx-auto space-y-4'>
          <div className='flex items-center justify-start w-full space-x-2'>
            <h2 className='font-bold whitespace-nowrap'>{skillPageData.title}</h2>
            <p className='opacity-60'> {skillPageData.description}</p>
          </div>
          {techSkills.map((category, index) => (
            <div key={index} className="grid grid-cols-5 gap-x-8">
              <div className='col-span-3'>
                <h3 className="font-bold">{category.name}</h3>
                <p className="text-sm text-secondary text-opacity-60">{category.description}</p>

              </div>
              <div className="col-span-2 lg:col-span-2">
                <SkillsBox category={category} />
              </div>
            </div>
          ))}
        </div>
      </SlideTransition>
      <hr />
    </BackgroundWrapper>
  );
}

export default TechSkills;
