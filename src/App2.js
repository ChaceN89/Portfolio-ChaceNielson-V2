import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// HomePage Component
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <a href="/modal">Open Modal</a>
    </div>
  );
};

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

// App Component
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<HomePage />} />
        <Route path="/modal" element={<ModalPage />} />
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
