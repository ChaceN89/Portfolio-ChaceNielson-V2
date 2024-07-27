import { BsGithub, BsFileEarmarkPdf } from "react-icons/bs";
import {SiApachespark, SiJupyter} from "react-icons/si";

const short = "Predicting music genres and creating recommendations using machine learning.";
const long = (
  <div className='space-y-2'>
    <p>
      This project uses machine learning to predict music genres and generate recommendations. Built with Apache Spark and Python, it involves data analysis, feature extraction, and model training. Leveraging the power of Apache Spark for big data processing, the project explores various machine learning algorithms to achieve accurate predictions.
    </p>
    <p>
      An interactive Jupyter notebook is provided for experimenting with different models and techniques. This setup allows users to test and refine their approaches in a flexible, hands-on environment.
    </p>
  </div>
);

export const genrePrediction = {
  id: "genre-prediction",
  name: "Genre Prediction",
  tag: "Machine Learning",
  blurb: short,
  description: long,
  blurhash: "",
  images: [
    { src: "genrePrediction.jpg", blurhash: "LIR{uws%#rkX.8bJX5ad_MW@Xknh" },
  ],  
  mainStack:[
    {name:"Apache Spark", icon:SiApachespark, color:"#E25A1B"},
    {name:"Python", svg_path:"python.svg"},
  ],
  extendedStack:[
    {name:"Jupyter", icon:SiJupyter, color:"#F37626"},
    {name:"Machine Learning", svg_path:"machine-learning.svg"},
  ],
  externalLinks: [
    { name: "Genre Analysis", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/MusicGenrePrediction/ENSF_544_Final_Project.ipynb", icon: BsGithub },
    { name: "Spark Database Setup", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/SparkSentimentAnalysis/SparkSentimentMLAnalysis.ipynb", icon: BsGithub },
  ],
  pdfs:[
    { name: "Report", link: "Spark ML Genre Report.pdf" },
  ]
};
