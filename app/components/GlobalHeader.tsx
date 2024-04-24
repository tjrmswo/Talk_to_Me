"use client";
// styles
import { HeaderContainer } from "@/app/styles/Global/GlobalHeaderStyles";

// libraries
import { useRecoilValue } from "recoil";
import { guideMessage, messageAnimationState } from "@/app/atom/state";
import { showContainer, showContainer2 } from "../styles/keyframes";
import { css } from "styled-components";
const GlobalHeader = () => {
  const message = useRecoilValue(guideMessage);
  const animations = useRecoilValue(messageAnimationState);
  return (
    <HeaderContainer animations={animations}>
      <div className="mainTitle">Talk to me◦</div>
      <div className="guideMessages">{message}</div>
      <div className="buttonContainer">
        <button className="myChat">myChat</button>
        <button className="logOut">로그아웃</button>
      </div>
    </HeaderContainer>
  );
};

export default GlobalHeader;
