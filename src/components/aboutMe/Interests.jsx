import React from 'react'

function Interests({interests}) {

  const size = 60
  return (
    <div className='space-y-2'>
      {interests.map((interest, index) => (


        <div key={index} className=" flex space-x-2">
          <interest.art size={size} color={"White"} />
          <div>
            <h4>{interest.name}</h4>
            <p>{interest.description}</p>
          </div>
        </div>


      ))}
    </div>
  )
}

export default Interests