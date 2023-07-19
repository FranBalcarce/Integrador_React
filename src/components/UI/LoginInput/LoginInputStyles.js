import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: white;
  background-color: #2b4f8a;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? "1px solid rgb(228, 0, 0) " : "none")};
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: rgb(95, 196, 255);

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: rgb(228, 0, 0);
  font-size: 14px;
`;
