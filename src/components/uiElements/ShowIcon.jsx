/**
 * @file ShowIcon.js
 * @module ShowIcon
 * @desc React component that displays an icon based on the provided skill object. 
 * The component adjusts the icon color based on the useWhiteText prop and ensures both SVG and React icons have the same size.
 * Can handle both React icons and SVG images. See the example below for more details.
 * icons should remain at the same size for consistency.
 *
 * @component ShowIcon
 * 
 * @requires react
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of ShowIcon component
 * import ShowIcon from './ShowIcon';
 * 
 * const skill = {
 *   name: 'React',
 *   color: 'blue',
 *   icon: ReactIcon,
 *   svg_path: 'react-icon.svg' // this or the icon not both
 * };
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <ShowIcon skill={skill} size="3rem" useWhiteText={true} />
 *     </div>
 *   );
 * }
 * 
 * @exports ShowIcon
 * 
 * @author Chace Nielson
 * @created 2024-07-29
 * @updated 2024-07-29
 */
import React from 'react';

function ShowIcon({ skill, size = "2rem", useWhiteText = false }) {
  // Determine the icon color based on the lightColor prop - only affect white or black icons
  let iconColor;
  if (useWhiteText) {
    iconColor = skill.color === 'black' ? 'white' : skill.color;
  } else {
    iconColor = skill.color === 'white' ? 'black' : skill.color;
  }

  // if it's a react-icon use the icon component, otherwise use the svg
  const IconComponent = skill.icon;

  // section styles for the icon and image elements
  const iconStyle = { color: iconColor, fontSize: size };
  const imgStyle = { width: size, height: size };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: size, height: size }}>
      {IconComponent ? (
        <IconComponent style={iconStyle} />
      ) : (
        <img src={process.env.PUBLIC_URL + "/svg-icons/" + skill.svg_path} alt={skill.name} style={imgStyle} />
      )}
    </div>
  );
}

export default ShowIcon;
