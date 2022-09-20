import React from 'react';
import { createPortal } from 'react-dom';
import styles from './baseFullScreenModal.module.css';
import CloseIcon from '@mui/icons-material/Close';

function BaseFullScreenModal({ isOpen, closeModal, children }) {
  return createPortal(
    <div className={styles['modal']} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className={styles['modal-header']}>
        <div className={styles['close-button']} onClick={closeModal}>
          <CloseIcon />
        </div>
      </div>
      {children}
    </div>,
    document.getElementById('root-modal')
  );
}

export default BaseFullScreenModal;
