// page components 
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ContactThanks from './pages/ContactThanks';

// other components
import AnalyticsTracker from './googleAnalytics/AnalyticsTracker';

// testing Components 
import TailwindBreakPoints from './testingComponents/TailwindBreakPoints';

// Library functions
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// email js and google analytics 
import emailjs from 'emailjs-com';
import { initializeGA } from "./googleAnalytics/analytics";

// Initialize EmailJS with the user ID from environment variables and // Initialize Google Analytics
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
initializeGA();

// LocationProvider Component to wrap children with AnimatePresence
function LocationProvider({ children }) {
  return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
}

// Define animation variants for route transitions with fade-in and fade-out
const routeVariants = {
  initial: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};

// PageWrapper Component for route animations
function AnimationWrapper({ children }) {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

// RoutesWithAnimation Component to handle route animations
function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<AnimationWrapper><Home /></AnimationWrapper>} />
      <Route path="/Gallery" element={<AnimationWrapper><Gallery /></AnimationWrapper>} />
      <Route path="/Thanks" element={<AnimationWrapper><ContactThanks /></AnimationWrapper>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// main return for the application 
function App() {
  return (
    <Router >
      <TailwindBreakPoints/>
      <AnalyticsTracker/>
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </Router>
  );
}

export default App;
