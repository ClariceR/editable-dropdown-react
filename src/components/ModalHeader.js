import React from 'react'

function ModalHeader({hide, isEdit}) {
    let title = "Add category";
    if (isEdit) {
        title = "Edit category"
    }
  return (
    <div className="modal-header">
      <h3>{title}</h3>
      <button className="modal-close-button" onClick={hide}>
        <span>&times;</span>
      </button>
    </div>
  );
}

export default ModalHeader