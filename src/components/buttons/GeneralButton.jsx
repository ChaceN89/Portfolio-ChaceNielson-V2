/**
 * Download button that takes function and name of button
 * Uses download icon for all instances
 */
import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";



function GeneralButton({onClick, children, }) {
    return (
      <button onClick={onClick} className='cursor-pointer flex justify-between items-center bg-primary border-secondary border-opacity-45 border-2 rounded-xl
        hover:bg-secondary hover:text-primary shadow-2xl backdrop-blur-3xl hover:border-primary '
      >
        <div className="px-4">{children}</div> 
        <div className=' p-2 bg-secondary rounded-r-lg bg-opacity-20 h-full flex justify-center items-center '>
            <FaChevronRight size={24} className="hover:text-black hover:scale-105"/>
        </div>
      </button>
    )
}

export default GeneralButton