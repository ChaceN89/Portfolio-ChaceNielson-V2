import React from 'react';

// Import BrowserRouter as Router
import { BrowserRouter as Router} from 'react-router-dom';

// Import App.css for styling
import './App.css';

// Import AppRoutes for routing and aniamtions
import AppRoutes from './routing/AppRoutes';


// Export App wrapped in Router
const AppWithRouter = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default AppWithRouter;
