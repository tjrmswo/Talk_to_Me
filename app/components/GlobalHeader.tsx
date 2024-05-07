"use client";

import Image from "next/image";
import { SetStateAction, useEffect } from "react";

// styles
import { HeaderContainer } from "@/app/styles/Global/GlobalHeaderStyles";

// libraries
import { useRecoilValue } from "recoil";
import { guideMessage, messageAnimationState } from "@/app/atom/state";

//img
import Serach from "@/app/assets/header/searchIcon.png";
import Chatting from "@/app/assets/header/chat.png";
import LogOut from "@/app/assets/header/logout.png";
import Close from "@/app/assets/header/Close_round.png";

interface GlobalHeaderType {
  openInputSection: boolean;
  setOpenInputSection: React.Dispatch<SetStateAction<boolean>>;
}
const GlobalHeader: React.FC<GlobalHeaderType> = ({
  openInputSection,
  setOpenInputSection,
}) => {
  const message = useRecoilValue(guideMessage);
  const animations = useRecoilValue(messageAnimationState);

  const showInput = () => {
    setOpenInputSection(true);
  };

  const hideInput = () => {
    setOpenInputSection(false);
  };
  useEffect(() => {
    console.log("openInputSection: ", openInputSection);
  }, [openInputSection]);
  return (
    <HeaderContainer
      openinputsection={String(openInputSection)}
      animations={animations ? String(animations) : undefined}
    >
      <div className="mainTitle">Talk to me◦</div>
      <div className="guideMessages">{message}</div>
      {openInputSection === true ? (
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
