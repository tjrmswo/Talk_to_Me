/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// styles
import { LoginContainer } from "@/app/styles/Login/LoginStyles";

// img
import ShowPwd from "@/app/assets/login/showPassword.png";
import Kakao from "@/app/assets/login/kakao_login_medium_wide.png";

// libraries
import axios from "axios";
import Script from "next/script";

const page = () => {
  const router = useRouter();
  // 비밀번호 보이기
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [kakaoLoginData, setKakaoLoginData] = useState([]);

  // 비밀번호 상태 변경
  const handlePWD = () => {
    setChangePasswordMode(!changePasswordMode);
  };

  // 회원가입 페이지 이동
  const goSignup = () => {
    router.push("/pages/signup");
  };

  const kakaoLogin = () => {};

  useEffect(() => {
    console.log("kakaoLoginData: ", kakaoLoginData);
  }, [kakaoLoginData]);
  return (
    <LoginContainer>
      <span className="projectTitle">Talk to me◦</span>

      <main className="inputContainer">
        <div className="emailInput">
          <input className="input" type="email" placeholder="email" required />
        </div>

        <div className="pwdInput">
          <input
            className="input"
            type={changePasswordMode ? "text" : "password"}
            placeholder="password"
            required
          />
          <Image src={ShowPwd} alt="비밀번호 보이기" onClick={handlePWD} />
        </div>
        <div className="errorMessage">
          {" "}
          이메일 혹은 비밀번호를 확인해주세요 ❌{" "}
        </div>
      </main>

      <button className="loginButton">로그인</button>

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
