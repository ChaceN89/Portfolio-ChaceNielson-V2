/**
 * @file LazyLoadContainer.js
 * @module LazyLoadContainer
 * @desc React component for lazy loading content using the `react-lazy-load` library. 
 * This component acts as a container for other components, ensuring they load only when they come into the viewport.
 * 
 * @component LazyLoadContainer
 * 
 * @requires react
 * @requires react-lazy-load
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://github.com/jasonslyvia/react-lazyload|React Lazy Load Documentation}
 * 
 * @param {Object} children - The child components to be lazy loaded.
 * 
 * @returns {JSX.Element} The rendered LazyLoadContainer component.
 * 
 * @author [Your Name]
 * @created [Current Date]
 * @updated [Current Date]
 */

import React from 'react';
import LazyLoad from 'react-lazy-load';

const LazyLoadContainer = ({ children }) => {
  return (
    <LazyLoad>
      {children}
    </LazyLoad>
  );
};

export default LazyLoadContainer;
