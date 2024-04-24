/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// components
import { SignupContainer } from "@/app/styles/Signup/SignupStyles";
import GlobalHeader from "@/app/components/GlobalHeader";

// img
import ShowPwd from "@/app/assets/login/showPassword.png";
import HidePwd from "@/app/assets/login/hidePassword.png";

// styles
import { InputStyle } from "@/app/styles/Global/CommonStyles";
import { Form } from "@/app/styles/Signup/SignupStyles";

// types
import { SignupUserData } from "@/app/types/aboutSignup";

// constants
import { Interests } from "@/app/constants/signup/signupConstants";

// libraries
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  userInterests,
  guideMessage,
  messageAnimationState,
} from "@/app/atom/state";

//hooks
import useGetMessages, {
  MessageHooksType,
} from "@/app/hooks/signup/useGetMessages";
import useHandleInterest, {
  HandleInterestType,
} from "@/app/hooks/signup/useHandleInterest";

const page = () => {
  // 비밀번호 보이기
  const [changePasswordMode, setChangePasswordMode] = useState<boolean>(false);
  // 누락된 부분 확인
  const [isMissingFields, setIsMissingFields] = useState<boolean>(false);
  // 안내 메세지
  const [messages, setMessages] = useRecoilState<string>(guideMessage);
  const [messageAnimation, setMessageAnimation] = useRecoilState<boolean>(
    messageAnimationState
  );

  // 가입 데이터
  const [signupData, setSignupData] = useState<SignupUserData>({
    email: "",
    nickname: "",
    password: "",
    passwordChecked: "",
  });
  const { email, nickname, password, passwordChecked } = signupData;
  // 관심사
  const [interests, setInterests] = useRecoilState(userInterests);

  // 비밀번호 보이게 하는 상태
  const showment = password === passwordChecked && password !== "";

  // 비밀번호 상태 변경
  const handlePWD = () => {
    setChangePasswordMode(!changePasswordMode);
  };

  // signup 데이터
  const inputData = (sort: string, value: string) => {
    switch (sort) {
      case "email":
        if (value.includes("@")) {
          setSignupData((prev) => ({
            ...prev,
            [sort]: value,
          }));
        }
        break;
      default:
        setSignupData((prev) => ({
          ...prev,
          [sort]: value,
        }));
        break;
    }
  };

  // 관심사
  const handleInterest = (interest: string) => {
    const data: HandleInterestType = {
      interests,
      interest,
      setInterests,
    };

    const handlesInterest = useHandleInterest(data);
    handlesInterest();
  };

  // 안내 메세지 가져오기
  const getMessages = (message: string) => {
    const data: MessageHooksType = {
      message,
      setMessages,
      messageAnimation,
      setMessageAnimation,
    };
    const getGuide = useGetMessages(data);
    getGuide();
  };

  // 누락된 부분 확인 함수
  const checkMissingFields = () => {
    const missingFields = [
      email,
      nickname,
      password,
      passwordChecked,
      interests.interests,
    ].some((field) => {
      console.log(field);
    });
    setIsMissingFields(missingFields);
  };

  // 회원 가입
  const handleSignup = () => {
    checkMissingFields();
    // 누락된 부분이 없을 경우에만 회원가입 로직 실행
    if (!isMissingFields) {
      // 회원가입 로직
      console.log("회원가입 성공!");
    }
  };
  useEffect(() => {
    console.log("signupData: ", signupData);
    console.log("interests: ", interests);
    console.log("messages: ", messages);
  }, [signupData, interests, messages]);

  return (
    <SignupContainer showment={showment.toString()}>
      <GlobalHeader />
      <main className="inputContainer">
        <div className="projectTitle">Sign up◦</div>

        <InputStyle>
          <input
            className="input"
            placeholder="이메일을 입력하세요"
            name="email"
            type="text"
            onChange={(e) => inputData("email", e.target.value)}
            onMouseOver={(e) => getMessages(e.currentTarget.name)}
          />
        </InputStyle>
        <InputStyle>
          <input
            className="input"
            placeholder="닉네임을 입력하세요(6~15자)"
            name="nickname"
            type="text"
            onChange={(e) => inputData("nickname", e.target.value)}
            onMouseOver={(e) => getMessages(e.currentTarget.name)}
          />
        </InputStyle>

        <InputStyle>
          <input
            className="input"
            placeholder="비밀번호를 입력하세요(9자이상, 특수 기호 포함)"
            name="password"
            type={changePasswordMode ? "text" : "password"}
            onChange={(e) => inputData("password", e.target.value)}
            onMouseOver={(e) => getMessages(e.currentTarget.name)}
          />
          <Image
            src={changePasswordMode ? HidePwd : ShowPwd}
            alt="비밀번호 보이기"
            onClick={handlePWD}
          />
        </InputStyle>
        <InputStyle style={{ marginBottom: "0.3rem" }}>
          <input
            className="input"
            placeholder="비밀번호 확인"
            name="passwordChecked"
            type={changePasswordMode ? "text" : "password"}
            onChange={(e) => inputData("passwordChecked", e.target.value)}
            onMouseOver={(e) => getMessages(e.currentTarget.name)}
          />
        </InputStyle>

        {password !== "" &&
          passwordChecked !== "" &&
          password.length > 8 &&
          passwordChecked.length > 8 &&
          password === passwordChecked && (
            <div className="correctMent">비밀번호가 일치합니다 ✅</div>
          )}
        {password.length > 8 &&
          passwordChecked.length > 8 &&
          password !== passwordChecked && (
            <div className="errorMessage"> 비밀번호가 일치하지 않습니다 ❌</div>
          )}

        <div className="downContainer">
          <Form action="#">
            <select
              name="interest"
              onChange={(e) => {
                inputData("interest", e.target.value);
                handleInterest(e.target.value);
              }}
              onMouseOver={(e) => getMessages(e.currentTarget.name)}
              id="interest"
            >
              {Interests.map((interest, i) => (
                <option key={i}>{interest}</option>
              ))}
            </select>
          </Form>

          {isMissingFields && (
            <div className="errorMessage">
              누락된 부분이 없는지 확인해주세요!! ❌
            </div>
          )}

          <button className="signupButton" onClick={handleSignup}>
            회원가입
          </button>
        </div>
      </main>
    </SignupContainer>
  );
};

export default page;
