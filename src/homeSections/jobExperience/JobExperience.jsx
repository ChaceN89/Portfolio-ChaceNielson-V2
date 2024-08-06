/**
 * @file JobExperience.jsx
 * @module JobExperience
 * @desc A React component that displays job experiences with selectable buttons and detailed views.
 * The component uses a background wrapper and section wrapper for styling.
 * 
 * @example
 * // Example usage of JobExperience
 * import JobExperience from './JobExperience';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <JobExperience />
 *     </div>
 *   );
 * }
 * 
 * @exports JobExperience
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-29
 */

import React, { useState } from 'react';
import { workExperienceList, workExperiencePageData } from '../../data/pageData/workExperienceData';
import JobDetails from './JobDetails';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../components/uiElements/SectionWrapper';
import JobButtons from './JobButtons';
import LazyLoad from 'react-lazy-load';

function JobExperience() {
  const [experienceID, setExperienceID] = useState(0);

  return (
    <BackgroundWrapper 
      id='WorkExperience'
      className='min-h-section-height ' 
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/topo-1.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      bgOpacity={40}
      backgroundSize = "cover"
      backgroundAttachment="scroll"
    >
      <LazyLoad>

      <SectionWrapper
        title={workExperiencePageData.title}
        subtitle={workExperiencePageData.description}
        >
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4 h-full'>
          <div className='pb-4 md:pb-0'>
            <JobButtons 
              setExperienceID={setExperienceID}
              experienceID={experienceID}
              workExperienceList={workExperienceList}
              />
          </div>
          <div className='col-span-3 min-h-section-height-small h-fit bg-secondary rounded-lg overflow-auto'>
            <JobDetails job={workExperienceList[experienceID]} />
          </div>
        </div>
      </SectionWrapper>  
              </LazyLoad>
    </BackgroundWrapper>
  );
}

export default JobExperience;
