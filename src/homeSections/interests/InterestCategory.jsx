import React from 'react'
import ShowIcon from '../../components/uiElements/ShowIcon'
import ElevateOnView from '../../animations/ElevateOnView'

function InterestCategory({interest}) {
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