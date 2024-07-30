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

function JobExperience() {
  const [experienceID, setExperienceID] = useState(0);

  return (
    <BackgroundWrapper 
      id='WorkExperience'
      className='min-h-section-height' 
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      bgOpacity={40}
    >
      <SectionWrapper
        title={workExperiencePageData.title}
        subtitle={workExperiencePageData.description}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 h-full'>
          <div className='pb-4 md:pb-0'>
            <JobButtons 
              setExperienceID={setExperienceID}
              experienceID={experienceID}
              workExperienceList={workExperienceList}
            />
          </div>
          <div className='col-span-2 h-section-height-small min-h-102 bg-secondary rounded-lg p-2 overflow-auto'>
            <JobDetails job={workExperienceList[experienceID]} />
          </div>
        </div>
      </SectionWrapper>  
    </BackgroundWrapper>
  );
}

export default JobExperience;
