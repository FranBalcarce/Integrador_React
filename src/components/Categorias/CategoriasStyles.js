import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  user-select: none;

  @media (max-width: 700px) {
    gap: 50px;
  }
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 250px;
  padding: 0 0.5rem;
  border-radius: 15px;
  cursor: pointer;

  h2 {
    font-size: 1rem;
    color: ${({ selected }) => (selected ? "#2c5699" : "white")};
  }

  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 30px;
      gap: 30px;
    }
  }
`;
