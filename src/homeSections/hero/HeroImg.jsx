/**
 * @file HeroImg.jsx
 * @module HeroImg
 * @desc React component that displays the hero image.
 *
 * @component HeroImg
 * 
 * @requires react
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of HeroImg component
 * import HeroImg from './HeroImg';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <HeroImg />
 *     </div>
 *   );
 * }
 * 
 * @exports HeroImg
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import ImageComponent from '../../wrappers/ImageComponent';

function HeroImg() {
  return (
    <div className="hero-img-wrapper">
      <ImageComponent 
        className="hero-img"
        src={`${process.env.PUBLIC_URL}/png-portraits/chace-2.png`} 
        lowResSrc={`${process.env.PUBLIC_URL}/png-portraits/chace-2-small-2.png`} 
        alt="Hero" 
      />
    </div>
  );
}

export default HeroImg;
