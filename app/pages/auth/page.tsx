/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";

// styles
import { AuthContainer } from "@/app/styles/Auth/authStyles";

//libraries
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from "react-query";

const kakao = () => {
  const router = useRouter();
  const [cookies, setCookies] = useCookies([
    "accessToken",
    "refreshToken",
    "id",
    "email",
  ]);

  // const requestTokens = useMutation({
  //   mutationKey: ["request_tokens"],
  //   mutationFn: async () => {
  //     const code = new URL(window.location.href).searchParams.get("code");
  //     console.log(code);

  //     const config = {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  //       },
  //     };

  //     const data = {
  //       grant_type: "authorization_code",
  //       client_id: `${process.env.NEXT_PUBLIC_TEST_APP_CLIENT_ID}`,
  //       redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
  //       code: code,
  //     };

  //     const requestToken = await axios.post(
  //       "https://kauth.kakao.com/oauth/token",
  //       data,
  //       config
  //     );

  //     const { access_token, refresh_token } = requestToken.data;

  //     setCookies("accessToken", access_token);
  //     setCookies("refreshToken", refresh_token);

  //     return requestToken.data;
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });

  // const requestUserData = useQuery({
  //   queryKey: ["request_user_data"],
  //   queryFn: async () => {
  //     const configs = {
  //       headers: {
  //         Authorization: `Bearer ${requestTokens.data.access_token}`,
  //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //       },
  //     };

  //     const requestUserInfo = await axios.get(
  //       "https://kapi.kakao.com/v2/user/me",
  //       configs
  //     );

  //     // console.log(requestUserInfo.data);
  //     const { id } = requestUserInfo.data;
  //     const { nickname, profile_image, thumbnail_image } =
  //       requestUserInfo.data.properties;
  //     const { age_range, email, gender } = requestUserInfo.data.kakao_account;
  //     setCookies("id", id);

  //     return requestUserInfo.data;
  //   },
  // });

  const kakaoLogin = async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        };
        const data = {
          grant_type: "authorization_code",
          client_id: `${process.env.NEXT_PUBLIC_TEST_APP_CLIENT_ID}`,
          redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
          code: code,
        };
        const requestToken = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          data,
          config
        );
        console.log("getToken:", requestToken);
        const { access_token, refresh_token } = requestToken.data;

        setCookies("accessToken", access_token, { path: "/" });
        setCookies("refreshToken", refresh_token, { path: "/" });

        const configs = {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        };

        const requestUserInfo = await axios.get(
          "https://kapi.kakao.com/v2/user/me",
          configs
        );

        console.log(requestUserInfo.data);
        const { id } = requestUserInfo.data;
        const { nickname, profile_image, thumbnail_image } =
          requestUserInfo.data.properties;
        const { age_range, email, gender } = requestUserInfo.data.kakao_account;
        setCookies("id", id, { path: "/" });
        setCookies("email", email, { path: "/" });

        console.log(
          "kakao_id: ",
          id,
          "\n" + "nickname: ",
          nickname,
          "email: ",
          email + "\n" + "age_range: ",
          age_range,
          +"\n" + "gender:",
          gender + "\n" + "profile_image: ",
          profile_image + "\n" + "thumbnail_image: ",
          thumbnail_image
        );
        const socialLogin = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ADDRESS}/user/socialSignup`,
          {
            kakao_id: parseInt(id),
            nickname,
            email,
            age_range,
            gender,
            profile_image,
            thumbnail_image,
          }
        );
        console.log(socialLogin);
        setTimeout(() => {
          if (socialLogin.status === 200) {
            router.push("/pages/login");
          }
        }, 4830);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    // requestTokens.mutate();
    kakaoLogin();
  }, []);

  return (
    <AuthContainer>
      <span className="loader"></span>
      <div>로그인을 하는 중입니다~~</div>
    </AuthContainer>
  );
};

export default kakao;
