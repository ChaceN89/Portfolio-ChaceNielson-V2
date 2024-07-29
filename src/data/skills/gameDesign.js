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
  linkName: "Learn More", 
  description: (
    <span>
      While not my top skill, game design is a passion of mine. 
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
