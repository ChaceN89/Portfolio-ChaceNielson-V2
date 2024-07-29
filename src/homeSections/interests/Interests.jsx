import React from 'react'
import { interests, interestsPageData } from '../../data/pageData/interestsData';

import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SlideTransition from '../../animations/SlideTransition';
import SectionHeader from '../../components/uiElements/SectionHeader';
import InterestCategory from './InterestCategory';

function Interests() {

  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className=''
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-trim.png"}
      bgOpacity={10}
    >
      <hr />
        <div className='container mx-auto pb-10 px-2'>
          <SlideTransition>
            <div className='py-10 pb-8'>
              <SectionHeader title={interestsPageData.title} subtitle={interestsPageData.description} />
            </div>
          </SlideTransition>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4'>
            {interests.map((interest, index) => (
              <InterestCategory key={index} interest={interest}/>
            ))}
          </div>
        </div>
      <hr />
    </BackgroundWrapper>
  )
}

export default Interests;
