import React from 'react';
import MyRoutes from './routing/MyRoutes';
import AnalyticsTracker from './googleAnalytics/AnalyticsTracker';
import TailwindBreakPoints from './testingComponents/TailwindBreakPoints';
import { BrowserRouter as Router } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { initializeGA } from "./googleAnalytics/analytics";
import ScrollToTop from './routing/ScrollToTop';

// Initialize EmailJS with the user ID from environment variables and Initialize Google Analytics
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
initializeGA();

function App() {
  return (
    <Router>
      <TailwindBreakPoints />
      <ScrollToTop/>
      <AnalyticsTracker />
      <MyRoutes />
    </Router>
  );
}

export default App;
