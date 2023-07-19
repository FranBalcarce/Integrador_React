import styled from "styled-components";

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
`;

export const TitleStyled = styled.h1`
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;
  background-color: #2b4f8a;
  border-radius: 1rem;
  margin-bottom: 10px;
  padding: 10px;

  & p {
    margin-bottom: 50px;
  }
`;
