import React from "react";
import ReactDOM from "react-dom";

const ModalCategories = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h3>Add category</h3>
                <button className="modal-close-button">
                  <span>&times;</span>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default ModalCategories;
