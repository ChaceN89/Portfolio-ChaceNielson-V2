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
        <Link className='hover:text-accent' to="/skills/Backend">Open Backend Skills</Link>
        <Link className='hover:text-accent' to="/skills/WebDesign">Open WebDesign Skills</Link>
        <Link className='hover:text-accent' to="/project/GeoPredict">Open GeoPredict Poject</Link>
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
    <AnimatedWrapper>


    <BackgroundWrapper 
      className='space-x-4 h-screen'
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w5-trim.png"}
      bgOpacity={75}
    >
      <div className='flex space-x-3'>
        
        <h1>Photo Page</h1>
        <Link className='hover:text-accent' to="/project/Project222">Open Project222 Poject</Link>
      
      </div>
      <Link className='hover:text-accent' to="/">Open Home</Link>
    </BackgroundWrapper>
    </AnimatedWrapper>

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

const ModalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else if (location.state?.backgroundLocation) {
      navigate(location.state.backgroundLocation.pathname);
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
            <Outlet />  {/* Modal content outlet */}
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
      <header className='flex space-x-3'>
        <Link className='hover:text-accent p-4 border-2 border-white rounded-2xl hover:bg-white' to="/photos">Open Photos</Link>
        <Link className='hover:text-accent p-4 border-2 border-white rounded-2xl hover:bg-white' to="/thanks">Open Thanks</Link>
        <Link className='hover:text-accent p-4 border-2 border-white rounded-2xl hover:bg-white' to="/">Open Home</Link>
      </header>
      <main className="pt-14">
        <Outlet />
      </main>
      <footer><h1>footer</h1></footer>
    </div>
  );
};

// App Component
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<SlideTransition><HomePage /></SlideTransition>} />
          <Route path="/photos" element={<SlideTransition><PhotoPage /></SlideTransition>} />
          <Route path="/thanks" element={<SlideTransition><ThanksPage /></SlideTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
          
          {/* Modal Routes */}
          <Route path="skills" element={<ModalLayout />}>
            <Route path=":id" element={<SkillsModal />} />
          </Route>
          <Route path="project" element={<ModalLayout />}>
            <Route path=":id" element={<ProjectModal />} />
          </Route>
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
