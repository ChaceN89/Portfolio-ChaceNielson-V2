import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const location = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    // Only update previous location if it's not a modal
    if (!location.state?.isModal) {
      previousLocation.current = location;
    }
  }, [location]);

  return (
    <LocationContext.Provider value={previousLocation.current}>
      {children}
    </LocationContext.Provider>
  );
};

export const usePreviousLocation = () => {
  return useContext(LocationContext);
};
