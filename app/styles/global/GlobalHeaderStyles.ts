import styled, { css } from "styled-components";
import { hideHeaderIcons, showContainer, showOtherImg } from "../keyframes";

export const HeaderContainer = styled.div<{
  animations: string | undefined;
  inputSection: string;
}>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 5px 2px gray;
  z-index: 1;

  .mainTitle {
    margin: 0.5rem;
    margin-left: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
      transition: 0.3s transform;
      transform: scale(1.1);
    }
  }
  .guideMessages {
    text-align: center;
    width: 24vw;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .buttonContainer {
    width: 15vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 0.5rem;
  }
  .buttonContainer2 {
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
  }

  .img {
    &:hover {
      border-radius: 0.5rem;
      padding: 0.5rem;
      background-color: #efefef;
      transition: 0.3s transform;
      transform: scale(1.3);
    }
  }

  .otherImg {
    &:hover {
      border-radius: 0.5rem;
      padding: 0.5rem;
      background-color: #efefef;
      transition: 0.3s transform;
      transform: scale(1.3);
    }
    /* animation: 1s ${showOtherImg}; */
  }
`;
