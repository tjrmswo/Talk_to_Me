import styled from "styled-components";
import { theme } from "../Global/ColorStyles";
import { showContainer, showTitle } from "../keyframes";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: 0.5s ${showContainer} forwards;

  .projectTitle {
    font-size: 2rem;
    font-weight: 800;
    font-family: "GmarketSansBold";
    margin-bottom: 1rem;
    animation: 5s ${showTitle} forwards;
    animation-delay: 0.5s;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
  }

  .emailInput {
    display: flex;
    align-items: center;
    width: 28vw;
    height: 7vh;
    border: 2px solid #c1c1c1;
    border-radius: 0.5rem 0.5rem 0 0;
    padding-left: 0.5rem;
    font-size: 1.1rem;
    outline: none;
    &:hover {
      border-color: ${theme.mainColorDeepRed};
    }
    &:focus {
      border-color: ${theme.mainColorDeepRed};
    }
  }
  .pwdInput {
    display: flex;
    align-items: center;
    width: 28vw;
    height: 7vh;
    border: 2px solid #c1c1c1;
    border-radius: 0 0 0.5rem 0.5rem;
    padding-left: 0.5rem;
    font-size: 1.1rem;
    outline: none;
    &:hover {
      border-color: ${theme.mainColorDeepRed};
    }
    &:focus {
      border-color: ${theme.mainColorDeepRed};
    }
  }

  .input {
    width: 26vw;
    font-size: 1.1rem;

    border: none;
    outline: none;
  }

  .errorMessage {
    font-size: 0.9rem;
    color: ${theme.wrongMentColor};
    margin-top: 0.5rem;
  }

  .loginButton {
    width: 27vw;
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
      transform: scalex(1.05);
    }
  }
  .socialLogin {
    &:hover {
      transition: 0.3s transform;
      transform: scalex(1.05);
    }
  }
  .signupButton {
    width: 27vw;
    height: 6vh;
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
`;
