import styled from "styled-components";
import { showContainer } from "../keyframes";

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;

  .movingMent {
    animation: 0.5s ${showContainer};
    animation-fill-mode: forwards;
  }
  .waitMent {
    opacity: 0;
    animation: 0.5s ${showContainer};
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
`;
