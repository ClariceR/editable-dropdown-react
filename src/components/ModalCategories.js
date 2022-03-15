import React from 'react'

function ModalCategories({isAdd}) {
    if (isAdd) {
       <div className="modal__wrapper">
         <div class="modal__body-input">
           <label for="category_name" class="u-push-right--half">
             Name
           </label>
           <input type="text" />
         </div>
       </div>; 
    }
  return null;
}

export default ModalCategories