import React from "react";

function ModalFooter({
  saveNewCategory,
  isEdit,
  selectedCategory,
  handleDeleteCategory,
  handleUpdateCategory,
}) {
  return (
    <div className="modal-footer">
      {isEdit && (
        <button
          className="save-button"
          onClick={() => handleUpdateCategory(selectedCategory.id)}
        >
          Update
        </button>
      )}
      {!isEdit && (
        <button className="save-button" onClick={saveNewCategory}>
          Save
        </button>
      )}
      {isEdit && (
        <button onClick={() => handleDeleteCategory(selectedCategory.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default ModalFooter;
