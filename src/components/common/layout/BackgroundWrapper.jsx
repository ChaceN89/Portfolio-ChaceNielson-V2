import React, { useState, useEffect } from 'react';

function BackgroundWrapper({
  id = '', // id for the element
  className = '', // additional classes
  src = '', // path to the background image
  ref=null, // reference to the element
  lowResSrc = '', // path to the low resolution background image
  backgroundSize = "cover", // options are auto, cover, contain, initial, inherit
  backgroundPosition = "center", // options are center, top, right, bottom, left, top right, top left, bottom right, bottom left, initial, inherit
  backgroundRepeat = "no-repeat", // options are repeat, no-repeat, repeat-x, repeat-y, initial, inherit
  backgroundAttachment = "fixed", // options are fixed, scroll, local, initial, inherit
  scale = 1, // scale factor for the background image
  bgOpacity = "100", // opacity of the background image (uses tailwind so it should be a number between 0 and 100  by multiples of 5)
  children // child elements to be rendered inside the wrapper
}) {
  const [highResLoaded, setHighResLoaded] = useState(false);

  useEffect(() => {
    const highResImg = new Image();
    highResImg.src = src;
    highResImg.onload = () => setHighResLoaded(true);
  }, [src]);

  const scaledBackgroundSize = `${100 * scale}%`;

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} relative`}
      style={{
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundAttachment: backgroundAttachment,
      }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full ${highResLoaded ? 'hidden' :`visible opacity-${bgOpacity}` }`}
        style={{
          backgroundImage: `url(${lowResSrc})`,
          backgroundSize: scaledBackgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: backgroundRepeat,
          backgroundAttachment: backgroundAttachment,
        }}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${highResLoaded ? `opacity-${bgOpacity}` : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: scaledBackgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: backgroundRepeat,
          backgroundAttachment: backgroundAttachment,
        }}
      />
      {children}
    </div>
  );
}

export default BackgroundWrapper;
