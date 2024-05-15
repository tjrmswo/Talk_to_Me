import styled from "styled-components";
import { theme } from "./ColorStyles";

export const InputStyle = styled.div`
  display: flex;
  align-items: center;
  width: 28vw;
  height: 50px;
  border: 2px solid #c1c1c1;
  border-radius: 0.5rem;
  color: ${theme.mainColorGray};
  padding-left: 0.5rem;
  margin-bottom: 1.5rem;

  outline: none;
  /* &:hover {
    border-color: ${theme.mainColorDeepRed};
  }
  &:focus {
    border-color: ${theme.mainColorDeepRed};
  } */

  .input {
    width: 26vw;
    border: none;
    outline: none;
  }
`;

export const CommonButton = styled.button`
  border: 2px solid ${theme.mainColor};
  border-radius: 0.5rem;
  color: ${theme.mainColor};
  background-color: white;
  &:hover {
    color: white;
    background-color: ${theme.mainColor};
    transition: 0.3s transform;
    transform: scale(1.05);
  }
`;

export const InputLoginStyle = styled.div`
  display: flex;
  align-items: center;
  width: 28vw;
  height: 50px;
  border: 2px solid #c1c1c1;
  border-radius: 0.5rem 0.5rem 0 0;
  color: ${theme.mainColorGray};
  padding-left: 0.5rem;
  margin-bottom: 1.5rem;

  outline: none;
  &:hover {
    border-color: ${theme.mainColorDeepRed};
  }
  &:focus {
    border-color: ${theme.mainColorDeepRed};
  }

  .input {
    width: 26vw;
    border: none;
    outline: none;
  }
`;

export const InputPasswordStyle = styled.div`
  display: flex;
  align-items: center;
  width: 28vw;
  height: 50px;
  border: 2px solid #c1c1c1;
  border-radius: 0 0 0.5rem 0.5rem;
  color: ${theme.mainColorGray};
  padding-left: 0.5rem;
  margin-bottom: 1.5rem;

  outline: none;
  &:hover {
    border-color: ${theme.mainColorDeepRed};
  }
  &:focus {
    border-color: ${theme.mainColorDeepRed};
  }

  .input {
    width: 26vw;
    border: none;
    outline: none;
  }
`;
