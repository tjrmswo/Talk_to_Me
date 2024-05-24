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
import Login from "@/app/assets/header/login.png";
import Close from "@/app/assets/header/Close_round.png";
import { useCookies } from "react-cookie";

const GlobalHeader = () => {
  // cookie
  const [cookies, setCookie, removeCookie] = useCookies([
    "id",
    "accessToken",
    "refreshToken",
  ]);
  // router
  const router = useRouter();

  // message
  const message = useRecoilValue(guideMessage);
  const animations = useRecoilValue(messageAnimationState);

  // open inputSection boolean
  const [inputSection, setInputSection] = useRecoilState(handleInputSection);

  const showInput = () => {
    setInputSection(true);
  };

  // hide inputSection
  const hideInput = () => {
    setInputSection(false);
  };

  // return home
  const goHome = () => {
    router.push("/");
  };

  // log out
  const logout = () => {
    removeCookie("id");
    removeCookie("accessToken");
    removeCookie("refreshToken");
    window.location.reload();
  };

  // log in
  const login = () => {
    router.push("/pages/login");
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

          {cookies.id ? (
            <Image
              className="img"
              src={LogOut}
              alt="로그아웃"
              onClick={logout}
            />
          ) : (
            <Image className="img" src={Login} alt="로그인" onClick={login} />
          )}
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
