/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// styles
import { LoginContainer } from "@/app/styles/Login/LoginStyles";
import {
  InputLoginStyle,
  InputPasswordStyle,
} from "@/app/styles/Global/CommonStyles";

// img
import ShowPwd from "@/app/assets/login/showPassword.png";
import HidePwd from "@/app/assets/login/hidePassword.png";
import KakaoLogin from "@/app/assets/login/kako_login.png";

// libraries
import axios from "axios";
import { useCookies } from "react-cookie";

// types
import { LoginUserData } from "@/app/types/aboutLogin";

const page = () => {
  const router = useRouter();
  const [cookies, setCookies] = useCookies([
    "accessToken",
    "refreshToken",
    "id",
  ]);
  // 비밀번호 보이기
  const [changePasswordMode, setChangePasswordMode] = useState(false);
  const [loginData, setLoginData] = useState<LoginUserData>({
    email: "",
    password: "",
  });

  const [isFailed, setIsFailed] = useState<boolean>(false);

  const { email, password } = loginData;

  // 비밀번호 상태 변경
  const handlePWD = () => {
    setChangePasswordMode(!changePasswordMode);
  };

  // 회원가입 페이지 이동
  const goSignup = () => {
    router.push("/pages/signup");
  };

  // 로그인 데이터
  const inputData = (sort: string, value: string) => {
    setLoginData((prev) => ({
      ...prev,
      [sort]: value,
    }));
  };

  // 추 후 backend 구축 후에 카카오 소셜 로그인 작업 예정
  const kakaoLogin = async () => {
    try {
      if (!cookies.id) {
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_TEST_APP_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
        window.location.href = kakaoURL;
      } else {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ADDRESS}/user/socialLogin`,
          {
            kakao_id: cookies.id,
          }
        );
        const userInfo = response.data;
        console.log(userInfo);

        if (userInfo.status === 200) {
          router.push("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  // login 로직
  const logIn = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ADDRESS}/user/login`,
        {
          email,
          password,
        }
      );
      const data = response.data;
      console.log(response);
      if (data) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("loginData: ", loginData);
    // console.log("cookies:", cookies);
  }, [loginData]);

  return (
    <LoginContainer>
      <span className="projectTitle">Talk to me◦</span>

      <main className="inputContainer">
        <InputLoginStyle style={{ marginBottom: 0 }}>
          <input
            className="input"
            type="email"
            placeholder="email"
            name="email"
            required
            onChange={(e) => inputData("email", e.target.value)}
          />
        </InputLoginStyle>

        <InputPasswordStyle style={{ marginBottom: "0.5rem" }}>
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
        </InputPasswordStyle>

        {/* 로그인 error 시에 */}
        {isFailed && (
          <div className="errorMessage">
            이메일 혹은 비밀번호를 확인해주세요 ❌
          </div>
        )}
      </main>

      <button className="loginButton" onClick={logIn}>
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
      <div
        className="socialContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "70px", // 부모 요소의 높이 값 설정
        }}
      >
        <Image
          className="socialLogin"
          style={{ marginTop: "1rem", height: "40px" }}
          src={KakaoLogin}
          alt="소셜 로그인"
          onClick={kakaoLogin}
        />
      </div>
    </LoginContainer>
  );
};

export default page;
