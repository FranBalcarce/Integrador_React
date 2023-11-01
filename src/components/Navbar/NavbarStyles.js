import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 10px 15px;
    color: rgb(75, 83, 197);
  }

  a:first-child {
    color: #678cc7;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }

  @media (max-width: 599px) {
    a {
      font-size: 26px;
    }
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "rgb(44, 54, 192)" : "rgb(75, 83, 197)")};

  @media (max-width: 599px) {
    font-size: 30px;
  }
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;

  @media (max-width: 599px) {
    font-size: 26px;
  }
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid rgb(17, 0, 255);
    color: rgb(17, 0, 255);
    background-color: rgb(212, 245, 250);
    font-size: 0.9rem;
  }

  @media (max-width: 599px) {
    span {
      font-size: 18px;
    }
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: #678cc7;
    font-size: 1rem;
    margin-right: 20px;
  }

  @media (max-width: 599px) {
    span {
      font-size: 26px;
    }
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  color: #678cc7;
  &:hover {
    text-decoration: underline;
    color: #678cc7;
  }
`;
