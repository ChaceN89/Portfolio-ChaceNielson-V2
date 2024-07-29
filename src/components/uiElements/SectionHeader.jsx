/**
 * @file SectionHeader.jsx
 * @module SectionHeader
 * @desc React component that displays the style of a section header with a title and subtitle.
 * 
 * @component SectionHeader
 * 
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {string} props.subtitle - The subtitle of the section.
 * 
 * @requires react
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * 
 * @returns {JSX.Element} The SectionHeader component that displays a styled section header.
 * 
 * @example
 * // Example usage of SectionHeader component
 * import SectionHeader from './SectionHeader';
 * 
 * function SomeSection() {
 *   return (
 *     <div className="section">
 *       // Other content
 *       <SectionHeader title="My Title" subtitle="My Subtitle" />
 *     </div>
 *   );
 * }
 * 
 * @exports SectionHeader
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';

function SectionHeader({ title, subtitle }) {
  return (
    <div className='py-10 px-4 space-y-1'>
      <h2 className='font-bold'>{title}</h2>
      <p className='opacity-60'>{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
