import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background: #678cc7;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
    background: #2b4f8a;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
`;

export const HrStyled = styled.hr`
  margin: 4rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;
