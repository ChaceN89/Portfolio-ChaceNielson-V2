/**
 * @file TailwindBreakPoints.jsx
 * @module TailwindBreakPoints
 * @desc Component that displays the current breakpoint using Tailwind CSS classes.
 * Used to see what breakpoint is currently active and shows an icon in the top left corner.
 * This component is not used in the actual project but rather for making adjustments during development.
 * 
 * @component TailwindBreakPoints
 * 
 * @requires react
 * 
 * @returns {JSX.Element|null} The rendered TailwindBreakPoints component or null in production
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react'

function TailwindBreakPoints() {
  // Check if the environment variable indicates development mode
  const isDevelopment = process.env.REACT_APP_ENVIRONMENT === 'development';

  if (!isDevelopment) {
    return null; // Do not render in production
  }

  return (
    <div className="opacity-60 fixed top-0 right-0 m-1 p-1 z-50 font-mono text-white h-10 w-10 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-black">
      <div className="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</div>
    </div>
  )
}

export default TailwindBreakPoints
