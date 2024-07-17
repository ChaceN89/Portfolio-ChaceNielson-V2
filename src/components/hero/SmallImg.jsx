import React from 'react'
import ImageComponent from '../resuableComponents/ImageComponent'

function SmallImg() {
  return (
    <div className='small-img'>
      <ImageComponent src={`${process.env.PUBLIC_URL}/logos/chace2.png`} alt="Hero" className="h-full w-full object-cover " />
    </div>
  )
}

export default SmallImg