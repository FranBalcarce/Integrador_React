import React, { useRef } from "react";

import Categorias from "../../components/Categorias/Categorias";
import CardsProductos from "../../components/Productos/CardsProductos";
import Hero from "../../components/Hero/Hero";

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  TituloWrapper,
} from "./HomeStyles";

function Home() {
  const productsRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  return (
    <HomeWrapper>
      <Hero doScroll={doScroll} />
      <CategoriasWrapper>
        <Categorias />
      </CategoriasWrapper>
      <ProductosWrapper ref={productsRef}>
        <TituloWrapper>
          <h2>Tokens</h2>
        </TituloWrapper>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
