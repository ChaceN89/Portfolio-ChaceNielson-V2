/**
 * @file musicPlayer.js
 * @module musicPlayer
 * @desc Contains data for the Music Player project.
 * 
 * @name Music Player
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "A music player application built with Vue and Tailwind.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This is a music player application built using Vue.js and Tailwind CSS. The application allows users to play and manage their music collections.
    </p>
    <p>
      It features a clean and responsive UI, providing a seamless user experience for music playback. The application is deployed using Vercel.
    </p>
    <p>
      The project showcases the integration of modern web technologies to build a functional and visually appealing music player.
    </p>
  </div>
);

export const musicPlayer = {
  starred: true,
  id: "music-player",
  name: "Music Player",
  tag: "UI/UX",
  blurb: short,
  description: long,
  images: [
    { src: "musicPlayer.jpg", blurhash: "LADl{3~pIV00ROxvt7MxD*00xv?b" },
    { src: "musicPlayer1.jpg", blurhash: "LKMQ;at1-;-=t6IUof%2_4%NM{IT" },
    { src: "musicPlayer2.jpg", blurhash: "LANm]1_M?brt-;D*js%L~W%3RjD%" },
  ],
  mainStack: [
    IconSkills.VUE,
    IconSkills.TAILWINDCSS,
  ],
  extendedStack: [
    IconSkills.VERCEL,
  ],
  externalLinks: [
    { name: "Website", link: "https://music-player-chace-nielsons-projects.vercel.app/", icon: IconSkills.MUSIC.icon },
    { name: "Code", link: "https://github.com/ChaceN89/music-player", icon: IconSkills.GITHUB.icon },
  ],
};
