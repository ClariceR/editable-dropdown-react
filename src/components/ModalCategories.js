import React from "react";
import ReactDOM from "react-dom";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

const ModalCategories = ({
  isShowing,
  hide,
  handleCategoryName,
  saveNewCategory,
  isEdit,
  selectedCategory,
  handleDeleteCategory,
  handleUpdateCategory,
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <ModalHeader hide={hide} isEdit={isEdit} />

              <div className="modal-body">
                <label htmlFor="category_name" className="category-name">
                  Name
                </label>
                <input
                  type="text"
                  className="category-input"
                  onChange={handleCategoryName}
                />
              </div>

              <ModalFooter
                saveNewCategory={saveNewCategory}
                isEdit={isEdit}
                selectedCategory={selectedCategory}
                handleDeleteCategory={handleDeleteCategory}
                handleUpdateCategory={handleUpdateCategory}
              />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default ModalCategories;
