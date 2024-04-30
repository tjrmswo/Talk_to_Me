import styled from "styled-components";
import { theme } from "../Global/ColorStyles";

export const InputContainer = styled.div`
  width: 20vw;
  height: 8px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  font-size: 0.8rem;
  padding: 1rem;
  margin-left: 6rem;
  margin-bottom: 1rem;
  margin-top: 2rem;

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .input {
    width: 18vw;
    height: 30px;
    border: 1px solid black;
    outline: none;
    border-radius: 0.4rem;
    margin-right: 0.3rem;
    padding-left: 0.3rem;
    &:focus {
      transition: 0.5s border-radius ease-in-out;
      border: 1px solid ${theme.mainColorOrange};
      border-radius: 0.8rem;
    }

    .selectInterest {
      width: 5vw;
      margin-left: 1rem;
      &:hover {
        transition: 0.5s border-radius ease-in-out;
        border: 1px solid ${theme.mainColorOrange};
      }
    }
  }
`;
