/**
 * @file ImageComponent.jsx
 * @module ImageComponent
 * @desc React component for displaying an image with optional error handling and a Blurhash placeholder.
 * The image source and alternative text can be customized, and an error handler can be provided.
 * 
 * @component ImageComponent
 * 
 * @requires react
 * @requires react-blurhash
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://github.com/woltapp/react-blurhash|React Blurhash Documentation}
 * 
 * @param {string} className - The class name for the image element.
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {function} onError - Optional error handler function for the image element.
 * @param {string} blurHash - The Blurhash string for the image placeholder.
 * @param {boolean} useBlurhash - Flag to control whether Blurhash is used. Defaults to true.
 * 
 * @returns {JSX.Element} The rendered ImageComponent.
 * 
 * @author [Chace Nielson]
 * @created 2024-07-14
 * @updated 2024-07-14
 */

import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageComponent = ({ src, alt, className, onError = null, blurHash='L%O:@Sj[~qj[%Mj[offQt7fQIUay' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);
  
  return (
    <>
      {!imageLoaded  && (
        <Blurhash
        hash={blurHash}
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
        />
      )}
      <img 
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        className={`${className} w-full h-full object-cover`}
        src={src} 
        alt={alt} 
        onError={onError} 
      />
    </>
  );
};

export default ImageComponent;
