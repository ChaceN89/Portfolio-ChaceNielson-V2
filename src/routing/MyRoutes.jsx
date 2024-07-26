import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Photos from '../pages/Photos';
import ContactThanks from '../pages/ContactThanks';
import Layout from './Layout';
import ModalLayout from './ModalLayout';
import SlideTransition from './SlideTransition';
import ModalTransition from './ModalTransition';

import ProjectModal from '../pages/ProjectModal';
import SkillsModal from '../pages/SkillsModal';

const MyRoutes = () => {
  const location = useLocation();
  const state = location.state;
  const background = state && state.previousLocation;

  console.log("state", state);
  console.log("location", location);
  console.log("background", background);

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<SlideTransition><Home /></SlideTransition>} />
          <Route path="photos" element={<SlideTransition><Photos /></SlideTransition>} />
          <Route path="thanks" element={<SlideTransition><ContactThanks /></SlideTransition>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      {/* Always render modal routes */}
      <Routes>
        <Route path="projects/:id" element={
          background ? (
            <ModalLayout>
              <ModalTransition><ProjectModal /></ModalTransition>
            </ModalLayout>
          ) : (
            <ModalTransition><ProjectModal /></ModalTransition>
          )
        } />
        <Route path="skills/:id" element={
          background ? (
            <ModalLayout>
              <ModalTransition><SkillsModal /></ModalTransition>
            </ModalLayout>
          ) : (
            <ModalTransition><SkillsModal /></ModalTransition>
          )
        } />
      </Routes>
    </>
  );
};

export default MyRoutes;
