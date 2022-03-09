import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditImage from './EditImage';

function EditImageModal({ state }) {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditImage state={state}/>
        </Modal>
      )}
    </>
  );



};

export default EditImageModal;