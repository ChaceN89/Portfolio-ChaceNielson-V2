import React from 'react'
import { interests } from '../../data/pageData/interestsData';

import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SlideTransition from '../../routing/SlideTransition';
import SectionHeader from '../../components/uiElements/SectionHeader';

function Interests() {

  const size = 80;
  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className=''
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-trim.png"}
      bgOpacity={10}
    >
      <SlideTransition>
        <hr />
        <div className='container mx-auto'>

          <SectionHeader title='Interests' subtitle="When I'm not coding" />
          <div>
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
          </div>
        </div>
        <hr />
      </SlideTransition>
    </BackgroundWrapper>
  )
}

export default Interests;
