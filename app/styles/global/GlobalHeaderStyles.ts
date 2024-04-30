import styled, { css } from "styled-components";
import { theme } from "./ColorStyles";
import { showContainer, showContainer2 } from "../keyframes";

export const HeaderContainer = styled.div<{ animations: string | undefined }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 2px 5px 0 gray;
  z-index: 1;

  .mainTitle {
    margin: 0.5rem;
    margin-left: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
      transition: 0.3s transform;
      transform: scale(1.1);
    }
  }
  .guideMessages {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .buttonContainer {
    width: 15vw;
    display: flex;
    justify-content: space-between;
    margin-right: 0.5rem;
  }

  .myChat {
    width: 7vw;
    border: 1px solid ${theme.mainColor};
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

  .logOut {
    width: 7vw;
    border: 1px solid ${theme.mainColor};
    color: ${theme.mainColor};
    background-color: white;
    border-radius: 0.5rem;
    &:hover {
      color: white;
      background-color: ${theme.mainColor};
      transition: 0.3s transform;
      transform: scale(1.1);
    }
  }
`;
