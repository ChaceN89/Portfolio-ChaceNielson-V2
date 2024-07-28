import React from 'react'
import { interests } from '../../data/pageData/interestsData';

import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SlideTransition from '../../routing/SlideTransition';

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
        <div className='py-10 px-2 container mx-auto space-y-4'>
          <div className='flex items-center justify-start w-full space-x-2'>
            <h2 className='font-bold whitespace-nowrap'>Interests</h2>
            <p className='opacity-60'> When Im not coding</p>
          </div>

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
        <hr />
      </SlideTransition>
    </BackgroundWrapper>
  )
}

export default Interests;
