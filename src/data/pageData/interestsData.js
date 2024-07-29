/**
 * @file interestsData.js
 * @module interestsData
 * @desc Contains data for the interests section used in various parts of the application.
 * Each interest entry includes the name, description, and an icon representing the interest.
 * 
 * @requires ../iconSkills
 *  
 * @example
 * // Example usage of interests in a component
 * import { interests } from './interestsData';
 * 
 * function InterestsSection() {
 *   return (
 *     <div>
 *       {interests.map((interest, index) => (
 *         <div key={index}>
 *           <interest.art size={32} />
 *           <h3>{interest.name}</h3>
 *           <p>{interest.description}</p>
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports interests
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

export const interests = [
  { 
    name: "Snowboarding", 
    description: "I picked up snowboarding in university and have been hooked ever since. It's my favorite winter activity.", 
    art: IconSkills.SNOWBOARDING.icon,
  },
  { 
    name: "Basketball",
    description: "I played basketball in high school and college, and I still play in local leagues when I can.",
    art: IconSkills.BASKETBALL.icon
  },
  { 
    name: "Music",
    description: "I have been playing guitar for the last 4 years. I enjoy playing songs and writing my own music.",
    art: IconSkills.MUSIC.icon
  },
  { 
    name: "Hiking",
    description: "I love the mountains and enjoy hiking and backpacking in the summer and winter.",
    art: IconSkills.HIKING.icon
  },
  { 
    name: "Climbing",
    description: "I have been climbing my whole life. I enjoy rock climbing, mountaineering, and ice climbing.",
    art: IconSkills.MOUNTAIN_CLIMBING.icon
  },
  { 
    name: "Swimming",
    description: "I recently picked up swimming as a way to stay in shape and enjoy the water.",
    art: IconSkills.SWIMMING.icon
  }
];
