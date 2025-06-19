import { useState } from "react";
import { AddCategory, GifGrid, GifItem } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hunter x Hunter"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };
  return (
    <>
      <h1>test</h1>
      <AddCategory
        setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
