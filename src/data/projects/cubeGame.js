import { FaUnity } from "react-icons/fa";

const short = "Simple Cube Game built with Unity and C#.";
const long = (
  <div className='space-y-2'>
    <p>
      This is a simple cube game developed using Unity and C#. The game involves controlling a cube to navigate through various levels and obstacles.
    </p>
    <p>
      The project showcases basic game mechanics and physics implemented in Unity.
    </p>
    <p>
      It serves as a demonstration of fundamental game development skills and the use of Unity's features.
    </p>
  </div>
);

export const cubeGame = {
  id: "cube-game",
  name: "Cube Game",
  tag: "Game Development",
  blurb: short,
  description: long,
  images: [
    { src: "cubeGame1.jpg", blurhash: "" },
    { src: "cubeGame2.jpg", blurhash: "" },
  ],
  techStack: [
    "Unity",
    "C#"
  ],
  externalLinks: [
    { name: "Play Game", link: "https://chacen89.github.io/CubeGame/", icon: FaUnity },
  ],
};
