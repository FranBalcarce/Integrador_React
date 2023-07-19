import React from "react";

import { CardCategoria } from "./CategoriasStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";

export const Categoria = ({ title, category }) => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <h2 alt={category}>{title}</h2>
    </CardCategoria>
  );
};

export default Categoria;
