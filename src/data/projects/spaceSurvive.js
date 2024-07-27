import { FaUnity } from "react-icons/fa";

const short = "Space Survive game built with Unity and C#.";
const long = (
  <div className='space-y-2'>
    <p>
      Space Survive is a survival game set in space, developed using Unity and C#. The game involves navigating a spaceship through obstacles and enemies to survive as long as possible.
    </p>
    <p>
      The project showcases advanced game mechanics and features, including enemy AI, power-ups, and level design.
    </p>
    <p>
      It demonstrates the use of Unity's capabilities to create an engaging and challenging game.
    </p>
  </div>
);

export const spaceSurvive = {
  id: "space-survive",
  name: "Space Survive",
  tag: "Game Development",
  blurb: short,
  description: long,
  blurhash: "",
  images: [
    { src: "spaceSurvive1.jpg", blurhash: "" },
    { src: "spaceSurvive2.jpg", blurhash: "" },
  ],
  mainStack: [
    "Unity",
    "C#"
  ],
  fullStack: [
    "Unity",
    "C#"
  ],
  modalInfo: {
    description: long,
    videos: [
      { path: process.env.PUBLIC_URL + "/videos/SpaceSurvive_small.mp4", description: 'Gameplay' }
    ]
  }
};
