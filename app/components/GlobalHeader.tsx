"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// styles
import { HeaderContainer } from "@/app/styles/Global/GlobalHeaderStyles";

// libraries
import { useRecoilState, useRecoilValue } from "recoil";
import {
  guideMessage,
  handleInputSection,
  messageAnimationState,
} from "@/app/atom/state";

//img
import Serach from "@/app/assets/header/searchIcon.png";
import Chatting from "@/app/assets/header/chat.png";
import LogOut from "@/app/assets/header/logout.png";
import Close from "@/app/assets/header/Close_round.png";

const GlobalHeader = () => {
  const router = useRouter();
  const message = useRecoilValue(guideMessage);
  const animations = useRecoilValue(messageAnimationState);
  const [inputSection, setInputSection] = useRecoilState(handleInputSection);

  const showInput = () => {
    setInputSection(true);
  };

  const hideInput = () => {
    setInputSection(false);
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <HeaderContainer
      inputsection={String(inputSection)}
      animations={animations ? String(animations) : undefined}
    >
      <div className="mainTitle" onClick={goHome}>
        Talk to me◦
      </div>
      {/* <div>
        <span>친구</span> <span>내 정보</span>
      </div> */}
      <div className="guideMessages">{message}</div>
      {inputSection === true ? (
        <div className="buttonContainer2">
          <Image
            className="otherImg"
            src={Close}
            alt="닫기"
            width={30}
            height={30}
            onClick={hideInput}
          />
        </div>
      ) : (
        <div className="buttonContainer">
          <Image
            className="img"
            src={Serach}
            alt="검색"
            width={20}
            height={20}
            onClick={showInput}
          />
          <Image className="img" src={Chatting} alt="채팅" />
          <Image className="img" src={LogOut} alt="로그아웃" />
        </div>
      )}
      {/* <div className="buttonContainer">
        <Image
          className="img"
          src={Serach}
          alt="검색"
          width={20}
          height={20}
          onClick={showInput}
        />
        <Image className="img" src={Chatting} alt="채팅" />
        <Image className="img" src={LogOut} alt="로그아웃" />
      </div> */}
    </HeaderContainer>
  );
};

export default GlobalHeader;
