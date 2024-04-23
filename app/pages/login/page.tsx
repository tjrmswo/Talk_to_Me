/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// styles
import { LoginContainer } from "@/app/styles/Login/LoginStyles";

// img
import ShowPwd from "@/app/assets/login/showPassword.png";
import HidePwd from "@/app/assets/login/hidePassword.png";
import Kakao from "@/app/assets/login/kakao_login_medium_wide.png";

// libraries
import axios from "axios";
import Script from "next/script";

// types
import { LoginUserData } from "@/app/types/aboutLogin";

const page = () => {
  const router = useRouter();
  // 비밀번호 보이기
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [loginData, setLoginData] = useState<LoginUserData>({
    email: "",
    password: "",
  });

  // 비밀번호 상태 변경
  const handlePWD = () => {
    setChangePasswordMode(!changePasswordMode);
  };

  // 회원가입 페이지 이동
  const goSignup = () => {
    router.push("/pages/signup");
  };

  // 홈페이지 이동
  const goHome = () => {
    router.push("/");
  };

  // 로그인 데이터
  const inputData = (sort: string, value: string) => {
    setLoginData((prev) => ({
      ...prev,
      [sort]: value,
    }));
  };

  // 추 후 backend 구축 후에 카카오 소셜 로그인 작업 예정
  const kakaoLogin = () => {};

  useEffect(() => {
    console.log("loginData: ", loginData);
  }, [loginData]);
  return (
    <LoginContainer>
      <span className="projectTitle">Talk to me◦</span>

      <main className="inputContainer">
        <div className="emailInput">
          <input
            className="input"
            type="email"
            placeholder="email"
            name="email"
            required
            onChange={(e) => inputData("email", e.target.value)}
          />
        </div>

        <div className="pwdInput">
          <input
            className="input"
            type={changePasswordMode ? "text" : "password"}
            placeholder="password"
            name="password"
            required
            onChange={(e) => inputData("password", e.target.value)}
          />
          <Image
            src={changePasswordMode ? HidePwd : ShowPwd}
            alt="비밀번호 보이기"
            onClick={handlePWD}
          />
        </div>

        {/* 로그인 error 시에 */}
        <div className="errorMessage">
          {" "}
          이메일 혹은 비밀번호를 확인해주세요 ❌{" "}
        </div>
      </main>

      <button className="loginButton" onClick={goHome}>
        로그인
      </button>

      <div style={{ color: "#b6b4b4", marginTop: "3rem" }}>
        아직 계정이 없으신가요??
      </div>
      <div style={{ color: "#b6b4b4" }}>
        아래 버튼을 클릭해서 가입해주세요!!
      </div>
      <button className="signupButton" onClick={goSignup}>
        회원가입
      </button>
      <Image
        className="socialLogin"
        style={{ marginTop: "1rem" }}
        src={Kakao}
        alt="소셜 로그인"
        onClick={kakaoLogin}
      />
    </LoginContainer>
  );
};

export default page;
