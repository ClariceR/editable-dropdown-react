import React from "react";
import CategoryItem from "./CategoryItem";

function DropdownCategories({ categoriesList, handleAddCategory }) {
  const categoriesNames = categoriesList.map((category) => (
    <CategoryItem key={category.name} categoryName={category.name} />
  ));

  return (
    <div className="dropdown-categories__wrapper">
      <h3 className="dropdown-categories__title">Categories</h3>

      <div className="dropdown-categories__dropdown">
        <div className="dropdown-categories__handler">
          <p className="dropdown-categories__selected">
            Selected Category <span className="v">v</span>
          </p>
        </div>
        <div className="dropdown-categories__list">
          <div>{categoriesNames}</div>
          <div className="dropdown-categories__footer">
            <a href="#" onClick={handleAddCategory}>
              + Add category
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownCategories;
