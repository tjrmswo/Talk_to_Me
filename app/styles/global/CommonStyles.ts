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
  &:hover {
    border-color: ${theme.mainColorDeepRed};
  }
  &:focus {
    border-color: ${theme.mainColorDeepRed};
  }

  .input {
    width: 26vw;
    font-size: 0.8rem;
    border: none;
    outline: none;
  }
`;
