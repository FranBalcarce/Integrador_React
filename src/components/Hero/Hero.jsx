import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { HeroContainerStyled } from "./HeroStyles";

import { selectCategory } from "../../redux/categories/categoriesSlice";

const Hero = ({ doScroll }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const listOfCategories = useSelector(
    (state) => state.categories.categories
  ).map((category) => {
    return category.category;
  });

  const handlerSubmit = (e) => {
    e.preventDefault();

    const newCategory = value.trim().toLowerCase().split(" ").join("");

    const selectedCategory = listOfCategories.find((category) => {
      return category.toLowerCase() === newCategory;
    });

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
      doScroll();
    } else {
      return alert("Categoría no encontrada");
    }

    setValue("");
  };

  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">
          Se parte de la nueva era digital del financiamiento y la inversión.
        </h1>
        <p>
          La tokenización de activos propone democratizar la inversión y acceder
          a financiamiento de forma rápida, sencilla y segura.
        </p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dal1tbyhp/image/upload/v1689537343/Blockchain_Technology__Cryptocurrency_Coins_Mining-removebg-preview_s0yhow.png"
          alt=""
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
