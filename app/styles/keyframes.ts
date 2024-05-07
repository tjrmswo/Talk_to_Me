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

export const showContainer2 = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const hideHeaderIcons = keyframes`
  0%{
    opacity: 1;
    transform: translateY(0px);
  }
  100%{
    opacity: 0;
    transform: translateY(10px);
  }
`;

export const hideUserSection = keyframes`
  0%{
    opacity: 1;
    transform: translateY(0px);
  }
  100%{
    opacity: 0;
    transform: translateY(30px);
  }
`;

export const showUserSection = keyframes`
  0%{
    opacity: 0;
    transform: translateY(30px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const showInputSection = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-50px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const showOtherImg = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-30px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const showSearchResultMent = keyframes`
0%{
    opacity: 0;
    transform: translateY(10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const showUserSearchResult = keyframes`
0%{
    box-shadow: 0px 0 4px 0 gray;
}
100%{
  box-shadow: 0px 1px 5px 2px gray;
  transform: translateY(-5px);
}
`;

export const showPromotionMent = keyframes`
0%{
  opacity: 0;
  transform: translateY(10px);
}
100%{
  opacity: 1;
  transform: translateY(0px);
}
`;
