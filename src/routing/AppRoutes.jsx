/**
 * @file AppRoutes.jsx
 * @module AppRoutes
 * @desc React component for handling application routes with animated page transitions and modal routes.
 * This component utilizes `framer-motion`'s `AnimatePresence` for animating page transitions and a custom `SlideTransition` component for slide animations.
 * It includes routes for different pages and a modal section that uses a special layout to mimic a modal appearance.
 * The modal itself isn't animated within this file but within its own component.
 *
 * @note The `AnimatePresence` component ensures that only one page is visible at a time, enhancing the user experience with smooth transitions.
 * @note The modals are separate pages with unique properties, each rendered within a `ModalLayout`.
 *
 * @component AppRoutes
 * 
 * @requires react
 * @requires react-router-dom
 * @requires framer-motion
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @returns {JSX.Element} The routes for the application with animations and modal support.
 * 
 * @example
 * // Example usage of AppRoutes in a main component
 * import React from 'react';
 * import { BrowserRouter as Router } from 'react-router-dom';
 * import AppRoutes from './routing/AppRoutes';
 * 
 * const AppWithRouter = () => (
 *   <Router>
 *     <AppRoutes />
 *   </Router>
 * );
 * 
 * export default AppWithRouter;
 * 
 * @exports AppRoutes
 * 
 * @autor Chace Nielson
 * @created 2024-07-26
 * @updated 2024-07-26
 */

import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// animations
import SlideTransition from "./SlideTransition";

// layouts
import Layout from "./Layout";
import ModalLayout from "./ModalLayout";

// pages
import HomePage from "../pages/HomePage";
import PhotoPage from "../pages/PhotoPage";
import ThanksPage from "../pages/ThanksPage";

// modals
import SkillsModal from "../pages/SkillsModal";
import ProjectModal from "../pages/ProjectModal";

// App Component
const AppRoutes = () => {
  const location = useLocation();

  return (
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/photos" element={<SlideTransition><PhotoPage /></SlideTransition>} />
          <Route path="/thanks" element={<SlideTransition><ThanksPage /></SlideTransition>} /> 

          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          
          {/* Modal Routes */}
          <Route path="" element={<ModalLayout />}>
            <Route path="skills/:id" element={<SkillsModal />} />
            <Route path="project/:id" element={<ProjectModal />} />
          </Route>

        </Route>
      </Routes>
  );
};

export default AppRoutes;
