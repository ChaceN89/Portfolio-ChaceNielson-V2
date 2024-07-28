/**
 * Footer component at the bottom of the page
 * Contains Avatar image, link back to top with My Name, and list of links to see my other stuff
 */
import React from 'react'
import LogoLink from '../logo/LogoLink';
import MediaLinks from '../uiElements/MediaLinks';

function Footer() {
  return (
    <footer className=" bg-secondary flex relative bottom-0">
      <div className='container mx-auto flex justify-between p-1 sm:p-2'>
        <LogoLink size='small'/>
        <MediaLinks/>
      </div>
    </footer>
  )
}

export default Footer