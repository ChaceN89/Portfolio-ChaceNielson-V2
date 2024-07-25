import React from 'react'

function Interests({ interests }) {

  const size = 80;
  return (
    <div className='space-y-8 px-10'>
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
  )
}

export default Interests;
