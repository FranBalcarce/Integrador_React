import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils";

import CardResumen from "../../components/Resumen/CardResumen";
import Link from "../../components/UI/Link/Link";

import {
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from "./ResumenStyles";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios-orders";
import { useParams } from "react-router-dom";

const Resumen = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();

  const [visitedOrder, setVisitedOrder] = useState(null);

  const orders = useSelector((state) => state.orders.orders);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    setVisitedOrder(orders?.find((order) => order._id === orderId));
  }, [orderId, currentUser, orders, dispatch]);

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Compra:</h1>
        <Link borderRadius="20" to="/mis-ordenes"></Link>
      </ResumenTitleStyled>
      <h2>Tokens:</h2>
      <ProductsContainerStyled>
        {visitedOrder?.items.map((item) => {
          return <CardResumen {...item} key={item._id} />;
        })}
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Inversiones:</h3>
        <CostoProductoStyled>
          <p>Inversión en Tokens</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;
