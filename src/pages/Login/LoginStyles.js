import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  gap: 20px;
  background-color: #4872b6;
  border-radius: 1rem;
`;

export const LoginEmailStyled = styled.p`
  color: #1f3861;
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
