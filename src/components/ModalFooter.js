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
      <div className="left">
        {isEdit && (
          <button
            className="button-default"
            onClick={() => handleUpdateCategory(selectedCategory.id)}
          >
            Save
          </button>
        )}
        {!isEdit && (
          <button className="button-default" onClick={saveNewCategory}>
            Save
          </button>
        )}

        <button className="button-secondary" onClick={handleCancelButton}>
          Cancel
        </button>
      </div>

      <div className="right">
        {isEdit && (
          <a
            className="warning-link"
            onClick={() => handleDeleteCategory(selectedCategory.id)}
          >
            Delete
          </a>
        )}
      </div>
    </div>
  );
}

export default ModalFooter;
