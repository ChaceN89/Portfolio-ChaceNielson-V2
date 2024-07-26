import React from 'react';

// Import BrowserRouter as Router
import { BrowserRouter as Router} from 'react-router-dom';



// Import AppRoutes for routing and aniamtions
import AppRoutes from './routing/AppRoutes';

// impot Styles
import './styles/Layout.css'
import './styles/Modal.css'

// Export App wrapped in Router
const AppWithRouter = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default AppWithRouter;
