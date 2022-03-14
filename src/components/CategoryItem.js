import React from "react";

function CategoryItem({ categoryName }) {
  console.log(categoryName);
  return (
    <a href="#" className="dropdown-categories__name">
      {categoryName}
    </a>
  );
}

export default CategoryItem;
