import styled from "styled-components";

export const ProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: #678cc7;
  border-radius: 15px;
  padding: 1.5rem 1rem;
  width: 50%;

  img {
    width: 150px;
    border-radius: 1rem;
  }
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: #2b4f8a;
  -webkit-background-clip: text;
  color: transparent;
`;
