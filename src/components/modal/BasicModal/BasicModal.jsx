import React from 'react';

import './Modal.css';

function BasicModal(props) {
  return (
    <div className="modal" onClick={() => (props.onClose ? props.onClose() : '')}>
      <div className="modal_content custom-scroll" onClick={(event) => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}

export default BasicModal;
