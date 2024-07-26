import { useLocation, useNavigate, Outlet } from "react-router-dom";
import AnimatedWrapper from "./AnimatedWrapper"

import BackgroundWrapper from "../wrappers/BackgroundWrapper"
import SlideTransition from "./SlideTransition";


const ModalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else if (location.state?.backgroundLocation) {
      navigate(location.state.backgroundLocation.pathname);
    } else {
      navigate('/');
    }
  };

  return (
    <AnimatedWrapper>
      <BackgroundWrapper
        className="modal"
        onClick={closeModal}
        src={process.env.PUBLIC_URL + "/png-backgrounds/overlays/scratch-2.png"}
        backgroundSize='contain'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundAttachment='fixed'
        bgOpacity={20}
      >
        <SlideTransition enter='right' exit='right' translationDist={400} >
          <div className="modal-content text-black" onClick={(e) => e.stopPropagation()}>
            <Outlet />  {/* Modal content outlet */}
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </SlideTransition>
      </BackgroundWrapper>
    </AnimatedWrapper>
  );
};

export default ModalLayout; 