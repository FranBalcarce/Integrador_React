import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: #678cc7; /* Cambiar color*/
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    opacity: 95%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #2d5595; /* Cambiar color*/
      & span {
        background: white; /* Cambiar color #2d5595*/
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `}
`;
