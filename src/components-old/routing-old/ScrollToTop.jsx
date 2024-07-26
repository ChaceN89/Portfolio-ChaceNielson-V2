/**
 * @file ScrollToTop.js
 * @module ScrollToTop
 * @desc Component to set the scroll position to the top of the page.
 * Uses a useEffect hook and is placed in the App.js page as <ScrollToTop />.
 * The component only has a useEffect call that is activated when the router changes.
 * Will cause all pages to scroll to the top when navigating to a new page.
 * 
 * @requires react
 * @requires react-router-dom
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @author Chace Nielson
 * @created 2022-10-27
 * @updated 2022-10-27
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // get the current location of Router

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, [pathname]); // activated when pathname changes

  return null; // nothing to return in this function, it's just the useEffect
}
