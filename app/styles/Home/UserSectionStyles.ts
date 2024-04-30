import styled from "styled-components";
import { theme } from "../Global/ColorStyles";

export const UserSectionContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .personnelSection {
    margin-top: 1rem;
    width: 23vw;
    /* height: 100px; */
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 3px 1px gray;
    border-radius: 0.5rem;
    /* padding-bottom: 1rem; */
    &:hover {
      transition: 0.3s transform;
      transform: translateY(-7px);
    }
  }

  .personnelColumn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6vw;
    height: auto;
  }
  .personnelColumn2 {
    width: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
  }
  .interestsContainer {
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .personnelsInterest {
    font-size: 0.8rem;
    color: ${theme.mainColorBrown};
    border: 1px solid ${theme.mainColorBrown};
    border-radius: 0.5rem;
    padding: 0.1rem 0.6rem;
    margin-right: 0.4rem;
    margin-top: 0.3rem;

    &:hover {
      color: white;
      background-color: ${theme.mainColorBrown};
      transition: 0.3s transform ease-in-out;
      transform: scaleX(1.05);
    }
  }
`;

export const ExportUser = styled.button`
  width: 40vw;
  height: 35px;
  border-radius: 1rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  background-color: ${theme.mainColorBrown};
  color: white;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    border: 1px solid ${theme.mainColorBrown};
    color: ${theme.mainColorBrown};
    background-color: white;
  }
`;
