/**
 * @file flappyBirdClone.js
 * @module flappyBirdClone
 * @desc Contains data for the Flappy Bird Clone project.
 * 
 * @name Flappy Bird Clone
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "A Flappy Bird clone developed using Unity and C#.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project is a Flappy Bird clone developed with Unity and C#. Players control a bird navigating through pipes, avoiding collisions.
    </p>
    <p>
      It showcases Unity's physics and scripting capabilities in creating an engaging game, serving as an example of recreating a popular game using modern tools.
    </p>
  </div>
);

export const flappyBirdClone = {
  id: "flappy-bird-clone",
  name: "Flappy Bird Clone",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "flappyBird.jpg", blurhash: "L8CI]Vs~Ros~8[obWHkA.Uk8oYs~" },
  ],
  mainStack: [
    IconSkills.UNITY,
    IconSkills.CSHARP,
  ],
  modalInfo: {
    description: long,
    videos: [
      { path: process.env.PUBLIC_URL + "/videos/FlappyBird.mp4", description: 'Gameplay' }
    ]
  }
};
