import React from 'react'

function SectionHeader({title, subtitle}) {
  return (
    <div className='py-8 space-y-1'>
      <h2 className='font-bold '>{title}</h2>
      <p className='opacity-60'>{subtitle}</p>
    </div>
  )
}

export default SectionHeader