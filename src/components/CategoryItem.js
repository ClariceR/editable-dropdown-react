import React from "react";

function CategoryItem({ categoryName, handleEditButton }) {
  return (
    <a href="#" className="dropdown-categories__name">
      {categoryName}
      <button className="edit-button" onClick={handleEditButton}>edit</button>
    </a>
  );
}

export default CategoryItem;
