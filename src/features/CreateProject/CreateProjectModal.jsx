import React from 'react';
import BaseFullScreenModal from '../../components/modal/BaseFullScreenModal/BaseFullScreenModal';

function CreateProjectModal({ isOpen, closeModal }) {
  return (
    <BaseFullScreenModal isOpen={isOpen} closeModal={closeModal}>
      <div>
        <h1>Hi im Create project modal</h1>
      </div>
    </BaseFullScreenModal>
  );
}

export default CreateProjectModal;
