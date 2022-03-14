import React, { useState } from "react";
import "./App.css";
import DropdownCategories from "./components/DropdownCategories";

function App() {
  const data = [{ name: "one" }, { name: "two" }];
  const [categoriesList, setCategoriesList] = useState(data);

  const handleAddCategory = e => {
    e.preventDefault();
    console.log(e.target.value)
  }

  console.log(categoriesList.map((category) => category.name));

  return (
    <div className="App">
      <DropdownCategories categoriesList={categoriesList} handleAddCategory={handleAddCategory}/>
    </div>
  );
}

export default App;
