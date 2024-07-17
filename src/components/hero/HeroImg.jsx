import React from 'react'
import ImageComponent from '../resuableComponents/ImageComponent'

function HeroImg() {
  return (
    <div className="h-full absolute top-0 right-0 z-5">
      <ImageComponent src={`${process.env.PUBLIC_URL}/logos/chace2.png`} alt="Hero" className="h-full w-full object-cover " />
    </div>
  )
}

export default HeroImg