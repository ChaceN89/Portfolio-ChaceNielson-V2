/**
 * @file engineering.js
 * @module engineering
 * @desc Contains data for the Engineering skills section.
 * 
 * @name Engineering
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

export const engineering = { 
  // Engineering
  id: "engineering",
  name: "Engineering", 
  linkName: "My Engineering Background", 
  description: (
    <span>
      I have a degree in Software Engineering from the University of Calgary.
    </span>
  ),
  topSkills: [
    IconSkills.GIT,
    IconSkills.GITHUB,
    IconSkills.JAVA,
    IconSkills.CPP,
  ],
  minorSkills: [
    IconSkills.JUPYTER,
    IconSkills.HADOOP,
    IconSkills.APACHE_SPARK,
    IconSkills.VS_CODE,
    IconSkills.CI_CD,
    IconSkills.DESIGN_PRINTING,
    IconSkills.DATA_ANALYSIS,
  ],
};
