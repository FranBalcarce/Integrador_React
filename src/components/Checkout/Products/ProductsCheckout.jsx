import React from "react";
import { formatPrice } from "../../../utils";

import CardProductCheckout from "../../CardProductCheckout/CardProductCheckout";

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  HrStyled,
  TotalStyled,
  PriceTotalStyled,
} from "./ProductsCheckoutStyles";

const ProductsCheckout = ({ cartItems, price }) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tus Tokens</ProductsTitleStyled>
      <CardsWrapperStyled>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CardProductCheckout {...item} key={item.id} />;
          })
        ) : (
          <p>Invertí en Tokens</p>
        )}
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(price)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
