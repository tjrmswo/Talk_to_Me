import styled from "styled-components";
import { theme } from "../Global/ColorStyles";

export const PromtionSectionContainer = styled.div`
  width: 50vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  .title {
    font-size: 3rem;
  }
  .startButton {
    width: 25vw;
    height: 6vh;
    margin-top: 2rem;
    font-size: 1.1rem;
    border: 2px solid ${theme.mainColor};
    border-radius: 0.5rem;
    color: ${theme.mainColor};
    background-color: white;
    &:hover {
      color: white;
      background-color: ${theme.mainColor};
      transition: 0.3s transform;
      transform: scale(1.1);
    }
  }
`;
