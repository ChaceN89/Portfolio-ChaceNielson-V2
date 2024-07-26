import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import './App.css';

import { Outlet } from 'react-router-dom';

import ModalTransition from './routing/ModalTransition';
import SlideTransition from './routing/SlideTransition';

import BackgroundWrapper from './components/common/layout/BackgroundWrapper';

import { Link } from 'react-router-dom';


const AnimatedWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// HomePage Component
const HomePage = () => {
  return (
    <BackgroundWrapper 
      className=' h-screen'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2.png"}
      bgOpacity={75}
    >
      <div className='flex space-x-3'>
        <h1>Home Page</h1>
        <a className='hover:text-accent' href="/skills/Backend">Open Backend Skills</a>
        <a className='hover:text-accent' href="/skills/WebDesign">Open WebDev Skills</a>
        <a className='hover:text-accent' href="/project/GeoPredict">Open GeoPredict</a>
      </div>

    <div className='space-x-4'>

      <Link className='hover:text-accent' to="/photos">Open Photos</Link>
      <Link className='hover:text-accent' to="/thanks">Open Thanks</Link>
    </div>

    </BackgroundWrapper>
  );
};

const PhotoPage = () => {
  return (
    <BackgroundWrapper 
      className='space-x-4 h-screen'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w5-trim.png"}
      bgOpacity={75}
    >
      <div className='flex space-x-3'>
        
        <h1>Photo Page</h1>
        <a className='hover:text-accent' href="/project/VoiceRecognition">Open VoiceRecognition</a>
        <a className='hover:text-accent' href="/project/GeoPredict">Open GeoPredict</a>
      
      </div>
      <Link className='hover:text-accent' to="/">Open Home</Link>
    </BackgroundWrapper>
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
  // console.log('history', window.history);
  const location = useLocation()
  // console.log('location', location);


  const closeModal = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <AnimatedWrapper>

      <BackgroundWrapper
        className="modal"
        onClick={closeModal}
        src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
        backgroundSize='contain'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundAttachment='fixed'
        bgOpacity={20}
      >
        <ModalTransition>
          <div className="modal-content text-black" onClick={(e) => e.stopPropagation()}>
            <Outlet />
            <button onClick={closeModal}>Close Modal</button>
          </div>
          </ModalTransition>
      </BackgroundWrapper>
    </AnimatedWrapper>
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
