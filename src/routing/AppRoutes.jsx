import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// animatioms
import SlideTransition from "./SlideTransition";
import { AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<SlideTransition><HomePage /></SlideTransition>} />
          <Route path="/photos" element={<SlideTransition><PhotoPage /></SlideTransition>} />
          <Route path="/thanks" element={<SlideTransition><ThanksPage /></SlideTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
          
          {/* Modal Routes */}
          <Route path="" element={<ModalLayout />}>
            <Route path="skills/:id" element={<SkillsModal />} />
            <Route path="project/:id" element={<ProjectModal />} />
          </Route>

        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;