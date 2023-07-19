import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  background-color: #678cc7;
  border: ${({ isError }) => (isError ? "1px solid rgb(228, 0, 0) " : "none")};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: white;
  width: 70%;
  margin-top: 1rem;
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #678cc7 inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: rgb(228, 0, 0);
  font-size: 14px;
`;
