import { keyframes } from "styled-components";

export const showTitle = keyframes`
  0% {
    transform: translateY(0px);
  }
  15% {
    transform: translateY(-10px);
  }
  30%{
    transform: translateY(0px);
  }
  45%{
    transform: translateY(-10px);
  }
  60%{
    transform: translateY(0px);
  } 
  75%{
    transform: translateY(-10px);
  }
  90%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(-10px);
  }
`;

export const showContainer = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;
