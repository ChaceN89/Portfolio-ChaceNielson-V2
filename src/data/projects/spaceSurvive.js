/**
 * @file spaceSurvive.js
 * @module spaceSurvive
 * @desc Contains data for the Space Survive project.
 * 
 * @name Top Down Space Shooter
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "A space adventure game developed using Unity and C#.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      Space Survive is a thrilling survival game set in space, developed using Unity and C#. Players navigate a spaceship through a series of obstacles and enemies, aiming to survive as long as possible. The game features multiple modes, save points, a scoring system, and various enemy types, including a challenging boss fight. Additionally, it includes achievements and power-ups to enhance the gameplay experience.
    </p>
    <p>
      The project showcases game mechanics, such as enemy AI and intricate level design, demonstrating Unity's capabilities. Notably, the game was created without traditional animations, instead utilizing the scaling of objects to achieve dynamic effects. Space Survive is a testament to creating an engaging and challenging game through innovative techniques and robust game design principles.
    </p>
  </div>
);

export const spaceSurvive = {
  id: "space-survive",
  name: "Top Down Space Shooter",
  tag: "Game Development",
  blurb: short,
  description: long,
  images: [
    { src: "spaceSurvive.jpg", blurhash: "L26@E32tL#5kq?Io%%%hyEofR3j?" },
  ],
  mainStack: [
    IconSkills.UNITY,
    IconSkills.CSHARP,
  ],
  extendedStack: [
    IconSkills.GAME_DEVELOPMENT,
  ],
  externalLinks: [
    { name: "Trailer", link: "https://www.youtube.com/watch?v=pwIbyhqWbsM", icon: IconSkills.YOUTUBE.icon },
  ],
};
