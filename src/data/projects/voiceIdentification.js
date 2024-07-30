/**
 * @file voiceIdentification.js
 * @module voiceIdentification
 * @desc Contains data for the Voice Identification project.
 * 
 * @name Voice Identification
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Voice identification user interface using machine learning.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project entails developing a voice identification system using machine learning algorithms to recognize and verify individuals by their voice. Built with Python and Plotly-Dash, the system processes voice recordings, extracting features for analysis. It includes a comprehensive Jupyter notebook for data analysis and model training, leveraging various machine learning techniques to achieve high accuracy in voice recognition. Mainly Gaussian Mixture Models (GMM) and Convolutional Neural Networks (CNN) are used for voice identification.
    </p>
    <p>
      The user-friendly system features a web interface for uploading and analyzing voice samples, making it accessible for practical use. The integration of advanced machine learning methods ensures reliable and efficient voice identification, demonstrating the potential of combining Python's capabilities with intuitive data visualization tools.
    </p>
  </div>
);

export const voiceIdentification = {
  starred: true,
  id: "voice-identification",
  name: "Voice Identification",
  tag: "Machine Learning",
  blurb: short,
  description: long,
  images: [
    { src: "voice_recognition1.jpg", blurhash: "L6PjDVxa00xu00of_4RP9FRj-;of" },
    { src: "voice_recognition4.jpg", blurhash: "L5S?7G$x*IJF.lXSDixB.7IpVZ%K" },
    { src: "voice_recognition2.jpg", blurhash: "L3ODnIt600xu00R+~WWC00V@a#s." },
    { src: "voice_recognition3.jpg", blurhash: "L5PjGc%200fT00of~qi_00Rj?bof" },
    { src: "voice_recognition5.jpg", blurhash: "L3PQ87RjoeM{_2WB_4Rj00xu-:xu" },
  ],
  mainStack: [
    IconSkills.PLOTLY_DASH,
    IconSkills.PYTHON,
    IconSkills.MACHINE_LEARNING,
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/voice-recognition", icon: IconSkills.GITHUB.icon },
    { name: "Notebook", link: "https://github.com/ChaceN89/voice-recognition/blob/main/original_notebook/ENCM%20Final%20Project%20Speech%20Recognition.ipynb", icon: IconSkills.GITHUB.icon },
    { name: "Report", pdf: "Voice ID Report.pdf", icon: IconSkills.PDF.icon },
  ],
};
