/**
 * @file VideoComponent.jsx
 * @module VideoComponent
 * @desc React component for displaying a video element with a Blurhash placeholder.
 * The video auto-plays, loops, and is muted by default, with inline playback controls.
 * 
 * @component VideoComponent
 * 
 * @requires react
 * @requires react-blurhash
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://github.com/woltapp/react-blurhash|React Blurhash Documentation}
 * 
 * @param {string} className - The class name for the video element.
 * @param {string} src - The source URL of the video.
 * @param {string} blurHash - The Blurhash string for the video placeholder.
 * 
 * @returns {JSX.Element} The rendered VideoComponent.
 * 
 * @author [Chace Nielson]
 * @created 2024-07-14
 * @updated 2024-07-14
 */

import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';

const VideoComponent = ({ className, src, blurHash = 'L%O:@Sj[~qj[%Mj[offQt7fQIUay' }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!videoLoaded && (
        <Blurhash
          hash={blurHash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
      <video
        onCanPlay={() => setVideoLoaded(true)}
        className={`${className} ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 w-full h-full object-cover`}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload nofullscreen noremoteplayback"
      />
    </div>
  );
};

export default VideoComponent;
