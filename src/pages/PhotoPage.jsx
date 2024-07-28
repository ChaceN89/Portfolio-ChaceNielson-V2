import React from 'react';
import BackgroundWrapper from "../wrappers/BackgroundWrapper";
import GalleryPhotos from '../components/photoGallery/GalleryPhotos';

const PhotoPage = () => {
  return (
    <BackgroundWrapper
      className="min-h-screen"
      src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-1.png"}
      backgroundRepeat = "repeat"
      backgroundAttachment="scroll"
    >
      <GalleryPhotos />
    </BackgroundWrapper>
  );
};

export default PhotoPage;
