/**
 * @file scaleTheDepths.js
 * @module scaleTheDepths
 * @desc Contains data for the Scale The Depths Game project.
 * 
 * @name scaleTheDepths
 * 
 * @exports scaleTheDepths
 * 
 * @author Chace Nielson
 * @created 2024-08-21
 * @updated 2024-08-21
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "A fishing game built for GMTK 2024 Game Jam.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      A game made for the 2024 GMTK Game Jam. The Game Jam theme was "Built to Scale". We decided to take a more literal approach to the theme, with the player being a robot that scales fish.
    </p>
  </div>
);

export const scaleTheDepths = {
  id: "scale-the-depths",
  name: "Scale The Depths",
  tag: "Game",
  blurb: short,
  description: long,
  images: [
    { src: "scaleTheDepths1.jpg", blurhash: "LaJuWDA0SdTLuPIUwbt8buRPtSoz" },
    { src: "scaleTheDepths2.jpg", blurhash: "LoGKwfoexZI@.TjYn$S54;WAM{t7" },
    { src: "scaleTheDepths3.jpg", blurhash: "LC5H+0t,NfOtuPrBxCS%+EtRRkNe" },
    { src: "scaleTheDepths4.jpg", blurhash: "LaNwD:IU?wNGM{RjV@WC.8t7IAWB" },
    { src: "scaleTheDepths5.jpg", blurhash: "LaNwD:IU?wNGM{RjV@WC.8t7IAWB" },
    { src: "scaleTheDepths6.jpg", blurhash: "LcIaDlIpXA={u6X9IpsSD%kCI;Rk" },
  ],
  // youtubeEmbed: "",
  mainStack:[
    IconSkills.UNITY,
    IconSkills.CSHARP,
  ],
  extendedStack:[
    IconSkills.PLASTIC_SCM,
    IconSkills.TEAM_COLLABORATION,
  ],
  externalLinks: [
    { name: "Play", link: "https://serpexnessie.itch.io/scale-the-depths", icon: IconSkills.ITCHIO.icon },
  ],
};
