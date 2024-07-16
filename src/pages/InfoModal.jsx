import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const InfoModal = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
    >
      <div className='border p-4 bg-white text-black rounded'>
        <h2>Type: {type} | ID: {id}</h2>
        <div>will fetch infomation depending on the type and ID in order wo show many different thing</div>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </motion.div>
  );
};

export default InfoModal;
