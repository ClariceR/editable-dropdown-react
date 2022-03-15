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
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0])

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

  const handleEditButton = () => {
    setIsEdit(true);
    toggle();
  };

  // const handleDeleteCategory = (id) => {
  //   // const newCategoriesList = [...categoriesList]
  //   // newCategoriesList.splice(index, 1)
  //   // setCategoriesList(newCategoriesList)
  //   console.log(id)
  // }

  // create a new object with the new category name as name
  // update the categories list to show the new category name

  // const [isAdd, setIsAdd] = useState(false);

  // const handleAddCategory = (e) => {
  //   e.preventDefault();
  //   setIsAdd(true);
  //   console.log(isAdd)
  // };

  // console.log(
  //   "categories:",
  //   categoriesList.map((category) => category.name)
  // );

  // console.log("new category name:", categoryName);

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
