import React from "react";

function ModalFooter({
  saveNewCategory,
  isEdit,
  selectedCategory,
  handleDeleteCategory,
  handleUpdateCategory,
  handleCancelButton,
}) {
  return (
    <div className="modal-footer">
      {isEdit && (
        <button
          className="save-button"
          onClick={() => handleUpdateCategory(selectedCategory.id)}
        >
          Save
        </button>
      )}
      {!isEdit && (
        <button className="save-button" onClick={saveNewCategory}>
          Save
        </button>
      )}

      <button className="save-button" onClick={handleCancelButton}>
        Cancel
      </button>

      {isEdit && (
        <button onClick={() => handleDeleteCategory(selectedCategory.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default ModalFooter;
