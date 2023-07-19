import styled from "styled-components";

export const StatusStyled = styled.span`
  text-align: center;
  position: absolute;
  width: 2rem;
  height: 1rem;
  top: 1rem;
  right: 1rem;
  border-radius: 1rem;
  padding: 0.3rem;
`;

export const CheckStyled = styled(StatusStyled)`
  background: green;
`;

export const PendingStyled = styled(StatusStyled)`
  background: rgb(221, 221, 99);
`;

export const CancelStyled = styled(StatusStyled)`
  background: red;
`;
