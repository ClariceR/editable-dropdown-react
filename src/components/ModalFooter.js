import React from "react";

function ModalFooter({ saveNewCategory, isEdit }) {
  return (
    <div className="modal-footer">
      <button className="save-button" onClick={saveNewCategory}>
        Save
      </button>
      {isEdit && <button>Delete</button>}
    </div>
  );
}

export default ModalFooter;
