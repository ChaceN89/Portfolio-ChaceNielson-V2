/**
 * @file InterestCategory.js
 * @module InterestCategory
 * @desc React component that displays a single interest category with an icon and description.
 * This component uses the ElevateOnView animation for an elevating effect when the component is in view.
 *
 * @component InterestCategory
 * 
 * @requires react
 * @requires ShowIcon from '../../components/uiElements/ShowIcon'
 * @requires ElevateOnView from '../../animations/ElevateOnView'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of InterestCategory component
 * import InterestCategory from './InterestCategory';
 * 
 * const interest = {
 *   name: 'Hiking',
 *   description: 'Exploring various trails and enjoying nature.',
 *   icon: { name: 'hiking', color: 'green' }
 * };
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <InterestCategory interest={interest} />
 *     </div>
 *   );
 * }
 * 
 * @exports InterestCategory
 * 
 * @param {Object} props - The props object.
 * @param {Object} props.interest - The interest object containing name, description, and icon.
 * 
 * @author Chace Nielson
 * @created 2024-07-29
 * @updated 2024-07-29
 */
import React from 'react'
import ShowIcon from '../../components/uiElements/ShowIcon'
import ElevateOnView from '../../animations/ElevateOnView'

function InterestCategory({ interest }) {
  return (
    <ElevateOnView className='border-2 border-secondary p-2 border-opacity-10 rounded-lg col-span-1' >
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className='flex-shrink-0'>
          <ShowIcon skill={interest.icon} size="5rem" useWhiteText={true}/>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{interest.name}</h3>
          <p className="text-secondary text-sm text-opacity-60">{interest.description}</p>
        </div>
      </div>
    </ElevateOnView>
  )
}

export default InterestCategory
