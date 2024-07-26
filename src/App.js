import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import { Outlet } from 'react-router-dom';

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <a href="/skills/Backend">Open Backend Skills</a>
      <a href="/skills/WebDesign">Open WebDev Skills</a>
      <a href="/project/GeoPredict">Open GeoPredict</a>

    </div>
  );
};

const PhotoPage = () => {
  return (
    <div>
      <h1>Photo Page</h1>
      <a href="/project/VoiceRecognition">Open VoiceRecognition</a>
      <a href="/project/GeoPredict">Open GeoPredict</a>
    </div>
  );
};

const ThanksPage = () => {
  return (
    <div>
      <h1>Thanks Page</h1>
      <a href="/modal">Open Modal</a>
    </div>
  );
};

const ProjectModal = () => {
  return (
    <div>
      <h1>ProjectModal</h1>
    </div>
  );
};


const SkillsModal = () => {
  return (
    <div>
      <h1>SkillsModal</h1>
    </div>
  );
}

// ModalPage Component
const ModalPage = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal"
      onClick={closeModal}
    >
      <div className="modal-content text-black" onClick={(e) => e.stopPropagation()}>
        <h1>Modal Content</h1>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </motion.div>
  );
};


const Layout = () => {
  return (
    <div className="layout">
      <header ><h1>Navbar</h1></header>
      <main className="pt-14">
        <Outlet />
      </main>
      <footer ><h1>footer</h1></footer>
    </div>
  );
};




// App Component
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* poplayout or sync for animations on pages */}
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/skills/:id" element={<ModalPage />} />
        <Route path="/project/:id" element={<ModalPage />} />
      </Routes>
    </AnimatePresence>
  );
};

// Export App wrapped in Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
