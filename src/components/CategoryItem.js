import React from "react";

function CategoryItem({ category, categoryName, handleEditButton, onSelectedCategoryChange }) {
  return (
    <a href="#" className="dropdown-categories__name" onClick={() => onSelectedCategoryChange(category)}>
      {categoryName}
      <button className="edit-button" onClick={() => handleEditButton()}>edit</button>
    </a>
  );
}

export default CategoryItem;
