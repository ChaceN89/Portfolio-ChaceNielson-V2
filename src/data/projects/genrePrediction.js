import { BsGithub, BsFileEarmarkPdf } from "react-icons/bs";

const short = "Music genre prediction using machine learning.";
const long = (
  <div className='space-y-2'>
    <p>
      This project involves predicting music genres using machine learning techniques. It is built with Apache Spark, Python, and Jupyter notebooks.
    </p>
    <p>
      The project includes data analysis, feature extraction, and model training to achieve accurate genre predictions. It leverages various machine learning algorithms and big data processing capabilities of Apache Spark.
    </p>
    <p>
      The system provides an interactive Jupyter notebook for experimenting with different models and techniques.
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
    { src: "genrePrediction1.jpg", blurhash: "" },
    { src: "genrePrediction2.jpg", blurhash: "" },
  ],
  techStack: [
    "Apache Spark",
    "Python",
    "Jupyter",
    "Machine Learning"
  ],
  externalLinks: [
    { name: "Genre Analysis", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/MusicGenrePrediction/ENSF_544_Final_Project.ipynb", icon: BsGithub },
    { name: "Spark", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/SparkSentimentAnalysis/SparkSentimentMLAnalysis.ipynb", icon: BsGithub },
    { name: "Report", pdf: "Spark ML Genre Report.pdf", icon: BsFileEarmarkPdf },
  ],
};
