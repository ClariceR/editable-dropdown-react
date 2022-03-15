import React from "react";
import CategoryItem from "./CategoryItem";

function DropdownCategories({
  categoriesList,
  handleAddButton,
  handleEditButton,
  selectedCategory,
  onSelectedCategoryChange,
}) {
  const categoriesNames = categoriesList.map((category) => (
    <CategoryItem
      key={category.id}
      category={category}
      categoryName={category.name}
      handleEditButton={handleEditButton}
      onSelectedCategoryChange={onSelectedCategoryChange}
    />
  ));

  return (
    <div className="dropdown-categories__wrapper">
      <h3 className="dropdown-categories__title">Categories</h3>

      <div className="dropdown-categories__dropdown">
        <div className="dropdown-categories__handler">
          <p className="dropdown-categories__selected">
            {selectedCategory.name}
          </p>
        </div>
        <div className="dropdown-categories__list">
          <div>{categoriesNames}</div>
          <div className="dropdown-categories__footer">
            <a href="#" onClick={handleAddButton}>
              + Add category
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownCategories;
