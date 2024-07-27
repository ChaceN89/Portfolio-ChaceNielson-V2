import { FaUnity } from "react-icons/fa";

const short = "An endless runner game developed using Unity and C#.";
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
  tag: "Game Development",
  blurb: short,
  description: long,
  images: [
    { src: "cubeGame.jpg", blurhash: "LHO:^eD%4.%M00xv%2of_Nxt-;D%" },
  ],
  mainStack:[
    {name:"Unity", icon:FaUnity, color:"black"},
    {name:"C#", svg_path:"c-sharp.svg"} 
  ],
  extendedStack:[
    {name:"Game Development", svg_path:"game-controller.svg"} ,
    {name:"Unity Physics System", svg_path:"collision.svg"} ,
  ],
  externalLinks: [
    { name: "Play Game", link: "https://chacen89.github.io/CubeGame/", icon: FaUnity },
  ],
};
