import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // You can use any icon library of your choice
import ModalTransition from './ModalTransition';

const ModalLayout = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20"
      onClick={() => navigate(-1)}
    >
      <ModalTransition>

        {/* actual modal  */}
        <div
          className="relative bg-secondary p-8 rounded min-h-80 min-w-96"
          onClick={(e) => e.stopPropagation()}
          >
          <button
            className="absolute top-2 right-2 text-primary"
            onClick={() => navigate(-1)}
            >
            <AiOutlineClose size={24} />
          </button>
          <div className='text-red-900'>

            <Outlet />
          </div>
        </div>
      </ModalTransition>
    </div>
  );
};

export default ModalLayout;
