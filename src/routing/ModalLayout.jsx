/**
 * @file ModalLayout.jsx
 * @module ModalLayout
 * @desc A React component for displaying content in a modal with transitions and background overlay.
 * The modal can be closed by clicking the close button, clicking outside the modal content, or pressing the Escape key.
 * 
 * @requires react
 * @requires react-router-dom
 * @requires FadeTransition from '../animations/FadeTransition'
 * @requires BackgroundWrapper from '../wrappers/BackgroundWrapper'
 * @requires SlideTransition from '../animations/SlideTransition'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/web/guides/quick-start | React Router Documentation}
 * 
 * @example
 * // Example usage of ModalLayout
 * import ModalLayout from './ModalLayout';
 * 
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/modal" element={<ModalLayout />}>
 *           <Route path="content" element={<ModalContent />} />
 *         </Route>
 *       </Routes>
 *     </Router>
 *   );
 * }
 * 
 * @exports ModalLayout
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useCallback } from "react";
import FadeTransition from "../animations/FadeTransition";
import BackgroundWrapper from "../wrappers/BackgroundWrapper";
import SlideTransition from "../animations/SlideTransition";

const ModalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = useCallback(() => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else if (location.state?.backgroundLocation) {
      navigate(location.state.backgroundLocation.pathname);
    } else {
      navigate('/');
    }
  }, [navigate, location.state?.backgroundLocation]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <FadeTransition>
      <BackgroundWrapper
        className="modal"
        onClick={closeModal}
        src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w2-trim.png"}
        bgOpacity={80}
      >
        <SlideTransition enter='right' exit='right' translationDist={400}>
          <div className="modal-content text-black mx-20" onClick={(e) => e.stopPropagation()}>
            <Outlet />
            <button className="bg-primary border-2 border-primary text-secondary hover:text-primary hover:bg-secondary rounded-2xl p-2.5" onClick={closeModal}>
              Close Modal
            </button>
          </div>
        </SlideTransition>
      </BackgroundWrapper>
    </FadeTransition>
  );
};

export default ModalLayout;
