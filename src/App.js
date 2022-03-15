import React, { useState } from "react";
import "./App.css";
import DropdownCategories from "./components/DropdownCategories";
import ModalCategories from "./components/ModalCategories";
import useModal from "./components/useModal";

function App() {
  const defaultCategories = [
    { name: "one", id: 1 },
    { name: "two", id: 2 },
  ];
  const { isShowing, toggle } = useModal();

  const [categoriesList, setCategoriesList] = useState(defaultCategories);
  const [categoryName, setCategoryName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({name: "No category"})

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
    console.log("selected category:", currentCategory)
    toggle();
  };

  

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
      />
    </div>
  );
}

export default App;
