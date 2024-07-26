import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import './App.css';

import { Outlet } from 'react-router-dom';

import ModalTransition from './routing/ModalTransition';
import SlideTransition from './routing/SlideTransition';

import { Link } from 'react-router-dom';

// HomePage Component
const HomePage = () => {
  return (
    <div className='space-x-4'>
      <div className='flex space-x-3'>
        <h1>Home Page</h1>
        <a className='hover:text-accent' href="/skills/Backend">Open Backend Skills</a>
        <a className='hover:text-accent' href="/skills/WebDesign">Open WebDev Skills</a>
        <a className='hover:text-accent' href="/project/GeoPredict">Open GeoPredict</a>
      </div>

      <Link className='hover:text-accent' to="/photos">Open Photos</Link>
      <Link className='hover:text-accent' to="/thanks">Open Thanks</Link>

    </div>
  );
};

const PhotoPage = () => {
  return (
    <div className='space-x-4'>
      <div className='flex space-x-3'>
        
        <h1>Photo Page</h1>
        <a className='hover:text-accent' href="/project/VoiceRecognition">Open VoiceRecognition</a>
        <a className='hover:text-accent' href="/project/GeoPredict">Open GeoPredict</a>
      
      </div>
      <Link className='hover:text-accent' to="/">Open Home</Link>
    </div>
  );
};

const ThanksPage = () => {
  return (
    <div className='space-x-4'>
      <h1>Thanks Page</h1>
      <Link className='hover:text-accent' to="/">Open Home</Link>

    </div>
  );
};

const ProjectModal = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Project: {id}</h1>
    </div>
  );
};

const SkillsModal = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Skills: {id}</h1>
    </div>
  );
};

// ModalPage Component
const ModalLayout = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
      <div
        className="modal"
        onClick={closeModal}
      >
    <ModalTransition>

        <div className="modal-content text-black" onClick={(e) => e.stopPropagation()}>
          <Outlet />
          <button onClick={closeModal}>Close Modal</button>
        </div>
    </ModalTransition>
      </div>
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
        <Route path="/" element={<Layout />}>
          <Route index element={<SlideTransition><HomePage /></SlideTransition>} />
          <Route path="/photos" element={<SlideTransition><PhotoPage /></SlideTransition>} />
          <Route path="/thanks" element={<SlideTransition><ThanksPage /></SlideTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>

        <Route path="/" element={<ModalLayout />}>
          <Route path="/skills/:id" element={<SkillsModal />} />
          <Route path="/project/:id" element={<ProjectModal />} />
        </Route>
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
