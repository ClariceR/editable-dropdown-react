import React, { useState } from "react";
import "./App.css";
import DropdownCategories from "./components/DropdownCategories";
import ModalCategories from "./components/ModalCategories";

function App() {
  const defaultCategories = [{ name: "one" }, { name: "two" }];

  const [categoriesList, setCategoriesList] = useState(defaultCategories);
  const [isAdd, setIsAdd] = useState(false);

  const handleAddCategory = (e) => {
    e.preventDefault();
    setIsAdd(true);
    console.log(isAdd)
  };

  console.log(
    "categories:",
    categoriesList.map((category) => category.name)
  );

  return (
    <div className="App">
      <DropdownCategories
        categoriesList={categoriesList}
        handleAddCategory={handleAddCategory}
      />
      <ModalCategories isAdd={isAdd} />
    </div>
  );
}

export default App;
