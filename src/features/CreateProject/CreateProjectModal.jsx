import React from 'react';
import BaseFullScreenModal from '../../components/modal/BaseFullScreenModal/BaseFullScreenModal';
import CreateProjectForm from './components/CreateProjectForm/CreateProjectForm';
import styles from './createProjectModal.module.css';
function CreateProjectModal({ isOpen, closeModal }) {
  return (
    <BaseFullScreenModal isOpen={isOpen} closeModal={closeModal}>
      <div className={styles['modal-container']}>
        <CreateProjectForm onProjectCreated={() => closeModal()} />
      </div>
    </BaseFullScreenModal>
  );
}

export default CreateProjectModal;
