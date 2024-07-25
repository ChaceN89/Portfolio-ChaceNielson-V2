/**
 * Footer component at the bottom of the page
 * Contains Avatar image, link back to top with My Name, and list of links to see my other stuff
 */
import React from 'react'
import LogoLink from '../navbar/LogoLink';
import MediaLinks from '../common/uiElements/MediaLinks';

function Footer() {
  return (
    <footer className=" bg-secondary flex relative bottom-0">
      <div className='container mx-auto w-full flex flex-col md:flex-row justify-between items-center py-4'>
        <LogoLink/>
        <MediaLinks/>
      </div>
    </footer>
  )
}

export default Footer