import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin-top: 150px;
  margin-left: 90px;
  h1 {
    font-size: 40px;
    margin-bottom: 2rem;
  }
  p {
    font-size: 20px;
    color: grey;
  }
`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
`;
