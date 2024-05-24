import styled, { css } from "styled-components";
import {
  showInputSection,
  showSearchResultMent,
  showUserSearchResult,
  showUserSection,
} from "../keyframes";
import { theme } from "../Global/ColorStyles";

export const HomeContainer = styled.div<{ openinputsection: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  .ContentContainer {
    width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    z-index: 0;
    animation-delay: 0.5s;
    animation: ${(props) =>
      props.openinputsection === "false" ? css`1s ${showUserSection}` : null};
    animation-fill-mode: forwards;
  }

  .ContentContainer2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    width: 60vw;
    height: 80vh;
    animation-delay: 0.5s;
    animation: ${(props) =>
      props.openinputsection === "true" ? css`1s ${showInputSection}` : null};
    animation-fill-mode: forwards;
  }
  .CategoryContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .category {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-right: 0.3rem;
    background-color: ${theme.mainColorLightGray};
    border-radius: 1rem;
    font-size: 0.8rem;
    /* border: 1px solid ${theme.mainColorBrown}; */
    color: ${theme.mainColorBlack};
    font-weight: 900;

    &:hover {
      transition: 0.3s transform ease-in-out;
      transform: translateY(-5px);
      background-color: ${theme.mainColorGray};
    }
  }

  .searchResultMent {
    width: 70%;
    margin-top: 3rem;
    animation: 0.3s ${showSearchResultMent} ease-in-out;
    transform: translateY(-10px);
  }
  .searchResultContainer {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .imgs {
    width: 7vw;
    border-radius: 1rem;
  }
  .userSearchResult {
    width: 11vw;
    height: auto;
    padding: 0.8rem;
    border-radius: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 0 4px 0 gray;

    &:hover {
      animation: 0.3s ${showUserSearchResult};
      animation-fill-mode: forwards;
    }
  }
  .imgContainer {
    text-align: center;
  }
  .interestsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .interest {
    color: black;
    margin-right: 0.5rem;
  }
`;
