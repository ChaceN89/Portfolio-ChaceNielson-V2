/**
 * @file cubeGame.js
 * @module cubeGame
 * @desc Contains data for the Cube Game project.
 * 
 * @name Cube Game
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "An endless runner game developed using Unity and C#.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project is an endless runner game created using Unity and C#. Players control a cube, navigating it through a series of challenging levels and obstacles.
    </p>
    <p>
      The game demonstrates essential game mechanics and physics, highlighting the capabilities of Unity for developing engaging and interactive experiences.
    </p>
  </div>
);

export const cubeGame = {
  id: "cube-game",
  name: "Cube Game",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "cubeGame.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
  ],
  mainStack: [
    IconSkills.UNITY,
    IconSkills.CSHARP,
  ],
  extendedStack: [
    IconSkills.GAME_DEVELOPMENT,
    IconSkills.UNITY_PHYSICS,
  ],
  externalLinks: [
    { name: "Play Game", link: "https://chacen89.github.io/CubeGame/", icon: IconSkills.UNITY.icon },
  ],
};
