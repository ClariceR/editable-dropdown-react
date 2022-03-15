import React from "react";

function CategoryItem({ categoryName }) {
  return (
    <a href="#" className="dropdown-categories__name">
      {categoryName}
      <button className="edit-button">edit</button>
    </a>
  );
}

export default CategoryItem;
