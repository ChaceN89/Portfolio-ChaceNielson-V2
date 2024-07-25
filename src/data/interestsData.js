
import { FaSnowboarding, FaBasketballBall, FaGuitar, FaHiking } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";


export const interests =[
  { // Snowboarding
    name: "Snowboarding", 
    description: "I have been snowboarding since I was a kid. I love the thrill of carving down the mountain and hitting jumps in the terrain park.", 
    art:FaSnowboarding ,
  },
  { // Basketball
    name: "Basketball",
    description: "I played basketball in high school and college, and I still play in local leagues when I can.",
    art:FaBasketballBall
  },
  { // Guitar
    name: "Guitar",
    description: "I have been playing guitar for the past 10 years. I enjoy playing a variety of music, from rock and blues to classical and jazz.",
    art:FaGuitar
  },
  { // Hiking
    name: "Hiking",
    description: "I love the outdoors and enjoy hiking and backpacking in the mountains. I have hiked the West Coast Trail and the Great Divide Trail.",   
    art:FaHiking
  },
  { // Climbing
    name: "Climbing",
    description: "I have been climbing for the past 5 years. I enjoy both rock climbing and ice climbing, and have climbed in Colorado, Utah, and Alaska.",
    art:GiMountainClimbing
  }
]
