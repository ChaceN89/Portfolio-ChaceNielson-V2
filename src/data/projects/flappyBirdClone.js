import { FaUnity } from "react-icons/fa";

const short = "Flappy Bird clone built with Unity and C#.";
const long = (
  <div className='space-y-2'>
    <p>
      This project is a clone of the popular Flappy Bird game, developed using Unity and C#. The game features similar mechanics where the player controls a bird to navigate through pipes without hitting them.
    </p>
    <p>
      The project demonstrates the use of Unity's physics and scripting capabilities to create a simple yet engaging game.
    </p>
    <p>
      It serves as an example of recreating a well-known game using modern game development tools.
    </p>
  </div>
);

export const flappyBirdClone = {
  id: "flappy-bird-clone",
  name: "Flappy Bird Clone",
  tag: "Game Development",
  Blurb: short,
  description: long,
  blurhash: "",
  images: [
    { src: "flappyBird1.jpg", blurhash: "" },
    { src: "flappyBird2.jpg", blurhash: "" },
  ],
  techStack: [
    "Unity",
    "C#"
  ],
  modalInfo: {
    description: long,
    videos: [
      { path: process.env.PUBLIC_URL + "/videos/FlappyBird.mp4", description: 'Gameplay' }
    ]
  }
};
