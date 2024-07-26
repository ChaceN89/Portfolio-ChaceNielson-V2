import { BsGithub, BsFileEarmarkPdf } from "react-icons/bs";

const short = "Voice identification system using machine learning.";
const long = (
  <div className='space-y-2'>
    <p>
      This project involves the development of a voice identification system that uses machine learning algorithms to recognize and verify individuals based on their voice. Built using Python and Plotly-Dash, the system processes voice recordings and extracts features for analysis.
    </p>
    <p>
      The project includes a comprehensive Jupyter notebook for data analysis and model training. It leverages various machine learning techniques to achieve high accuracy in voice recognition.
    </p>
    <p>
      The system is designed to be user-friendly, with a web interface for uploading and analyzing voice samples.
    </p>
  </div>
);

export const voiceIdentification = {
  starred: true,
  id: "voice-identification",
  name: "Voice Identification",
  tag: "Machine Learning",
  Blurb: short,
  description: long,
  blurhash: "qD9%h%tkNYo|WAofM{oeD$t7xubGt7RjWCRi_4V@M{jZRiogjZt7xVa}WYj[a}j[j[oJtSaeV@bFoJoffkkC^*flNHoMRkoeWBoe",
  images: [
    { src: "voice_recognition1.jpg", blurhash: "q7Egm_t7Rit8~pt6Rjt7j@ofayoea{oft7jZofofRjjs-;ozayj[ayayj[j[ogj[j[WBayayjt7aya}ofayayjt7ayj[ayayj[og" },
    { src: "voice_recognition2.jpg", blurhash: "q3Hj-|M_t7t8~pt6Rjt7j@ofayoea{oft7jZofofRjjs-;ozayj[ayayj[j[ogj[j[WBayayjt7aya}ofayayjt7ayj[ayayj[og" },
  ],
  techStack: [
    "Ploty-Dash",
    "Python",
    "CSS",
    "Machine Learning"
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/voice-recognition", icon: BsGithub },
    { name: "Notebook", link: "https://github.com/ChaceN89/voice-recognition/blob/main/original_notebook/ENCM%20Final%20Project%20Speech%20Recognition.ipynb", icon: BsGithub },
    { name: "Report", pdf: "Voice ID Report.pdf", icon: BsFileEarmarkPdf },
  ],
};
