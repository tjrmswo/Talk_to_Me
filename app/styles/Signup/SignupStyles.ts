import styled from "styled-components";
import { showContainer, showTitle } from "../keyframes";
import { theme } from "../Global/ColorStyles";

export const SignupContainer = styled.div<{ showment: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  animation: 0.5s ${showContainer} forwards;

  .projectTitle {
    font-size: 2rem;
    font-weight: 800;
    font-family: "GmarketSansBold";
    margin-bottom: 1rem;
    animation: 5s ${showTitle} forwards;
    animation-delay: 0.5s;
    text-align: center;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    height: 550px;
    margin-top: 2rem;
  }

  .input {
    width: 26vw;
    font-size: 1.1rem;
    border: none;
    outline: none;
  }
  .correctMent {
    height: 4vh;
    font-size: 0.9rem;
    color: ${theme.correctMentColor};
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    animation: 0.5s ${showContainer};
  }
  .errorMessage {
    height: 4vh;
    font-size: 0.9rem;
    color: ${theme.wrongMentColor};
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    animation: 0.5s ${showContainer};
  }

  .signupButton {
    width: 28vw;
    height: 6vh;
    margin-left: 0.5rem;
    text-align: center;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    border: 2px solid ${theme.mainColor};
    border-radius: 0.5rem;
    color: white;
    background-color: ${theme.mainColor};
    &:hover {
      color: ${theme.mainColor};
      background-color: white;
      transition: 0.3s transform;
      transform: scalex(1.05);
    }
  }
  .downContainer {
    transition: ${(props) => props.showment === "true" && " 0.5s transform"};
    transform: translateY(15px);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 28vw;
  height: 7vh;
  border: 2px solid #c1c1c1;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  outline: none;

  &:hover {
    border-color: ${theme.mainColorDeepRed};
  }
  &:focus {
    border-color: ${theme.mainColorDeepRed};
  }

  select {
    width: 95%;
    font-size: 0.8rem;
    border: none;
    outline: none;
    overflow: scroll;
  }

  .signupButton {
    width: 27vw;
    height: 6vh;
    text-align: center;
    margin-top: 0.5rem;
    border: 2px solid ${theme.mainColor};
    border-radius: 0.5rem;
    color: white;
    background-color: ${theme.mainColor};

    &:hover {
      color: ${theme.mainColor};
      background-color: white;
      transition: 0.3s transform;
      transform: scalex(1.05);
    }
  }
`;
