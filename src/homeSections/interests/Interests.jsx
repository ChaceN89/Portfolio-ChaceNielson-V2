import React from 'react'
import { interests } from '../../data/pageData/interestsData';

import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SlideTransition from '../../routing/SlideTransition';

function Interests() {

  const size = 80;
  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className='space-y-8 px-10'
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
      bgOpacity={20}
    >
      <SlideTransition>
        {interests.map((interest, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className='flex-shrink-0'>
              <interest.art size={size} color={"White"} />
            </div>
            <div>
              <h4 className="text-xl font-semibold">{interest.name}</h4>
              <p className="text-secondary text-opacity-60">{interest.description}</p>
            </div>
          </div>
        ))}
      </SlideTransition>
    </BackgroundWrapper>
  )
}

export default Interests;
