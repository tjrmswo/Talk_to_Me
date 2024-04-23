import styled from "styled-components";
import { theme } from "./ColorStyles";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;


  .mainTitle {
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover{
      transition: 0.3s transform;
      transform: scale(1.1);
    }
  }

  .myChat {
    width: 8vw;
    border: 1px solid ${theme.mainColor};
    border-radius: 0.5rem;
    color: ${theme.mainColor};
    font-size: 1.1rem;
    background-color: white;
    &:hover{
      color: white;
      background-color: ${theme.mainColor};
      transition: 0.3s transform;
      transform: scale(1.1);
    }
  }

  .buttonContainer{
    width: 17vw;
    display: flex;
    justify-content: space-between;
    margin-right: 0.5rem;
  }

  .logOut{
    width: 8vw;
    border: 1px solid ${theme.mainColor};
    color: ${theme.mainColor};
    background-color: white;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    
    &:hover{
      color: white;
      background-color: ${theme.mainColor};
      transition: 0.3s transform;
      transform: scale(1.1);
    }
  }
`