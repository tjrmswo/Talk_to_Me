import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 10vh;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;

  .row {
    display: flex;
    flex-direction: row;
  }
  .input {
    width: 47vw;
    height: 4vh;
    border: none;
    outline: none;
  }
  .divider {
    width: 49vw;
    border-bottom: 2px solid black;
  }
`;
