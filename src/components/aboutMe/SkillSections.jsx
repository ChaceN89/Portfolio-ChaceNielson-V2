import React from 'react'

function SkillSections({techSkills}) {

  const size = 40;

  return (
    <div className="skills-section">
    <h2>Technical Skills</h2>
    {techSkills.map((skill, index) => (
      <div key={index} className="skill-category">
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
        <div className="flex space-x-1">
          {skill.topSkills.map((topSkill, idx) => (
            <div>
              {topSkill.icon ?
                <topSkill.icon size={size} color={topSkill.color} />
                : 
                <img width={size} height={size} src={process.env.PUBLIC_URL + "/svg-icons/"+ topSkill.SVG_path} alt={topSkill.name} />
              }
            </div>
          ))} 

        </div>
        <div className="extra-skills">
          {skill.extraSkills.join(", ")}
        </div>
        <hr className='border-dashed h-2 border-4 bg-pink-100 mb-4'/>
        </div>
    ))}
  </div>
  )
}

export default SkillSections