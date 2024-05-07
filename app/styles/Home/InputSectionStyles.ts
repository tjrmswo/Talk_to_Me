import styled from "styled-components";
import { theme } from "../Global/ColorStyles";

export const InputContainer = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8rem;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  background-color: #333333;
  border-radius: 1rem;

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .input {
    width: 40vw;
    height: 50px;
    color: white;
    outline: none;
    border: none;
    font-size: 1.2rem;
    padding-left: 0.3rem;
    margin-left: 0.5rem;
    background-color: #333333;
    &::placeholder {
      color: white;
    }
    /* &:focus {
      transition: 0.5s border-radius ease-in-out;
      border: 1px solid ${theme.mainColorOrange};
      border-radius: 0.8rem;
    } */
  }
  .selectInterest {
    width: 5vw;
    margin-left: 1rem;
    &:hover {
      transition: 0.5s border-radius ease-in-out;
      border: 1px solid ${theme.mainColorOrange};
    }
  }
`;
