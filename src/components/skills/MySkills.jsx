import React from 'react'
import { FaReact, FaUnity } from 'react-icons/fa'
import Skill from './Skill'

function MySkills() {
  return (
    <section className='section-wrapper  border-2 border-white p-4 ' >
      <div className=' flex w-full justify-center gap-4'>

        <Skill label={"ReactJS"} icon={<FaReact color={"lightblue"} size={65}/>} />
        <Skill starred={true} label={"Python"} SVG_path={"python.svg"} />
        <Skill label={"Unity"}  icon={<FaUnity size={65} />} />

      </div>
      <dir>Other Skils - possibly divided by sections (ML, Design, etc)</dir>
      <div>
        Python, ReactJS, Django, Flask, HTML, CSS, JavaScript, C++, Java, SQL, Git, Docker, Kubernetes, AWS, Azure, GCP, Linux, Windows, MacOS, Android, iOS, Unity, Unreal Engine, Blender, Photoshop, Illustrator, Figma, Sketch, Adobe XD, InVision, Zeplin, Jira, Confluence, Trello, Slack, Discord, Zoom, Microsoft Teams, Google Meet, WebEx, Skype, WhatsApp, Signal, Telegram, Facebook, Twitter, Instagram, LinkedIn, YouTube, TikTok, Snapchat, Pinterest, Reddit, Twitch, Spotify, Apple Music, Google Play Music, Amazon Music, SoundCloud, Bandcamp, Audacity, GarageBand, Logic Pro, Pro Tools, Ableton Live, FL Studio, Cubase, Studio One, Reaper, Reason, Bitwig Studio, Cakewalk, Mixcraft, Audition, Premiere Pro, Final Cut Pro, DaVinci Resolve, After Effects, Motion, Nuke, Fusion, HitFilm, Blender, Maya, 3ds Max, Cinema 4D, Houdini, ZBrush, Substance Painter, Substance Designer, Quixel Mixer, Quixel Bridge
      </div>
    </section>
  )
}

export default MySkills