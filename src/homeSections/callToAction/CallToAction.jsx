/**
 * @file CallToAction.jsx
 * @module CallToAction
 * @desc React component that implements a call-to-action section with a background image and inner content.
 *
 * @component CallToAction
 * 
 * @requires react
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires InnerCallToAction from './InnerCallToAction'
 * @requires './CallToAction.css'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of CallToAction component
 * import CallToAction from './CallToAction';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <CallToAction />
 *     </div>
 *   );
 * }
 * 
 * @exports CallToAction
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-05
 * @since 2.1
 */

import React from 'react';

// components
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import InnerCallToAction from './InnerCallToAction';

// data and styles
import './CallToAction.css';

function CallToAction() {
  return (
    <BackgroundWrapper 
      id='CallToAction'
      className='py-10 min-h-section-height-small flex flex-col justify-center items-center'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim-small.png"}
      backgroundSize="cover"
    >
      <InnerCallToAction />
    </BackgroundWrapper>
  );
}

export default CallToAction;
