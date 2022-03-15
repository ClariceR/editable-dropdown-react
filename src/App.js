import React, { useState } from "react";
import "./App.css";
import DropdownCategories from "./components/DropdownCategories";
import ModalCategories from "./components/ModalCategories";
import useModal from "./components/useModal";

function App() {
  const defaultCategories = [
    { name: "Drama", id: 1 },
    { name: "Fiction", id: 2 },
    { name: "Sports", id: 3 },
  ];
  const { isShowing, toggle } = useModal();

  const [categoriesList, setCategoriesList] = useState(defaultCategories);
  const [categoryName, setCategoryName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "No category",
  });

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const saveNewCategory = () => {
    const newCategory = { name: categoryName, id: Date.now() };
    const newCategoriesList = updateCategoriesList(newCategory);
    setCategoriesList(newCategoriesList);
    toggle();
  };

  const updateCategoriesList = (newCategory) => {
    return categoriesList.concat(newCategory);
  };

  const handleAddButton = () => {
    setIsEdit(false);
    toggle();
  };

  const handleEditButton = (currentCategory) => {
    setIsEdit(true);
    toggle();
  };

  const handleDeleteButton = (id) => {
    const newCategoriesList = categoriesList.filter(
      (category) => category.id !== id
    );
    setCategoriesList(newCategoriesList);
    toggle();
  };

  const handleUpdateCategory = (id) => {
    const newCategoriesList = categoriesList.map((category) => {
      if (category.id === id) {
        const updatedCategory = { ...category, name: categoryName };
        return updatedCategory;
      }
      return category;
    });
    setCategoriesList(newCategoriesList);
    toggle();
  };

  const handleCancelButton = () => {
    toggle();
  }

  return (
    <div className="App">
      <DropdownCategories
        categoriesList={categoriesList}
        handleAddButton={handleAddButton}
        handleEditButton={handleEditButton}
        selectedCategory={selectedCategory}
        onSelectedCategoryChange={setSelectedCategory}
      />
      <ModalCategories
        isShowing={isShowing}
        hide={toggle}
        handleCategoryName={handleCategoryName}
        saveNewCategory={saveNewCategory}
        isEdit={isEdit}
        selectedCategory={selectedCategory}
        handleDeleteCategory={handleDeleteButton}
        handleUpdateCategory={handleUpdateCategory}
        handleCancelButton={handleCancelButton}
      />
    </div>
  );
}

export default App;
