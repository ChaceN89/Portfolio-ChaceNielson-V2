/**
 * @file interestsData.js
 * @module interestsData
 * @desc Contains data for the interests section used in various parts of the application.
 * Each interest entry includes the name, description, and an icon representing the interest.
 * 
 * @requires react-icons/fa
 * @requires react-icons/gi
 * 
 * @see {@link https://react-icons.github.io/react-icons/ | React Icons Documentation}
 * 
 * @example
 * // Example usage of interests in a component
 * import { interests } from './interestsData';
 * import { FaSnowboarding, FaBasketballBall, FaGuitar, FaHiking } from "react-icons/fa";
 * import { GiMountainClimbing } from "react-icons/gi";
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
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { FaSnowboarding, FaBasketballBall, FaGuitar, FaHiking } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";

export const interests = [
  { 
    name: "Snowboarding", 
    description: "I have been snowboarding since I was a kid. I love the thrill of carving down the mountain and hitting jumps in the terrain park.", 
    art: FaSnowboarding,
  },
  { 
    name: "Basketball",
    description: "I played basketball in high school and college, and I still play in local leagues when I can.",
    art: FaBasketballBall
  },
  { 
    name: "Guitar",
    description: "I have been playing guitar for the past 10 years. I enjoy playing a variety of music, from rock and blues to classical and jazz.",
    art: FaGuitar
  },
  { 
    name: "Hiking",
    description: "I love the outdoors and enjoy hiking and backpacking in the mountains. I have hiked the West Coast Trail and the Great Divide Trail.",   
    art: FaHiking
  },
  { 
    name: "Climbing",
    description: "I have been climbing for the past 5 years. I enjoy both rock climbing and ice climbing, and have climbed in Colorado, Utah, and Alaska.",
    art: GiMountainClimbing
  }
];
