import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const inputId = "input-category";

  const [inputValue, setInputValue] = useState("One punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id={inputId}
          value={inputValue}
          placeholder="Buscar gifts"
          onChange={onInputChange}
        ></input>
      </form>
    </>
  );
};
