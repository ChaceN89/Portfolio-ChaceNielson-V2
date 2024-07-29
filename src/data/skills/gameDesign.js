/**
 * @file gameDesign.js
 * @module gameDesign
 * @desc Contains data for the Game Design skills section.
 * 
 * @name Game Design
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import IconSkills from "../iconSkills";

export const gameDesign = { 
  // Game Design 
  id: "game-design",
  name: "Game Design", 
  linkName: "See More Game Design", 
  description: (
    <span>
      Game design is a personal passion that complements my technical skills. I enjoy creating immersive and interactive experiences.
    </span>
  ),
  topSkills: [
    IconSkills.UNITY,
    IconSkills.BLENDER,
    IconSkills.CSHARP,
    IconSkills.ANIMATION,
  ],
  minorSkills: [
    IconSkills.GAME_DEVELOPMENT,
    IconSkills.ANIMATION,
    IconSkills.UNITY_PHYSICS,
  ],
};
