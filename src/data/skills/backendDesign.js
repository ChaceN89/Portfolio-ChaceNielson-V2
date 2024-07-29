/**
 * @file backendDesign.js
 * @module backendDesign
 * @desc Contains data for the Backend Design skills section.
 * 
 * @name Backend Design
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

export const backendDesign = { 
  id: "backend-design",
  name: "Backend Design", 
  linkName: "View More skills", 

  description: (
    <span>
      I have been designing backend applications for 2 years. My main backend stack includes Python, Express.js, FastAPI, and PostgreSQL.
    </span>
  ),
  topSkills: [
    IconSkills.PYTHON,
    IconSkills.EXPRESS_JS,
    IconSkills.FASTAPI,
    IconSkills.POSTGRESQL,
  ],
  minorSkills: [
    IconSkills.PLOTLY_DASH,
    IconSkills.STREAMLIT,
    IconSkills.DJANGO,
    IconSkills.MONGODB,
    IconSkills.MYSQL,
    IconSkills.SQLITE,
    IconSkills.DOCKER,
    IconSkills.REST_API,
  ],
};
