import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { recordGAPage } from './analytics';


// Component to track page views when the page changes after the first page load
function AnalyticsTracker() {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    } else {
      recordGAPage(location.pathname + location.search);
    }
  }, [location]);

  return null;
}


export default AnalyticsTracker;
