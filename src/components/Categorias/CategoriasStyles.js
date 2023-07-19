import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 150px;
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
`;
