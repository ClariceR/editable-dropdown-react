import React, { useState } from "react";
import "./App.css";
import DropdownCategories from "./components/DropdownCategories";
import ModalCategories from "./components/ModalCategories";
import useModal from "./components/useModal";

function App() {
  const defaultCategories = [{ name: "one" }, { name: "two" }];
  const { isShowing, toggle } = useModal();

  const [categoriesList, setCategoriesList] = useState(defaultCategories);
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryName = e => {
    setCategoryName(e.target.value);
  };

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

  console.log(
    "new category name:",
    categoryName
  );

  return (
    <div className="App">
      <DropdownCategories categoriesList={categoriesList} toggle={toggle} />
      <ModalCategories
        isShowing={isShowing}
        hide={toggle}
        handleCategoryName={handleCategoryName}
      />
    </div>
  );
}

export default App;
