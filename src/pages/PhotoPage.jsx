/**
 * @file PhotoPage.jsx
 * @module PhotoPage
 * @desc React component that serves as the photo gallery page. 
 * This component wraps the GalleryPhotos component with a BackgroundWrapper that repeats a background image.
 * 
 * @note This component is part of the photo gallery feature of the application.
 *
 * @component PhotoPage
 * 
 * @requires react
 * @requires BackgroundWrapper from '../wrappers/BackgroundWrapper'
 * @requires GalleryPhotos from '../components/photoGallery/GalleryPhotos'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * 
 * @param none
 * 
 * @returns {JSX.Element} The PhotoPage component with a background image and photo gallery.
 * 
 * @example
 * // Example usage of PhotoPage in a route
 * import PhotoPage from './pages/PhotoPage';
 * 
 * <Route path="/photos" component={PhotoPage} />
 * 
 * @exports PhotoPage
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import BackgroundWrapper from "../wrappers/BackgroundWrapper";
import GalleryPhotos from '../components/photoGallery/GalleryPhotos';
import FadeTransition from '../animations/FadeTransition';

const PhotoPage = () => {
  return (
    <FadeTransition>
      <BackgroundWrapper
        className="min-h-screen"
        src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-1.png"}
        backgroundRepeat="repeat"
        backgroundAttachment="scroll"
      >
        <GalleryPhotos />
      </BackgroundWrapper>
    </FadeTransition>
  );
};

export default PhotoPage;
