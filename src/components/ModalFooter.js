import React from "react";

function ModalFooter({ saveNewCategory, isEdit, selectedCategory, handleDeleteCategory }) {
  return (
    <div className="modal-footer">
      <button className="save-button" onClick={saveNewCategory}>
        Save
      </button>
      {isEdit && <button onClick={() => handleDeleteCategory(selectedCategory.id)}>Delete</button>}
    </div>
  );
}

export default ModalFooter;
