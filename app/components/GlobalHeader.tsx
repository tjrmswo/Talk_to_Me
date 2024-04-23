"use client";
// styles
import { HeaderContainer } from "@/app/styles/Global/GlobalHeaderStyles";
const GlobalHeader = () => {
  return (
    <HeaderContainer>
      <div className="mainTitle">Talk to me◦</div>
      <div className="buttonContainer">
        <button className="myChat">myChat</button>
        <button className="logOut">로그아웃</button>
      </div>
    </HeaderContainer>
  );
};

export default GlobalHeader;
